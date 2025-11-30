# 🚀 robert-meszaros.com

## ⚙ Architecture

<div align="center">
    <img src="./data/app_architecture.svg" alt="Architecture" >
</div>

## 💻 Technologies

| **Category** | **Technology**                                                      |
| ------------ | ------------------------------------------------------------------- |
| **Frontend** | React (Vite)                                                        |
|              | Chakra UI                                                           |
|              | Tailwind CSS                                                        |
| **Backend**  | AWS Route 53                                                        |
|              | AWS API Cloudfront                                                  |
|              | AWS ACM (Certificate Manager)                                       |
|              | AWS S3                                                              |
|              | AWS API Gateway                                                     |
|              | AWS Lambda                                                          |
|              | AWS SES                                                             |
|              | AWS Bedrock                                                         |
|              | Langchain                                                           |
|              | Langgraph                                                           |
|              | Python lambda mailer (https://github.com/mrobert3456/mailer_lambda) |
|              | Python lambda RAG (Private Repository)                              |
|              | Python lambda Flow (Private Repository)                             |
| **CI/CD**    | Github actions                                                      |

## 📫 Contact Form

The form is secured with Google reCAPTCHA v3 to prevent spamming.

## 🤖 Chat agent

Agent does not store any user data - History resets after page refresh.

## ⚡ CI/CD pipeline

This application is deployed using a CI/CD pipeline created with **Github Actions**.

Workflow steps:

1. **Scan** repository

   - **Detect Secrets** to avoid pushing sensitive information
   - **Lint** to enforce coding standards

2. **Build** project

   - **npm ci** to install dependencies
   - **npm run build** to build project
   - **npm run test** to run unit tests

3. **Deploy** project to Amazon S3

4. **Invalidate Cloudfront** to invalidate CDN

## 🚀 Installation

1. Download this repository by running:

```
git clone https://github.com/mrobert3456/portfolioapp.git
cd portfolioapp
```

2. Install dependencies by running:

```
npm install
```

3. Start development server by running:

```
npm run dev
```
