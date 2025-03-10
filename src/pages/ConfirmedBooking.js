import { useLocation } from "react-router-dom";

export default function BookingConfirmation() {
    const location = useLocation();
    const formData = location.state?.formData;
    console.log("recieved", formData)
    return(
        <>
            <h1>Your Booking is Confirmed</h1>
            <div>
                <h2>Booking Confirmation</h2>
                {formData ? (
                    <div>
                    <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                    <p><strong>Date:</strong> {formData.resDate}</p>
                    <p><strong>Time:</strong> {formData.resTime}</p>
                    <p><strong>Number of Guests:</strong> {formData.guests}</p>
                    </div>
                ) : (
                 <p>No booking details found.</p>
                )}
             </div>
        </>
    )
}