import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>If you want to reach out, you can find me on:</p>
      <ul className="list-disc list-inside">
        <li>
          Email:{" "}
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/yourprofile">
            linkedin.com/in/yourprofile
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/yourusername">github.com/yourusername</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
