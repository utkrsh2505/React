import axios from "axios";
function fetchUsers(query) {
  if (!query) {
    return Promise.reject("Query should be provided");
  }
  return axios.get("https://api.github.com/search/users", {
    params: {
      q: query
    }
  });
}
export { fetchUsers };
