import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuCardComp() {
    const menu = [
        {
            id: 1,
            name: "Greek salad",
            price:"$12.99",
            description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            src: "/images/greek salad.jpg"
        },
        {
            id: 2,
            name: "Bruchetta",
            price: "$13.00",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            src: "/images/bruchetta.svg"
        },
        {
            id: 3,
            name: "Lemon Dessert",
            price:"$12.00",
            description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            src: "/images/lemon dessert.jpg"
        }

    ]
    return(
        <>
            {menu.map((dish, index) => (
                <article id = "menu-card">
                <img src={menu[index].src} alt="greek-salad" height="200px"/>
                <div className="dish-details lead-text">
                    <h3>{menu[index].name}</h3>
                    <h3>{menu[index].price}</h3>
                </div>
                <p className="paragraph">{menu[index].description}</p>
                <div>
                <h4 className="highlight-text">some text</h4>
                <h4><FontAwesomeIcon icon="fa-solid fa-champagne-glasses" /></h4>
                </div>
            </article>
            ))}
        </>
    )
}