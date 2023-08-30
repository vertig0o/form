import React from "react";
import "../style/form.css";
import ArcadeIcon from "../images/icon-arcade.svg";
import AdvancedIcon from "../images/icon-advanced.svg";

import ProIcon from "../images/icon-pro.svg";

function SelectPlan() {
  return (
    <div>
      <form className="Step2">
        <div className="plan-card selected">
          <img src={ArcadeIcon} alt="ardese" />
          <div className="plan-info chosen">
            <b>Arcade</b>
            <span className="plan-priced">$9/mo</span>
          </div>
        </div>
        <div className="plan-card">
          <img src={AdvancedIcon} alt="arcade" />
          <div className="plan-info">
            <b>Advanced</b>
            <span className="plan-priced">$12/mo</span>
          </div>
        </div>
        <div className="plan-card">
          <img src={ProIcon} alt="ache" />
          <div className="plan-info">
            <b>Pro</b>
            <span className="plan-priced">$15/mo</span>
          </div>
        </div>
      </form>

      <div class="switcher">
        <p class="monthly sw-active">Monthly</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p class="yearly">Yearly</p>
      </div>
    </div>
  );
}
export default SelectPlan;
