import styled from "styled-components";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Toggle = styled.button`
  cursor: pointer;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: none;
  padding-top: 5px;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
  color: brown;
  font-weight: 500;
`;

function Splash(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    }

    const icon = props.theme === "light" ? <BsSunFill size={30} /> : <BsFillMoonFill size={30} />; 

    return (
        <Page>
            <Container>
                <Toggle onClick={changeTheme}>{icon}</Toggle>
                <Title>Pankaj Kumar Ram</Title>
                <TagLine>Theme Toggler using React and Context api</TagLine>
            </Container>
        </Page>
    );
}

export default Splash;