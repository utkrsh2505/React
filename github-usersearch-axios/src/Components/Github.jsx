import React from "react";
import { fetchUsers } from "./fetchUsers";
const Github = () => {
  const [query, setQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const handleSearch = () => {
    setIsLoading(true);
    setIsError(false);
    fetchUsers(query)
      .then((res) => {
        console.log(res.data.items);
        setUsers(res.data.items);

        console.log(users);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <h1>Github</h1>
      <div>
        <input
          type="text"
          value={query}
          placeholder="Type"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button disabled={isLoading} onClick={handleSearch}>
          {isLoading ? "Loading" : "Search"}
        </button>
      </div>
      <div>
        {users.map((item) => (
          <div
            style={{ border: "1px solid black", margin: "10px" }}
            key={item.id}
          >
            {item.login}
          </div>
        ))}
      </div>
    </>
  );
};
export { Github };
