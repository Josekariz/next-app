import { ApiError } from 'next/dist/server/api-utils';
import React from 'react'

// Define a user interface to represent the shape of the data
interface User {
  id: number;
  name: string;
  username: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // Fetch and parse user data from the API, and cast it as an array of User objects

  const users: User[] = await res.json();

  // Now, the 'users' variable contains an array of User objects from the API

  return (
    <>
      <h1>Users</h1>

      <ul>
        {users.map(user => <li key={user.id}>{user.name} also known as {user.username}</li>)}
      </ul>
    </>
  )
}

export default UsersPage

// When the network tab is checked, the data is fetched once instead of the face data being rendered then useeffect being called to get the list of other data from the Api, now that its being rendered from the server only one request is done and that saves data and time