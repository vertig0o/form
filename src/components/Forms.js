import React, { useState } from "react";
import Yourinfo from "./Yourinfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import "../style/form.css";

function Forms() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    arcade: "",
    advaced: "",
    pro: "",
    onlineservice: "",
    largerstorage: "",
    customizebleprofile: "",
  });
  const FormTitle = ["Personal info ", "Select Plan", "Add-Ons", "Summary"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Yourinfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SelectPlan />;
    } else if (page === 2) {
      return <AddOns />;
    } else {
      return <Summary />;
    }
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="body">{PageDisplay()}</div>
      </div>
      <div className="footer">
        <button
          className="backStep "
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          className="NextStep"
          onClick={() => {
            if (page === FormTitle.length - 1) {
              alert("Form Submitted");
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitle.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Forms;
