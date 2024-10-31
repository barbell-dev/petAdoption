import { useLocation, useNavigate } from "react-router-dom";
import "./Details.css";

export default function Details() {
  const location = useLocation();
  const data = location.state;
  // const data = JSON.parse(sessionStorage.getItem("data"));
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table className="details">
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Your Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.petName}</td>
              <td>{entry.petType}</td>
              <td>{entry.petBreed}</td>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.phoneNumber}</td>
            </tr>
          ))}
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
        </tbody>
      </table>
    </div>
  );
}
