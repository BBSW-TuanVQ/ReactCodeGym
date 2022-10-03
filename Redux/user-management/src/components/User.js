import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

function User() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUsersInfo = () => {
    dispatch({ type: "GET_USER", payload: {} });
  };

  const handleDeleteUser = (id) => () => {
    dispatch({type: "DELETE_USER", payload: {id: id}})
  };

  console.log(users)
  return (
    <>
      <h1>User list</h1>
      <button onClick={getUsersInfo}>Get users</button>
      {users.length > 1 && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={handleDeleteUser(user.id)}>Delete user</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default User;
