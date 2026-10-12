# NodeJS Secure App

This project demonstrates DevSecOps pipeline with:
- AWS CodePipeline
- AWS CodeBuild
- Snyk (SCA + SAST)
- OWASP ZAP (DAST)

## Run locally
```bash
npm install
npm start

---

## 🟣 Step 4: GitHub पर Push करना
अब terminal में ये commands चलाओ:

```bash
# Files add करो
git add .
git commit -m "Initial secure NodeJS app"

# Remote repo connect करो (अपना username डालो)
git remote add origin https://github.com/<your-username>/nodejs-secure-app.git

# Push करो
git push origin main
