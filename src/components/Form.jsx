import "./Form.css";
export default function Form() {
  return (
    <div className="form-parent">
      <form className="form">
        <div className="element">
          <label>Pet Name</label>
          <input type="text" />
        </div>
        <div className="element">
          <label>Pet Type</label>
          <select name="petType" id="petType">
            <option disabled selected>
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
