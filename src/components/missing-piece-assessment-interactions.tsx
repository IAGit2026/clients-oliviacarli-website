"use client";

import { useEffect } from "react";

const LEAD_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/yw9906BULPb3PYakL0qU/webhook-trigger/8f5f3e89-ecdd-4900-a46c-4d5f9902f1c5";
const RESULT_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/yw9906BULPb3PYakL0qU/webhook-trigger/6ad7d7a8-3798-4c9a-928e-330c3ef9204d";
const BOOKING_URL = "https://oliviacarli.as.me/clarityconsult";

type LeadDetails = { name: string; email: string; phone: string; social: string };

type AssessmentPart = {
  number: string;
  key: string;
  title: string;
  question: string;
  statements: string[];
};

type ArchetypeDescription = { name: string; description: string; nextStep: string };

const ASSESSMENT_PARTS: AssessmentPart[] = [
  {
    number: "Part One",
    key: "Wisdom",
    title: "Wisdom",
    question: "How deeply do you know yourself?",
    statements: [
      "I have a clear philosophy that guides how I live my life.",
      "I understand what truly motivates my thoughts, emotions, and decisions.",
      "I feel connected to a meaningful purpose.",
      "When life becomes difficult, I have an inner compass that helps me navigate challenges.",
      "I regularly make time for reflection, learning, and personal growth.",
    ],
  },
  {
    number: "Part Two",
    key: "Healing",
    title: "Healing",
    question: "What still asks to be healed?",
    statements: [
      "Past experiences no longer control my present choices.",
      "I am able to process difficult emotions in healthy ways.",
      "I respond consciously instead of reacting impulsively.",
      "I have forgiven myself and others enough to move forward.",
      "I experience genuine inner peace more often than inner conflict.",
    ],
  },
  {
    number: "Part Three",
    key: "Self-Mastery",
    title: "Self-Mastery",
    question: "Do your actions reflect the person you aspire to become?",
    statements: [
      "My daily habits support the life I want to create.",
      "My actions are aligned with my values.",
      "I can regulate my emotions during stressful situations.",
      "I consistently follow through on the commitments I make to myself.",
      "I take responsibility for my life rather than blaming circumstances.",
    ],
  },
  {
    number: "Part Four",
    key: "Meaning",
    title: "Meaning",
    question: "Are you creating a life that feels deeply fulfilling?",
    statements: [
      "I wake up feeling inspired by the life I am building.",
      "My work and relationships feel meaningful.",
      "I experience gratitude more often than dissatisfaction.",
      "I know what I want my life to stand for.",
      "I feel my life is moving in a direction that truly matters.",
    ],
  },
  {
    number: "Part Five",
    key: "Service",
    title: "Service",
    question: "Are your gifts being fully expressed?",
    statements: [
      "I believe my unique gifts positively impact others.",
      "I regularly contribute to something greater than myself.",
      "I feel called toward a larger purpose beyond personal success.",
      "My life reflects the kind of difference I want to make in the world.",
      "I feel connected to a deeper sense of service and contribution.",
    ],
  },
];

const ARCHETYPES: Record<string, ArchetypeDescription> = {
  Wisdom: {
    name: "The Awakener",
    description:
      "You're beginning to see life through a new lens. Your next step is a deeper self-understanding — clarity about who you are and the philosophy that will guide the life you're creating.",
    nextStep:
      "For you, the next step begins with deeper understanding — learning to see yourself and your life with greater clarity, so growth has a foundation to build upon.",
  },
  Healing: {
    name: "The Healer",
    description:
      "Past experiences are ready to be transformed into wisdom. Your next step is healing — gently clearing what no longer serves so you can live in alignment with who you truly are.",
    nextStep:
      "For you, the next step begins with healing — releasing what obscures the heart so you can move forward with greater freedom, clarity, and peace.",
  },
  "Self-Mastery": {
    name: "The Builder",
    description:
      "You're learning to align your actions with your purpose. Your next step is self-mastery — turning intention into daily practice, so transformation becomes integration.",
    nextStep:
      "For you, the next step is learning to live more intentionally — aligning your habits and choices with the person you're becoming.",
  },
  Meaning: {
    name: "The Seeker",
    description:
      "You're searching for greater meaning and direction. Your next step is clarity of purpose — discovering what your life is for and building one that feels deeply fulfilling.",
    nextStep:
      "For you, the next step is clarifying meaning — coming to know what your life is meant to stand for, and moving in a direction that truly matters.",
  },
  Service: {
    name: "The Steward",
    description:
      "You're ready to express your gifts in service to something greater. Your next step is contribution — letting your wisdom become an offering to the world.",
    nextStep:
      "For you, the next step is service — allowing your gifts to become a contribution to something greater than yourself.",
  },
};

const STRENGTH_DESCRIPTIONS: Record<string, string> = {
  Wisdom: "Wisdom has already taken root in how you know yourself and the philosophy that guides you.",
  Healing: "You've done real inner work — you meet difficulty with awareness and return to peace.",
  "Self-Mastery": "Your actions reflect your values — discipline and follow-through are a true strength.",
  Meaning: "You live with a clear sense of purpose and gratitude for the life you're creating.",
  Service: "You feel connected to something greater — your gifts are already touching others.",
};

function getRequiredElement<ElementType extends HTMLElement = HTMLElement>(elementId: string) {
  return document.getElementById(elementId) as ElementType;
}

function postWebhookPayload(webhookUrl: string, payload: Record<string, string>) {
  if (!webhookUrl) return;
  fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

function cleanSocialHandle(rawHandle: string) {
  const handle = rawHandle.trim();
  if (!handle) return "";
  if (/^https?:\/\//i.test(handle) || handle.includes(".com/")) return handle;
  return "@" + handle.replace(/^@+/, "").replace(/\s+/g, "");
}

function startAssessment(): () => void {
  const abortController = new AbortController();
  const { signal } = abortController;

  let leadDetails: LeadDetails = { name: "", email: "", phone: "", social: "" };
  let currentPartIndex = 0;
  const answers: Record<string, number> = {};
  let resultBarTimer: ReturnType<typeof setTimeout> | undefined;

  function showScreen(screenId: string) {
    document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
    getRequiredElement(screenId).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setProgressVisible(isVisible: boolean) {
    getRequiredElement("progress").classList.toggle("show", isVisible);
  }

  function setProgress(fraction: number, label: string) {
    getRequiredElement("pfill").style.width = fraction * 100 + "%";
    getRequiredElement("plabel").textContent = label;
  }

  function updateContinueButton() {
    const isPartComplete = ASSESSMENT_PARTS[currentPartIndex].statements.every(
      (_, statementIndex) => answers[currentPartIndex + "-" + statementIndex],
    );
    getRequiredElement<HTMLButtonElement>("nextBtn").disabled = !isPartComplete;
  }

  function renderPart() {
    const part = ASSESSMENT_PARTS[currentPartIndex];
    getRequiredElement("part-num").textContent = part.number;
    getRequiredElement("part-title").textContent = part.title;
    getRequiredElement("part-q").textContent = part.question;
    getRequiredElement("backBtn").style.visibility = currentPartIndex === 0 ? "hidden" : "visible";

    const questionsContainer = getRequiredElement("questions");
    questionsContainer.innerHTML = "";
    part.statements.forEach((statementText, statementIndex) => {
      const answerKey = currentPartIndex + "-" + statementIndex;
      const question = document.createElement("div");
      question.className = "q";
      let ratingButtons = "";
      for (let ratingValue = 1; ratingValue <= 5; ratingValue++) {
        const selectedClass = answers[answerKey] == ratingValue ? " sel" : "";
        ratingButtons += `<button class="dot${selectedClass}" data-k="${answerKey}" data-v="${ratingValue}">${ratingValue}</button>`;
      }
      question.innerHTML = `<div class="stmt"><span class="n">${statementIndex + 1}.</span>${statementText}</div><div class="dots">${ratingButtons}</div>
      <div class="scale-ends"><span>Strongly Disagree</span><span>Strongly Agree</span></div>`;
      questionsContainer.appendChild(question);
    });

    questionsContainer.querySelectorAll<HTMLElement>(".dot").forEach((ratingButton) =>
      ratingButton.addEventListener("click", () => {
        answers[ratingButton.dataset.k as string] = Number(ratingButton.dataset.v);
        ratingButton.parentElement?.querySelectorAll(".dot").forEach((sibling) => sibling.classList.remove("sel"));
        ratingButton.classList.add("sel");
        updateContinueButton();
      }),
    );
    updateContinueButton();
    setProgress(currentPartIndex / ASSESSMENT_PARTS.length, `Part ${currentPartIndex + 1} of ${ASSESSMENT_PARTS.length} · ${part.title}`);
  }

  function beginAssessment() {
    document.body.classList.add("begun");
    currentPartIndex = 0;
    showScreen("s-part");
    renderPart();
    setProgressVisible(true);
  }

  function prefillBookingLinks() {
    const bookingQuery = new URLSearchParams({
      firstName: leadDetails.name,
      email: leadDetails.email,
      phone: leadDetails.phone,
    });
    document.querySelectorAll<HTMLAnchorElement>('a[href^="' + BOOKING_URL + '"]').forEach((bookingLink) => {
      bookingLink.href = BOOKING_URL + "?" + bookingQuery.toString();
    });
  }

  function handleLeadSubmit(event: Event) {
    event.preventDefault();
    const name = getRequiredElement<HTMLInputElement>("lead-name").value.trim();
    const email = getRequiredElement<HTMLInputElement>("lead-email").value.trim();
    const phone = getRequiredElement<HTMLInputElement>("lead-phone").value.trim();
    const social = cleanSocialHandle(getRequiredElement<HTMLInputElement>("lead-social").value);
    const errorMessage = getRequiredElement("lead-err");
    if (!name) {
      errorMessage.textContent = "Please enter your first name.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      errorMessage.textContent = "Please enter a valid phone number.";
      return;
    }
    errorMessage.textContent = "";
    leadDetails = { name, email, phone, social };
    postWebhookPayload(LEAD_WEBHOOK, {
      first_name: name,
      name,
      email,
      phone,
      social_handle: social,
      assessment_status: "started",
      source: "The Missing Piece Assessment",
    });
    prefillBookingLinks();
    beginAssessment();
  }

  function handleNextPart() {
    if (currentPartIndex < ASSESSMENT_PARTS.length - 1) {
      currentPartIndex++;
      renderPart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setProgressVisible(false);
      showScreen("s-reflect");
    }
  }

  function handlePreviousPart() {
    if (currentPartIndex > 0) {
      currentPartIndex--;
      renderPart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function calculatePartScores() {
    return ASSESSMENT_PARTS.map((part, partIndex) => {
      let total = 0;
      for (let statementIndex = 0; statementIndex < 5; statementIndex++) total += answers[partIndex + "-" + statementIndex] || 0;
      return { key: part.key, average: total / 5 };
    });
  }

  function handleShowResults() {
    const partScores = calculatePartScores();
    const scoresFromHighest = [...partScores].sort((first, second) => second.average - first.average);
    const strongest = scoresFromHighest[0];
    const growthArea = [...partScores]
      .filter((score) => score.key !== strongest.key)
      .sort((first, second) => first.average - second.average)[0];
    const archetype = ARCHETYPES[growthArea.key];

    getRequiredElement("archBadge").textContent = leadDetails.name ? leadDetails.name + "’s Archetype" : "Your Archetype";
    getRequiredElement("archName").textContent = archetype.name;
    getRequiredElement("archDesc").textContent = archetype.description;
    getRequiredElement("strengthTitle").textContent = strongest.key;
    getRequiredElement("strengthText").textContent = STRENGTH_DESCRIPTIONS[strongest.key];
    getRequiredElement("growthTitle").textContent = growthArea.key;
    getRequiredElement("growthText").textContent =
      "This is the area of your life asking for greater attention right now. " + ARCHETYPES[growthArea.key].description;
    getRequiredElement("nextText").textContent = archetype.nextStep;
    postWebhookPayload(RESULT_WEBHOOK, {
      first_name: leadDetails.name,
      name: leadDetails.name,
      email: leadDetails.email,
      phone: leadDetails.phone,
      social_handle: leadDetails.social,
      assessment_status: "completed",
      archetype: archetype.name,
      strength: strongest.key,
      growth: growthArea.key,
      next_step: archetype.nextStep,
      scores: partScores.map((score) => score.key + ":" + score.average.toFixed(1)).join(", "),
      source: "The Missing Piece Assessment",
    });

    const scoresContainer = getRequiredElement("scores");
    scoresContainer.innerHTML = "";
    partScores.forEach((score) => {
      const percentage = Math.round((score.average / 5) * 100);
      const scoreRow = document.createElement("div");
      scoreRow.className = "score-row";
      scoreRow.innerHTML = `<div class="lab">${score.key}</div><div class="track"><span data-w="${percentage}"></span></div><div class="val">${score.average.toFixed(1)}</div>`;
      scoresContainer.appendChild(scoreRow);
    });
    showScreen("s-results");
    resultBarTimer = setTimeout(() => {
      scoresContainer.querySelectorAll<HTMLElement>(".track span").forEach((bar) => {
        bar.style.width = bar.dataset.w + "%";
      });
    }, 120);
  }

  function handleRestart() {
    document.body.classList.remove("begun");
    for (const answerKey in answers) delete answers[answerKey];
    currentPartIndex = 0;
    showScreen("s-intro");
    setProgressVisible(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  getRequiredElement("optin").addEventListener("submit", handleLeadSubmit, { signal });
  getRequiredElement("backBtn").addEventListener("click", handlePreviousPart, { signal });
  getRequiredElement("nextBtn").addEventListener("click", handleNextPart, { signal });
  getRequiredElement("showResultsButton").addEventListener("click", handleShowResults, { signal });
  getRequiredElement("restartButton").addEventListener("click", handleRestart, { signal });

  return () => {
    abortController.abort();
    clearTimeout(resultBarTimer);
  };
}

export function MissingPieceAssessmentInteractions() {
  useEffect(() => startAssessment(), []);

  return null;
}
