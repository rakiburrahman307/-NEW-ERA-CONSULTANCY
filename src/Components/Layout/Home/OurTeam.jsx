import { useState } from "react";
import imgCeo from "../../../assets/team_member/ceo.jpg";
import imgChairman from "../../../assets/team_member/chairman.jpg";
import imgDirector from "../../../assets/team_member/director.jpg";
import imgDirector_2 from "../../../assets/team_member/director_abdullah.jpg";

// Define the team members with names, roles, and image sources
const teamMembers = [
  {
    name: "Jakia Akter Shumi",
    role: "Chairman",
    imgSrc: imgChairman,
    link: "https://www.facebook.com/profile.php?id=100017451935643&mibextid=ZbWKwL",
  },
  {
    name: "Md. Taiful Islam",
    role: "CEO",
    imgSrc: imgCeo,
    link: "https://www.facebook.com/taiful.islam.775?mibextid=ZbWKwL",
  },
  {
    name: "Md. Afran Rahman Tonmoy",
    role: "Director",
    imgSrc: imgDirector,
    link: "https://www.facebook.com/afranrahman.tonmoy?mibextid=ZbWKwL",
  },
  {
    name: "Abdullah Al Mamun",
    role: "Director",
    imgSrc: imgDirector_2,
    link: "https://www.facebook.com/profile.php?id=100010572273280&mibextid=ZbWKwL",
  },
];

// Main team component
const OurTeam = () => {
  const [loadedImages, setLoadedImages] = useState({});

  // Function to handle image loading state
  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className='p-20 bg-white'>
      <div className='text-center mb-16'>
        <h3 className='text-3xl md:text-5xl leading-normal font-extrabold tracking-tight text-gray-900'>
          Meet Our <span className='text-customBg'>Team</span>
        </h3>
        <p className='mt-4 text-center text-lg leading-7 text-gray-500'>
          Commitment is our resource through which we give our best effort to
          ensure your service.
        </p>
      </div>
      <div className='sm:grid grid-cols-2 md:grid-cols-4 gap-14 mx-auto'>
        {teamMembers?.map((member, index) => (
          <div key={index} className='text-center'>
            <img
              className={`mb-3 rounded-full mx-auto h-32 w-32 transition duration-500 ease-in-out ${
                loadedImages[index] ? "filter-none" : "filter blur-lg"
              }`}
              src={member.imgSrc}
              alt={`${member.name} profile`}
              onLoad={() => handleImageLoad(index)}
              loading='lazy'
            />
            <a
              href={member?.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='hover:text-customBg text-gray-900 font-semibold'
            >
              {member?.name}
            </a>
            <p className='text-gray-500 uppercase text-sm'>{member?.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
