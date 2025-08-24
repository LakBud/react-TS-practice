// Formula for TS React component with typed object props:
// 1. import type { TypeName } from "./types" → bring in type definitions
// 2. Define props type: type Props = { key: Type, ... }
// 3. Use React.FC<Props> for the functional component
// 4. Destructure props: ({ admin })
// 5. Access typed object properties: admin.id, admin.name, etc.
// 6. For dates: TS knows lastLogin is Date, so you can call toLocaleString()
// 7. TS prevents passing wrong type or missing props

import type { AdminInfoList } from "./types.ts";

type AdminInfoProps = {
  admin: AdminInfoList;
};

const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>ID: {admin.id}</p>
      <p>Name: {admin.name}</p>
      <p>Email: {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Last Login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;
