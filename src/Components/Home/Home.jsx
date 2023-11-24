import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";

const Home = () => {
    return (
        <div className="">
         <Banner></Banner>
         <TestimonialsSection></TestimonialsSection>
         <br />
         <hr />
         <br />
         <Faq></Faq>

        </div>
    );
};

export default Home;