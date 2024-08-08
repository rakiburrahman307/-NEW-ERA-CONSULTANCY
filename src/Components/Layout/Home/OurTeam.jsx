import { useState } from 'react';

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Web Developer",
    imgSrc: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "John Smith",
    role: "UI/UX Designer",
    imgSrc: "https://i.pravatar.cc/150?img=31",
  },
  {
    name: "Sara Lee",
    role: "Project Manager",
    imgSrc: "https://i.pravatar.cc/150?img=30",
  },
  {
    name: "Mark Doe",
    role: "Backend Developer",
    imgSrc: "https://i.pravatar.cc/150?img=29",
  },
];

const OurTeam = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
        <header className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">THE TEAM</p>
          <h2 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            Meet Our <span className="text-indigo-600">Team</span>
          </h2>
          <p className="mt-4 text-md leading-7 text-gray-500 font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
            iste dolor cupiditate blanditiis ratione.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </header>

        <div className="sm:w-6/12 order-last sm:order-first">
          <ul className="grid grid-cols-2 gap-5 md:gap-10">
            {teamMembers.map((member, index) => (
              <li
                key={index}
                className="bg-gray-100 p-5 py-10 text-center transition transform hover:shadow-2xl hover:scale-105 duration-300 ease-in-out"
              >
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={member.imgSrc}
                      alt={`${member.name} profile`}
                      className={`mb-3 rounded-full mx-auto h-24 w-24 transition duration-500 ease-in-out ${
                        loadedImages[index] ? 'filter-none' : 'filter blur-lg'
                      }`}
                      onLoad={() => handleImageLoad(index)}
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg leading-6 font-semibold text-gray-900">
                      <span className="hover:text-indigo-600 transition duration-300 ease-in-out">{member.name}</span>
                    </h3>
                    <p className="text-sm leading-6 text-gray-500 uppercase">{member.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
