export default function HeroComp() {
    return (
        <div id="cover">
            <div id ="text">
                <h1 className="display-text">Little lemon</h1>
                <h3 className="subtitle-text">Chicago</h3>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button name="reserve a table" id="reserve-btn" className="highlight-text">Reserve a Table</button>
            </div>
            <div id ="img">
                <img src="/images/restauranfood.jpg" alt="cover" height="200px" width="200px"/>
            </div>
        </div>
    )
}