import styled from "styled-components";

const screen = {
    phone:(...args)=>{
        const styles = args;
        console.log(styles);

        return `@media (min-width:576px){
            ${styles}
        }`
    },
    desktop:(...args)=>{
        const styles = args;
        console.log(styles);

        return `@media (min-height: 500px){
            ${styles}
        }`
    }
    
}

export const Banner = styled.div`
background: red;
h1{
    color:white;
    text-transform: uppercase;
}
${screen.phone`
    background: blue;h1{
    color: yellow;
}`};

${screen.desktop`
background:black;
h1{
    color: white
}`}`;


export const SecondBanner = styled.div`
background: blue;
h1{
    color:red;
    text-transform: uppercase;
}
${screen.phone`background: green;h1{
    color: blue;
}`}
${screen.desktop`
background: violet;
h1{
    color: grey;
    text-transform: lowercase;
}`}

`;
