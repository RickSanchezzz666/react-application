import React from "react";
import './style.css'

function Input() {
    return(<div className="input-body">
          <div class="input-page">
  <div class="field field_v1">
    <input id="first-name" class="field__input" placeholder="e.g. Roman Lapiyk"></input>
    <span class="field__label-wrap" aria-hidden="true">
      <span class="field__label">Your name</span>
    </span>
  </div>
  <div class="field field_v3">
    <input id="email" class="field__input" placeholder="e.g. example@gmail.com"></input>
    <span class="field__label-wrap" aria-hidden="true">
      <span class="field__label">Your email</span>
    </span>
  </div>
  <div class="field field_v2">
    <input id="last-name"  class="field__input" placeholder="e.g. Hello!"></input>
    <span class="field__label-wrap" aria-hidden="true">
      <span class="field__label">Your message</span>
    </span>
  </div>    
</div>
    </div>
    );
}

export default Input;