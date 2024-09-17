# 🚀 robert-meszaros.com

## ⚙ Architecture

## 💻 Technologies

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
