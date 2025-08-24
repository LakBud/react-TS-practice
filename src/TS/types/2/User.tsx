// Formula for TS React component:
// 1. type/interface for props: type Name = { key: Type, ... }
// 2. Use FC<PropsType> to type functional components
// 3. Destructure props in parameters: ({ name, age, isStudent })
// 4. Boolean props: use ternary for conditional rendering
// 5. TS ensures correct types at compile-time vs plain JS

// import type { ReactNode } from "react";
import type { FC } from "react";

// interface UserShape {
//   children: ReactNode;
// }

type UserShape = {
  name: string;
  age: number;
  isStudent: boolean;
};

const User: FC<UserShape> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent ? "Student" : "Not a student"}</h1>
    </div>
  );
};

export default User;
