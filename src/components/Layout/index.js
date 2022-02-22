import React from "react";
import { Post } from "../Post";
import { Story } from "../Story";
import { Suggestion } from "../Suggestion";
import "./style.css";

export function Layout() {
  return (
    <>
      <div className="MainGrid">

        <div className="first-column" style={{gridArea: 'firstColumn'}}>
          <div className="box"><Story/></div>
          <div className="box" style={{margin: '30px 0'}}><Post/></div>
        </div>

        <div style={{gridArea:'secondColumn'}}>

        <div className="suggestion-box" style={{gridArea: 'secondColumn'}}><Suggestion/></div>
        </div>

      </div>
    </>
  );
}
