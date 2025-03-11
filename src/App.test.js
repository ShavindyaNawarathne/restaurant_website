import { render, screen } from "@testing-library/react";
import { useEffect } from "react";

const mockFunc = jest.fn();

// Mock fetchAPI function
const mockFetchAPI = jest.fn()
  .mockReturnValueOnce(["10:00 AM", "11:00 AM"]) 
  .mockReturnValueOnce(["12:00 PM", "1:00 PM"]); 

const TestComponent = ({ selectedDate }) => {
  useEffect(() => {
    if (selectedDate && mockFetchAPI) {
      const availableTimes = mockFetchAPI(new Date(selectedDate));
      mockFunc({ type: "SET_SLOTS", payload: availableTimes });
    } else {
      console.error("fetchAPI is not defined");
    }
  }, [selectedDate]);

  return <div>Test Component</div>;
};

describe("useEffect API call testing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetchAPI should return different values on different calls", () => {
    render(<TestComponent selectedDate="2025-03-12" />);
    
    expect(mockFetchAPI).toHaveBeenCalledTimes(1);
    expect(mockFetchAPI).toHaveBeenCalledWith(new Date("2025-03-12"));
    expect(mockFunc).toHaveBeenCalledWith({ type: "SET_SLOTS", payload: ["10:00 AM", "11:00 AM"] });

    render(<TestComponent selectedDate="2025-03-13" />);
    
    expect(mockFetchAPI).toHaveBeenCalledTimes(2);
    expect(mockFetchAPI).toHaveBeenCalledWith(new Date("2025-03-13"));
    expect(mockFunc).toHaveBeenCalledWith({ type: "SET_SLOTS", payload: ["12:00 PM", "1:00 PM"] });
  });

  test("should log an error when fetchAPI is missing", () => {
    console.error = jest.fn(); 

    render(<TestComponent selectedDate={null} />);

    expect(console.error).toHaveBeenCalledWith("fetchAPI is not defined");
  });
});
