import React from "react";
import "../style/form.css";
function Summary() {
  return (
    <div class="stp step-4">
      <div class="header">
        <h1 class="title">Finishing up</h1>
        <p class="exp">Double-check everything looks OK before confirming.</p>
      </div>
      <div class="selection-box">
        <div class="selection-container">
          <div class="selected-plan">
            <p class="plan-name">Arcade(Monthly)</p>
            <p class="plan-price">$9/mo</p>
          </div>
          <hr />
          <div class="addons">
            <template>
              <div class="selected-addon">
                <span class="service-name">Online serivice</span>
                <span class="servic-price">+$1/mo</span>
              </div>
            </template>
          </div>
        </div>
        <p class="total">
          Total (per month) <b>+$12/mo</b>
        </p>
      </div>
    </div>
  );
}

export default Summary;
