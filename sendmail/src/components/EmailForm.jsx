import { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Your Emailjs derviceId, templateId and publicKey
    const service_id = "service_ua6u6se";
    const template_id = "template_varu37d";
    const publicKey = "qdmywAAJChtfXzGip";

    //Create a new object that containe dynamic template params
    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: "Anoud",
      message: message,
    };
    // sending the email using Emailjs
    emailjs
      .send(service_id, template_id, templateParams, publicKey)
      .then(() => {
        alert(
          "Thank you for reaching out! Your message has been received. I will get back to you shortly."
        );
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email", error);
        alert("Something went wrong");
      });
  };

  return (
    <div className="flex rounded-2xl p-8">
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2">
        <label className="flex flex-col ">
          <span className="text-white font-medium ">Your Name</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-4 px-6 placeholder:text-secondary text-white rounded-lg 
               outline-none border-none font-medium "
        />
        <label className="flex flex-col">
          <span className="text-white font-medium ">Email</span>
        </label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-4 px-6 placeholder:text-secondary text-white rounded-lg 
               outline-none border-none font-medium "
        />
        <label className="flex flex-col">
          <span className="text-white font-medium ">Message</span>
        </label>
        <textarea
          placeholder="Write your message here..."
          cols={30}
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="py-4 px-6 placeholder:text-secondary text-white rounded-lg 
               outline-none border-none font-medium "
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default EmailForm;
