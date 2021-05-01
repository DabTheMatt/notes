import styled from "styled-components"


export const Header = ({text}) => {
    return (<HeaderWrapper>
        <h1>{text}</h1>
     </HeaderWrapper>)
    
}


const HeaderWrapper  = styled.div`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2rem;
    font-weight: 100;
    text-transform: capitalize;
    color: white;
    margin-top: -20vh;
    margin-bottom: 20vh;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: teal;
        font-size: 3rem;
        font-weight: 500;
        transform: rotate(90deg);
    }
`;

