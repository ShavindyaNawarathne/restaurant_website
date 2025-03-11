import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
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
            {menu.map((dish) => (
                <article id = "menu-card">
                <img src={dish.src} alt="greek-salad" height="200px"/>
                <div className="dish-details lead-text">
                    <h3>{dish.name}</h3>
                    <h3>{dish.price}</h3>
                </div>
                <div>
                <p className="paragraph">{dish.description}</p>
                </div>
                <div className="menu-bottom">
                <h4 className="highlight-text" >Order a Delivery</h4>
                <h4> <FontAwesomeIcon icon={faCartShopping} /></h4>
                </div>
            </article>
            ))}
        </>
    )
}