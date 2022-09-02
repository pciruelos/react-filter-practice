import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([""]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    }
    fetchdata();
  }, []);

  const handleChange = (e) => {
    const res = e.target.value;
    setSearch(res);
    console.log(search);
  };

  return (
    <div>
      <h1>filters with React</h1>
      <input
        type="text"
        placeholder="Search"
        className=""
        onChange={handleChange}
      />
      <ul className="">
        {users
          .filter((user) => {
            return search.toLowerCase() === ""
              ? user
              : `${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}`.includes(search);
          })
          .map((u, i) => (
            <li key={i}>
              
              {u.firstName} {u.lastName}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
