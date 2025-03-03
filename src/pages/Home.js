import HomeComp from '../components/HomePage';
import HeaderComp from '../components/Header';
import FooterComp from '../components/Footer'

export default function HomePage() {
    return(
        <div className='grid-container'>
            <HeaderComp />
            <HomeComp />
            <FooterComp />
        </div>
    )
}