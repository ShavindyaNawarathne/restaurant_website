import Aboutpage from '../pages/About';
import Menupage from '../pages/Menu';
import Logginpage from '../pages/Loggin';
import Bookingpage from '../pages/Booking';
import Homepage from '../pages/Home';
import HeaderComp from './Header.js';
import BookingConfirmation from '../pages/ConfirmedBooking.js';
import {Route, Routes } from 'react-router-dom';
import { useReducer, useEffect, useState } from 'react';
import {fetchAPI, submitAPI} from './api.js'
import { useNavigate } from 'react-router-dom';

console.log("type func: " , typeof fetchAPI)
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_SLOTS':
      return action.payload;
    case 'SELECTED': {
      return state.map((entry) => {
        if (entry.date === action.payload.date) {
          return { ...entry, [action.payload.time]: !entry[action.payload.time] };
        } else {
          return entry;
        }
      });
    }
    default:
      return state;
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(updateTimes, []);
  const [selectedDate, setSelectedDate] = useState('');

  console.log("type: " + typeof window.fetchAPI)
  useEffect(() => {
    if (selectedDate && fetchAPI) {
      const availableTimes = fetchAPI(new Date(selectedDate));
      dispatch({ type: "SET_SLOTS", payload: availableTimes });
    } else {
      console.error("fetchAPI is not defined");
    }
  }, [selectedDate]); 
  console.log("date" + selectedDate)

  const handleOptions = (date, time) => {
    dispatch({ type: 'SELECTED', payload: { date, time } });
  };
  const navigate = useNavigate();
  const submitForm = (formData) => {
    console.log("submitting", formData);
      if (submitAPI(formData)) {
       navigate('/booking/confirmation', {state: {formData} })
      } else {
        console.error('Error: Form submission failed');
      }
    };

  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/login" element={<Logginpage />} />
        <Route
          path="/booking"
          element={
            <Bookingpage
              state={state}
              handleOptions={handleOptions}
              setSelectedDate={setSelectedDate}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </>
  );
};

export default Main;
