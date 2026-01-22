import React from "react";
import van from "../../../van.svg";
import arrow from "../../../arrow.svg";

const Prompt = (props) => {
  if (props.displayModal) {
    return null;
  }

  const svgDate = props.input.Day;

  return (
    <>
      <div className="closed-state">
        <div className="delivery-day">
          <div className="header">
            <h1>Choose your delivery day</h1>
            <p className="free">Delivery is always free</p>
          </div>

          <div className="confirmed-day">
            <div className="selected-day">
              <p>{props.input.DateString}</p>
              <div className="van-div">
                <img className="van" src={van} width="20" alt="Delivery van" />
                <p>Earliest delivery</p>
              </div>
            </div>

            <button
              onClick={() => props.setDisplayModal(true)}
              className="change-day"
            >
              <svg width="30" height="34" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.786 4.25H23.57V.797A.8.8 0 0022.768 0h-.536a.8.8 0 00-.803.797V4.25H8.57V.797A.8.8 0
                   007.768 0h-.536a.8.8 0 00-.803.797V4.25H3.214C1.44 4.25 0 5.677 0 7.438v23.375C0 32.572 1.44 34 3.214
                    34h23.572C28.56 34 30 32.573 30 30.812V7.438c0-1.76-1.44-3.187-3.214-3.187zM3.214 6.375h23.572c.59 0
                     1.071.477 1.071 1.063v3.187H2.143V7.437c0-.585.48-1.062 1.071-1.062zm23.572 25.5H3.214c-.59 0-1.071-.
                     477-1.071-1.063V12.75h25.714v18.063c0 .585-.48 1.062-1.071 1.062z"
                  fill="#fff"
                  stroke="white"
                  fill-rule="nonzero"
                />
                <text x="6" y="28" fill="#1e5d84">
                  {svgDate}
                </text>
              </svg>
              <div className="change-link">
                <p>
                  <u>Change</u>
                </p>
                <img src={arrow} width="10" alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prompt;
