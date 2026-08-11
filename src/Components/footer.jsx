export function Footer() {
  return (
    <>
      <footer className="bg-green-900 mt-5">
        <div className="flex justify-between items-center mx-auto">
          <div className=" text-4xl px-4 py-6">Umark</div>
          <div className="">
            <ul className="flex flex-col space-x-4">
              <li>
                <a
                  href="#"
                  className="text-slate-100 hover:text-green-700  font-black dark:hover:text-green-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-100 hover:text-green-700  font-black dark:hover:text-green-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-100 hover:text-green-700  font-black dark:hover:text-green-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className=""></div>
        </div>
      </footer>
    </>
  );
}
