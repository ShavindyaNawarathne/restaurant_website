import { useLocation } from "react-router-dom";

export default function BookingConfirmation() {
    const location = useLocation();
    const formData = location.state?.formData;
    console.log("recieved", formData)
    return(
        <div id="confirmation-page">
            <div className="confirmation-card">
                <h1 className="subtitle-text">Your Booking is Confirmed</h1>
                    {formData ? (
                        <div className="confirmation-details">
                        <p className="paragraph"><span className="highlight-text">Name:</span> {formData.firstName} {formData.lastName}</p>
                        <p className="paragraph"><span className="highlight-text">Date:</span> {formData.resDate}</p>
                        <p className="paragraph"><span className="highlight-text">Time:</span> {formData.resTime}</p>
                        <p className="paragraph"><span className="highlight-text">Number of Guests:</span> {formData.guests}</p>
                        </div>
                    ) : (
                    <p>No booking details found.</p>
                    )}
            </div>
        </div>
    )
}