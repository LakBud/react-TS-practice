// interface State = { key: Type } → define form data shape
// useState<State>(initial) → typed state
// handleChange(e: ChangeEvent<HTMLInputElement>) → typed input event
// handleSubmit(e: FormEvent<HTMLFormElement>) → typed form event
// setFormData(prev => ({ ...prev, [name]: value })) → safely update state
// TS checks correct property types & prevents wrong event usage

import { useState, type ChangeEvent, type FormEvent } from "react";

interface ContactFormState {
  name: string;
  email: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
