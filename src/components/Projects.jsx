export default function Projects() {
    return (
      <section id="projects" className="p-10 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-5">Projects</h2>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-bold">IFMIS Development</h3>
            <p>Developed IFMIS MP project with repository creation, form validation, and chatbot integration.</p>
          </li>
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-bold">Dhairya Project</h3>
            <p>Built a counselling management system with Reactive Forms and API services.</p>
          </li>
          <li className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-bold">Smart Meter</h3>
            <p>Developed Google Maps integration to display power lines and towers for the Andhra Pradesh government.</p>
          </li>
        </ul>
      </section>
    );
  }
  