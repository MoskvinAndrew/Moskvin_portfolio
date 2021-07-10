import React from "react";
import styled,{css} from "styled-components";

const StyledFormInner = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`
const H2styled = styled.h2`
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 9px;
  margin-bottom: 39px;
  color: #908d8d;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;
  font-size: 32px;
`


export const ContactForm = () =>{
    return (
        <>
        <StyledFormInner >
    <H2styled>LET'S KEEP IN TOUCH</H2styled>
        </StyledFormInner>
        <form>

        </form>
          </>
    )
}