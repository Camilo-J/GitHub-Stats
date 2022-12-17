const BASE_URI = "https://api.github.com/users/";

export function getGitProfile(query) {
  return fetch(BASE_URI + query).then((response) => response.json());
}

export function getRepos(url) {
  return fetch(url).then((response) => response.json());
}

// useEffect(() => {
//   setLoading(true);
//   setError(false);
//   fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
//     .then((response) => response.json())
//     .then((data) => {
//       setLoading(false);
//       setBooks(data.items);
//     })
//     .catch((error) => {
//       setBooks([]);
//       setLoading(false);
//       setError(error.message);
//     });
// }, [query]);
