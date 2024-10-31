import { useLocation } from "react-router-dom";
import "./Details.css";

export default function Details() {
  const location = useLocation();
  const data = location.state?.overallData || [];

  return (
    <div className="details">
      <table>
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
        </tbody>
      </table>
    </div>
  );
}
