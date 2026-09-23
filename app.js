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

  <title>CI/CD Demo Dashboard</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f6f8;
      color: #1f2937;
    }

    header {
      background: #111827;
      color: white;
      padding: 35px 20px;
      text-align: center;
    }

    header h1 {
      margin: 0 0 10px;
      font-size: 32px;
    }

    header p {
      margin: 0;
      color: #d1d5db;
    }

    .container {
      max-width: 1200px;
      margin: 30px auto;
      padding: 0 20px;
    }

    .section {
      background: white;
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 25px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    }

    .section h2 {
      margin-top: 0;
      color: #111827;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 10px;
    }

    .flow {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }

    .flow-box {
      background: #eef2ff;
      border: 1px solid #c7d2fe;
      padding: 15px 18px;
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
    }

    .arrow {
      font-size: 24px;
      font-weight: bold;
    }

    .tools {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }

    .tool {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 18px;
      background: #fafafa;
    }

    .tool h3 {
      margin-top: 0;
      margin-bottom: 8px;
    }

    .tool p {
      margin-bottom: 0;
      color: #4b5563;
      line-height: 1.5;
    }

    .commands {
      background: #111827;
      color: #e5e7eb;
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
    }

    .commands code {
      white-space: pre;
      line-height: 1.8;
    }

    .status {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }

    .status-card {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 18px;
    }

    .status-card strong {
      display: block;
      margin-bottom: 6px;
    }

    footer {
      text-align: center;
      padding: 30px;
      color: #6b7280;
    }

    @media (max-width: 600px) {
      header h1 {
        font-size: 25px;
      }

      .arrow {
        transform: rotate(90deg);
      }
    }
  </style>
</head>

<body>

  <header>
    <h1>CI/CD Demo Dashboard</h1>
    <p>End-to-End Continuous Integration and Continuous Deployment</p>
  </header>

  <div class="container">

    <!-- CI/CD FLOW -->
    <div class="section">
      <h2>1. CI/CD Pipeline Flow</h2>

      <div class="flow">
        <div class="flow-box">Developer</div>
        <div class="arrow">→</div>

        <div class="flow-box">Git</div>
        <div class="arrow">→</div>

        <div class="flow-box">GitHub</div>
        <div class="arrow">→</div>

        <div class="flow-box">GitHub Actions</div>
        <div class="arrow">→</div>

        <div class="flow-box">Tests</div>
        <div class="arrow">→</div>

        <div class="flow-box">Docker Build</div>
        <div class="arrow">→</div>

        <div class="flow-box">Docker Hub</div>
        <div class="arrow">→</div>

        <div class="flow-box">AWS EC2</div>
        <div class="arrow">→</div>

        <div class="flow-box">Application</div>
      </div>
    </div>


    <!-- TOOLS -->
    <div class="section">
      <h2>2. Tools Used</h2>

      <div class="tools">

        <div class="tool">
          <h3>Node.js</h3>
          <p>Runs the backend application.</p>
        </div>

        <div class="tool">
          <h3>Express.js</h3>
          <p>Provides the web application and HTTP endpoint.</p>
        </div>

        <div class="tool">
          <h3>Git</h3>
          <p>Tracks source-code changes.</p>
        </div>

        <div class="tool">
          <h3>GitHub</h3>
          <p>Stores the source code repository.</p>
        </div>

        <div class="tool">
          <h3>GitHub Actions</h3>
          <p>Automates testing, Docker build and deployment.</p>
        </div>

        <div class="tool">
          <h3>Docker</h3>
          <p>Packages and runs the application in a container.</p>
        </div>

        <div class="tool">
          <h3>Docker Hub</h3>
          <p>Stores Docker images.</p>
        </div>

        <div class="tool">
          <h3>AWS EC2</h3>
          <p>Provides the server where the application runs.</p>
        </div>

        <div class="tool">
          <h3>Ubuntu</h3>
          <p>Operating system running on the EC2 server.</p>
        </div>

        <div class="tool">
          <h3>SSH</h3>
          <p>Provides secure remote access to the EC2 server.</p>
        </div>

      </div>
    </div>


    <!-- CI -->
    <div class="section">
      <h2>3. Continuous Integration (CI)</h2>

      <div class="flow">
        <div class="flow-box">Git Push</div>
        <div class="arrow">→</div>
        <div class="flow-box">Checkout</div>
        <div class="arrow">→</div>
        <div class="flow-box">npm ci</div>
        <div class="arrow">→</div>
        <div class="flow-box">npm test</div>
        <div class="arrow">→</div>
        <div class="flow-box">Docker Build</div>
        <div class="arrow">→</div>
        <div class="flow-box">Docker Push</div>
      </div>

      <p>
        CI automatically checks the code and builds the Docker image whenever
        changes are pushed to the main branch.
      </p>
    </div>


    <!-- CD -->
    <div class="section">
      <h2>4. Continuous Deployment (CD)</h2>

      <div class="flow">
        <div class="flow-box">Docker Hub</div>
        <div class="arrow">→</div>
        <div class="flow-box">SSH to EC2</div>
        <div class="arrow">→</div>
        <div class="flow-box">Docker Pull</div>
        <div class="arrow">→</div>
        <div class="flow-box">Stop Old Container</div>
        <div class="arrow">→</div>
        <div class="flow-box">Start New Container</div>
      </div>

      <p>
        CD automatically deploys the Docker image to the EC2 server after
        the CI process succeeds.
      </p>
    </div>


    <!-- DOCKER -->
    <div class="section">
      <h2>5. Docker Commands</h2>

      <div class="commands">
        <code>
docker --version

docker images

docker ps

docker ps -a

docker pull IMAGE

docker run -d --name cicd-demo -p 3000:3000 IMAGE

docker logs cicd-demo

docker stop cicd-demo

docker start cicd-demo

docker rm cicd-demo
        </code>
      </div>
    </div>


    <!-- GIT -->
    <div class="section">
      <h2>6. Git Commands</h2>

      <div class="commands">
        <code>
git status

git add .

git commit -m "Update application"

git push origin main

git pull

git log --oneline
        </code>
      </div>
    </div>


    <!-- CURRENT STATUS -->
    <div class="section">
      <h2>7. Current Deployment</h2>

      <div class="status">

        <div class="status-card">
          <strong>Application</strong>
          CI/CD Demo
        </div>

        <div class="status-card">
          <strong>Environment</strong>
          AWS EC2
        </div>

        <div class="status-card">
          <strong>Container</strong>
          cicd-demo
        </div>

        <div class="status-card">
          <strong>Port</strong>
          3000
        </div>

        <div class="status-card">
          <strong>Docker Repository</strong>
          munnapp/cicd-demo
        </div>

        <div class="status-card">
          <strong>Deployment</strong>
          Automated
        </div>

      </div>
    </div>


    <!-- ARCHITECTURE -->
    <div class="section">
      <h2>8. Complete Architecture</h2>

      <div class="commands">
        <code>
Developer
    |
    | git push
    v
GitHub Repository
    |
    v
GitHub Actions
    |
    +---- npm ci
    |
    +---- npm test
    |
    +---- Docker build
    |
    +---- Docker push
    |
    v
Docker Hub
    |
    | SSH
    v
AWS EC2
    |
    v
Docker
    |
    v
cicd-demo Container
    |
    v
Node.js Application
    |
    v
Port 3000
        </code>
      </div>
    </div>


    <!-- IMPORTANT CONCEPTS -->
    <div class="section">
      <h2>9. Important Concepts</h2>

      <p>
        <strong>Dockerfile:</strong>
        Instructions used to build a Docker image.
      </p>

      <p>
        <strong>Docker Image:</strong>
        A packaged version of the application.
      </p>

      <p>
        <strong>Docker Container:</strong>
        A running instance of a Docker image.
      </p>

      <p>
        <strong>Docker Hub:</strong>
        Remote registry used to store Docker images.
      </p>

      <p>
        <strong>GitHub Actions:</strong>
        Automation platform used for CI/CD.
      </p>

      <p>
        <strong>EC2:</strong>
        Cloud server where the application is running.
      </p>

      <p>
        <strong>SSH:</strong>
        Secure protocol used to connect to the EC2 server.
      </p>

    </div>

  </div>

  <footer>
    CI/CD Demo Project — Node.js + Docker + GitHub Actions + AWS EC2
  </footer>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});