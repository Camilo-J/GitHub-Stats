const BASE_URI = "https://api.github.com/users/";

<<<<<<< HEAD
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

=======
export function getGitProfile(query) {
  console.log(BASE_URI + query)
  return fetch(BASE_URI + query).then((response) => response.json());
}

export function getGitProfileFollowers(user) {
  console.log(BASE_URI + user)
  return fetch(BASE_URI + user + '/followers').then((response) => response.json());
}
>>>>>>> b9f7e47 (WIP: add a provissional profile page, including a button which render the Folllowers Page without any style)
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
