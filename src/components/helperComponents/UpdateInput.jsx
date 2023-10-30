
import React from "react";
import "../../assets/css/updateInput.css";

function UpdateInput({ data, val, updateData, setUpdatedData }) {
  // Defining a local state to manage the input value
  const [inputValue, setInputValue] = React.useState(data);


const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  
    if (val === "is_live") {
      // Handling the is_live update separately
      if(newValue==""){
        return
      }
      if (newValue === "true") {
        setUpdatedData({ ...updateData, is_live: true });
      } else {
        setUpdatedData({ ...updateData, is_live: false });
      }
    } else {
      // For other fields, updating them as usual
      setUpdatedData({ ...updateData, [val]: newValue });
    }
  };
  
  return (
    <div className="updateInput">
      <p className="updateKey">{val} </p>

      {val === "is_live" ? (
        <select className="dropdown" value={inputValue} onChange={handleInputChange}>
          <option value="false">false</option>
          <option value="true">true</option>
        </select>
      ) : (
        <input
          type={val==="space_available"?"number":"text"}
          name="fieldValue"
          value={inputValue}
          style={{ margin: ".5rem" }}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
}

export default UpdateInput;
