import Aboutpage from '../pages/About';
import Menupage from '../pages/Menu';
import Logginpage from '../pages/Loggin';
import Bookingpage from '../pages/Booking';
import Homepage from '../pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';

const initializeTimes = () => {
  const today = new Date();
  const initialState = [];

  for(let i = 0; i < 30; i++){
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const currDate = date.toISOString().split("T")[0]
    initialState.push({
      date: currDate,
      "17.00": true,
      "18.00":true,
      "19.00": true,
      "20.00": true,
      "21.00": true,
      "22.00": true
    })
  }
  return initialState;
}
const updateTimes= (state, action) =>{
  switch(action.type) {
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
  const[state, dispatch] = useReducer(updateTimes,[], initializeTimes);
  console.log("Initialized state:", state);
console.log("State type:", typeof state);
console.log("Is Array?", Array.isArray(state));

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
            <Route path="/booking" element={<Bookingpage state = {state} handleOptions  = {handleOptions}/>} />
          </Routes>
        </Router>
      );
}
export default Main;