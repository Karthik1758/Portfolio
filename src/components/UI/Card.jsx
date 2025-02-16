export default function Card({ title, description, icon }) {
    return (
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
        <div className="text-indigo-500 text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  