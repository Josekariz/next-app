import { ApiError } from 'next/dist/server/api-utils';
import React from 'react'

// Define a user interface to represent the shape of the data
interface User {
  id: number;
  name: string;
  username: string;
}

const UsersPage = async () => {
  //caching behavouir is only implimented in the fetch function ONLY.
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {
      cache: 'no-store' 
      //doesnt keep the cache as default
      //next: {revalidate: s} runs a background job every s seconds 

    });

  // Fetch and parse user data from the API, and cast it as an array of User objects

  const users: User[] = await res.json();

  // Now, the 'users' variable contains an array of User objects from the API

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>

      <ul>
        {users.map(user => <li key={user.id}>{user.name} also known as {user.username}</li>)}
      </ul>
    </>
  )
}

export default UsersPage

// When the network tab is checked, the data is fetched once instead of the face data being rendered then useeffect being called to get the list of other data from the Api, now that its being rendered from the server only one request is done and that saves data and time

//When cache is disabled the page when built at production time will not be static, it changes but on default if the data is static then it never changes.