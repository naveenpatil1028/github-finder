import { searchUsers, getUserAndRepos } from "../../api/api";

export const searchUsersData = async (text) => {
  const { items } = await searchUsers(text);
  return items;
};

// export const getUserData = async (login) => {
//   const res = await getUser(login);
//   if (res.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await res.json();
//     return data;
//     // dispatch({ type: "GET_USER", payload: data });
//   }
// };

// export const getUserReposData = async (login) => {
//   const res = await getUserRepos(login);
//   const data = await res.json();
//   return data;
//   //   dispatch({ type: "GET_REPOS", payload: data });
// };

export const getUserAndReposData = async (login) => {
  const user = await getUserAndRepos(login);
  return user;
};
