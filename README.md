# Speakapp

Speakapp is a local speech-writing app that turns rough notes, facts, stories, and examples into a structured talk. It uses Python's standard library and a local Ollama model; it does not use a paid API, cloud model, or external frontend assets.

## Run it

1. Make sure Ollama is running and that the model you want to use is already installed locally (for example, `llama3`).
2. From this folder, run `py server.py` in PowerShell. If your Python launcher uses another command, run `python server.py`.
3. Open `http://127.0.0.1:8000` in your browser.

The app is bound to `127.0.0.1`; speech inputs are sent only to Ollama at `127.0.0.1:11434`. No additional Python packages are needed. A model must be downloaded before going offline; downloading a model for the first time requires an internet connection.

## Flow

1. Choose 1, 3, 5, 8, 10, 15, or 30 minutes, a 1-hour talk, or enter a custom whole number from 1 to 60 minutes. Longer talks can take substantially more time and computing resources on your laptop.
2. Select a primary speaker's rhetorical technique and, optionally, a secondary technique.
3. Add a topic, audience, takeaway, and any raw notes. Optional mind-map pillars help organize larger sets of ideas.
4. Generate, copy, or download the speech.

The topic, audience, takeaway, notes, and optional pillar fields use your browser's built-in spellcheck. Underlines and suggestions depend on your browser's spelling settings; Speakapp does not send text to an online grammar service.

The speaker collection is used to select high-level rhetorical methods, not to reproduce any speaker's exact voice or wording.

## If generation seems slow

Speech generation runs locally, so its speed depends on your computer and the installed Ollama model. The first response can take longer while the model loads. The app streams generated text and progress into the browser; if no text appears after several minutes, use **Cancel**, check that Ollama is running, and retry with a shorter speech.

The command prompt writes the `POST /api/generate` access log only after that request finishes. Not seeing that line while generation is running is expected. A `404` for `/favicon.ico` is harmless and unrelated.
