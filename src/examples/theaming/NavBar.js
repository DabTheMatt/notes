import React from "react";
import styled from "styled-components";
import Title from "./Title"

const Navbar = ({children}) => {
    return (
        <NavWrapper>
            <Title title="company Srany"></Title>
            {children}
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
background:${(props)=>props.theme.primaryColor};
${(props)=>`color:${props.theme.secendaryColor}`};
padding: 1rem;
text-transform:capitalize;
display:flex;
justify-content:space-between;
`;

export default Navbar