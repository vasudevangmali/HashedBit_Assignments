import { useEffect, useState } from "react";
import "./IPLTable.css";

function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => parseFloat(a.NRR) - parseFloat(b.NRR)
        );

        setTeams(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading IPL Points Table...</div>;
  }

  return (
    <div className="table-container">
      <h2>IPL 2022 Points Table</h2>

      <table className="points-table">
        <thead>
          <tr>
            <th>Team</th>
            <th>M</th>
            <th>W</th>
            <th>L</th>
            <th>Pts</th>
            <th>NRR</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team) => (
            <tr key={team.Team}>
              <td className="team">{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td className="points">{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
