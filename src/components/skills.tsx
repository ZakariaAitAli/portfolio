import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        <li>DevOps Tools: Docker, Kubernetes, Jenkins, Terraform</li>
        <li>Cloud Platforms: AWS, Azure, GCP</li>
        <li>Programming Languages: Python, JavaScript, Bash</li>
        <li>CI/CD Pipelines</li>
        <li>Infrastructure as Code (IaC)</li>
      </ul>
    </section>
  );
};

export default Skills;
