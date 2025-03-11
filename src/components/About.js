function AboutComp() {
    return(
        <section id="about">
            <div className="about-text">
                <h1 className="section-title">About</h1>
                <h2 className="subtitle-text">Little lemon, Chicago</h2>
                <p className="paragraph">Located in the heart of Chicago, Little Lemon is a cozy, family-friendly restaurant owned by Mario and Adrian.
                    With a passion for Mediterranean flavors and fresh, locally sourced ingredients, they bring a unique twist to classic dishes.
                    Whether you're stopping by for a quick bite or a leisurely meal, Little Lemon offers a warm atmosphere and a menu full of vibrant,
                    handcrafted dishes that celebrate tradition and taste. Come experience the flavors of Little Lemon – where every meal is made with love!</p>
            </div>
            <div className="about-images">
                <img src="/images/Mario and Adrian b.jpg" alt="owners cooking together" id="owner-image-one" height="200px"/>
                <img src="/images/restaurant.jpg" alt="owners chatting together" id="owner-image-two" height="200px"/>
            </div>
        </section>
    )
}
export default AboutComp;