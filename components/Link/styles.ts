import styled from "@emotion/styled";

interface StyledNextLinkProps {
  isActive: boolean;
}

const StyledLink = styled.a<StyledNextLinkProps>`
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export default StyledLink;
