// type AdminInfoList = BaseType & { extraKey: Type } → extend existing type
// Component props: ({ key, ... }: AdminInfoList) → typed destructuring
// TS ensures all props exist and match their types

import { type Info } from "./UserInfo";

type AdminInfoList = Info & {
  admin: string;
};

const AdminInfo = ({ username, email, age, location, admin }: AdminInfoList) => {
  return (
    <div>
      <ul>
        <li>Username: {username}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>Admin: {admin}</li>
      </ul>
    </div>
  );
};

export default AdminInfo;
