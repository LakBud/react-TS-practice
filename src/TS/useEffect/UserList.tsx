// type User = { key: Type, ... } → define API data shape
// useState<Type[]>([]) → typed array state
// useState<Type | null>(null) → nullable state
// useEffect(() => {...}, []) → fetch data on mount
// setUsers(result: User[]) → TS ensures correct type
// Handle loading/error with boolean/string | null types
// Access typed array properties: user.id, user.name, etc.

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Network Response was not ok");
        const result: User[] = await res.json();
        setUsers(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An Error occured");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Name:</th>
            <th>Username:</th>
            <th>Email:</th>
            <th>Phone:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
