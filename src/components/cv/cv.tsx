import React from "react"
import styled from "styled-components";

let StyledDiv = styled.div`
  margin-top: 120px;
`
let StyledLink = styled.a`
  max-width: 150px;
  width: 100%;
  height: 30px;
  text-decoration: none;
  background-color: #aca9a9;
  padding: 10px 20px;
  color: #fcfcfa;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;
  font-size: 24px;
`

export const CV = () => {
    return (
        <StyledDiv>
            <a id='cv'>
            <StyledLink id="q1vv_q-download-resume"
                        href="https://www.dropbox.com/s/fksmno3tadd168r/Andrew%27s%20Resume%20_m.pdf?dl=0"
                        download="">
                download my CV
            </StyledLink>
            </a>
        </StyledDiv>
    )
}