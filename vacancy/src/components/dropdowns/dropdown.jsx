import React from "react";
import './dropdown.css'

const Dropdown = () => {
    return(
        <>
        <form>
            <select name="Deadline" id="deadline">
                <option value="18:00">18:00</option>
                <option value="20:00">20:00</option>
                <option value="22:00">22:00</option>
            </select>
        </form>
        </>
    )
}

export default Dropdown;