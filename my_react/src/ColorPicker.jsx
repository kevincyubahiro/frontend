import React, {useState} from "react";

function ColorPicker()
{
    const [color, setColor]=useState("#cccc");
    function HandleColor(event)
    {
        setColor(event.target.value);
    }
    return(
        <div style={{bgColor: color}}>
      <h1>Color</h1>
      <div >
        <p>{color}</p>
        <label>Selected</label>
        <input type="color" value={color} onChange={HandleColor} className="input"/>
      </div>
        </div>
    );
}
export default ColorPicker;