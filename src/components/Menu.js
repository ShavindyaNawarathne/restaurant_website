import MenuCardComp from "./MenuCard"
export default function MenuComp() {
    return(
        <section className="menu-section" id="menu">
            <h1 className="section-title ">This weeks specials!</h1>
            <MenuCardComp />
        </section>
    )
}