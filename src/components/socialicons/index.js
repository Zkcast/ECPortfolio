import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.email && (
          <li>
            <a href="/contact">
              <FaRegEnvelope />
            </a>
          </li>
        )}
      </ul>
      {/* <p>Follow Me</p> */}
    </div>
  );
};
