import "./styles.css";
import Header from "./components/Header";
import GetInput from "./components/GetInput";
import ShowInput from "./components/ShowInput";
import { useState } from "react";
export default function App() {
  let [list, setlist] = useState([
    {
      username: "Feedback assignment",
      userfeedback: "Hello world , this is a static card"
    }
  ]);
  return (
    <div className="App">
      <Header />
      <GetInput setlist={setlist} />
      <ShowInput list={list} />
    </div>
  );
}
