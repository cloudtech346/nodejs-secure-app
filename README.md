# Node.js DevSecOps Project (Beginner Guide)

This starter project follows the supplied course PDF: Node.js + GitHub, Snyk SCA/SAST, OWASP ZAP DAST, AWS CodePipeline/CodeBuild, and private Amazon S3 report storage.

## What is included
- `app.js`: small Express application with `/` and `/health` routes.
- `app.test.js`: automated unit tests.
- `.github/workflows/security.yml`: GitHub Actions workflow for tests, Snyk scans, ZAP baseline scan, and downloadable report artifacts.
- `buildspec.yml`: starting point for AWS CodeBuild integration and S3 report upload.
- `reports/`: generated reports go here (not committed).

## Part 1 — Upload this project to GitHub (no terminal needed)
1. Sign in at https://github.com.
2. Click the **+** icon (top right) → **New repository**.
3. Repository name: `nodejs-devsecops`.
4. Choose **Private** (recommended for a course project unless your instructor requests Public).
5. Click **Create repository**. Do not add a README/license/gitignore because this ZIP already contains them.
6. Extract this ZIP on your computer.
7. Open the new repository page → **Add file** → **Upload files**.
8. Open the extracted `nodejs-devsecops` folder and select all files and folders inside it, including the hidden `.github` folder. Drag them into GitHub's upload area.
9. Wait for upload, enter commit message `Add Node.js DevSecOps project`, and click **Commit changes**.
10. Refresh the repository page. Confirm you can see `app.js`, `package.json`, `buildspec.yml`, and `.github/workflows/security.yml`.

If GitHub's web upload does not show hidden `.github`, use GitHub Desktop or the terminal method below.

## Part 2 — Add Snyk token to GitHub
1. Create/sign in to Snyk at https://snyk.io.
2. Find your API token in Snyk account settings. Keep it private.
3. In GitHub repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
4. Name: `SNYK_TOKEN`; value: paste the token; save.
5. Go to **Actions** and open `Node.js DevSecOps Security`. If needed, select **Enable Actions**.
6. Select **Run workflow** (or push a commit) to start a run.
7. Open the run and inspect each step. Download `devsecops-security-reports` under Artifacts.

The workflow is a learning template. Snyk product access/CLI capabilities can vary by account. Scan steps are marked `continue-on-error` so report collection can continue; inspect scan logs and do not interpret a green workflow alone as proof that all scans passed.

## Part 3 — Run locally (optional)
Install Node.js LTS from https://nodejs.org/en/download and Git if needed.

In a terminal inside the project folder:
```bash
npm install
npm test
npm start
```
Then open http://localhost:3000/health. Expected JSON: `{"status":"healthy"}`.

## Part 4 — AWS setup (do after GitHub workflow)
1. Sign in at https://console.aws.amazon.com and choose one Region (example: Asia Pacific (Mumbai), `ap-south-1`).
2. Create a private S3 bucket with a globally unique name. Keep **Block all public access** enabled and enable default encryption.
3. Create a CodeBuild project connected to the GitHub source (or use CodePipeline as source).
4. Use a supported Linux build image with Node.js 22, AWS CLI, and Docker. Enable **Privileged mode** only if the build must run Docker containers.
5. Set `SNYK_TOKEN` as a Secrets Manager-backed CodeBuild environment variable; do not put secrets in source files.
6. Set `REPORT_BUCKET` to the S3 bucket name.
7. Give the CodeBuild service role only the required permissions, including `s3:PutObject` to `arn:aws:s3:::YOUR_BUCKET/reports/*` and permission to read the specific secret.
8. Create CodePipeline with Source (GitHub connection) and Build (CodeBuild). For a larger pipeline, split tests, Snyk, ZAP, and reporting into separate CodeBuild actions and pass artifacts between stages.
9. Commit `buildspec.yml` to the repository and start a build. Inspect logs and verify reports appear under `reports/<build-number>/` in S3.

AWS managed image versions and supported runtimes change. Confirm your chosen CodeBuild image supports the configured Node.js runtime and Docker before running.

## What screenshots to capture for submission
Save screenshots with readable text. Do not include API tokens, passwords, account IDs, or other secrets.

1. `01-github-repository.png` — repository page showing project files.
2. `02-github-actions-run.png` — Actions page showing workflow execution.
3. `03-tests-passed.png` — workflow log showing `npm test` passed.
4. `04-snyk-scan.png` — Snyk dependency/code scan logs or report.
5. `05-zap-report.png` — ZAP HTML report opened in a browser.
6. `06-codepipeline.png` — AWS CodePipeline stages and execution status.
7. `07-codebuild-logs.png` — CodeBuild logs showing relevant commands.
8. `08-s3-reports.png` — S3 bucket showing uploaded report objects (keep bucket private).
9. `09-final-summary.png` — a short document/slide listing repository URL and what was completed.

## Where to submit the project
Your supplied PDF describes the project and final S3 report output, but it does **not** name a course submission portal or provide a submission URL. Usually you submit through your institute/course LMS (for example, the course page's assignment/project upload area). Ask your instructor if the portal is not visible. Submit:
- GitHub repository URL,
- screenshots or a PDF containing the screenshots,
- Snyk and ZAP reports if requested,
- a brief README/project summary.

Do not submit AWS credentials or Snyk API tokens.

## Terminal upload alternative
After extracting the ZIP, open a terminal in the project folder:
```bash
git init
git add .
git commit -m "Initial Node.js DevSecOps project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nodejs-devsecops.git
git push -u origin main
```
If Git prompts for authentication, use GitHub's supported sign-in flow or GitHub CLI; do not use your account password as a Git password.

## Important limitation
This ZIP prepares the project files, but it cannot create/push into your personal GitHub account or create AWS resources on your behalf. You must sign in and follow the steps above. Do not share passwords or tokens in chat.
