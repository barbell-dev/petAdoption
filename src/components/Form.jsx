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
          <select></select>
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
