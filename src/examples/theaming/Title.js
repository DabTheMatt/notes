import React from "react";
import styled from "styled-components";

const Title = ({className, title}) => {
    return (
        <div>
            <h2 className={className}>{title}</h2>
        </div>
    )
}

export default styled(Title)`
${(props)=>`color:${props.theme.secendaryColor}`}
`;