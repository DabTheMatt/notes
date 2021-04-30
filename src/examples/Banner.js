import React from "react";
import styled from "styled-components";

const Banner = ({title, children, color}) => {
    return (
        <BannerWrapper color={color}>
            <h1>{title}</h1>
            {children}
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
color: white;
font-size: 40px;
text-transform: uppercase;
text-align: center;
h1:hover {
    color: ${(props)=>props.color};
}

`;

export default Banner