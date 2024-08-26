import About from "./About";
import Carousel from "./Carousel";
import Faq from "./Faq";
import FlagsSliders from "./FlagsSliders";
import OurAchievements from "./OurAchievements";
import OurMissionVision from "./OurMissionVision";
import OurObjective from "./OurObjective";
import OurService from "./OurService";
import OurTeam from "./OurTeam";
import UniversitySlider from "./UniversitySlider";

const Home = () => {
  return (
    <main className='mx-auto'>
      <Carousel />
      <About />
      <FlagsSliders />
      <OurService />
      <OurObjective />
      <OurTeam />
      <OurAchievements/>
      <OurMissionVision />
      <UniversitySlider/>
      <Faq/>
    </main>
  );
};

export default Home;
