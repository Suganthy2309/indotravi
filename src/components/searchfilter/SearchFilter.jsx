import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SearchFilter = () =>{
    const [selectedDate, setSelectedDate] = useState(null);
    const [budget, setBudget] = useState("");
    const [guests, setGuests] = useState("");
    const handleDateChange = (date) => setSelectedDate(date);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Selected Date:", selectedDate ? selectedDate.toLocaleDateString() : "Not selected");
      console.log("Budget:", budget || "Not selected");
      console.log("Guests:", guests || "Not selected");
    };

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
<div onClick={onClick} ref={ref} style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}>
    <i className="fa-regular fa-calendar-days"></i>

    <span>{value || "Date"}</span>
    <i className="fa-solid fa-chevron-down"></i>
</div>
));

return(

<div className="search-filter">
<form onSubmit={handleSubmit}>
    <ul className="search-ul">
        <li className="dropdown">
            <button className="dropbtn">

                <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="MM/DD/YYYY"
                    customInput={<CustomInput />}
                />
            </button>
        </li>

        <li className="dropdown">
            <button className="dropbtn"> <i className="fa-regular fa-credit-card"></i>Budget <i
                    className="fa-solid fa-chevron-down"></i></button>
            <div className="dropdown-content">
                <a href="#">$5000 - $10000</a>
                <a href="#">$10000 - $20000</a>
                <a href="#">$20000 - $30000</a>
            </div>
        </li>

        <li className="dropdown">

            <button className="dropbtn">
                <i className="fa-regular fa-user"></i>guests <i className="fa-solid fa-chevron-down"></i>
            </button>

            <div className="dropdown-content">
                <a href="#">Single Person</a>
                <a href="#">Couple</a>
                <a href="#">More than 2</a>
            </div>


        </li>
        <button className="btn search-btn" type="submit">search</button>
    </ul>
    </form>
    
</div>

);
};

export default SearchFilter;