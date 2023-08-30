import React from "react";
import "../style/form.css";
function AddOns() {
  return (
    <div>
      <div class="stp step-3">
        <div class="header">
          <h1 class="title">Pick add-ons</h1>
          <p class="exp">Add-ons help enhance your gaming experience.</p>
        </div>
        <form>
          <div class="box" data-id="1">
            <input type="checkbox" id="online" />
            <div class="description">
              <label for="online">Online service</label>
              <small>Access to multiplayer games</small>
            </div>
            <p class="price">+$1/mo</p>
          </div>
          <div class="box" data-id="2">
            <input type="checkbox" id="larger" />
            <div class="description">
              <label for="larger">Larger storage</label>
              <small>Extra 1TB of cloud save</small>
            </div>
            <p class="price">+$2/mo</p>
          </div>
          <div class="box" data-id="3">
            <input type="checkbox" id="profile" />
            <div class="description">
              <label for="profile">Customizable Profile</label>
              <small>Custom theme on your profile</small>
            </div>
            <p class="price">+$2/mo</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddOns;
