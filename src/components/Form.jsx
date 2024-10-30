import { useNavigate } from "react-router-dom";
import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [typing, setTyping] = useState(false);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    // alert("submitted");
    navigate("/details");
    // history.push("/details");
  }
  function handleInput(event) {
    // console.log(event.target);
    // alert(event.target.value);
    // console.log(event.target.value);
    if (event.target.id == "petName") {
      if (event.target.value.length < 3) {
        setTyping((value) => true);
      } else {
        setTyping((value) => false);
      }
    } else if (event.target.id == "name") {
      if (event.target.value.length < 3) {
      }
    }
  }
  return (
    <div className="form-parent">
      <form className="form" onSubmit={handleSubmit}>
        <div className="element">
          <label>Pet Name</label>
          <input
            type="text"
            placeholder="Enter pet name"
            id="petName"
            onChange={handleInput}
          />
          {typing && <p>Name should have at least 3 characters</p>}
        </div>
        <div className="element">
          <label>Pet Type</label>
          <select
            name="petType"
            id="petType"
            defaultValue={"select"}
            onChange={handleInput}
          >
            <option disabled value={"select"}>
              {" "}
              -- select a pet type --{" "}
            </option>
            <option value={"Dog"}>{"Dog"}</option>
            <option value={"Cat"}>{"Cat"}</option>
            <option value={"Bird"}>{"Bird"}</option>
          </select>
        </div>
        <div className="element">
          <label>Breed</label>
          <input
            type="text"
            id="petBreed"
            placeholder="Enter a breed"
            onChange={handleInput}
          />
        </div>
        <div className="element">
          <label>Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={handleInput}
          />
        </div>
        <div className="element">
          <label>Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            onChange={handleInput}
          />
        </div>
        <div className="element">
          <label>Phone</label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Ex: +91xxxxxxxxxx"
            onChange={handleInput}
          />
        </div>
        <button type="submit" style={{ width: "37%" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
