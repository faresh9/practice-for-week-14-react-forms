import { useState } from "react";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" input={name} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" input={email} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input id="phone" type="text" input={phone} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
