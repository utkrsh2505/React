import React from "react";
import { useState, useEffect } from "react";
function Todo() {
  const [title, setTitle] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTodos(page);
  }, [page]);

  const getTodos = (page = 1) => {
    setIsLoading(true);
    return fetch(
      `https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=2`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
        console.log(data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addTodos = (title) => {
    const payload = {
      title,
      status: false
    };

    setIsLoading(true);
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return isLoading ? (
    <div>...Loading</div>
  ) : isError ? (
    <div>Something Went Wrong</div>
  ) : (
    <div>
      <div>
        <input
          placeholder="add something"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => addTodos(title)}>Add</button>
      </div>

      <ul>
        {data.map((item) => (
          <li id={item.id}>{`${item.title}-${item.status}`}</li>
        ))}
      </ul>
      <h3>Page : {page}</h3>
      <button onClick={() => setPage(page + 1)}>next</button>
    </div>
  );
}
export default Todo;
