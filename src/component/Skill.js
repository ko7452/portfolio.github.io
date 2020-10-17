import React, { useState } from "react";
import "./Skill.css";

import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import reactImg from "../images/reactImg.png";
import redux from "../images/redux.png";
import reactNative from "../images/reactNative.png";

import nodejs from "../images/nodejs.png";
import mySQL from "../images/mySQL.png";

import github from "../images/github.png";
import npm from "../images/npm.png";
import eslint from "../images/eslint.png";
import aws from "../images/aws.png";

const Skill = () => {
  // 기능 구현 로직
  const [state, setState] = useState(true);
  const [back, setBack] = useState(true);
  const [etc, setEtc] = useState(true);

  const button1st = () => {
    setState(!state);
    console.log("button01");
  };
  const button2nd = () => {
    setBack(!back);
    console.log("button02");
  };
  const button3th = () => {
    setEtc(!etc);
    console.log("button03");
  };

  return (
    <div id="skill">
      <div class="Skill">
        <h1>Skills</h1>
        <div class="box-wraper">
          <div class="box">
            <div class="text-box">
              <h2>Front-End</h2>
              <button class="btn" onClick={button1st}>
                {state ? (
                  <span>Click</span>
                ) : (
                  <span class="span-alert01">
                    프로젝트에 적용 가능하며 가장 많이 사용하는 기술
                  </span>
                )}
              </button>
              <h4>HMTL/CSS</h4>
              <h4>Javascript(ES6)</h4>
              <h4>React</h4>
              <h4>Redux</h4>
              <div class="front-logo">
                <img src={html} width="50" height="50" />
                <img src={css} width="40" height="50" />
                <img src={js} width="50" height="50" />
                <img src={reactImg} width="65" height="50" />
                <img src={redux} width="50" height="50" />
              </div>
            </div>
          </div>

          <div class="box">
            <div class="text-box">
              <div>
                <h2>Back-End</h2>
                <button class="btn" onClick={button2nd}>
                  {back ? (
                    <span>Click</span>
                  ) : (
                    <span class="span-alert02">
                      Server를 이해하려 개념에 대해 학습했습니다
                    </span>
                  )}
                </button>
                <div class="back-padding">
                  <h4>Node.JS</h4>
                  <h4>REST API</h4>
                  <h4>MySQL</h4>
                </div>
                <div class="back-logo">
                  <img src={nodejs} width="70" height="50" />
                  <img src={mySQL} width="70" height="50" />
                </div>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="text-box">
              <h2>Etc</h2>
              <button class="btn" onClick={button3th}>
                {etc ? (
                  <span>Click</span>
                ) : (
                  <span class="span-alert03">
                    동료들과의 협력을 위해 다룰 수 있습니다
                  </span>
                )}
              </button>
              <h4>NPM</h4>
              <h4>Github</h4>
              <h4>ESLint</h4>
              <h4>AWS</h4>
              <div class="etc-logo">
                <img src={npm} width="100" height="50" />
                <img src={github} width="120" height="50" />
                <img src={eslint} width="80" height="50" />
                <img src={aws} width="80" height="50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
