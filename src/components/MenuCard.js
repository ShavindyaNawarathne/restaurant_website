import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuCardComp() {
    const menu = [
        {
            id: 1,
            name: "Greek salad",
            price:"$12.99",
            description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            src: "src/assets/images/greek salad.jpg"
        },
        {
            id: 2,
            name: "Bruchetta",
            price: "$13.00",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            src: "src/assets/images/bruchetta.svg"
        },
        {
            id: 3,
            name: "Lemon Dessert",
            price:"12",
            description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            src: "src/assets/images/lemon dessert.jpg"
        }

    ]
    return(
        <article id = "menu-card">
            <img src={menu[0].src} alt="greek-salad"/>
            <div>
                <h3 className="lead-text">{menu[0].name}</h3>
                <h3 className="lead-text">{menu[1].price}</h3>
            </div>
            <p className="paragraph">{menu[0].description}</p>
            <div>
            <h4 className="highlight-text">some text</h4>
            <h4><FontAwesomeIcon icon="fa-solid fa-champagne-glasses" /></h4>
            </div>
        </article>
    )
}