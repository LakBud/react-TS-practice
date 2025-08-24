// interface User = { key: Type, ... } → define object shape
// useState<User>(initial) → typed state
// setUser(prev => ({ ...prev, key: value })) → TS ensures correct property type
// Input handlers: e.target.value is string; convert if needed (e.g., +value for number)

import { useState } from "react";

interface User {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setUser((prevUser) => ({ ...prevUser, name }));
  };

  const updateAge = (age: string) => {
    setUser((prevUser) => ({ ...prevUser, age: +age }));
  };

  const updateEmail = (email: string) => {
    setUser((prevUser) => ({ ...prevUser, email }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form>
        <div>
          <label>Name: {user.name}</label>
          <br />
          <input type="text" placeholder="Name" value={user.name} onChange={(e) => updateName(e.target.value)} />
        </div>
        <div>
          <label>Age: {user.age}</label>
          <br />
          <input
            type="number"
            placeholder="Age"
            value={user.age > 0 ? user.age : ""}
            onChange={(e) => updateAge(e.target.value)}
          />
        </div>
        <div>
          <label>Email: {user.email}</label>
          <br />
          <input type="text" placeholder="Email" value={user.email} onChange={(e) => updateEmail(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
