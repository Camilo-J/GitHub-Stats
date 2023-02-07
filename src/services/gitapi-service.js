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

export function getRepos(url, page) {
  return fetch(url + `?per_page=7&page=${page}`).then((response) =>
    response.json()
  );
}

export function getGitProfileFollowers(user, page) {
  return fetch(BASE_URI + user + `/followers?per_page=7&page=${page}`).then(
    (response) => response.json()
  );
}

// '/followers?per_page=63'

export function getGitProfileFollowings(user, page) {
  return fetch(BASE_URI + user + `/following?per_page=7&page=${page}`).then(
    (response) => response.json()
  );
}
