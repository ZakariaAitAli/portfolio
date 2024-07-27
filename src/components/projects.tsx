import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="mt-2">Description of the project, technologies used, and what you achieved.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="mt-2">Description of the project, technologies used, and what you achieved.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
