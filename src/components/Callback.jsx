import { useState, useCallback } from "react";
import { shuffle } from "lodash";
import Search from "./components/Search";

const allUsers = [
  "Eduar",
  "John",
  "Maria",
  "Juana",
  "Mateo",
  "Ezequiel",
  "Juan",
  "Lucas",
];

export default function App() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  }, []);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setUsers(shuffle(users));
          }}
        >
          Shuffle
        </button>
        <Search handleSearch={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
