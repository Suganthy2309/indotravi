import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SearchFilter = () =>{

const[selectedDate,setSelectedDate] = useState(null);
const handleDateChange = (Date) =>
setSelectedDate(Date);

// Custom Input Component
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
    <ul className="search-ul">
        <li className="dropdown">

            <button className="dropbtn">

                <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="MM/DD/YYYY"
                    customInput={<CustomInput />}
                />
            </button>


        </li>

        <li className="dropdown">
            <button className="dropbtn"> <i className="fa-regular fa-credit-card"></i>budjet <i
                    className="fa-solid fa-chevron-down"></i></button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </li>

        <li className="dropdown">

            <button className="dropbtn">
                <i className="fa-regular fa-user"></i>guests <i className="fa-solid fa-chevron-down"></i>
            </button>

            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>


        </li>
        <button className="btn search-btn">search</button>
    </ul>
    
</div>

);
};

export default SearchFilter;