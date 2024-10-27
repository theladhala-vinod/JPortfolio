const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 md:px-12 lg:px-20 fixed w-full h-16">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">
          Gotham Jishitha
        </div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
