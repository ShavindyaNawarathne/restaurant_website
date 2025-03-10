import { render, screen } from '@testing-library/react';
import Bookingpage from './pages/Booking';

test('renders the BookingForm heading', () => {
  render(<Bookingpage/>);
  const headingElement = screen.getByText(/chicago/i);
  expect(headingElement).toBeInTheDocument();
});
