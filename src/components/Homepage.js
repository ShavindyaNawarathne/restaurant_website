import AboutComp from "./About";
import MenuComp from "./Specials";
import TestimonialsComp from "./Testimonials";
import HeroComp from "./Hero";

function HomeComp () {
  fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
    .then (response => response.json())
    .then(data => console.log("data" + data))
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
