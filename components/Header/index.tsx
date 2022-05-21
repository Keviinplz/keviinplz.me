import LinkComponent from "components/Link";
import StyledNav from "./styles";

import { Github, LinkedIn } from "components/Icons";

export default function Header() {
  return (
    <StyledNav>
      <ul>
        <li>
          <LinkComponent href="/">Home</LinkComponent>
        </li>
        <li>
          <LinkComponent href="/about">About me</LinkComponent>
        </li>
        <li>
          <LinkComponent href="/projects">Projects</LinkComponent>
        </li>
        <li>
          <LinkComponent href="/contact">Contact me</LinkComponent>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <a href="https://github.com/Keviinplz" target={"_blank"}><Github /></a>
          </li>
          <li>
            <a href="https://linkedin.com/in/Keviinplz" target={"_blank"}><LinkedIn /></a>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
}
