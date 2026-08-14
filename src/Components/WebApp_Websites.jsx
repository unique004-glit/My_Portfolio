const bgdesign =
  "bg-white relative w-60 h-60 px-4 py-3 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center object-cover";

const buttonDesign =
  "bg-white px-3 py-2 rounded-lg text-[#1F2937] text-sm shadow-lg transition-transform duration-300 group-hover:scale-105";
export default function Webapp() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6  px-4 py-10">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-60 w-60 group">
            <a href="https://ebi-beta.vercel.app/" target="_blank">
              <img
                src="https://res.cloudinary.com/miyoqnda/image/upload/v1786697905/Eden_Bulb_s1ajjy.png"
                alt="Eden Bulb International School"
                title="Eden Bulb International School"
                className={`${bgdesign}`}
              />
            </a>
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
              <a
                href="https://ebi-beta.vercel.app/"
                target="_blank"
                className={buttonDesign}
              >
                Visit site
              </a>
            </div>
          </div>
          <span>EdenBulbInternationalSchool</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-60 w-60 group">
            <a
            href="https://birthday-website-two-silk.vercel.app/"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/miyoqnda/image/upload/v1786703331/Happy_Brithday_Site_rpsi18.png"
              alt="Brithday App surprise"
              title="Brithday App surprise"
              className={`${bgdesign}`}
            />
          </a>
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a
                href="https://birthday-website-two-silk.vercel.app/"
                target="_blank"
                className={buttonDesign}
              >
                Visit site
              </a>
            </div>
          </div>
          
          <span>Brithday App surprise</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-60 w-60 group">
              <a
            href="https://frontend-project-ebon-one.vercel.app/"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/miyoqnda/image/upload/v1786703338/Weather_app_yzb8vt.png"
              alt="Weather App"
              title="Weather App"
              className={`${bgdesign}`}
            />
          </a>
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a
                href="https://frontend-project-ebon-one.vercel.app/"
                target="_blank"
                className={buttonDesign}
              >
                Visit site
              </a>
            </div>
          </div>
          
          <span>Weather App</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-60 w-60 group">
              <a
            href="https://frontend-project-ebon-one.vercel.app/"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/miyoqnda/image/upload/v1786717468/minecraft_tipp9n.png"
              alt="MineCraft Clone App"
              title="MineCraft Clone App"
              className={`${bgdesign}`}
            />
          </a>
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a
                href="https://frontend-project-ydaz.vercel.app/"
                target="_blank"
                className={buttonDesign}
              >
                Visit site
              </a>
            </div>
          </div>
          
          <span>MineCraft Clone App</span>
        </div>
      </div>
    </>
  );
}
