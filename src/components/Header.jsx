import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

const HeaderEl = styled.header`
  box-shadow: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.colorsUibase};
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
`;

const Title = styled(Link).attrs({ to: "/" })`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fsSm};
  text-decoration: none;
  font-weight: ${(props) => props.theme.fwBold};
  transition: all 0.5s ease;
`;

const ModeSwitcher = styled.div`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fsSm};
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.5s ease;
`;

export const Header = (props) => {
  const toggleTheme = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {props.theme === "light" ? <IoMoonOutline /> : <IoMoon />}
            <span style={{ marginLeft: "0.7rem" }}>{props.theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
