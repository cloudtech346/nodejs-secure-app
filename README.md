# 🛡️ ShopPro Online – DevSecOps Implementation on AWS

### Secure Node.js Application | CI/CD Automation | Kubernetes | AWS Cloud Security

![AWS](https://img.shields.io/badge/Cloud-AWS-orange?logo=amazonaws)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-green?logo=nodedotjs)
![Docker](https://img.shields.io/badge/Container-Docker-blue?logo=docker)
![Kubernetes](https://img.shields.io/badge/Orchestration-Kubernetes-326CE5?logo=kubernetes)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=githubactions)
![Security](https://img.shields.io/badge/Focus-DevSecOps-red)

---

## 📌 Project Overview

**ShopPro Online** is a Node.js-based application designed to demonstrate the implementation of DevSecOps principles using Amazon Web Services (AWS).

The primary objective of this project is to integrate security practices throughout the Software Development Life Cycle (SDLC), from source code management and application testing to container security, automated deployment, monitoring, and compliance.

The project uses GitHub Actions to automate the CI/CD pipeline and AWS services to deploy and monitor the application.

Security tools such as Snyk, Trivy, and OWASP ZAP are integrated into the pipeline to identify potential vulnerabilities before and during deployment.

---

## 🎯 Project Objectives

* Implement DevSecOps principles throughout the software development lifecycle.
* Build and deploy a Node.js application using Docker.
* Automate CI/CD using GitHub Actions.
* Deploy containerized applications on Amazon EKS.
* Store Docker images securely in Amazon ECR.
* Integrate automated security scanning into the CI/CD pipeline.
* Perform application dependency and source-code security analysis.
* Automate functional testing.
* Implement Kubernetes security controls.
* Monitor AWS infrastructure using Amazon CloudWatch.
* Maintain AWS API activity records using AWS CloudTrail.
* Improve security visibility using AWS Security Hub, Amazon Inspector, and AWS Config.

---

## 🏗️ Architecture

The project follows this DevSecOps workflow:

```text
             Developer
                 |
                 v
          GitHub Repository
                 |
                 v
          GitHub Actions
                 |
       +---------+----------+
       |         |          |
       v         v          v
    Jest/       Snyk      OWASP ZAP
   Supertest   SAST/SCA   Web Scan
       |         |          |
       +---------+----------+
                 |
                 v
           Docker Build
                 |
                 v
          Trivy Image Scan
                 |
                 v
          Amazon ECR
                 |
                 v
           Amazon EKS
                 |
                 v
        Node.js Application
                 |
       +---------+----------+
       |         |          |
       v         v          v
   CloudWatch CloudTrail Security Hub
                 |
                 v
           AWS Config
                 |
                 v
          Amazon Inspector
```

---

## 🛠️ Technologies Used

| Category                 | Technology               | Purpose                             |
| ------------------------ | ------------------------ | ----------------------------------- |
| Application              | Node.js                  | Backend application                 |
| Framework                | Express.js               | HTTP application framework          |
| Testing                  | Jest                     | Automated testing                   |
| Testing                  | Supertest                | HTTP endpoint testing               |
| Source Control           | Git & GitHub             | Version control                     |
| CI/CD                    | GitHub Actions           | Pipeline automation                 |
| Containerization         | Docker                   | Application packaging               |
| Container Registry       | Amazon ECR               | Docker image storage                |
| Orchestration            | Amazon EKS               | Kubernetes deployment               |
| SAST                     | Snyk Code                | Source code security analysis       |
| SCA                      | Snyk Open Source         | Dependency vulnerability scanning   |
| Container Security       | Trivy                    | Docker image vulnerability scanning |
| Web Security             | OWASP ZAP                | Automated web application scanning  |
| Monitoring               | Amazon CloudWatch        | Logs and monitoring                 |
| Auditing                 | AWS CloudTrail           | AWS API activity tracking           |
| Security Posture         | AWS Security Hub         | Centralized security findings       |
| Vulnerability Management | Amazon Inspector         | Vulnerability assessment            |
| Compliance               | AWS Config               | Resource configuration monitoring   |
| Notifications            | Amazon EventBridge & SNS | Security alert integration          |

---

## ☁️ AWS Infrastructure

The project is deployed in the following AWS environment:

| Resource                        | Configuration                  |
| ------------------------------- | ------------------------------ |
| AWS Region                      | us-east-1                      |
| EKS Cluster                     | devsecops-eks                  |
| Node Group                      | devsecops-nodegroup            |
| Worker Nodes                    | 2                              |
| Instance Type                   | t3.medium                      |
| ECR Repository                  | nodejs-secure-app              |
| Kubernetes Namespace            | default                        |
| Application Deployment          | nodejs-secure-app              |
| Application Replicas            | 2                              |
| CloudTrail Trail                | devsecops-cloudtrail           |
| CloudWatch EKS Log Group        | /aws/eks/devsecops-eks/cluster |
| CloudWatch CloudTrail Log Group | /aws/cloudtrail/devsecops      |

### AWS Services Configuration

**Amazon EKS**

* Kubernetes cluster for application deployment.
* Managed node group with two worker nodes.
* Application deployed using Kubernetes Deployment and Service.

**Amazon ECR**

* Private Docker image repository.
* Image scanning on push enabled.
* Docker images stored for Kubernetes deployment.

**Amazon CloudWatch**

* EKS control-plane logs.
* Centralized log streams.
* CloudTrail audit logs.

**AWS CloudTrail**

* Multi-region trail.
* Log file validation enabled.
* S3 log storage.
* CloudWatch Logs integration.

**AWS Security Services**

* AWS Security Hub enabled.
* Amazon Inspector enabled for supported resource types.
* AWS Config configuration recorder and delivery channel configured.

---

## 📂 Repository Structure

```text
nodejs-secure-app/
│
├── .github/
│   └── workflows/
│       └── security.yml
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
├── app.js
├── app.test.js
├── server.js
│
├── Dockerfile
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### Important Files

| File                             | Description                         |
| -------------------------------- | ----------------------------------- |
| `app.js`                         | Express application and routes      |
| `server.js`                      | Application startup file            |
| `app.test.js`                    | Automated application tests         |
| `Dockerfile`                     | Docker image build instructions     |
| `k8s/deployment.yaml`            | Kubernetes Deployment configuration |
| `k8s/service.yaml`               | Kubernetes Service configuration    |
| `.github/workflows/security.yml` | Automated DevSecOps pipeline        |
| `package.json`                   | Project dependencies and scripts    |

---

## ⚙️ Prerequisites

Before running this project, install or configure the following:

1. Node.js and npm
2. Git
3. Docker
4. AWS CLI
5. kubectl
6. eksctl (for EKS cluster administration, if required)
7. AWS account with appropriate permissions
8. GitHub account
9. Snyk account and API token

Verify the installations:

```bash
node --version
npm --version
git --version
docker --version
aws --version
kubectl version --client
```

---

## 🚀 Installation and Local Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/cloudtech346/nodejs-secure-app.git
```

Move into the project directory:

```bash
cd nodejs-secure-app
```

### Step 2: Install Dependencies

```bash
npm ci
```

### Step 3: Run the Application

```bash
npm start
```

The application runs on port `3000` by default.

### Step 4: Access the Application

Open:

```text
http://localhost:3000
```

Health endpoint:

```text
http://localhost:3000/health
```

Expected homepage response:

```json
{
  "message": "Node.js DevSecOps application",
  "status": "running",
  "version": "1.0.0"
}
```

Expected health response:

```json
{
  "status": "healthy"
}
```

---

## 🧪 Automated Functional Testing

The project uses Jest and Supertest for automated application testing.

Run the tests:

```bash
npm test
```

The implemented test cases cover:

| Test Endpoint | Expected Result             |
| ------------- | --------------------------- |
| GET /         | HTTP 200 and running status |
| GET /health   | HTTP 200 and healthy status |

**Previously recorded result:** 2 tests passed.

These tests are integrated into the GitHub Actions workflow.

---

## 🐳 Docker Build and Execution

### Build Docker Image

```bash
docker build -t nodejs-secure-app:latest .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 --name nodejs-secure-app nodejs-secure-app:latest
```

### View Running Containers

```bash
docker ps
```

### View Container Logs

```bash
docker logs nodejs-secure-app
```

### Stop Container

```bash
docker stop nodejs-secure-app
```

---

## 🔐 Security Integration

### 1. Snyk – SAST and SCA

Snyk is integrated into GitHub Actions to identify potential vulnerabilities in source code and third-party dependencies.

Implemented scans:

* Snyk dependency vulnerability scan.
* Snyk Code source-code analysis.

The Snyk API token is configured through GitHub repository secrets.

### 2. Trivy – Container Vulnerability Scanning

Trivy is integrated into the CI/CD pipeline.

It scans Docker images for known vulnerabilities in operating-system packages and application dependencies.

The scan report is saved as a GitHub Actions artifact.

### 3. OWASP ZAP – Web Application Security

OWASP ZAP is integrated into the workflow to perform automated baseline security checks against the running Node.js application.

The generated report can be reviewed from the GitHub Actions workflow artifacts.

**Security note:** Security scans identify potential issues. Findings must be reviewed and remediated separately. A successful pipeline run does not automatically mean that the application has zero vulnerabilities.

---

## 🔄 GitHub Actions CI/CD Pipeline

The workflow is configured in:

```text
.github/workflows/security.yml
```

The pipeline is triggered by:

* Push events to the main branch.
* Pull requests targeting the main branch.

### Pipeline Execution Stages

| Stage                   | Description                         |
| ----------------------- | ----------------------------------- |
| Checkout                | Retrieves source code               |
| Node.js Setup           | Configures Node.js environment      |
| Dependency Installation | Installs npm packages               |
| Functional Testing      | Executes Jest tests                 |
| Application Startup     | Starts the application for scanning |
| Snyk Dependency Scan    | Checks vulnerable dependencies      |
| Snyk Code Scan          | Performs source-code analysis       |
| OWASP ZAP               | Performs web security baseline scan |
| Docker Build            | Creates application image           |
| Trivy Scan              | Scans Docker image                  |
| Report Upload           | Saves security scan artifacts       |
| AWS Authentication      | Authenticates with AWS              |
| ECR Login               | Connects to Amazon ECR              |
| Image Push              | Uploads Docker image to ECR         |
| EKS Deployment          | Updates Kubernetes application      |

### GitHub Repository Secrets

Navigate to:

```text
GitHub Repository
    → Settings
    → Secrets and variables
    → Actions
    → New repository secret
```

Configure the following secrets:

| Secret Name             | Purpose                                      |
| ----------------------- | -------------------------------------------- |
| `AWS_ACCESS_KEY_ID`     | AWS access key                               |
| `AWS_SECRET_ACCESS_KEY` | AWS secret access key                        |
| `AWS_SESSION_TOKEN`     | Temporary AWS session token, when applicable |
| `SNYK_TOKEN`            | Snyk authentication token                    |

**Important:** Never commit AWS credentials, Snyk tokens, or other sensitive information to the repository.

For temporary AWS credentials, the session token must also be valid when the workflow runs. Use short-lived credentials and follow your organization's credential-management policy.

---

## ☸️ Kubernetes Deployment

The application is deployed on Amazon EKS using Kubernetes manifests.

### Deployment Configuration

File:

```text
k8s/deployment.yaml
```

The deployment includes:

* Application container.
* Two replicas.
* Container port 3000.
* Readiness probe.
* Liveness probe.
* CPU and memory requests.
* CPU and memory limits.

### Service Configuration

File:

```text
k8s/service.yaml
```

The Kubernetes Service exposes the application internally using a ClusterIP service.

### Configure AWS CLI

```bash
aws configure
```

For temporary credentials, configure the session token as well.

### Connect to EKS

```bash
aws eks update-kubeconfig \
  --region us-east-1 \
  --name devsecops-eks
```

### Apply Kubernetes Manifests

The deployment manifest uses an image placeholder. Replace it with your actual ECR image URI before applying it.

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### Verify Deployment

```bash
kubectl get deployments
```

```bash
kubectl get pods
```

```bash
kubectl get services
```

### Check Deployment Rollout

```bash
kubectl rollout status deployment/nodejs-secure-app
```

### View Application Logs

```bash
kubectl logs deployment/nodejs-secure-app
```

### Access the Application Using Port Forwarding

```bash
kubectl port-forward svc/nodejs-secure-app 8080:80
```

Open:

```text
http://localhost:8080
```

Health endpoint:

```text
http://localhost:8080/health
```

---

## 🛡️ Kubernetes Security

Kubernetes namespace security is configured using Pod Security Standards.

The Restricted policy label was applied to the default namespace:

```bash
kubectl label namespace default \
  pod-security.kubernetes.io/enforce=restricted \
  --overwrite
```

For a workload to comply with the Restricted standard, its pod security context should include the appropriate controls, such as:

* Run containers as a non-root user.
* Disable privilege escalation.
* Drop unnecessary Linux capabilities.
* Use the RuntimeDefault seccomp profile.

Existing pods are not automatically modified when a namespace label is applied. Review workload security settings before claiming full Restricted policy compliance.

---

## 📊 Monitoring with Amazon CloudWatch

Amazon CloudWatch is used for centralized logging and infrastructure monitoring.

Configured log groups:

**EKS Control Plane Logs**

```text
/aws/eks/devsecops-eks/cluster
```

**CloudTrail Audit Logs**

```text
/aws/cloudtrail/devsecops
```

CloudWatch provides:

* Log group management.
* Log stream inspection.
* Log event analysis.
* Centralized infrastructure logs.
* Audit event visibility through CloudTrail integration.

### View CloudWatch Logs

1. Open AWS Management Console.
2. Navigate to Amazon CloudWatch.
3. Select Logs → Log Management.
4. Open the required log group.
5. Select a log stream.
6. Expand a log event to inspect its JSON details.

---

## 📝 AWS CloudTrail – Audit Logging

CloudTrail is configured to record AWS account activity.

Trail name:

```text
devsecops-cloudtrail
```

Configuration:

* Multi-region trail enabled.
* Log file validation enabled.
* S3 log storage configured.
* CloudWatch Logs integration enabled.

S3 bucket:

```text
devsecops-cloudtrail-730335459381-us-east-1
```

CloudWatch log group:

```text
/aws/cloudtrail/devsecops
```

CloudTrail helps administrators investigate API activity and maintain an audit history of AWS account operations.

---

## 🔎 AWS Security Hub, Inspector and Config

### AWS Security Hub

Security Hub provides a centralized view of security findings and security posture checks.

### Amazon Inspector

Inspector is enabled for supported resource types, including EC2 and ECR.

It helps identify vulnerabilities in supported AWS resources and container images.

### AWS Config

AWS Config is configured with:

* Configuration recorder.
* Delivery channel.
* S3 storage destination.
* Active recording status.

AWS Config helps track resource configuration changes and supports compliance assessment.

---

## 🚨 EventBridge and SNS Security Alerts

The project includes an EventBridge rule:

```text
DevSecOps-SecurityHub-Alerts
```

The rule is configured to capture Security Hub findings.

SNS topic:

```text
DevSecOps-Security-Alerts
```

These resources provide the foundation for security notification automation.

For end-to-end email notifications, configure the SNS topic policy, EventBridge target, and confirm the email subscription.

---

## 📸 Project Evidence and Screenshots

The following screenshots can be included in the final project documentation:

| No. | Screenshot            | Description                            |
| --- | --------------------- | -------------------------------------- |
| 1   | EKS Cluster           | Cluster overview                       |
| 2   | EKS Node Group        | Worker node status                     |
| 3   | GitHub Actions        | Successful CI/CD workflow              |
| 4   | Amazon ECR            | Docker image repository                |
| 5   | Trivy Report          | Container vulnerability scan           |
| 6   | Snyk Report           | Dependency and code scan               |
| 7   | OWASP ZAP             | Web security scan                      |
| 8   | Kubernetes Pods       | Two running application replicas       |
| 9   | CloudWatch Logs       | EKS control-plane log streams          |
| 10  | CloudWatch Log Events | Expanded CloudTrail JSON event         |
| 11  | CloudTrail            | Multi-region trail configuration       |
| 12  | Security Hub          | Security findings overview             |
| 13  | Inspector             | Vulnerability monitoring configuration |
| 14  | AWS Config            | Configuration recorder status          |
| 15  | EventBridge           | Security alert rule                    |

---

## 🧰 Troubleshooting

### 1. EKS Cluster Connection Issue

Update the Kubernetes configuration:

```bash
aws eks update-kubeconfig \
  --region us-east-1 \
  --name devsecops-eks
```

### 2. Kubernetes Pod Not Running

Check pod status:

```bash
kubectl get pods
```

Inspect pod events:

```bash
kubectl describe pod <pod-name>
```

View application logs:

```bash
kubectl logs <pod-name>
```

### 3. Docker Image Pull Error

Verify:

* The ECR repository exists.
* The image tag is correct.
* The EKS worker node role has ECR pull permissions.
* The image URI points to the correct AWS region and account.

### 4. GitHub Actions AWS Authentication Error

Verify the following GitHub Secrets:

```text
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_SESSION_TOKEN
```

For long-running projects, prefer a short-lived OIDC-based GitHub Actions role instead of long-lived access keys where supported.

### 5. Deployment Rollout Timeout

Check:

```bash
kubectl describe deployment nodejs-secure-app
```

```bash
kubectl get pods -o wide
```

```bash
kubectl describe pods
```

Review pod events, image availability, resource limits, and readiness probe configuration.

---

## 🔒 Security Best Practices

* Never store AWS credentials in source code.
* Use GitHub Secrets for sensitive pipeline credentials.
* Prefer short-lived AWS credentials and IAM least privilege.
* Scan Docker images before deployment.
* Review Snyk, Trivy, and OWASP ZAP findings.
* Keep Node.js dependencies updated.
* Use Kubernetes security contexts.
* Restrict unnecessary network access.
* Enable CloudTrail audit logging.
* Monitor infrastructure through CloudWatch.
* Review AWS Security Hub findings.
* Maintain secure backups of important configuration and audit logs.

---

## 📈 Project Outcomes

The implementation demonstrates:

* Automated CI/CD using GitHub Actions.
* Docker-based application containerization.
* Amazon ECR image storage.
* Amazon EKS Kubernetes deployment.
* Automated functional testing.
* Integrated Snyk, Trivy, and OWASP ZAP scanning.
* CloudWatch centralized logging.
* CloudTrail AWS API auditing.
* Security monitoring using Security Hub and Inspector.
* AWS Config resource configuration recording.

The Node.js application was observed running on Amazon EKS with two ready replicas.

---

## 🔮 Future Enhancements

The project can be extended with:

* GitHub Actions OIDC authentication for AWS.
* Automated remediation of security findings.
* Complete SNS email alert delivery.
* Kubernetes Network Policies.
* Fully enforced Restricted Pod Security controls.
* Automated security issue creation and tracking.
* CloudWatch dashboards and alarms.
* Infrastructure as Code using Terraform.
* Deployment strategies such as rolling updates and blue-green deployments.

---

## 👨‍💻 Repository

**GitHub:**
https://github.com/cloudtech346/nodejs-secure-app

**Project:** ShopPro Online – DevSecOps Implementation on AWS

**AWS Region:** us-east-1

---

## 📜 Disclaimer

This repository is intended for educational, demonstration, and DevSecOps learning purposes.

Security scan results should be reviewed and remediated before production use. AWS services may incur charges depending on usage, configuration, and region.

Do not use sample configurations or credentials without reviewing the security requirements of your environment.

---

## 🙏 Acknowledgement

This project demonstrates the integration of DevSecOps practices with AWS cloud infrastructure, automated security tools, containerization, Kubernetes orchestration, and continuous monitoring.

**Thank you for visiting this repository!**
