import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { GoArrowUp } from "react-icons/go";
import axios from "axios";

const Contact = () => {
  const [alert, setAlert] = useState("");
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const { name, subject, email, message } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subject.trim() === "" || email.trim() === "" || message.trim() === "") {
      setError(true);
      setAlert("Please fill in all the required field");
    } else {
      const res = await axios.post("/email", formData);
      setError(false);
      setAlert(res.data.message);
      setFormData({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
    }
    setTimeout(() => setAlert(""), 3000);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id='contact' className='s2'>
      <div className='main-container'>
        <h3 style={{ textAlign: "center", margin: "1.5rem auto" }}>
          Get In Touch
        </h3>

        <form id='contact-form' onSubmit={handleSubmit}>
          {alert && (
            <div className={error ? "alert danger" : "alert success"}>
              {alert}
            </div>
          )}
          <label>Name</label>
          <input
            value={name}
            className='input-field'
            type='text'
            name='name'
            onChange={onChange}
          />

          <label>Subject (Required)</label>
          <input
            value={subject}
            className='input-field'
            type='text'
            name='subject'
            onChange={onChange}
          />

          <label>Email (Required)</label>
          <input
            value={email}
            className='input-field'
            type='text'
            name='email'
            onChange={onChange}
          />

          <label>Message (Required)</label>
          <textarea
            value={message}
            className='input-field'
            name='message'
            onChange={onChange}
          ></textarea>

          <input id='submit-btn' type='submit' value='Send' />
        </form>
      </div>
      <div onClick={() => scroll.scrollToTop()} className='top'>
        <GoArrowUp />
      </div>
    </section>
  );
};

export default Contact;
