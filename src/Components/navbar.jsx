export function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/15 bg-[#6366F1]/95 shadow-lg backdrop-blur-lg">
        <div className="flex justify-between items-center px-5 py-6">
          <div className="flex items-center">
            <span className="text-white text-4xl font-bold">
              Umark
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-slate-100 font-semibold hover:text-blue-600 transition-all duration-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-100 font-semibold hover:text-blue-600 transition-all duration-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-100 font-semibold hover:text-blue-600 transition-all duration-400"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex flex-2 gap-2">
              {/* <button className="">Login</button> */}
              <button
                className="bg-linear-to-l from-blue-700 via-sky-500 rounded-lg hover:scale-105 transition-all duration-500 text-white font-sans shadow border-none px-3 py-1"
                id="signup"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
