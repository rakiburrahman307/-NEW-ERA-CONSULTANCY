import About from "./About";
import Carousel from "./Carousel";

const Home = () => {

  return (
    <div className='max-w-[1366px] mx-auto'>
     <Carousel></Carousel>
     <About></About>
    </div>
  );
};

export default Home;
