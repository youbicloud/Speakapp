# Speakapp Cloud

This is a separately deployable, mobile-friendly cloud edition. It does not import, replace, or change the personal Ollama app in the parent folder. Its static frontend can be published on GitHub Pages, while the Python backend on Render sends speech requests to Groq; the provider key stays on the server.

## Secure the provider key

If a Groq API key has been pasted into a chat, issue, source file, or other shared location, revoke it in the Groq console and create a replacement. Never paste an API key into the website, source code, GitHub, or this conversation. Add the replacement only in the Render dashboard under the service's **Environment** settings as `GROQ_API_KEY`.

## Publish the phone-friendly frontend with GitHub Pages

The repository includes a GitHub Actions workflow that publishes only `cloud/static/`, keeping the offline app and Python source out of the Pages site.

1. Push the repository to GitHub with the workflow at `.github/workflows/deploy-pages.yml`.
2. In the repository's **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
3. Push to the `main` branch (or run **Deploy Speakapp phone app** from the Actions tab). The workflow publishes the phone frontend; GitHub displays its URL in the Pages settings and deployment.
4. Open that Pages URL on your phone. The frontend connects to `https://speakapp-w80v.onrender.com`; no API key is put in the Pages files.

The Render backend must be updated with the current `cloud/app.py` so it allows the Pages site's cross-origin requests. GitHub Pages origins ending in `.github.io` are allowed. If you use a custom domain, add its HTTPS origin (for example `https://talk.example.com`, without a path) to the Render service's `FRONTEND_ORIGINS` environment variable.

## Render backend

The live backend is `https://speakapp-w80v.onrender.com`. To deploy or update it from this repository, push the `cloud/` folder and root `render.yaml`, then connect the repository through Render's Blueprint flow. Set `GROQ_API_KEY` only in the Render service's **Environment** settings. Never commit or share the key.

A free Render service can sleep while idle and take extra time to wake; Groq's model access and free-plan quotas are separate and can change. If a provider limit is reached, the app displays a retry message.

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
