import { useNavigate } from "react-router-dom"
export default function HeroComp() {
    const navigate = useNavigate();
    return (
        <div id="hero">
            <div id ="hero-card">
                <h1 className="display-text">Little lemon</h1>
                <h2 className="subtitle-text">Chicago</h2>
                <p className="paragraph">Indulge in fresh, handcrafted dishes made with love and the finest ingredients. Whether you're craving a hearty meal or a light bite, we bring you a taste of tradition with a modern twist. Come savor the zest of life at Little Lemon!</p>
                <button name="reserve a table" id="reserve-btn" className="card-title" onClick={()=>navigate('/booking')}>Reserve a Table</button>
            </div>
            <div id ="hero-img">
                <img src="/images/restauranfood.jpg" alt="cover"/>
            </div>
        </div>
    )
}