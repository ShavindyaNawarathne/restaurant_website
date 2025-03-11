import { useNavigate } from "react-router-dom"
export default function HeroComp() {
    const navigate = useNavigate();
    return (
        <div id="hero">
            <div id ="hero-card">
                <h1 className="display-text">Little lemon</h1>
                <h2 className="subtitle-text">Chicago</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button name="reserve a table" id="reserve-btn" className="card-title" onClick={()=>navigate('/booking')}>Reserve a Table</button>
            </div>
            <div id ="hero-img">
                <img src="/images/restauranfood.jpg" alt="cover"/>
            </div>
        </div>
    )
}