import React from "react";

function ForgotPass() {
  return (
    <div>
      <div
        className="w3-container w3-content"
        style={{ maxWidth: "1400px", marginTop: "80px" }}
      >
        <div className="w3-row">
          <div className="w3-col m12">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container" style={{ height: "30vh" }}>
                <form>
                  <h4>Please Enter Your Email...</h4>
                  <input
                    type="email"
                    placeholder="Enter your registered Email"
                  ></input>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPass;
