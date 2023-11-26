import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import DisplaySurvey from "../DisplaySurvey/DisplaySurvey";
import Faq from "../Faq/Faq";
import HowItWorks from "../HowItWorks/HowitWorks";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";

const Home = () => {
    const survey = useLoaderData()
    console.log(survey);
  return (
    <div>
      <Banner></Banner>
      <DisplaySurvey survey={survey}></DisplaySurvey>
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
