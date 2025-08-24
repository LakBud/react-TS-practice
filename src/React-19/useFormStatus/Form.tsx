// React 19 form with an async action (`myAction`).
// When submitted, React passes a FormData object, waits 2s,
// then creates a `newPost` object with the input values.
// `FormButton` is likely a custom submit button.

import FormButton from "./FormButton";

const Form = () => {
  const myAction = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newPost = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
  };

  return (
    <form action={myAction}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" className="border-2" id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="email">email: </label>
        <input type="email" className="border-2" id="email" name="email" required />
      </div>

      <div>
        <label htmlFor="password">password: </label>
        <input type="password" className="border-2" id="password" name="password" required />
      </div>

      <FormButton />
    </form>
  );
};

export default Form;
