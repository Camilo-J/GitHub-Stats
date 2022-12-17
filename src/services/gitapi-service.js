const BASE_URI = "https://api.github.com/users/";

<<<<<<< HEAD
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
=======

>>>>>>> aa6b3f4 (ADD: the correct img for the followers and followings, increment the view per page of the followers and followings)
export function getGitProfile(query) {
  console.log(BASE_URI + query)
  return fetch(BASE_URI + query).then((response) => response.json());
}

export function getGitProfileFollowers(user) {
  console.log(BASE_URI + user)
  return fetch(BASE_URI + user + '/followers?per_page=100').then((response) => response.json());
}
<<<<<<< HEAD
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
=======
// '/followers?per_page=63'

export function getGitProfileFollowing(user) {
  console.log(BASE_URI + user)
  return fetch(BASE_URI + user + '/following?per_page=100').then((response) => response.json());
}

>>>>>>> aa6b3f4 (ADD: the correct img for the followers and followings, increment the view per page of the followers and followings)
