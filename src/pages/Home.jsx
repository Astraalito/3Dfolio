import Footer from "../components/Footer";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./../components";

const Home = () => {
  return (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Experience />
        <Tech />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
  );
}

export default Home;
