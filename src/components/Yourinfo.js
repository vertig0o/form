import React from "react";
import "../style/form.css";

function Yourinfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <form className="Sign-up">
        <div className="Top-title">
          <h1>Personal Info </h1>
          <h3>Please provide your name, email address, and phone number.</h3>
        </div>

        <label type="Name"> Name</label>
        <input
          className="input"
          type="text"
          {...formData.name}
          placeholder="e.g.Stephen King"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        ></input>
        <label type="email">Email</label>
        <input
          className="input"
          type="email"
          placeholder="e.g.Stephenking@lorem.com"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        ></input>
        <label htmlFor="tel">Phone Number</label>
        <input
          className="input"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          value={formData.phoneNumber}
          onChange={(event) =>
            setFormData({ ...formData, phoneNumber: event.target.value })
          }
        ></input>
      </form>
    </div>
  );
}

export default Yourinfo;
