// type Info = { key: Type, ... } → define prop shape
// Component props: ({ key, ... }: Info) → typed destructuring
// TS ensures all props exist and match their types

export type Info = {
  username: string;
  email: string;
  age: number;
  location: string[];
};

const UserInfo = ({ username, email, age, location }: Info) => {
  return (
    <ul>
      <li>Username: {username}</li>
      <li>Email: {email}</li>
      <li>Age: {age}</li>
      <li>{JSON.stringify(location)}</li>
    </ul>
  );
};

export default UserInfo;
