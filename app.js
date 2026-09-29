const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CI/CD Journey Dashboard</title>

<style>

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f7fb;
  color: #1f2937;
}

/* =========================
   HEADER
========================= */

.hero {
  background: linear-gradient(135deg, #111827, #1e3a8a);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.hero .emoji {
  font-size: 65px;
  margin-bottom: 10px;
}

.hero h1 {
  margin: 0;
  font-size: 42px;
}

.hero p {
  font-size: 19px;
  color: #dbeafe;
  max-width: 800px;
  margin: 15px auto 0;
  line-height: 1.6;
}

.badge {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 18px;
  background: #22c55e;
  color: white;
  border-radius: 30px;
  font-weight: bold;
}

/* =========================
   COMMON
========================= */

.container {
  max-width: 1250px;
  margin: 35px auto;
  padding: 0 20px;
}

.section {
  background: white;
  border-radius: 18px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.07);
}

.section h2 {
  margin-top: 0;
  font-size: 28px;
  color: #111827;
}

.section h3 {
  color: #1d4ed8;
}

.section p,
.section li {
  line-height: 1.7;
}

/* =========================
   STORY
========================= */

.story {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 25px;
}

.story-card {
  width: 145px;
  min-height: 135px;
  padding: 18px;
  border-radius: 18px;
  background: #eff6ff;
  border: 2px solid #bfdbfe;
  text-align: center;
  transition: transform 0.2s;
}

.story-card:hover {
  transform: translateY(-6px) rotate(-1deg);
}

.story-card .big {
  font-size: 45px;
}

.story-card strong {
  display: block;
  margin-top: 8px;
}

.story-arrow {
  font-size: 30px;
  font-weight: bold;
}

/* =========================
   TODAY
========================= */

.today-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
}

.today-card {
  padding: 22px;
  border-radius: 16px;
  border: 2px solid #dcfce7;
  background: #f0fdf4;
}

.today-card .icon {
  font-size: 35px;
}

.today-card h3 {
  color: #166534;
  margin-bottom: 8px;
}

/* =========================
   BEFORE AFTER
========================= */

.before-after {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.ba-card {
  border-radius: 18px;
  padding: 25px;
}

.before {
  background: #fff7ed;
  border: 2px solid #fed7aa;
}

.after {
  background: #eff6ff;
  border: 2px solid #bfdbfe;
}

.ba-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* =========================
   ENVIRONMENTS
========================= */

.environment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.env {
  border-radius: 20px;
  padding: 25px;
  text-align: center;
  color: white;
}

.env .emoji {
  font-size: 55px;
}

.env h3 {
  color: white;
  font-size: 25px;
}

.env.dev {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
}

.env.stage {
  background: linear-gradient(135deg, #ca8a04, #a16207);
}

.env.prod {
  background: linear-gradient(135deg, #dc2626, #991b1b);
}

.port {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 15px;
  border-radius: 20px;
  background: rgba(255,255,255,0.2);
  font-weight: bold;
}

/* =========================
   PIPELINE
========================= */

.pipeline {
  position: relative;
  margin-top: 30px;
}

.pipeline-step {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
}

.pipeline-number {
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2563eb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
}

.pipeline-content {
  flex: 1;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 18px;
}

.pipeline-content strong {
  font-size: 19px;
}

/* =========================
   BRANCH FLOW
========================= */

.branch-flow {
  background: #111827;
  color: white;
  border-radius: 18px;
  padding: 30px;
  overflow-x: auto;
}

.branch-row {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 800px;
  margin: 20px 0;
}

.branch {
  padding: 14px 22px;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
}

.branch.dev {
  background: #2563eb;
}

.branch.stage {
  background: #ca8a04;
}

.branch.prod {
  background: #dc2626;
}

.arrow-white {
  font-size: 28px;
}

/* =========================
   CODE
========================= */

.code-box {
  background: #111827;
  color: #e5e7eb;
  padding: 22px;
  border-radius: 14px;
  overflow-x: auto;
}

.code-box pre {
  margin: 0;
  line-height: 1.7;
  font-family: Consolas, monospace;
}

/* =========================
   ADVANTAGES
========================= */

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.pros,
.cons {
  padding: 25px;
  border-radius: 18px;
}

.pros {
  background: #f0fdf4;
  border: 2px solid #bbf7d0;
}

.cons {
  background: #fff7ed;
  border: 2px solid #fed7aa;
}

.pros h3 {
  color: #15803d;
}

.cons h3 {
  color: #c2410c;
}

.pros li,
.cons li {
  margin-bottom: 12px;
}

/* =========================
   SECURITY
========================= */

.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
}

.security-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 20px;
}

.security-card .emoji {
  font-size: 35px;
}

/* =========================
   CHECKLIST
========================= */

.checklist {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.check {
  background: #f0fdf4;
  border: 2px solid #bbf7d0;
  padding: 18px;
  border-radius: 12px;
  font-weight: bold;
}

/* =========================
   FINAL
========================= */

.final-box {
  background: linear-gradient(135deg, #111827, #312e81);
  color: white;
  border-radius: 22px;
  padding: 40px;
  text-align: center;
}

.final-box h2 {
  color: white;
}

.final-flow {
  font-size: 22px;
  line-height: 2;
  font-weight: bold;
}

/* =========================
   FOOTER
========================= */

footer {
  text-align: center;
  padding: 40px 20px;
  color: #64748b;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 800px) {

  .hero h1 {
    font-size: 30px;
  }

  .before-after,
  .pros-cons,
  .environment-grid {
    grid-template-columns: 1fr;
  }

  .story-arrow {
    transform: rotate(90deg);
  }

  .section {
    padding: 22px;
  }

}

</style>

</head>

<body>

<!-- =========================================================
     HERO
========================================================= -->

<header class="hero">

  <div class="emoji">🚀 🤖 🐳 ☁️</div>

  <h1>My CI/CD Journey</h1>

  <p>
    A simple visual explanation of how code moves from a developer's laptop
    to Development, QA/Staging and finally Production.
  </p>

  <div class="badge">
    Multi-Environment CI/CD Demo
  </div>

</header>


<div class="container">


<!-- =========================================================
     1. TODAY
========================================================= -->

<section class="section">

  <h2>📅 1. What I Completed Today</h2>

  <p>
    Today I converted the basic CI/CD demo into a
    <strong>multi-environment deployment workflow</strong>.
  </p>

  <div class="today-grid">

    <div class="today-card">
      <div class="icon">🌱</div>
      <h3>Development Branch</h3>
      <p>
        Created <strong>develop</strong> branch for development work.
      </p>
    </div>

    <div class="today-card">
      <div class="icon">🧪</div>
      <h3>Staging Branch</h3>
      <p>
        Created <strong>staging</strong> branch for QA testing.
      </p>
    </div>

    <div class="today-card">
      <div class="icon">⚙️</div>
      <h3>GitHub Actions</h3>
      <p>
        Configured CI/CD for different environments.
      </p>
    </div>

    <div class="today-card">
      <div class="icon">🐳</div>
      <h3>Docker</h3>
      <p>
        Built and pushed Docker images automatically.
      </p>
    </div>

    <div class="today-card">
      <div class="icon">🖥️</div>
      <h3>DEV Deployment</h3>
      <p>
        Deployed automatically to EC2 on port <strong>3002</strong>.
      </p>
    </div>

    <div class="today-card">
      <div class="icon">🔬</div>
      <h3>QA Deployment</h3>
      <p>
        Deployed staging environment to EC2 on port <strong>3001</strong>.
      </p>
    </div>

    <div class="today-card">
      <div class="icon">🏭</div>
      <h3>Production</h3>
      <p>
        Production deployment is designed to be started manually.
      </p>
    </div>

    <div class="today-card">
      <div class="icon">🔐</div>
      <h3>SSH Security</h3>
      <p>
        GitHub Actions uses a dedicated SSH key stored as a GitHub Secret.
      </p>
    </div>

  </div>

</section>


<!-- =========================================================
     2. CARTOON STORY
========================================================= -->

<section class="section">

  <h2>🎬 2. CI/CD Explained Like a Cartoon</h2>

  <p>
    Imagine a developer is sending a package through a factory.
  </p>

  <div class="story">

    <div class="story-card">
      <div class="big">👨‍💻</div>
      <strong>Developer</strong>
      <small>Writes code</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">📦</div>
      <strong>Git</strong>
      <small>Tracks changes</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">☁️</div>
      <strong>GitHub</strong>
      <small>Stores code</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🤖</div>
      <strong>GitHub Actions</strong>
      <small>Runs automation</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🧪</div>
      <strong>Tests</strong>
      <small>Checks code</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🐳</div>
      <strong>Docker</strong>
      <small>Packages app</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">📦</div>
      <strong>Docker Hub</strong>
      <small>Stores image</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🖥️</div>
      <strong>EC2</strong>
      <small>Runs application</small>
    </div>

  </div>

</section>


<!-- =========================================================
     3. BEFORE AFTER
========================================================= -->

<section class="section">

  <h2>🔄 3. What Changed?</h2>

  <div class="before-after">

    <div class="ba-card before">

      <div class="ba-title">
        ❌ Before
      </div>

      <p>
        The demo mainly had a single deployment flow.
      </p>

      <div class="code-box">
        <pre>
main
  ↓
GitHub Actions
  ↓
Test
  ↓
Docker Build
  ↓
Docker Hub
  ↓
EC2
  ↓
Application
        </pre>
      </div>

      <ul>
        <li>No separate DEV environment.</li>
        <li>No separate QA environment.</li>
        <li>Less separation between testing and production.</li>
        <li>Harder to demonstrate promotion between environments.</li>
      </ul>

    </div>


    <div class="ba-card after">

      <div class="ba-title">
        ✅ After
      </div>

      <p>
        The pipeline now separates development, QA and production.
      </p>

      <div class="code-box">
        <pre>
develop
   ↓
DEV :3002
   ↓
staging
   ↓
QA :3001
   ↓
main
   ↓
Manual Production
   ↓
PROD :3000
        </pre>
      </div>

      <ul>
        <li>Separate development branch.</li>
        <li>Separate staging/QA branch.</li>
        <li>Production is manually triggered.</li>
        <li>Clear promotion process.</li>
      </ul>

    </div>

  </div>

</section>


<!-- =========================================================
     4. ENVIRONMENTS
========================================================= -->

<section class="section">

  <h2>🌍 4. Three Environments</h2>

  <div class="environment-grid">

    <div class="env dev">

      <div class="emoji">🔵</div>

      <h3>DEVELOPMENT</h3>

      <p>
        Branch:
        <strong>develop</strong>
      </p>

      <p>
        Developers test new changes here.
      </p>

      <div class="port">
        EC2 :3002
      </div>

    </div>


    <div class="env stage">

      <div class="emoji">🟡</div>

      <h3>STAGING / QA</h3>

      <p>
        Branch:
        <strong>staging</strong>
      </p>

      <p>
        QA/testing happens here before production.
      </p>

      <div class="port">
        EC2 :3001
      </div>

    </div>


    <div class="env prod">

      <div class="emoji">🔴</div>

      <h3>PRODUCTION</h3>

      <p>
        Branch:
        <strong>main</strong>
      </p>

      <p>
        Production deployment is manually triggered.
      </p>

      <div class="port">
        EC2 :3000
      </div>

    </div>

  </div>

</section>


<!-- =========================================================
     5. BRANCH ARCHITECTURE
========================================================= -->

<section class="section">

  <h2>🌳 5. Git Branch Architecture</h2>

  <div class="branch-flow">

    <div class="branch-row">

      <div class="branch dev">
        develop
      </div>

      <div class="arrow-white">→</div>

      <div>
        Pull Request
      </div>

      <div class="arrow-white">→</div>

      <div class="branch stage">
        staging
      </div>

      <div class="arrow-white">→</div>

      <div>
        Pull Request
      </div>

      <div class="arrow-white">→</div>

      <div class="branch prod">
        main
      </div>

    </div>

  </div>

  <p>
    The purpose is to promote tested code from one environment to the next
    instead of treating every branch as production code.
  </p>

</section>


<!-- =========================================================
     6. COMPLETE WORKFLOW
========================================================= -->

<section class="section">

  <h2>⚙️ 6. How The Complete Workflow Works</h2>

  <div class="pipeline">


    <div class="pipeline-step">

      <div class="pipeline-number">1</div>

      <div class="pipeline-content">

        <strong>👨‍💻 Developer writes code</strong>

        <p>
          Developer makes a change on the local machine.
        </p>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">2</div>

      <div class="pipeline-content">

        <strong>🌱 Push to develop</strong>

        <p>
          The developer commits and pushes the code to the
          <strong>develop</strong> branch.
        </p>

        <div class="code-box">
          <pre>git add .
git commit -m "Update application"
git push origin develop</pre>
        </div>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">3</div>

      <div class="pipeline-content">

        <strong>🤖 GitHub Actions starts</strong>

        <p>
          GitHub detects the push and starts the CI/CD workflow.
        </p>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">4</div>

      <div class="pipeline-content">

        <strong>📥 Checkout source code</strong>

        <p>
          GitHub Actions downloads the repository code.
        </p>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">5</div>

      <div class="pipeline-content">

        <strong>📦 Install dependencies</strong>

        <p>
          npm installs the exact dependencies from package-lock.json.
        </p>

        <div class="code-box">
          <pre>npm ci</pre>
        </div>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">6</div>

      <div class="pipeline-content">

        <strong>🧪 Run tests</strong>

        <p>
          Automated tests verify that the application passes its checks.
        </p>

        <div class="code-box">
          <pre>npm test</pre>
        </div>

        <p>
          If tests fail → ❌ pipeline stops.
        </p>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">7</div>

      <div class="pipeline-content">

        <strong>🐳 Build Docker image</strong>

        <p>
          The Dockerfile is used to package the application into a
          Docker image.
        </p>

        <div class="code-box">
          <pre>docker build -t munnapp/cicd-demo:COMMIT_SHA .</pre>
        </div>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">8</div>

      <div class="pipeline-content">

        <strong>📦 Push image to Docker Hub</strong>

        <p>
          The image is uploaded to the Docker registry.
        </p>

        <div class="code-box">
          <pre>docker push munnapp/cicd-demo:COMMIT_SHA</pre>
        </div>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">9</div>

      <div class="pipeline-content">

        <strong>🖥️ Deploy to DEV</strong>

        <p>
          GitHub Actions connects to EC2 using SSH.
          The server pulls the new image and starts the DEV container.
        </p>

        <div class="code-box">
          <pre>docker pull IMAGE
docker stop cicd-demo-dev
docker rm cicd-demo-dev
docker run -d --name cicd-demo-dev -p 3002:3000 IMAGE</pre>
        </div>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">10</div>

      <div class="pipeline-content">

        <strong>🔬 QA validates the application</strong>

        <p>
          Once DEV is working, the code is promoted from
          <strong>develop → staging</strong>.
        </p>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">11</div>

      <div class="pipeline-content">

        <strong>🟡 Deploy to STAGING</strong>

        <p>
          GitHub Actions builds and deploys the staging version.
        </p>

        <div class="code-box">
          <pre>docker run -d
--name cicd-demo-staging
-p 3001:3000
IMAGE</pre>
        </div>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">12</div>

      <div class="pipeline-content">

        <strong>👨‍🔬 QA testing</strong>

        <p>
          QA validates the staging application before production.
        </p>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">13</div>

      <div class="pipeline-content">

        <strong>🚦 Promote staging → main</strong>

        <p>
          After staging validation, a Pull Request is used to promote
          the tested code to <strong>main</strong>.
        </p>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">14</div>

      <div class="pipeline-content">

        <strong>🖱️ Manual production deployment</strong>

        <p>
          Production is not automatically deployed just because the
          branch changed. The workflow is manually started using
          <strong>Run workflow</strong>.
        </p>

      </div>

    </div>


    <div class="pipeline-step">

      <div class="pipeline-number">15</div>

      <div class="pipeline-content">

        <strong>🏭 Production deployment</strong>

        <p>
          GitHub Actions builds the production image, pushes it to
          Docker Hub and deploys it to the production container.
        </p>

        <div class="code-box">
          <pre>cicd-demo
Port: 3000</pre>
        </div>

      </div>

    </div>

  </div>

</section>


<!-- =========================================================
     7. PRODUCTION
========================================================= -->

<section class="section">

  <h2>🏭 7. Why Production Is Manual</h2>

  <div class="story">

    <div class="story-card">
      <div class="big">🧪</div>
      <strong>DEV</strong>
      <small>Developer testing</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🔬</div>
      <strong>QA</strong>
      <small>Staging testing</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">👨‍💼</div>
      <strong>Decision</strong>
      <small>Manual action</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🚀</div>
      <strong>PRODUCTION</strong>
      <small>Deploy</small>
    </div>

  </div>

  <p>
    The purpose is to introduce an explicit human action before the
    production deployment. This provides a clear release point for the demo.
  </p>

</section>


<!-- =========================================================
     8. ADVANTAGES
========================================================= -->

<section class="section">

  <h2>👍 8. Advantages</h2>

  <div class="pros-cons">

    <div class="pros">

      <h3>✅ Benefits</h3>

      <ul>

        <li>
          <strong>Automation:</strong>
          Repeated deployment commands are handled by GitHub Actions.
        </li>

        <li>
          <strong>Faster delivery:</strong>
          Code can move through environments without manually rebuilding
          and copying the application.
        </li>

        <li>
          <strong>Testing before deployment:</strong>
          Automated tests run before the deployment jobs.
        </li>

        <li>
          <strong>Environment separation:</strong>
          DEV, QA and production have different deployment targets.
        </li>

        <li>
          <strong>Consistency:</strong>
          Docker packages the application in a repeatable way.
        </li>

        <li>
          <strong>Traceability:</strong>
          Docker images are tagged using the Git commit SHA.
        </li>

        <li>
          <strong>Less manual work:</strong>
          Engineers don't need to manually pull, stop and start containers
          for every deployment.
        </li>

      </ul>

    </div>


    <div class="cons">

      <h3>⚠️ Limitations</h3>

      <ul>

        <li>
          <strong>Single EC2 server:</strong>
          DEV, staging and production currently share the same EC2 server.
        </li>

        <li>
          <strong>Port-based separation:</strong>
          Environments are separated using different host ports.
        </li>

        <li>
          <strong>SSH deployment:</strong>
          The current demo uses SSH from GitHub Actions to EC2.
        </li>

        <li>
          <strong>No automatic rollback:</strong>
          A failed release does not automatically restore the previous
          deployment.
        </li>

        <li>
          <strong>Basic health checking:</strong>
          The current deployment verifies that the container starts,
          but does not implement a full production health-check system.
        </li>

        <li>
          <strong>Demo architecture:</strong>
          This setup is designed for learning and demonstration rather
          than a complete production platform.
        </li>

      </ul>

    </div>

  </div>

</section>


<!-- =========================================================
     9. SECURITY
========================================================= -->

<section class="section">

  <h2>🔐 9. Security</h2>

  <div class="security-grid">

    <div class="security-card">
      <div class="emoji">🔑</div>
      <h3>GitHub Secrets</h3>
      <p>
        Sensitive deployment credentials are stored as GitHub Secrets
        instead of being written into the workflow.
      </p>
    </div>

    <div class="security-card">
      <div class="emoji">🔐</div>
      <h3>SSH Key</h3>
      <p>
        GitHub Actions uses a dedicated SSH private key to connect to EC2.
      </p>
    </div>

    <div class="security-card">
      <div class="emoji">🚫</div>
      <h3>.gitignore</h3>
      <p>
        Prevents local and sensitive files such as .env from being committed.
      </p>
    </div>

    <div class="security-card">
      <div class="emoji">🐳</div>
      <h3>.dockerignore</h3>
      <p>
        Prevents unnecessary or sensitive files from entering the Docker
        build context.
      </p>
    </div>

    <div class="security-card">
      <div class="emoji">🛡️</div>
      <h3>Security Group</h3>
      <p>
        AWS network rules control which ports can reach the EC2 server.
      </p>
    </div>

    <div class="security-card">
      <div class="emoji">🙈</div>
      <h3>Never expose secrets</h3>
      <p>
        Docker tokens, SSH private keys and passwords should never be
        committed to Git.
      </p>
    </div>

  </div>

</section>


<!-- =========================================================
     10. DOCKER
========================================================= -->

<section class="section">

  <h2>🐳 10. Docker — What Is Happening?</h2>

  <div class="story">

    <div class="story-card">
      <div class="big">📄</div>
      <strong>Dockerfile</strong>
      <small>Instructions</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">📦</div>
      <strong>Image</strong>
      <small>Packaged app</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🚢</div>
      <strong>Docker Hub</strong>
      <small>Image registry</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🖥️</div>
      <strong>EC2</strong>
      <small>Server</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">📦</div>
      <strong>Container</strong>
      <small>Running app</small>
    </div>

  </div>

  <h3>Simple explanation</h3>

  <p>
    The Dockerfile tells Docker how to package the application.
    The resulting Docker image is pushed to Docker Hub.
    EC2 downloads that image and runs it as a container.
  </p>

</section>


<!-- =========================================================
     11. GIT
========================================================= -->

<section class="section">

  <h2>🌱 11. Git — How Code Moves</h2>

  <div class="code-box">

<pre>
Developer changes code
        ↓
git status
        ↓
git add .
        ↓
git commit -m "Update application"
        ↓
git push origin develop
        ↓
GitHub
</pre>

  </div>

  <p>
    Git tracks the source-code changes. GitHub stores the repository
    and triggers the CI/CD workflow when the configured branch receives
    a push.
  </p>

</section>


<!-- =========================================================
     12. GITHUB ACTIONS
========================================================= -->

<section class="section">

  <h2>🤖 12. What GitHub Actions Does</h2>

  <div class="story">

    <div class="story-card">
      <div class="big">📥</div>
      <strong>Checkout</strong>
      <small>Get code</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">📦</div>
      <strong>npm ci</strong>
      <small>Install</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🧪</div>
      <strong>npm test</strong>
      <small>Validate</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🐳</div>
      <strong>Build</strong>
      <small>Docker image</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">📦</div>
      <strong>Push</strong>
      <small>Docker Hub</small>
    </div>

    <div class="story-arrow">→</div>

    <div class="story-card">
      <div class="big">🚀</div>
      <strong>Deploy</strong>
      <small>EC2</small>
    </div>

  </div>

</section>


<!-- =========================================================
     13. ENVIRONMENT PORTS
========================================================= -->

<section class="section">

  <h2>🔌 13. Environment & Port Mapping</h2>

  <div class="code-box">

<pre>
                    EC2 SERVER

DEV
Host Port 3002
       ↓
Container Port 3000
       ↓
cicd-demo-dev


STAGING / QA
Host Port 3001
       ↓
Container Port 3000
       ↓
cicd-demo-staging


PRODUCTION
Host Port 3000
       ↓
Container Port 3000
       ↓
cicd-demo
</pre>

  </div>

</section>


<!-- =========================================================
     14. COMMANDS
========================================================= -->

<section class="section">

  <h2>💻 14. Useful Docker Commands</h2>

  <div class="code-box">

<pre>
docker ps

docker ps -a

docker images

docker pull IMAGE

docker logs cicd-demo-dev

docker logs cicd-demo-staging

docker logs cicd-demo

docker stop CONTAINER

docker rm CONTAINER
</pre>

  </div>

</section>


<!-- =========================================================
     15. VERIFICATION
========================================================= -->

<section class="section">

  <h2>🔍 15. How I Verified The Deployment</h2>

  <div class="checklist">

    <div class="check">
      ✅ GitHub Actions succeeded
    </div>

    <div class="check">
      ✅ Docker image built
    </div>

    <div class="check">
      ✅ Docker image pushed
    </div>

    <div class="check">
      ✅ DEV container running
    </div>

    <div class="check">
      ✅ STAGING container running
    </div>

    <div class="check">
      ✅ curl returned application HTML
    </div>

    <div class="check">
      ✅ Docker logs verified application
    </div>

    <div class="check">
      ✅ Browser access verified
    </div>

  </div>

</section>


<!-- =========================================================
     16. DEMO SCRIPT
========================================================= -->

<section class="section">

  <h2>🎤 16. How To Explain This In The Team Demo</h2>

  <div class="pipeline">

    <div class="pipeline-step">
      <div class="pipeline-number">1</div>
      <div class="pipeline-content">
        <strong>Start with the problem</strong>
        <p>
          "Earlier the application had a simpler deployment flow.
          I wanted to separate development, QA and production."
        </p>
      </div>
    </div>

    <div class="pipeline-step">
      <div class="pipeline-number">2</div>
      <div class="pipeline-content">
        <strong>Explain the branches</strong>
        <p>
          "Develop is for development, staging is for QA and main is
          the production branch."
        </p>
      </div>
    </div>

    <div class="pipeline-step">
      <div class="pipeline-number">3</div>
      <div class="pipeline-content">
        <strong>Show GitHub Actions</strong>
        <p>
          "When code is pushed, GitHub Actions automatically tests,
          builds and deploys the application."
        </p>
      </div>
    </div>

    <div class="pipeline-step">
      <div class="pipeline-number">4</div>
      <div class="pipeline-content">
        <strong>Show Docker Hub</strong>
        <p>
          "The application is packaged as a Docker image and stored
          in Docker Hub."
        </p>
      </div>
    </div>

    <div class="pipeline-step">
      <div class="pipeline-number">5</div>
      <div class="pipeline-content">
        <strong>Show EC2</strong>
        <p>
          "EC2 pulls the image and runs the correct container for
          each environment."
        </p>
      </div>
    </div>

    <div class="pipeline-step">
      <div class="pipeline-number">6</div>
      <div class="pipeline-content">
        <strong>Explain production</strong>
        <p>
          "Production is manually triggered so there is an explicit
          release action after staging validation."
        </p>
      </div>
    </div>

  </div>

</section>


<!-- =========================================================
     17. FINAL ARCHITECTURE
========================================================= -->

<section class="section">

  <h2>🏗️ 17. Complete Architecture</h2>

  <div class="code-box">

<pre>
                         👨‍💻 DEVELOPER
                               |
                               | git push
                               v
                       ☁️ GITHUB REPOSITORY
                               |
                               v
                         🤖 GITHUB ACTIONS
                               |
                +--------------+--------------+
                |              |              |
                v              v              v
             npm ci         npm test      Docker Build
                                             |
                                             v
                                        Docker Hub
                                             |
                                             v
                                       SSH to EC2
                                             |
                 +---------------------------+----------------------+
                 |                           |                      |
                 v                           v                      v
           🔵 DEV :3002               🟡 QA :3001            🔴 PROD :3000
           develop branch             staging branch          main branch
                 |                           |                      |
                 v                           v                      |
          Developer Test                QA Test                    |
                                             |                      |
                                             +----------+-----------+
                                                        |
                                                        v
                                                Manual Production
                                                   Deployment
</pre>

  </div>

</section>


<!-- =========================================================
     18. FINAL STATUS
========================================================= -->

<section class="section">

  <div class="final-box">

    <h2>🎉 CI/CD Demo Status</h2>

    <div class="final-flow">

      👨‍💻 Developer
      →
      🌱 develop
      →
      🔵 DEV :3002
      <br>

      🧪 QA
      →
      🌱 staging
      →
      🟡 STAGING :3001
      <br>

      👨‍💼 Release
      →
      🌱 main
      →
      🖱️ Manual Workflow
      →
      🔴 PROD :3000

    </div>

    <p>
      Code is tested, packaged with Docker, stored in Docker Hub
      and deployed to the appropriate EC2 environment through GitHub Actions.
    </p>

  </div>

</section>


</div>


<footer>

  <strong>CI/CD Demo Project</strong>
  <br><br>

  Node.js + Express + Git + GitHub + GitHub Actions
  + Docker + Docker Hub + AWS EC2

  <br><br>

  Multi-Environment CI/CD Demonstration

</footer>


</body>

</html>
  `);
});


app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});