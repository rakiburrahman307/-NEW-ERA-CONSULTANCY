import About from "./About";
import Carousel from "./Carousel";
import FlagsSliders from "./FlagsSliders";
import OurObjective from "./OurObjective";
import OurService from "./OurServise";


const Home = () => {

  return (
    <div className='max-w-[1366px] mx-auto'>
     <Carousel></Carousel>
     <About></About>
    <FlagsSliders></FlagsSliders>
    <OurService></OurService>
    <OurObjective></OurObjective>
    </div>
  );
};

export default Home;
