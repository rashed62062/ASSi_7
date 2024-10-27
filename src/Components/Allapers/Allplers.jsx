import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('./FakeData.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.error("Error fetching players:", error));
  }, []);

  console.log(players);

  return (
    <div className="grid grid-cols-3 gap-2 mt-30">
      
      {players.map((player) => (
        <SinglePlayer key={player.name} player={player} />
      ))}
    </div>
  );
}
