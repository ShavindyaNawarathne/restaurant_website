import { useState } from "react"

function Form({state, handleOptions}) {
    const [values, setValues] = useState({
        resDate: '',
        resTime: '',
        guests: 1,
        occasion: ''
    })
    const availableSlots = () => {
        const slots = [];
        console.log("date" + values.resDate)
        const selectedDate = state.find(obj => obj.date === values.resDate);
        if (selectedDate) {
            for (const [time, isAvailable] of Object.entries(selectedDate)) {
                if (isAvailable === true && time !== "date") {
                    slots.push(time);
                }
            }
        }
        return slots;
    };
    
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const bookingStartDate = date.toISOString().split("T")[0];
    
    date.setDate(date.getDate() + 29);
    const bookingLastDate = date.toISOString().split("T")[0];
    ;

    const handleChange = (e) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name] : e.target.value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleOptions(values.resDate, values.resTime);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="resDate">Choose date</label>
            <input type="date" id="resDate" min={bookingStartDate} max={bookingLastDate} name="resDate" onChange={(e) => handleChange(e)}/>
            <label htmlFor="resTime">Choose time</label>
            <select id="resTime" name="resTime" onChange={(e) => handleChange(e)}>
            {availableSlots().map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
            ))}

            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" onChange={(e) => handleChange(e)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={(e) => handleChange(e)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit" id="submit-btn">Submit</button>
        </form>
    )
}
export default Form;