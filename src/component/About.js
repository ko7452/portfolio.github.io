import React from "react";
import "./About.css";

import Photo from "../images/Photo.png";

const About = () => {
  // 기능 구현 로직
  return (
    <div id="about">
      <div class="About">
        <h1>ABOUT</h1>
      </div>
      <div class="profile">
        <div class="inner">
          <p class="left">
            <div class="inner">
              <div class="card-wraper">
                <div class="card">
                  <div class="bio">
                    <div class="bio-inner">
                      <p>신입 프론트엔드 개발자</p>
                      <p class="name">고 윤 혁</p>
                      <p class="phone">HP: 010 - 9800 - 5226</p>
                      <p class="email">e-mail: sksgur3217@gmail.com</p>
                    </div>
                  </div>
                  <div class="photo">
                    <div class="photo-inner" alt="photo">
                      <img src={Photo} width="162.61" height="215.92" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <center>
            <div class="right">
              <p class="about-info">
                안녕하세요 프론트엔드 개발자 고윤혁 입니다. <br />
                저는 비전공자이지만, 삶 속에서 인터넷과 모바일을 통한 서비스
                안의
                <br />
                시각적인 즐거움과 기능들에 대하여 개발에 호기심이 생겼고
                <br />
                Javascript를 이용해 UI 개발하는데 흥미가 생겨 개발자로 커리어를
                <br />
                전향하게 되었습니다. <br />
                <br />
                Javascript 환경에서 주도적으로 개발을 진행 할 수 있으며,
                <br />
                백엔드의 개념을 이해하기 위해 학습하였기 때문에 담당자들과
                <br />
                수월한 협업이 가능합니다.
              </p>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default About;
