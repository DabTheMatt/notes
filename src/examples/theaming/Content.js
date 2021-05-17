import React from "react";
import styled from "styled-components"

const Content = ({className}) => {
    return (
        <section className={className}>
            <h3>section title</h3>
            <p>  When coding in Javascript I try to spell things out as much as possible in order to make the code easier to read because Javascript is, for the most part, not a typed language. Lets look at a few simple examples using acronyms programmers often put to use
            </p>
        </section>
    )
}

export default styled(Content)`
text-transform: capitalize;
padding:2rem;
${props=>`background:${props.theme.secendaryColor}`};
${props => `color:${props.theme.primaryColor}`};
`