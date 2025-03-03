import Form from "../components/BookingForm";

export default function Bookingpage ({state, handleOptions}) {
    console.log("state" +{state})
    return(
        <>
            <h1 className="display-text">Little lemon</h1>
            <h2 className="sutitle-text">Chicago</h2>
            <h3 className="card-title">Find a table at any occasion</h3>
            <div className="booking-images">
                <img src="/images/restaurant chef B.jpg" alt="chef" />
                <img src="/images/restaurant.jpg" alt="restaurant"/>
            </div>
            <Form state={state} handleOptions= {handleOptions} />
        </>
    )
}