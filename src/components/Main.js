import AboutComp from "./About";
import MenuComp from "./Menu";
import TestimonialsComp from "./Testimonials";
import HeroComp from "./Hero";

function MainComp () {
    return (
        <main id="main">
          <HeroComp />
          <MenuComp />
          <TestimonialsComp />
          <AboutComp />
        </main>
    )
}
export default MainComp;
