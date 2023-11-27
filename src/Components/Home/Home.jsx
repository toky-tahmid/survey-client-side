
import Banner from "../Banner/Banner";
import DisplaySurvey from "../DisplaySurvey/DisplaySurvey";
import Faq from "../Faq/Faq";
import HowItWorks from "../HowItWorks/HowitWorks";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <DisplaySurvey></DisplaySurvey>
      <HowItWorks></HowItWorks>
      <TestimonialsSection></TestimonialsSection>
      <br />
      <hr />
      <br />
      <Faq></Faq>
    </div>
  );
};

export default Home;
