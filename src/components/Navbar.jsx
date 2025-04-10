// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="flex justify-between p-4 bg-gray-900 text-white">
        <h1 className="text-xl font-bold">Ania Niedzialek</h1>
        <ul className="flex gap-4">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  