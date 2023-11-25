import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import HowItWorks from "../HowItWorks/HowitWorks";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";

const Home = () => {
    return (
        <div className="">
         <Banner></Banner>
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