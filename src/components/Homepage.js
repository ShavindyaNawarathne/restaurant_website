import AboutComp from "./About";
import MenuComp from "./Specials";
import TestimonialsComp from "./Testimonials";
import HeroComp from "./Hero";

function HomeComp () {

    return (
        <main id="main">
          <HeroComp />
          <MenuComp />
          <TestimonialsComp />
          <AboutComp />
        </main>
    )
}
export default HomeComp;
