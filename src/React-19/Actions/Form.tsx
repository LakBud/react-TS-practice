// React 19 form using `action` instead of onSubmit.
// `formAction` automatically gets a FormData object,
// extracts values (name, email, password), and logs them.

const Form = () => {
  const formAction = (formData: FormData) => {
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(userData);
  };

  return (
    <form action={formAction}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <br />

      <label htmlFor="email">email</label>
      <input type="email" id="email" name="email" />

      <br />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
