export default function FolderCard() {
  return (
    <div className="group relative h-72 w-80 cursor-pointer">
      {/* Image 1 */}
      <img
        src="https://res.cloudinary.com/miyoqnda/image/upload/v1786650568/Meet_our_partners_jq5upr.png"
        alt=""
        className="
          absolute left-1/2 top-1/2
          h-44 w-64 rounded-lg object-cover
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-500
          group-hover:-translate-x-32
          group-hover:-translate-y-28
          group-hover:-rotate-12
        "
      />

      {/* Image 2 */}
      <img
        src="https://res.cloudinary.com/miyoqnda/image/upload/v1786697639/COUNTDOWN2_t8smon.png"
        alt=""
        className="
          absolute left-1/2 top-1/2
          h-48 w-46 rounded-lg object-cover
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-500 delay-75
          group-hover:translate-x-4
          group-hover:-translate-y-30
          group-hover:rotate-19
        "
      />

      {/* Center Image */}
      <img
        src="https://res.cloudinary.com/miyoqnda/image/upload/v1786609032/John_Slattery6_zclumw.jpg"
        alt=""
        className="
          absolute left-1/2 top-1/2 z-10
          h-44 w-64 rounded-lg object-cover
        //   -translate-x-1/2 -translate-y-1/2
          transition-all duration-500 delay-150
          group-hover:-translate-y-28
        "
      />

      {/* Folder */}
      <div
        className="
          absolute bottom-0 left-0 right-0 z-20
          h-40 rounded-xl
          bg-yellow-400 shadow-xl
          transition-all duration-500
          group-hover:shadow-2xl
        "
      >
        <div className="absolute -top-4 left-6 h-6 w-24 rounded-t-lg bg-yellow-500" />
      </div>
    </div>
  );
}