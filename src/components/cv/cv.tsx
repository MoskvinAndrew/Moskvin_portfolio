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
                        href="https://novoresume.com/file/pdf/resume/get/1627105385308b51c55a019ff11eb882da506f9de598fenAbx7yslwkr43qbA7rte1z0vde6t3b4esy37d2l1vi6997bpsoqoerdkg114qmzolqu0opv7tnpp7r3urw9eif7fptc1qu4iwf6motne6kyscv3w1t0ifzvhmsgezwmew4legmuyucu3ycs967xb0vd7d48jd0729dgys9m9r3nsgy77el7sp08rgny8beck7q95"
                        download="">
                download my CV
            </StyledLink>
            </a>
        </StyledDiv>
    )
}