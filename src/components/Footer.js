
function FooterComp() {
    return(
        <footer id="footer">
            <section className="footer-nav">
                <h2 className="subtitle-text">navigation menu</h2>
                <ul>
                    <li><a href = "#header" role="button">Home</a></li>
                    <li><a href = "#about" role="button">About</a></li>
                    <li><a href = "#menu" role="button">Menu</a> </li>
                    <li><a href = "#reviews" role="button">Reviews</a></li>
            </ul>
            </section>
            <section className="contact-card">
                <h2 className="subtitle-text">Contact</h2>
                <ul>
                    <li><img src="/images/phone-solid.svg" alt="phone"></img>+11111111</li>
                    <li><img src="/images/whatsapp-brands.svg" alt="phone"></img>+264643747623</li>
                    <li></li>
                </ul>
            </section>
            <section className="social-media-card subtitle-text">
                <h2 className="subtitle-text">Social media links</h2>
                <ul>
                    <li><a href="www.facebook.com"><img src="/images/facebook-brands.svg" alt="facebook icon"></img></a></li>
                    <li><a href="www.instagram.com"><img src="/images/instagram-brands.svg" alt="instagram icon"></img></a></li>
                    <li><a href="www.x.com"><img src="/images/x-twitter-brands.svg" alt="x-twitter icon"></img></a></li>
                </ul>
            </section>
        </footer>
    );
}
export default FooterComp;