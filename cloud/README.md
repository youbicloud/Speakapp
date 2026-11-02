# Speakapp Cloud

This is a separately deployable, mobile-friendly cloud edition. It does not import, replace, or change the personal Ollama app in the parent folder. It serves its own frontend and sends speech requests from the Python backend to Groq; the provider key stays on the server.

## Secure the provider key

If a Groq API key has been pasted into a chat, issue, source file, or other shared location, revoke it in the Groq console and create a replacement. Never paste an API key into the website, source code, GitHub, or this conversation. Add the replacement only in the Render dashboard under the service's **Environment** settings as `GROQ_API_KEY`.

## Deploy with Render Blueprint

1. Push the `cloud/` folder and the root `render.yaml` to the GitHub repository connected to Render. The repository root should be the existing Speakapp project; the local Ollama/Python files remain separate from this deployment.
2. In Render, create a **Blueprint** from that GitHub repository and approve the `speakapp-cloud` web service described by `render.yaml`.
3. In the new service's **Environment** settings, add `GROQ_API_KEY` with the newly rotated secret value. Do not add the key to `render.yaml`.
4. Deploy. Wait for `/api/status` to report that cloud speech generation is ready, then open the HTTPS `onrender.com` service URL on desktop or mobile.

Render may require its dashboard to collect the secret because the Blueprint marks it `sync: false`. A free Render service can sleep while idle and take extra time to wake; Groq's own model access and free-plan quotas are separate and can change. If a provider limit is reached, the app displays a retry message.

## Local cloud-edition smoke test

```powershell
cd cloud
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
$env:GROQ_API_KEY = "your-new-key"
py app.py
```

Open `http://127.0.0.1:8000`. This is only for testing the cloud edition; it does not start or configure the personal Ollama app.

The public endpoint applies small in-memory request limits to reduce accidental use of the shared free quota. The app does not intentionally save speech inputs. A public free service cannot promise unlimited or always-on use.
