import React, { useCallback } from "react";
import "./Header.css";

// reRendering, 함수가 재실행이 안되게 하는 것
// useCllback, useEffect
const Header = () => {
  // 포트폴리오 메인 페이지
  const homeTag = useCallback(() => {
    console.log("home");
  }, []);
  const aboutTag = useCallback(() => {
    console.log("about");
  }, []);
  const skillTag = useCallback(() => {
    console.log("skill");
  }, []);
  const projectTag = useCallback(() => {
    console.log("project");
  }, []);
  const contactTag = useCallback(() => {
    console.log("contact");
  }, []);

  return (
    <div class="header-class">
      <div class="snip1275">
        <ul>
          <li>
            <a href="#home" onClick={homeTag}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={aboutTag}>
              About
            </a>
          </li>
          <li>
            <a href="#skill" onClick={skillTag}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" onClick={projectTag}>
              Project
            </a>
          </li>
          <li>
            <a href="#contact" onClick={contactTag}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
