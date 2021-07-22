import React from "react";
import styled,{css} from "styled-components";
import linkedIn from "./../../../images/linkedin-in-brands.svg";
import telegram from "./../../../images/telegram-plane-brands.svg"



const StyledExampleInner = styled.div`
  background-color: #eeebeb;
  width:100%;
  height: ${(props: any) => props.height}px;
  margin-bottom: 40px;
  padding-bottom: 60px;
  position: relative;
  
  
    &:hover .my_picture {
      transform: scale(0.9);
  }
  &:hover .my_link{
    display: inline-block;
    transition: all 0.5s;
    bottom: 70px;
    



  }
  
`
const StyledImg = styled.img`
  position: absolute;
  top: 10%;
  right: 0;
  //bottom: 0;
  left: 0;
  margin: auto;
  max-width:80%;
  transition: all 0.5s ;
`
const StyledLink = styled.a`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  left:0;
  z-index: 3;
  cursor:pointer;
  background-color: #cdcaca;
  padding-top: 20px;
  text-transform: uppercase;


  font-family: "Lato", Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 2.5px;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
  text-decoration: none;
  color: #3a3a3a;
  
`
export const StyledSocialNetworkLink = styled.div`
    cursor:pointer;
    position: absolute;
    bottom: 20px;
    left: 180px;
    display: inline-block;
    transition: all 0.5s;
`
export const StyledSocialNetworkImg = styled.img`
    width: 15px;
    margin: 5px 5px;
`

export const Example = React.memo((props:any) => {


    return(
        <StyledExampleInner {...props}>

             <StyledImg src={props.picture} className={'my_picture'}/>
             <StyledLink href={props.link}>{props.title}</StyledLink>
            <StyledSocialNetworkLink className={'my_link'}>

                <a href={"https://t.me/MoskvinAndrew"} ><StyledSocialNetworkImg src={telegram} className={'my_picture'} /></a>
                <a href={"https://www.linkedin.com/in/andrew-moskvin-0090011a5/"}><StyledSocialNetworkImg src={linkedIn} className={'my_picture'} /></a>

            </StyledSocialNetworkLink>
        </StyledExampleInner>


       )
})