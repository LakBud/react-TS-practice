// type FormData = { key: Type } → define form shape
// useState<FormData>(initial) → typed state
// useRef<HTMLInputElement>(null) → typed input refs
// handleSubmit(e: FormEvent<HTMLFormElement>) → typed form event
// name.current!.value → non-null assertion to access value safely
// setSubmittedData({...}) → TS ensures correct property types

import { useRef, useState, type FormEvent } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" ref={name} />
        <input type="text" placeholder="Enter your email" ref={email} />
        <input type="text" placeholder="Enter your password" ref={password} />
        <button type="submit">Submit</button>

        <section>
          <h1>Name: {submittedData.name}</h1>
          <h1>Email: {submittedData.email}</h1>
          <h1>Password: {submittedData.password}</h1>
        </section>
      </form>
    </>
  );
};

export default Form;
