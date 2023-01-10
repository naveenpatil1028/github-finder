import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

import { searchUsersData } from "../../context/github/GithubActions";
const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_ISLOADING" });
      const users = await searchUsersData(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8 items-center">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={(e) => handleChange(e)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users && users.length > 0 && (
          <button
            className="btn btn-ghost btn-large"
            onClick={() => {
              setText("");
              dispatch({ type: "CLEAR_USERS" });
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
