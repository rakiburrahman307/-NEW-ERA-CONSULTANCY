import About from "./About";
import Carousel from "./Carousel";
import FlagsSliders from "./FlagsSliders";
import OurMissionVision from "./OurMissionVision";
import OurObjective from "./OurObjective";
import OurService from "./OurService";

import OurTeam from "./OurTeam";

const Home = () => {
  return (
    <main className='max-w-[1366px] mx-auto'>
      <Carousel />
      <About />
      <FlagsSliders />
      <OurService />
      <OurObjective />
      <OurTeam />
      <OurMissionVision />
    </main>
  );
};

export default Home;
