import styled from "styled-components";
import mountains from "../images/mountains.jpeg"

const Hero = styled.div`
min-height: ${(props)=>props.big?'100vh':'50vh'};
background-image: url(${props=>props.img?props.img:mountains});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default Hero;