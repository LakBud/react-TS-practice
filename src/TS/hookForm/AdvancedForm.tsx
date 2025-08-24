import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const onSubmit: SubmitHandler<FormData> = (data) => {
  console.log(data);
};

const AdvancedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-10 rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600 m-2 p-1">Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mb-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First Name is required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last Name is Required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-0.5">{errors.lastName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid Email Address",
              },
            })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block font-medium mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City is Required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block font-medium mb-1">
            State
          </label>
          <input
            type="text"
            id="state"
            {...register("state", { required: "State is Required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
        </div>

        {/* ZIP */}
        <div>
          <label htmlFor="zip" className="block font-medium mb-1">
            ZIP
          </label>
          <input
            type="text"
            id="zip"
            {...register("zip", { required: "Zip is Required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block font-medium mb-1">
            Country
          </label>
          <input
            type="text"
            id="country"
            {...register("country", { required: "Country is Required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
        </div>

        {/* Complete Location */}
        <div>
          <label htmlFor="completeLocation" className="block font-medium mb-1">
            Complete Location
          </label>
          <input
            type="text"
            id="completeLocation"
            {...register("completeLocation", { required: "Complete Location is Required" })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.completeLocation && <p className="text-red-500 text-sm mt-1">{errors.completeLocation.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdvancedForm;
