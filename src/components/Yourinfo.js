import React from "react";
import "../style/form.css";

function Yourinfo({
  errors,

  formData,
  setFormData,
  errors,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <div className="sign-up-container" onSubmit={handleSubmit}>
      <div>
        <form className="Sign-up">
          <div className="Top-title">
            <h1>Personal Info </h1>
            <h3>Please provide your name, email address, and phone number.</h3>
          </div>

          <label type="Name"> Name</label>
          {errors.name && <div className="errormessage"> {errors.name} </div>}
          <input
            className="input"
            id="name"
            type="text"
            placeholder="e.g.Stephen King"
            value={formData.name}
            onChange={handleInputChange}
            style={
              errors.name && {
                border: "var(--border-width) solid var(--strawberry-red)",
              }
            }
          ></input>
          <label type="email">Email</label>
          {errors.name && <div className="errormessage"> {errors.name} </div>}
          <input
            id="email"
            className="input"
            type="email"
            placeholder="e.g.Stephenking@lorem.com"
            value={formData.email}
            onChange={handleInputChange}
            style={
              errors.email && {
                border: "var(--border-width) solid var(--strawberry-red)",
              }
            }
          ></input>
          <label htmlFor="tel">Phone Number</label>
          {errors.phone && <div className="errormessage"> {errors.phone} </div>}
          <input
            id="tel"
            className="input"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            style={
              errors.phone && {
                border: "var(--border-width) solid var(--strawberry-red)",
              }
            }
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Yourinfo;
