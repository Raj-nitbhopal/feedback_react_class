import React, { useState } from "react";
export default function GetInput({ setlist }) {
  let [first, setfirst] = useState("");
  let [middle, setmiddle] = useState("");
  let [last, setlast] = useState("");
  let [feed, setfeed] = useState("");
  return (
    <section className="GetInput">
      <div className="container">
        <ul>
          <li>
            <label>FIRSTNAME *</label>
            <input
              type="text"
              value={first}
              onChange={(e) => setfirst(e.target.value)}
            />
          </li>
          <li>
            <label>MIDDLENAME</label>
            <input
              type="text"
              value={middle}
              onChange={(e) => setmiddle(e.target.value)}
            />
          </li>
          <li>
            <label>LASTNAME *</label>
            <input
              type="text"
              value={last}
              onChange={(e) => setlast(e.target.value)}
            />
          </li>
          <li>
            <label>FEEDBACK *</label>
            <textarea value={feed} onChange={(e) => setfeed(e.target.value)} />
          </li>
          <li>
            <button onClick={CreateFeed}>SUBMIT</button>
          </li>
        </ul>
      </div>
    </section>
  );
  //creating new object and adding it to list
  function CreateFeed() {
    if (first === "" || last === "" || feed === "") {
      alert("please fill all * fields");
    } else {
      setlist((previtem) => {
        return [
          ...previtem,
          {
            username: first + " " + middle + " " + last,
            userfeedback: feed
          }
        ];
      });
      // clearing inputs and hooks after submit
      setfirst("");
      setmiddle("");
      setlast("");
      setfeed("");
    }
  }
}
