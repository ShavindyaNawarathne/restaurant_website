import { useState } from "react"

function Form({state, handleOptions, setSelectedDate, submitForm }) {
    const [values, setValues] = useState({
        resDate: '',
        resTime: '',
        guests: 1,
        occasion: ''
    })
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const bookingStartDate = date.toISOString().split("T")[0];
    date.setDate(date.getDate() + 29);
    const bookingLastDate = date.toISOString().split("T")[0];
    ;

    const handleChange = (e) => {
        if((e.target.name)=== "resDate") {
            setSelectedDate(e.target.value)
        }
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name] : e.target.value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleOptions(values.resDate, values.resTime);
        submitForm(values);

    }
    console.log(state)
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="resDate">Choose date</label>
            <input type="date" id="resDate" value = {values.resDate} min={bookingStartDate} max={bookingLastDate} name="resDate" onChange={(e) => handleChange(e)}/>
            <label htmlFor="resTime">Choose time</label>
            <select id="resTime" name="resTime" value = {values.resTime} onChange={(e) => handleChange(e)}>
            {state.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
            ))}
            console.log(state)
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