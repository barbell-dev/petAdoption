import { Link, replace, useNavigate } from "react-router-dom";
import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [typingPetName, setTypingPetName] = useState(false);
  const [typingPetBreed, setTypingPetBreed] = useState(false);
  const [typingName, setTypingName] = useState(false);
  const [typingEmail, setTypingEmail] = useState(false);
  const [typingPhoneNumber, setTypingPhoneNumber] = useState(false);
  const [petType, setPetType] = useState(false);
  const navigate = useNavigate();
  // const [overallData, setOverallData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // alert(event.target[0]);
    // alert("submitted");
    // console.log(event.target.map(i, () => console.log(i)));
    // console.log(event.target[1].value);
    if (event.target[0].value.length < 3) {
      alert("Pet name should be minimum 3 characters long.");
      return;
    } else if (event.target[1].value == "select") {
      alert("Please select a valid pet type");
      return;
    } else if (event.target[2].value.length < 5) {
      alert("Pet breed name should be minimum 5 characters long.");
      return;
    } else if (event.target[3].value.length < 3) {
      alert("Your name should be minimum 3 characters long.");
      return;
    } else if (event.target[4].value.length < 11) {
      alert("Your email should be minimum 11 characters long.");
      return;
    } else if (event.target[5].value.length < 12) {
      alert("Your phone number should be minimum 12 characters long.");
      return;
    }
    const newData = {
      petName: event.target[0].value,
      petType: event.target[1].value,
      petBreed: event.target[2].value,
      name: event.target[3].value,
      email: event.target[4].value,
      phoneNumber: event.target[5].value,
    };
    let existingData = JSON.parse(sessionStorage.getItem("data"));
    if (existingData == undefined) {
      existingData = [];
    }
    existingData.push(newData);
    sessionStorage.setItem("data", JSON.stringify(existingData));
    console.log(existingData);
    // console.log(overallData);
    navigate("/details", { replace: true, state: existingData });
    // <Link></Link>
  }
  function handleInput(event) {
    // alert(event.target.value);
    // console.log(event.target.value);
    if (event.target.id == "petName") {
      if (event.target.value.length < 3) {
        setTypingPetName((value) => true);
      } else {
        setTypingPetName((value) => false);
      }
    } else if (event.target.id == "name") {
      if (event.target.value.length < 3) {
        setTypingName((value) => true);
      } else {
        setTypingName((value) => false);
      }
    } else if (event.target.id == "petType") {
      if (event.target.value == "select") {
        setPetType((value) => true);
      } else {
        setPetType((value) => false);
      }
    } else if (event.target.id == "petBreed") {
      if (event.target.value.length < 5) {
        setTypingPetBreed((value) => true);
      } else {
        setTypingPetBreed((value) => false);
      }
    } else if (event.target.id == "email") {
      if (event.target.value.length < 11) {
        setTypingEmail((value) => true);
      } else {
        setTypingEmail((value) => false);
      }
    } else if (event.target.id == "phoneNumber") {
      if (event.target.value.length < 12) {
        setTypingPhoneNumber((value) => true);
      } else {
        setTypingPhoneNumber((value) => false);
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
            onFocus={handleInput}
            onChange={handleInput}
          />
          {typingPetName && <p>Pet name should have at least 3 characters</p>}
        </div>
        <div className="element">
          <label>Pet Type</label>
          <select
            name="petType"
            id="petType"
            defaultValue={"select"}
            onChange={handleInput}
            onFocus={handleInput}
          >
            <option disabled value={"select"}>
              {" "}
              -- select a pet type --{" "}
            </option>
            <option value={"Dog"}>{"Dog"}</option>
            <option value={"Cat"}>{"Cat"}</option>
            <option value={"Bird"}>{"Bird"}</option>
          </select>
          {petType && <p style={{ color: "red" }}>Select a valid pet type</p>}
        </div>
        <div className="element">
          <label>Breed</label>
          <input
            type="text"
            id="petBreed"
            placeholder="Enter a breed"
            onChange={handleInput}
            onFocus={handleInput}
          />
          {typingPetBreed && (
            <p style={{ color: "red" }}>
              Breed should have at least 5 characters
            </p>
          )}
        </div>
        <div className="element">
          <label>Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={handleInput}
            onFocus={handleInput}
          />

          {typingName && (
            <p style={{ color: "red" }}>
              Your name should have at least 3 characters
            </p>
          )}
        </div>
        <div className="element">
          <label>Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            onChange={handleInput}
            onFocus={handleInput}
          />

          {typingEmail && (
            <p style={{ color: "red" }}>
              Your email should have at least 11 characters
            </p>
          )}
        </div>
        <div className="element">
          <label>Phone</label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Ex: +91xxxxxxxxxx"
            onChange={handleInput}
            onFocus={handleInput}
          />
        </div>

        {typingPhoneNumber && (
          <p style={{ color: "red" }}>
            Your phone number should have at least 12 digits `(including country
            code)`
          </p>
        )}
        <button type="submit" style={{ width: "37%" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
