import HomeComp from '../components/HomePage';
import FooterComp from '../components/Footer'

export default function HomePage() {
    return(
        <div className='grid-container'>
            <HomeComp />
            <FooterComp />
        </div>
    )
}