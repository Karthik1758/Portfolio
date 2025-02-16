import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16">
      <h2 className="section-heading">Contact Me</h2>
      <div className="flex flex-col items-center gap-4">
        <p className="flex items-center gap-2 text-lg">
          <FaEnvelope /> chakalikarthik2001@gmail.com
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaPhone /> +91 6281506295
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaMapMarkerAlt /> Hyderabad, India
        </p>
      </div>
    </section>
  );
}
