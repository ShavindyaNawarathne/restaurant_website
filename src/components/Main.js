import Aboutpage from '../pages/About';
import Menupage from '../pages/Menu';
import Logginpage from '../pages/Loggin';
import Bookingpage from '../pages/Booking';
import Homepage from '../pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useReducer, useEffect,useState } from 'react';

const updateTimes= (state, action) =>{
  switch(action.type) {
    case "SET_SLOTS" :
      return action.payload;
    case "SELECTED" : {
      return state.map((entry) => {
        if(entry.date === action.payload.date) {
          return{...entry, [action.payload.time]:!entry[action.payload.time]}
        } else {
          return entry;
        }
      })
    }
    default : return state;
  }
}

const Main = () => {
  const[state, dispatch] = useReducer(updateTimes,[]);
  const [selectedDate, setSelectedDate] = useState("2025-02-15");
  useEffect(() => {
    if (selectedDate && window.fetchAPI) {
      window.fetchAPI(selectedDate).then((availableTimes) => {
        console.log("API Response:", availableTimes);
        dispatch({ type: "SET_SLOTS", payload: availableTimes });
      }).catch(error => console.error("Error fetching slots:", error));
    }
  }, [selectedDate]);
  const handleOptions = (date, time) => {
      dispatch({type : "SELECTED", payload : {date, time} });
  }
    return(
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={< Aboutpage/>} />
            <Route path="/menu" element={<Menupage />} />
            <Route path="/login" element={<Logginpage />} />
            <Route path="/booking" element={<Bookingpage state = {state} handleOptions  = {handleOptions} setSelectedDate = {setSelectedDate}/>} />
          </Routes>
        </Router>
      );
}
export default Main;