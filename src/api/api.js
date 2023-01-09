import axios from "axios";
const baseUrl = process.env.REACT_APP_GITHUB_URL;
const auth = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `token ${auth}`,
  },
});

export const fetchUsers = async () => {
  const res = await fetch(`${baseUrl}/users`, {
    headers: {
      Authorization: `token ${auth}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const res = await github.get(`/search/users?${params}`);
  return res.data;
};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};

// export const getUser = async (login) => {
//   const res = await fetch(`${baseUrl}/users/${login}`, {
//     headers: {
//       Authorization: `token ${auth}`,
//     },
//   });

//   return res;
// };

// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });
//   const res = await fetch(`${baseUrl}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${auth}`,
//     },
//   });

//   return res;
// };