import React from "react";
import styled from "styled-components";

function Container({ classname, children }) {
     return (
          <StyledDiv className={classname ? classname : ""}>
               {children}
          </StyledDiv>
     );
}

const StyledDiv = styled.div`
     /* border: 2px solid green; */
     padding: 8px 0px 8px 0px;
     max-width: 1165px;
     width: 100%;
     margin: auto;
     &.flex {
          display: flex;
          justify-content: space-between;
     }
     &.align-center {
          align-items: center;
     }
     @media only screen and (max-width: 1024px) {
          padding: 8px 30px 8px 30px;
          
     }
`;
export default Container