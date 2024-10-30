import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    // alert("submitted");
    navigate("/details");
    // history.push("/details");
  }
  return (
    <div className="form-parent">
      <form className="form" onSubmit={handleSubmit}>
        <div className="element">
          <label>Pet Name</label>
          <input type="text" />
        </div>
        <div className="element">
          <label>Pet Type</label>
          <select name="petType" id="petType" defaultValue={"select"}>
            <option disabled value={"select"}>
              {" "}
              -- select an option --{" "}
            </option>
            <option value={"Shih Tzu"}>{"Shih Tzu"}</option>
            <option value={"German Shepherd"}>{"German Shepherd"}</option>
            <option value={"St. Bernard"}>{"St. Bernard"}</option>
          </select>
        </div>
        <div className="element">
          <label>Breed</label>
          <input />
        </div>
        <div className="element">
          <label>Your Name</label>
          <input />
        </div>
        <div className="element">
          <label>Email</label>
          <input />
        </div>
        <div className="element">
          <label>Phone</label>
          <input />
        </div>
        <button type="submit" style={{ width: "37%" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
