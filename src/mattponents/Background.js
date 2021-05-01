import styled from "styled-components";
import img1 from "../images/ocean.jpeg"

const Background = styled.div`
min-height: 100vh;
background-image: url(${img1});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export default Background