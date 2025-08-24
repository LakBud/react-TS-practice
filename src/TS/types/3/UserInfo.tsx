// import type { TypeName } from "./types"
// type Props = { key: Type }
// const Component: React.FC<Props> = ({ key }) => {...}
// Access typed props: user.id, user.name, user.email

import type { Info } from "./types.ts";

type UserInfoProps = {
  user: Info;
};

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;
