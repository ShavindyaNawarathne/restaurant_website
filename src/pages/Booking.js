import BookingForm from '../components/BookingForm'

export default function Bookingpage ({state, handleOptions, setSelectedDate, submitForm}) {
    return(
        <div id='booking-page'>
            <h1 className="display-text">Little lemon, Chicago  </h1>
            <h3 className="card-title">Find a table at any occasion</h3>
            <div className="booking-images">
                <img src="/images/restaurant chef B.jpg" alt="chef" />
                <img src="/images/restaurant.jpg" alt="restaurant"/>
            </div>
            <div className='form-container'>
                <h4 className='card-title'>Book your table</h4>
                <BookingForm state={state} handleOptions= {handleOptions} setSelectedDate = {setSelectedDate} submitForm = {submitForm}/>
            </div>
        </div>
    )
}