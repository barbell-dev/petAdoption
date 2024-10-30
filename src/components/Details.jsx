import { useLocation } from "react-router-dom";
import "./Details.css";
export default function Details() {
  const location = useLocation();
  console.log(location.state.data);
  const data = [];
  for (let i = 0; i < Object.keys(location.state.data).length; i++) {
    data.push(location.state.data[i]);
  }
  console.log(data);
  return (
    <div className="details">
      <table>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Your name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map((element, i) => {
              return <td key={i}>{element}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
