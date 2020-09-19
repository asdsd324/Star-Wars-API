import React, { useState, memo } from "react";

function SearchBar(props) {
    const [textBoxValue, setTextBoxValue] = useState("");

    const pressedSubmit = e => {
        e.preventDefault();
        props.handleSearch(textBoxValue);
        setTextBoxValue("");
    };

    function handleChange(e) {
        const { value } = e.target;
        setTextBoxValue(value);
    }

    return (
        <form onSubmit={pressedSubmit}>
            <button className="btn btn-warning col-1">Search Characters</button>
            <input
                onChange={e => handleChange(e)}
                className="col-sm-5 margin-top altFont"
                type="text"
                placeholder="Help me, Obi-Wan Kenobi. You’re my only hope."
                value={textBoxValue}
            />
        </form>
    );
}

export default memo(SearchBar);
