import { Feedbacks, Navbar } from "./../components";

const FasterThanYou = () => {
  return (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Feedbacks />
      </div>
  );
}

export default FasterThanYou;
