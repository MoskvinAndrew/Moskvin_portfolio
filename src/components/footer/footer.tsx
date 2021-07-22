import React from "react";
import styled from "styled-components";
import telegram from "../../images/telegram-plane-brands.svg";
import {StyledSocialNetworkImg} from "../my_works/example/example";
import linkedIn from "../../images/linkedin-in-brands.svg";

const FooterStyledInner = styled.div`
padding-top: 30px;
`
const NetworkLinkStyled = styled.a`
  cursor:pointer;
  display: inline-block;
  transition: all 0.5s;
`
const ParagraphStyled = styled.p`
  font-family: "Lato", Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 2px;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  text-decoration: none;
`


export const Footer = () => {
    return(
        <FooterStyledInner>
            <NetworkLinkStyled className={'my_link'}>

                <a href={"https://t.me/MoskvinAndrew"}><StyledSocialNetworkImg src={telegram} className={'my_picture'} /></a>
                <><StyledSocialNetworkImg src={linkedIn} className={'my_picture'} /></>

            </NetworkLinkStyled>
            <ParagraphStyled>Moskvin portfolio. 2021 ©</ParagraphStyled>
        </FooterStyledInner>
    )
}