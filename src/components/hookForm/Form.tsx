import { useForm, type SubmitHandler } from "react-hook-form";

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  // useForm hook gives us tools to manage form state, validation, and submission
  const {
    register, // Used to "register" an input field with React Hook Form. Connects the input to form state.
    handleSubmit, // Function that wraps your onSubmit handler to handle validation and submission automatically.
    formState: { errors, isSubmitting }, // errors: stores validation errors for each input
    // isSubmitting: true while the form is being submitted
  } = useForm<FormData>();

  // Function that runs when the form passes validation and is submitted
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Here you could send the data to a backend or perform other actions
  };

  return (
    // Wrap the form with handleSubmit so validation is applied before calling onSubmit
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          // Connect the input to RHF and add validation rule
          {...register("name", { required: "Name is required" })}
        />
        {/* Display validation error if the user didn't fill this field */}
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          {...register("email", {
            required: "Email is required", // field must not be empty
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // basic email pattern
              message: "Invalid Email Address", // error message if pattern doesn't match
            },
          })}
        />
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && <p className="text-red-400">{errors.password.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        {/* isSubmitting disables button while form is submitting */}
        <button disabled={isSubmitting}>{isSubmitting ? "Loading..." : "Submit"}</button>
      </div>
    </form>
  );
};

export default Form;
