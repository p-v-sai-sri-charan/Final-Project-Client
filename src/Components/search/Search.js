import React, { useState, useEffect } from "react";
import "./Search.css";
import Axios from "axios";
import authHeader from "../../Services/authHeader";
import { IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const header = {
  "Content-Type": "application/json",
  authorization: authHeader(),
};
const URL = "https://mcsocialmedia.herokuapp.com";
function Search() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    Axios.get(URL + `/api/getUserByName/${value}`, {
      headers: header,
    })
      .then((users) => {
        setData(users.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value]);
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value.length == 0) {
      setData([]);
    } else {
      setValue(e.target.value);
    }
  };
  return (
    <div
      class="w3-container w3-content  "
      style={{ maxWidth: "1400px", marginTop: "80px" }}
    >
      <div class="w3-row">
        <div class="w3-col m4"></div>
        <div className="w3-col m12 ">
          <h1>Search for Friends.....</h1>
          <div className="">
            <input
              type="text"
              name="search"
              placeholder="Search.."
              id="myInput"
              onChange={handleChange}
              style={{ border: "none" }}
            ></input>
            <ul id="myUL">
              {data
                ? data.map((item) => {
                    return (
                      <li>
                        <p>
                          <img
                            src={item.pic}
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50px",
                            }}
                          ></img>
                          <div style={{ paddingLeft: "30%" }}>
                            {item.username}
                          </div>
                          <div style={{ paddingLeft: "40vw" }}>
                            <IconButton className="w3-bar-item w3-button w3-white w3-xlarge w3-right w3-center">
                              <AddCircleOutlineIcon />
                            </IconButton>
                          </div>
                        </p>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
