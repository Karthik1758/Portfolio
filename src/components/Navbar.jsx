import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-blue-600">Karthik Chakali</h1>
      <div className="space-x-6 font-medium">
        <Link to="about" smooth className="cursor-pointer hover:text-blue-500">About</Link>
        <Link to="experience" smooth className="cursor-pointer hover:text-blue-500">Experience</Link>
        <Link to="projects" smooth className="cursor-pointer hover:text-blue-500">Projects</Link>
        <Link to="contact" smooth className="cursor-pointer hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}
