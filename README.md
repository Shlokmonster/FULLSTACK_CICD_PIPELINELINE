# 🚀 Full Stack CI/CD Pipeline with GitHub Actions & Render

This project sets up a complete **CI/CD pipeline** for a full-stack application (Node.js backend + React frontend) using **GitHub Actions**. It performs automatic testing, builds both backend and frontend, and deploys the frontend to **Render**. Slack notifications are sent on success or failure.

---

## 📁 Project Structure

```
root/
├── .github/workflows/     # GitHub Actions YAML
├── BackendCID/            # Node.js Backend
└── FrontendCICD/          # React Frontend
```

---

## ⚙️ Workflow Overview

### 🔧 Backend Job

- Checks out the code
- Sets up Node.js environment
- Installs backend dependencies
- Runs linter (if configured)
- Runs backend tests (if configured)

### 🎨 Frontend Job

- Waits for backend job to complete
- Sets up Node.js environment
- Installs frontend dependencies
- Builds the React frontend
- Deploys to Render using a webhook

### 🔔 Notification Job

- Sends success or failure message to a Slack channel via webhook

---

## 🧪 Tech Stack

- **CI/CD**: GitHub Actions
- **Backend**: Node.js (BackendCID)
- **Frontend**: React.js (FrontendCICD)
- **Deployment**: [Render.com](https://render.com)
- **Notifications**: Slack Webhooks

---

## 🔐 Secrets Required

In your GitHub repository settings → Secrets and variables → Actions:

| Secret Name              | Purpose                            |
|--------------------------|------------------------------------|
| `RENDER_FRONTEND_HOOK`   | Render deploy hook for frontend    |
| `SLACK_WEBHOOK_URL`      | Slack channel webhook for alerts   |

---

## 📦 How to Use

1. Clone the repo and set up your backend and frontend directories.
2. Push to the `main` branch.
3. GitHub Actions will:
   - Build and test the backend
   - Build and deploy the frontend
   - Notify your Slack workspace

---

## 👨‍💻 Author

**Shlok Kadam**

Connect with me on [GitHub](https://github.com/Shlokmonster)

---

## 🏷️ License

MIT License
