import React from "react";

import "../style/form.css";
const items = [
  {
    id: "step1",
    number: 1,
    subtitle: "Step 1",
    title: "Your Info",
  },
  {
    id: "step2",
    number: 2,
    subtitle: "Step 2",
    title: "Select Plan",
  },
  {
    id: "step3",
    number: 3,
    subtitle: "Step 3",
    title: "Add-Ons",
  },
  {
    id: "step4",
    number: 4,
    subtitle: "Step 4",
    title: "Summary",
  },
];
function Step() {
  return (
    <div className="Sidebar">
      {items.map((item) => (
        <item key={item.id}>
          <span className="number"> {item.number}</span>
          <h5 className="subtitle">{item.subtitle}</h5>
          <h2 className="title">{item.title} </h2>
        </item>
      ))}
    </div>
  );
}

export default Step;
