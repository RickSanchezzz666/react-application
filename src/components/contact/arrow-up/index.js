import React from "react";
import './style.css'

function ArrowToTop() {
    return(
        <div className="arrow-cont">
            <div id="arrowAnim">
  <div class="arrowSliding">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay1">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay2">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay3">
    <div class="arrow"></div>
  </div>
</div>
        </div>
    );
}

export default ArrowToTop;