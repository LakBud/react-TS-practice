// Formula for TS types & extending:
// 1. type Name = { key: Type; ... } → define object shape
// 2. Extend type: NewType = BaseType & { extraKey: Type; ... }
// 3. Export types with: export { type Name, type AnotherName }
// 4. TS ensures correct property types & prevents missing keys

type Info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoList = Info & {
  role: string;
  lastLogin: Date;
};

export { type Info, type AdminInfoList };
