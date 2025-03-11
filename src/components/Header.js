import Navbar from "./Nav";
function HeaderComp() {
    return(
        <header id="header">
            <div className="logo">
                <img src = "/images/Logo .svg" alt = "company logo"/>
            </div>
            <Navbar />
        </header>
    )
}
export default HeaderComp;