const BASE_URI = "https://api.github.com/users/";

export async function getGitProfile(query) {
  let response = await fetch(BASE_URI + query);

  let data;

  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.message);
  }

  data = await response.json();

  return data;
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
