"use strict";

const CLOUD_SERVER_URL = ["localhost", "127.0.0.1"].includes(window.location.hostname)
  ? window.location.origin
  : "https://speakapp-w80v.onrender.com";

const speakers = [
  { name: "Winston Churchill", field: "Politics, leadership & civil rights", strategy: "Metered, rhythmic pacing and concise, forceful language." },
  { name: "Martin Luther King Jr.", field: "Politics, leadership & civil rights", strategy: "Prophetic cadence, musical repetition, and resonant metaphor." },
  { name: "Nelson Mandela", field: "Politics, leadership & civil rights", strategy: "Measured resolve balanced with reconciliation and dignity." },
  { name: "Abraham Lincoln", field: "Politics, leadership & civil rights", strategy: "Scriptural brevity and sparse, memorable phrasing." },
  { name: "Barack Obama", field: "Politics, leadership & civil rights", strategy: "Conversational elegance, rhetorical pauses, and rising momentum." },
  { name: "Ronald Reagan", field: "Politics, leadership & civil rights", strategy: "Relatable storytelling, gentle humor, and familiar analogies." },
  { name: "John F. Kennedy", field: "Politics, leadership & civil rights", strategy: "Antithesis, parallel structure, and balanced turns of phrase." },
  { name: "Margaret Thatcher", field: "Politics, leadership & civil rights", strategy: "Decisive, staccato sentences and clearly signposted logic." },
  { name: "Demosthenes", field: "Politics, leadership & civil rights", strategy: "Energetic argument, urgency, and emphatic rhetorical questions." },
  { name: "Cicero", field: "Politics, leadership & civil rights", strategy: "Carefully shaped periodic sentences and dramatic transitions." },
  { name: "Frederick Douglass", field: "Politics, leadership & civil rights", strategy: "Moral clarity, irony, and vivid first-person narrative." },
  { name: "Malcolm X", field: "Politics, leadership & civil rights", strategy: "Direct language, sharp reasoning, and rhythmic emphasis." },
  { name: "Robert F. Kennedy", field: "Politics, leadership & civil rights", strategy: "Emotional candor and reflective, humanizing literary references." },
  { name: "Theodore Roosevelt", field: "Politics, leadership & civil rights", strategy: "Conversational punch, energy, and conviction." },
  { name: "Barbara Jordan", field: "Politics, leadership & civil rights", strategy: "Authoritative diction, careful enunciation, and civic framing." },
  { name: "Franklin D. Roosevelt", field: "Politics, leadership & civil rights", strategy: "Reassuring, intimate explanations in a neighborly register." },
  { name: "Emmeline Pankhurst", field: "Politics, leadership & civil rights", strategy: "Urgency grounded in moral and legal reasoning." },
  { name: "Sojourner Truth", field: "Politics, leadership & civil rights", strategy: "Plainspoken appeals and concise, revealing questions." },
  { name: "Lee Kuan Yew", field: "Politics, leadership & civil rights", strategy: "Pragmatic clarity centered on practical consequences." },
  { name: "Charles de Gaulle", field: "Politics, leadership & civil rights", strategy: "Ceremonial, elevated phrasing and a broad sense of occasion." },
  { name: "Václav Havel", field: "Politics, leadership & civil rights", strategy: "Philosophical humility and reflective moral perspective." },
  { name: "Julius Caesar", field: "Politics, leadership & civil rights", strategy: "Concise, action-oriented statements and collective resolve." },
  { name: "Pericles", field: "Politics, leadership & civil rights", strategy: "Civic ideals and emphasis on shared responsibility." },
  { name: "Shirley Chisholm", field: "Politics, leadership & civil rights", strategy: "Assertive challenge to convention with direct, energetic delivery." },
  { name: "Mahatma Gandhi", field: "Politics, leadership & civil rights", strategy: "Quiet conviction, simplicity, and purposeful pauses." },
  { name: "Tony Robbins", field: "Motivation, resilience & adversity", strategy: "High energy, audience engagement, and concrete mental imagery." },
  { name: "Les Brown", field: "Motivation, resilience & adversity", strategy: "Dynamic vocal contrast and rhythmic, purposeful repetition." },
  { name: "Nick Vujicic", field: "Motivation, resilience & adversity", strategy: "Vulnerability, gentle humor, and perspective-shifting stories." },
  { name: "Jim Rohn", field: "Motivation, resilience & adversity", strategy: "Measured pacing and concise, memorable principles." },
  { name: "Mel Robbins", field: "Motivation, resilience & adversity", strategy: "Direct urgency paired with practical, actionable steps." },
  { name: "Eric Thomas", field: "Motivation, resilience & adversity", strategy: "Intense emotional momentum and rhythmic emphasis." },
  { name: "Inky Johnson", field: "Motivation, resilience & adversity", strategy: "Immersive personal narrative and candid reflection." },
  { name: "David Goggins", field: "Motivation, resilience & adversity", strategy: "Unvarnished challenge that prompts honest self-examination." },
  { name: "Jocko Willink", field: "Motivation, resilience & adversity", strategy: "Restrained, steady authority and responsibility-focused phrasing." },
  { name: "Arnold Schwarzenegger", field: "Motivation, resilience & adversity", strategy: "Clear frameworks, confidence, and memorable numbered lessons." },
  { name: "Zig Ziglar", field: "Motivation, resilience & adversity", strategy: "Warm humor and accessible, encouraging moral insight." },
  { name: "Lou Holtz", field: "Motivation, resilience & adversity", strategy: "Rapid wit, self-deprecation, and concrete illustrative examples." },
  { name: "Sylvester Stallone", field: "Motivation, resilience & adversity", strategy: "Informal authenticity and empathy for the underdog." },
  { name: "Kyle Maynard", field: "Motivation, resilience & adversity", strategy: "Demonstration and lived experience that make an idea tangible." },
  { name: "Chris Gardner", field: "Motivation, resilience & adversity", strategy: "Emotionally grounded storytelling about adversity and persistence." },
  { name: "Wayne Dyer", field: "Motivation, resilience & adversity", strategy: "Reflective anecdotes that gently challenge assumptions." },
  { name: "Brian Tracy", field: "Motivation, resilience & adversity", strategy: "Methodical, step-by-step explanation with practical takeaways." },
  { name: "Lisa Nichols", field: "Motivation, resilience & adversity", strategy: "Inviting call-and-response and active audience participation." },
  { name: "Simon Sinek", field: "Motivation, resilience & adversity", strategy: "Simple conceptual frameworks that make big ideas easy to follow." },
  { name: "Brendon Burchard", field: "Motivation, resilience & adversity", strategy: "Enthusiastic delivery organized around a clear framework." },
  { name: "Billy Graham", field: "Faith, spirituality & meaning", strategy: "Clear declarations and carefully reinforced central themes." },
  { name: "Fulton J. Sheen", field: "Faith, spirituality & meaning", strategy: "Dramatic pauses, vivid contrasts, and deliberate emphasis." },
  { name: "C. S. Lewis", field: "Faith, spirituality & meaning", strategy: "Lucid explanations that translate abstract ideas into everyday logic." },
  { name: "Charles Spurgeon", field: "Faith, spirituality & meaning", strategy: "Vivid imagery and richly descriptive language." },
  { name: "Mother Teresa", field: "Faith, spirituality & meaning", strategy: "Gentle simplicity centered on one intimate human story." },
  { name: "T. D. Jakes", field: "Faith, spirituality & meaning", strategy: "Building crescendos that combine reflection and conviction." },
  { name: "Ravi Zacharias", field: "Faith, spirituality & meaning", strategy: "Structured reasoning delivered with empathy." },
  { name: "Myles Munroe", field: "Faith, spirituality & meaning", strategy: "Define key terms first, then build understanding step by step." },
  { name: "Ram Dass", field: "Faith, spirituality & meaning", strategy: "Warm, inclusive conversation and a sense of shared reflection." },
  { name: "Alan Watts", field: "Faith, spirituality & meaning", strategy: "Playful cadence, paradox, and reassuring wit." },
  { name: "Jiddu Krishnamurti", field: "Faith, spirituality & meaning", strategy: "Socratic inquiry that invites inward examination." },
  { name: "Dalai Lama", field: "Faith, spirituality & meaning", strategy: "Humility, warmth, and plain-language compassion." },
  { name: "Eckhart Tolle", field: "Faith, spirituality & meaning", strategy: "Unhurried delivery, silence, and attention to the present." },
  { name: "John Wesley", field: "Faith, spirituality & meaning", strategy: "Plain, direct language tied to everyday moral choices." },
  { name: "Jonathan Edwards", field: "Faith, spirituality & meaning", strategy: "Carefully built emotional intensity and vivid consequence." },
  { name: "Steve Jobs", field: "Business, value & strategy", strategy: "Minimalist storytelling, clean structure, and a final reveal." },
  { name: "Warren Buffett", field: "Business, value & strategy", strategy: "Self-effacing plain speech that makes complex ideas approachable." },
  { name: "Gary Vaynerchuk", field: "Business, value & strategy", strategy: "Fast-paced, informal urgency and direct audience engagement." },
  { name: "Robert Kiyosaki", field: "Business, value & strategy", strategy: "Contrarian framing that tests conventional assumptions." },
  { name: "Dave Ramsey", field: "Business, value & strategy", strategy: "Tough-love directness and a small set of simple rules." },
  { name: "Jack Welch", field: "Business, value & strategy", strategy: "Blunt clarity, candor, and focus on priorities." },
  { name: "Peter Drucker", field: "Business, value & strategy", strategy: "Strategic questions that reveal the important organizational issue." },
  { name: "Seth Godin", field: "Business, value & strategy", strategy: "Minimalist ideas carried by memorable visual metaphors." },
  { name: "Elon Musk", field: "Business, value & strategy", strategy: "Engineering-first explanations that make technical trade-offs explicit." },
  { name: "Jeff Bezos", field: "Business, value & strategy", strategy: "Customer-centered framing supported by long-term reasoning." },
  { name: "Jim Cramer", field: "Business, value & strategy", strategy: "Theatrical energy that makes fast-moving complexity tangible." },
  { name: "Ray Dalio", field: "Business, value & strategy", strategy: "Principles-based explanation using clear systems and cause-and-effect." },
  { name: "Naval Ravikant", field: "Business, value & strategy", strategy: "Calm, concise aphorisms that compress an idea into a few words." },
  { name: "Richard Branson", field: "Business, value & strategy", strategy: "Casual, collaborative storytelling that makes business human." },
  { name: "Guy Kawasaki", field: "Business, value & strategy", strategy: "Practical, tightly formatted advice with memorable rules of thumb." },
  { name: "Brené Brown", field: "Relationships, connection & psychology", strategy: "Research paired with candid personal stories and gentle humor." },
  { name: "Esther Perel", field: "Relationships, connection & psychology", strategy: "Nuanced language that opens up complex human motivations." },
  { name: "Jordan Peterson", field: "Relationships, connection & psychology", strategy: "Layered narrative synthesis connecting personal choices to broader patterns." },
  { name: "Oprah Winfrey", field: "Relationships, connection & psychology", strategy: "Empathy that recognizes shared struggle and possibility." },
  { name: "Carl Rogers", field: "Relationships, connection & psychology", strategy: "Authentic warmth and nonjudgmental listening." },
  { name: "Dale Carnegie", field: "Relationships, connection & psychology", strategy: "Audience-centered framing that connects ideas to listeners' interests." },
  { name: "John Gray", field: "Relationships, connection & psychology", strategy: "Humorous, easy-to-grasp comparisons for differences in perspective." },
  { name: "Alain de Botton", field: "Relationships, connection & psychology", strategy: "Wry philosophical reflection that normalizes ordinary anxieties." },
  { name: "Matthew Hussey", field: "Relationships, connection & psychology", strategy: "Energetic, practical examples and clear interaction frameworks." },
  { name: "Caroline Myss", field: "Relationships, connection & psychology", strategy: "Direct archetypal framing that encourages personal accountability." },
  { name: "Carl Sagan", field: "Science, philosophy & big ideas", strategy: "Poetic wonder that connects vast scale to human meaning." },
  { name: "Christopher Hitchens", field: "Science, philosophy & big ideas", strategy: "Precise vocabulary and skeptical, satirical argument." },
  { name: "Richard Feynman", field: "Science, philosophy & big ideas", strategy: "Playful curiosity and concrete explanations of difficult ideas." },
  { name: "Neil deGrasse Tyson", field: "Science, philosophy & big ideas", strategy: "Enthusiastic cosmic perspective and memorable comparisons." },
  { name: "Sam Harris", field: "Science, philosophy & big ideas", strategy: "Calm, tightly reasoned argument and careful distinctions." },
  { name: "Yuval Noah Harari", field: "Science, philosophy & big ideas", strategy: "High-level historical synthesis and detached perspective." },
  { name: "Terence McKenna", field: "Science, philosophy & big ideas", strategy: "Exploratory storytelling that weaves unusual ideas together." },
  { name: "Michio Kaku", field: "Science, philosophy & big ideas", strategy: "Cinematic future-facing analogies for complex science." },
  { name: "Slavoj Žižek", field: "Science, philosophy & big ideas", strategy: "Unexpected juxtapositions and humor to unsettle familiar ideas." },
  { name: "Bertrand Russell", field: "Science, philosophy & big ideas", strategy: "Crisp, economical reasoning that clarifies complex arguments." },
  { name: "Jane Goodall", field: "Science, philosophy & big ideas", strategy: "Quietly compelling observation and close attention to living things." },
  { name: "Elizabeth Gilbert", field: "Science, philosophy & big ideas", strategy: "Intimate storytelling that makes creativity feel accessible." },
  { name: "Maya Angelou", field: "Science, philosophy & big ideas", strategy: "Melodic cadence, image-rich language, and deliberate emphasis." },
  { name: "Malcolm Gladwell", field: "Science, philosophy & big ideas", strategy: "A detective-story structure that turns an idea into an investigation." },
  { name: "Hans Rosling", field: "Science, philosophy & big ideas", strategy: "Energetic, visual explanation that turns data into a clear story." }
];

const durationPresets = [1, 3, 5, 8, 10, 15, 30, 60];
const flowOptions = [
  { id: "chronological", title: "Chronological arc", description: "Your notes suggest a sequence over time. We’ll guide the audience from what happened first toward what comes next." },
  { id: "problem-solution", title: "Problem to possibility", description: "Your material centers on a challenge and a response. We’ll build from the stakes toward practical next steps." },
  { id: "cause-effect", title: "Cause and effect", description: "Your notes connect actions with outcomes. We’ll make those links clear, then show what they mean for the audience." },
  { id: "compare-contrast", title: "Compare and choose", description: "Your material weighs alternatives. We’ll set the options side by side and make the point of difference clear." },
  { id: "story-arc", title: "Story arc", description: "We’ll connect your ideas through a clear hook, development, and memorable close. Add notes or pillars to refine this suggestion." }
];

const state = { duration: null, primary: null, secondary: null, model: "llama3", models: [], script: "" };
let generationController = null;
const byId = (id) => document.getElementById(id);

function goTo(step) {
  const screenIds = { 1: "screen-welcome", 2: "screen-duration", 3: "screen-style", 4: "screen-material" };
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active"));
  byId(screenIds[step]).classList.add("active");
  byId("stepper").classList.toggle("visible", step !== 1);
  document.querySelectorAll(".step").forEach((node) => {
    const nodeStep = Number(node.dataset.step);
    node.classList.toggle("active", nodeStep === step);
    node.classList.toggle("done", nodeStep < step);
  });
  if (step === 4) {
    byId("selected-duration-label").textContent = state.duration === 60
      ? "1 hour"
      : `${state.duration} minute${state.duration === 1 ? "" : "s"}`;
    updateFlow();
    byId("topic").focus({ preventScroll: true });
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    const next = Number(button.dataset.go);
    if (next === 3 && !state.duration) return;
    goTo(next);
  });
});

function renderDurations() {
  const grid = byId("duration-grid");
  durationPresets.forEach((minutes) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "duration-card";
    card.setAttribute("aria-pressed", "false");
    const timeLabel = minutes === 60 ? "1 hour" : `${minutes} min`;
    const caption = minutes <= 3 ? "A quick thought" : minutes <= 10 ? "A focused talk" : minutes <= 30 ? "A longer address" : "A full-length talk";
    card.innerHTML = `<span class="duration-time">${timeLabel}</span><span class="duration-caption">${caption}</span><span class="duration-wordcount">About ${minutes * 130} words</span>`;
    card.addEventListener("click", () => {
      state.duration = minutes;
      grid.querySelectorAll(".duration-card").forEach((item) => {
        const selected = item === card;
        item.classList.toggle("selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      byId("duration-custom").hidden = true;
      byId("duration-next").disabled = false;
    });
    grid.appendChild(card);
  });

  const customCard = document.createElement("button");
  customCard.type = "button";
  customCard.className = "duration-card";
  customCard.id = "custom-duration-card";
  customCard.setAttribute("aria-pressed", "false");
  customCard.innerHTML = '<span class="duration-time">Your time</span><span class="duration-caption">Choose a custom length</span><span class="duration-wordcount">From 1 to 60 minutes</span>';
  customCard.addEventListener("click", () => {
    grid.querySelectorAll(".duration-card").forEach((item) => {
      item.classList.remove("selected");
      item.setAttribute("aria-pressed", "false");
    });
    customCard.classList.add("selected");
    customCard.setAttribute("aria-pressed", "true");
    state.duration = null;
    byId("duration-next").disabled = true;
    byId("duration-custom").hidden = false;
    validateCustomDuration();
  });
  grid.appendChild(customCard);
}

function validateCustomDuration() {
  const input = byId("custom-duration-input");
  const value = Number(input.value);
  const valid = Number.isInteger(value) && value >= 1 && value <= 60;
  byId("custom-duration-apply").disabled = !valid;
  input.setAttribute("aria-invalid", String(input.value !== "" && !valid));
}

byId("custom-duration-input").addEventListener("input", validateCustomDuration);
byId("custom-duration-apply").addEventListener("click", () => {
  validateCustomDuration();
  if (byId("custom-duration-apply").disabled) return;
  state.duration = Number(byId("custom-duration-input").value);
  byId("duration-next").disabled = false;
  byId("custom-duration-card").classList.add("selected");
  byId("custom-duration-card").setAttribute("aria-pressed", "true");
  byId("duration-grid").querySelectorAll(".duration-card:not(#custom-duration-card)").forEach((item) => {
    item.classList.remove("selected");
    item.setAttribute("aria-pressed", "false");
  });
});

function populateSpeakers(filter = "") {
  const primary = byId("primary-speaker");
  const secondary = byId("secondary-speaker");
  const selectedPrimary = state.primary ? state.primary.name : "";
  const selectedSecondary = state.secondary ? state.secondary.name : "";
  const query = filter.trim().toLocaleLowerCase();
  const grouped = new Map();
  speakers.filter((speaker) => `${speaker.name} ${speaker.field} ${speaker.strategy}`.toLocaleLowerCase().includes(query))
    .forEach((speaker) => {
      if (!grouped.has(speaker.field)) grouped.set(speaker.field, []);
      grouped.get(speaker.field).push(speaker);
    });
  primary.replaceChildren();
  const prompt = document.createElement("option");
  prompt.value = "";
  prompt.textContent = "Choose a speaker…";
  prompt.disabled = true;
  prompt.selected = !selectedPrimary;
  primary.appendChild(prompt);
  grouped.forEach((items, field) => {
    const group = document.createElement("optgroup");
    group.label = field;
    items.forEach((speaker) => {
      const option = document.createElement("option");
      option.value = speaker.name;
      option.textContent = speaker.name;
      option.selected = speaker.name === selectedPrimary;
      group.appendChild(option);
    });
    primary.appendChild(group);
  });
  secondary.replaceChildren();
  const none = document.createElement("option");
  none.value = "";
  none.textContent = "No second strategy";
  secondary.appendChild(none);
  speakers.forEach((speaker) => {
    if (state.primary && speaker.name === state.primary.name) return;
    const option = document.createElement("option");
    option.value = speaker.name;
    option.textContent = `${speaker.name} — ${speaker.field}`;
    option.selected = speaker.name === selectedSecondary;
    secondary.appendChild(option);
  });
  secondary.disabled = !state.primary;
  renderSpeakerCards();
}

function renderSpeakerCards() {
  byId("style-next").disabled = !state.primary;
  byId("primary-card").innerHTML = state.primary
    ? `<strong>${escapeHtml(state.primary.name)}</strong><p>${escapeHtml(state.primary.strategy)}</p>`
    : "<p>Choose a speaker to see the rhetorical technique that will guide your talk.</p>";
  byId("secondary-card").innerHTML = state.secondary
    ? `<strong>${escapeHtml(state.secondary.name)}</strong><p>${escapeHtml(state.secondary.strategy)}</p>`
    : "<p>No second strategy selected. Your primary approach is enough to get started.</p>";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

byId("speaker-search").addEventListener("input", (event) => populateSpeakers(event.target.value));
byId("primary-speaker").addEventListener("change", (event) => {
  const selected = speakers.find((speaker) => speaker.name === event.target.value);
  if (!selected) return;
  state.primary = selected;
  if (state.secondary && state.secondary.name === selected.name) state.secondary = null;
  populateSpeakers(byId("speaker-search").value);
  byId("style-next").disabled = false;
});
byId("secondary-speaker").addEventListener("change", (event) => {
  state.secondary = speakers.find((speaker) => speaker.name === event.target.value) || null;
  renderSpeakerCards();
});

function addPillar() {
  const list = byId("pillar-list");
  if (list.children.length >= 6) return;
  const index = list.children.length + 1;
  const row = document.createElement("div");
  row.className = "pillar";
  row.innerHTML = `<label class="sr-only" for="pillar-title-${index}">Pillar ${index} title</label><input class="input pillar-title" id="pillar-title-${index}" maxlength="250" spellcheck="true" lang="en-US" placeholder="Main idea ${index}"><label class="sr-only" for="pillar-detail-${index}">Pillar ${index} supporting points</label><textarea class="textarea pillar-detail" id="pillar-detail-${index}" maxlength="2000" spellcheck="true" lang="en-US" placeholder="A supporting fact, example, story, or question"></textarea><button class="remove-pillar" type="button" aria-label="Remove pillar ${index}">×</button>`;
  row.querySelector(".remove-pillar").addEventListener("click", () => {
    row.remove();
    refreshPillarNames();
    updateFlow();
  });
  row.querySelectorAll("input, textarea").forEach((input) => input.addEventListener("input", updateFlow));
  list.appendChild(row);
  row.querySelector("input").focus();
  updateFlow();
}

function refreshPillarNames() {
  [...byId("pillar-list").children].forEach((row, index) => {
    row.querySelector(".pillar-title").id = `pillar-title-${index + 1}`;
    row.querySelector(".pillar-title").previousElementSibling.htmlFor = `pillar-title-${index + 1}`;
    row.querySelector(".pillar-detail").id = `pillar-detail-${index + 1}`;
    row.querySelector(".pillar-detail").previousElementSibling.htmlFor = `pillar-detail-${index + 1}`;
    row.querySelector(".remove-pillar").setAttribute("aria-label", `Remove pillar ${index + 1}`);
  });
}

byId("add-pillar").addEventListener("click", addPillar);

function chooseFlow(text) {
  const checks = [
    { id: "chronological", score: (text.match(/\b(first|then|before|after|finally|year|years|month|day|timeline|began|eventually|next)\b/gi) || []).length },
    { id: "problem-solution", score: (text.match(/\b(problem|challenge|solution|solve|fix|barrier|obstacle|crisis|response|action|recommend)\b/gi) || []).length },
    { id: "cause-effect", score: (text.match(/\b(cause|caused|because|therefore|result|impact|effect|consequence|led to|outcome)\b/gi) || []).length },
    { id: "compare-contrast", score: (text.match(/\b(compare|contrast|versus|vs\.?|rather than|instead|difference|similar|option|alternative)\b/gi) || []).length }
  ];
  checks.sort((a, b) => b.score - a.score);
  return checks[0].score > 0 ? flowOptions.find((flow) => flow.id === checks[0].id) : flowOptions[4];
}

function updateFlow() {
  const pillarValues = [...byId("pillar-list").querySelectorAll("input, textarea")].map((input) => input.value).join(" ");
  const text = `${byId("topic").value} ${byId("thesis").value} ${byId("raw-notes").value} ${pillarValues}`;
  const flow = chooseFlow(text);
  byId("flow-title").textContent = `Suggested mind-map flow: ${flow.title}`;
  byId("flow-description").textContent = flow.description;
  byId("flow-card").dataset.flow = flow.id;
}

["topic", "thesis", "raw-notes"].forEach((id) => byId(id).addEventListener("input", updateFlow));

async function checkCloudService() {
  const pill = byId("connection-status");
  const label = byId("connection-label");
  try {
    const response = await fetch(`${CLOUD_SERVER_URL}/api/status`);
    const status = await response.json();
    state.models = status.cloud_available && typeof status.model === "string" ? [status.model] : [];
    if (!status.cloud_available) {
      pill.classList.add("error");
      label.textContent = "Cloud AI not configured";
      byId("model-hint").textContent = status.message || "The site owner needs to configure the cloud AI provider.";
      return;
    }
    pill.classList.add("online");
    state.model = state.models[0];
    label.textContent = `Cloud AI · ${status.provider || "ready"}`;
    byId("model-hint").textContent = `Using ${state.model}. Your notes are sent securely to ${status.provider || "the cloud AI provider"} for generation.`;
  } catch (error) {
    pill.classList.add("error");
    label.textContent = "Cloud service unavailable";
    byId("model-hint").textContent = "The cloud service could not be reached. Refresh the page or try again later.";
  }
}

function getPillars() {
  return [...byId("pillar-list").children].map((row) => ({
    title: row.querySelector(".pillar-title").value.trim(),
    details: row.querySelector(".pillar-detail").value.trim()
  })).filter((pillar) => pillar.title || pillar.details);
}

function validateForm() {
  const topic = byId("topic").value.trim();
  const rawNotes = byId("raw-notes").value.trim();
  if (!state.duration) return "Choose a speech length first.";
  if (!topic) return "Add a topic so the speech has a clear center.";
  if (!rawNotes && getPillars().length === 0) return "Add some notes or at least one speech pillar to build from.";
  if (!state.models.length) return "Cloud AI is not configured. Please try again later.";
  return "";
}

async function generateSpeech() {
  const message = validateForm();
  const error = byId("form-error");
  if (message) {
    error.textContent = message;
    error.classList.add("visible");
    return;
  }
  error.classList.remove("visible");
  byId("script-output").textContent = "";
  byId("script-length").textContent = "";
  byId("generate-button").disabled = true;
  byId("loading").classList.add("visible");
  byId("output-panel").classList.add("visible");
  byId("loading-label").textContent = "Connecting securely to cloud AI…";
  generationController = new AbortController();
  const startedAt = Date.now();
  let liveScript = "";
  let completed = false;
  const timer = window.setInterval(() => {
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    if (elapsed >= 20 && !liveScript) {
      byId("loading-label").textContent = `Waiting for the cloud service or AI model · ${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")} elapsed`;
    }
  }, 1000);
  const handleEvent = (event) => {
    if (event.type === "status") {
      byId("loading-label").textContent = event.message;
    } else if (event.type === "chunk") {
      liveScript += event.text;
      byId("script-output").textContent += event.text;
      if (liveScript.length === event.text.length) {
        byId("script-output").scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    } else if (event.type === "replace") {
      liveScript = event.script;
      renderScript(liveScript);
    } else if (event.type === "clear") {
      liveScript = "";
      byId("script-output").textContent = "";
    } else if (event.type === "done") {
      completed = true;
      state.script = liveScript;
      renderScript(state.script);
      byId("script-length").textContent = `About ${event.word_count} spoken words · target ${state.duration * 130}`;
    } else if (event.type === "error") {
      throw new Error(event.error || "Cloud speech generation failed.");
    }
  };
  const payload = {
    model: state.model,
    duration_minutes: state.duration,
    topic: byId("topic").value.trim(),
    audience: byId("audience").value.trim(),
    takeaway: byId("thesis").value.trim(),
    raw_notes: byId("raw-notes").value.trim(),
    pillars: getPillars(),
    flow: byId("flow-card").dataset.flow,
    primary_speaker: { name: state.primary.name, field: state.primary.field, strategy: state.primary.strategy },
    secondary_speaker: state.secondary ? { name: state.secondary.name, field: state.secondary.field, strategy: state.secondary.strategy } : null
  };
  try {
    const response = await fetch(`${CLOUD_SERVER_URL}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: generationController.signal
    });
    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.error || `Cloud generation failed (${response.status}).`);
    }
    if (!response.body) throw new Error("This browser cannot display the live response. Please update your browser and retry.");
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { value, done } = await reader.read();
      buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
      const events = buffer.split("\n");
      buffer = events.pop();
      for (const line of events) {
        if (line.trim()) handleEvent(JSON.parse(line));
      }
      if (done) break;
    }
    if (buffer.trim()) handleEvent(JSON.parse(buffer));
    if (!completed) throw new Error("The connection ended before cloud AI finished the speech. Try again.");
    byId("output-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (generationError) {
    if (generationError.name === "AbortError") {
      byId("loading-label").textContent = "Generation cancelled.";
      if (!liveScript) byId("output-panel").classList.remove("visible");
    } else {
      error.textContent = generationError.message || "Could not generate the speech. Please check your connection and try again.";
      error.classList.add("visible");
    }
  } finally {
    window.clearInterval(timer);
    byId("generate-button").disabled = false;
    byId("loading").classList.remove("visible");
    generationController = null;
  }
}

function renderScript(script) {
  const output = byId("script-output");
  output.replaceChildren();
  script.split(/(\*\*[^*]+\*\*)/g).forEach((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const strong = document.createElement("strong");
      strong.textContent = part.slice(2, -2);
      output.appendChild(strong);
    } else {
      output.appendChild(document.createTextNode(part));
    }
  });
}

byId("generate-button").addEventListener("click", generateSpeech);
byId("cancel-generation").addEventListener("click", () => generationController?.abort());
byId("duration-next").addEventListener("click", () => goTo(3));
byId("style-next").addEventListener("click", () => goTo(4));
byId("copy-button").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(state.script);
    byId("copy-button").textContent = "Copied!";
    window.setTimeout(() => { byId("copy-button").textContent = "Copy text"; }, 1600);
  } catch (error) {
    byId("form-error").textContent = "Clipboard access was blocked. Select the speech text and copy it manually.";
    byId("form-error").classList.add("visible");
  }
});
byId("download-button").addEventListener("click", () => {
  const blob = new Blob([state.script], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "speakapp-speech.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

renderDurations();
populateSpeakers();
checkCloudService();
