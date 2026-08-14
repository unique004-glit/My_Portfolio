import Typewriter from "../Components/typewiter";
import { Navbar } from "../Components/navbar";
import FolderCard from "../Components/folderCard";
import  Webapp  from "../Components/WebApp_Websites.jsx";

const specialties = [
  "Frontend Development",
  "Backend Development",
  "Problem Solving",
];
const frontendStacks = [
  { name: "HTML", icon: "html5/html5-original.svg" },
  { name: "CSS", icon: "css3/css3-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "React", icon: "react/react-original.svg" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
];
const backendStacks = [
  { name: "PHP", icon: "php/php-original.svg" },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "Firebase", icon: "firebase/firebase-original.svg" },
];
const tools = [
  { name: "Git", icon: "git/git-original.svg" },
  { name: "VS Code", icon: "vscode/vscode-original.svg" },
  { name: "Postman", icon: "postman/postman-original.svg" },
];
const socialLinks = [
  {
    name: "LinkedIn",
    handle: "Connect professionally",
    href: "https://www.linkedin.com/in/unique-mark-65b1b9427/",
    icon: "https://cdn.simpleicons.org/linkedin/60A5FA",
  },
  {
    name: "GitHub",
    handle: "Explore my code",
    href: "https://github.com/unique004-glit",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
  },
  {
    name: "Instagram",
    handle: "Follow my creative work",
    href: "https://www.instagram.com/mainmarkrick/",
    icon: "https://cdn.simpleicons.org/instagram/F472B6",
  },
];

const text = [
  "Where Creativity Meets Skill",
  "Are you ready to embark on a journey of innovation and excellence?",
  "Let's create something extraordinary together!",
];

export function Home() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-slate-950">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-sound-wave.mp4" type="video/mp4" />
        </video>
        {/* <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-blue-950/70 to-slate-950/80"
          aria-hidden="true"
        /> */}

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="space-y-12">
            <header>
              <h1 className="font-bricolage text-6xl md:text-7xl font-bold text-white">
                Welcome To
              </h1>

              <h2 className="font-bricolage text-4xl md:text-5xl font-bold mt-2 text-white">
                <Typewriter text={text} speed={100} />
              </h2>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                I build purposeful digital experiences where thoughtful design
                meets clean, performant code.
              </p>
            </header>

            <div className="flex flex-wrap gap-3">
              {specialties.map((tag) => (
                <span
                  key={tag}
                  className="text-white bg-white/20 border border-white/30 px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#OurWorks"
              className="font-bricolage font-bold bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View My Work
            </a>
          </div>
        </section>
      </main>

      <section id="about">
        <div className="text-4xl text-white text-center font-semibold font-bricolage mt-10">
          <h1>About Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto px-12 py-24">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hi, I'm Unique Mark
            </h2>
            <p className="text-lg text-slate-300 mb-4" id="info">
              I'm a Computer Engineering student and passionate backend
              developer from Nigeria. I specialize in building web applications
              using PHP, MySQL, JavaScript, React, and Tailwind CSS. I enjoy
              creating efficient, scalable, and user-friendly digital solutions
              that solve real-world problems.
            </p>
            <p>
              {" "}
              My journey in tech is driven by curiosity, continuous learning,
              and a passion for innovation. From school portals and inventory
              management systems to agricultural technology platforms, I love
              transforming ideas into functional products. I'm constantly
              expanding my skills and exploring new technologies to become a
              well-rounded software engineer, I'm also the Founder and CEO of
              Umark Designs and Development.
            </p>
          </div>

          <div>
            <img
              src="data:image/png;base64,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gAACEwlMECAT1cvOgQn88MMP5uabbzZXXXXV7HTXXXeZv/76a6SerFmzxjzyyCNm+fLl5uqrr87LuOaaa8ytt95qXnvttZHLcStroky3/DqWf//9d7Nq1Spz2223meuuuy7vtwxvvPFG88ADD5jPP/+8cjX//POPeeONN8wdd9wxp8yHHnrIfPvtt50os3Ij2CE4AQIkuCFrv8H//vuvee6558wvv/xSuXIFzGOPPWbuvPNO89577xkdUNeuXZuX899//5kff/zRrFy5Mg+n999/P18/7E8TZQ6rs+rzMnv++efNLbfcYl588UWjANaB35bz559/mk8++cTcf//95u677x7Z9uOPP87DaMWKFea7774z5TI//PBDo2BXOKkOW9+geRNlDqqP5+IRIEDiGcvGevLWW2+Zjz76qHL5Oog+8cQT5p133jE2NPoVolB49NFHzdtvv91vk3x9E2XmBdf4R21UaL700kuFA3y/Kr7++mtz77335mHabxut19mKjBTketxvkrXCaZQQaaLMfu1ifXwCBEh8Y1prj77//vv8FbQOSlUL1gH0gw8+GHk3nZE8++yz5ptvvum7TxNl9q1szCd0pqUzgSq7KxQUtu4Zhbv/zz//bB5//PFKl/oUTE8//bRbTGG5iTILFfAgegECJPohHr+DOpjpUokuO1Ut5YfpeyY6c3GDJ8sys/fee5tLLrnEXHnllWbx4sVm8803LxT9xx9/mFdffbWwzj5ookxbdl1zmb355ptGYeiWuf3225vzzz8/77f6L4csy9xNzFdffWV0Oamwct0DmeiAv+5hPttkk03MqaeeapYtW2YuvfRSc8ABB5gsK5apIOsXyE2UmTeMP8kIpBkgyQzvZB3Vze0vv/xyrEJ0P+O3334r7LvzzjubE044wWy88cb5+h122MGcdNJJZoMNNsgf2z+6rKKwsI/tvIkybdl1zXUDW/cm3PK22morc9pppxnNtV79X7RokVGo6LGdFDq9LhX++uuvcy4hrr/++rnl1NRUHhobbrihOeqoo4we2/I016VBXULUsjs1UaZbPstpCBAgaYxz5V4qOFavXj303kWvgvUq/NNPPy08NW/ePLPffvuZ9dZbr7BeB1EFibtSwaMQcdc1UaZbfl3Lm266qTn88MPzM62tt97azJ8/3+y6666zoWnrUQBss8029uHs/O+/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"
              alt=""
              className="w-100 h-100 flex justify-center items-center rounded-full border-r-8 border-blue-800 focus:"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="text-4xl text-white text-center font-semibold font-bricolage mt-3">
          <h1>Tech Stacks</h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 px-4 py-6 mx-auto max-w-7xl mt-10">
            <div className="font-bold text-2xl text-center">
              <h1>Frontend</h1>
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 p-3 gap-3">
                {frontendStacks.map((stack, index) => (
                  <span key={stack.name} className="tech-stack-item">
                    <span
                      className="tech-icon-bubble"
                      aria-hidden="true"
                      style={{ animationDelay: `${index * -0.4}s` }}
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack.icon}`}
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                    {stack.name}
                  </span>
                ))}
                <span></span>
              </div>
            </div>
            <div className="font-bold text-2xl text-center">
              <h1>Backend</h1>
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 p-3 gap-3">
                {backendStacks.map((stack, index) => (
                  <span key={stack.name} className="tech-stack-item">
                    <span
                      className="tech-icon-bubble"
                      aria-hidden="true"
                      style={{ animationDelay: `${index * -0.4}s` }}
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack.icon}`}
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                    {stack.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="font-bold text-2xl text-center">
              <h1>Tools</h1>
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 p-3 gap-3">
                {tools.map((tool, index) => (
                  <span key={tool.name} className="tech-stack-item">
                    <span
                      className="tech-icon-bubble"
                      aria-hidden="true"
                      style={{ animationDelay: `${index * -0.4}s` }}
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool.icon}`}
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-blue-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur-sm md:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Get in touch
            </p>
            <h1 className="mt-3 font-bricolage text-4xl font-bold text-white md:text-5xl">
              Let&apos;s build something meaningful.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Have an idea, a project, or an opportunity in mind? I&apos;d love
              to hear from you and explore how we can work together.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <a
              href="mailto:markunique72@gmail.com"
              className="group inline-flex items-center gap-4 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-5 py-4 text-left transition hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-500/20"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-xl text-white shadow-lg shadow-blue-500/30">
                @
              </span>
              <span>
                <span className="block text-sm text-blue-200">Email me at</span>
                <span className="block font-semibold text-white">
                  markunique72@gmail.com
                </span>
              </span>
            </a>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.name}: ${social.handle}`}
                  className="group flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 text-slate-200 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-700"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 p-2">
                    <img src={social.icon} alt="" className="h-full w-full" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-white">
                      {social.name}
                    </span>
                    <span className="block text-xs text-slate-400">
                      {social.handle}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div
          className="text-4xl text-white text-center font-semibold font-bricolage mt-3"
          id="OurWorks"
        >
          <h1>Our Works</h1>
        </div>
        <div className="lg:flex sm:flex-1/12 gap-50 mt-10 mx-auto max-w-7xl px-6 py-24 items-center">
          <div className="font-bold text-2xl text-white flex flex-col items-center">
            Graphic Design{" "}
            <div>
              <FolderCard />
            </div>
          </div>
          <div className="font-bold text-2xl text-white flex flex-col items-center  ">
            Web Apps / Websites{" "}
            <div>
              <Webapp/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
