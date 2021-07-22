import React from "react";
import styled,{css} from "styled-components";
import { useFormik} from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import style from './contactForm.module.css'



const StyledFormInner = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0px 20px 0px 20px; 
`
const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`
const ErrorMessage = styled.p`
  position: absolute;
  top:15px;
  font-size: 16px;
  color:darkred;
  text-transform: uppercase;
 
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
const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  margin-bottom: 30px;

  &::placeholder {
    color: #c2c0c0;
  }

  &:focus::placeholder {
    color: transparent;
  }
`
const TextArea = styled.textarea`
   width: 100%;
   height: 100px;
   resize: none;
`
const ButtonStyled = styled.button`
  color: #878585;
  padding: 10px 10px;
  cursor: pointer;
  background-color: #f6f5f5;
  border-color: #cecccc;
  margin-top: 30px;
  float: left;

  &:hover {
    border-color: #3e3e3e;
  }

`
// type ContactsFormPropsTypes = {
//     displayLowWidth:boolean;
// }

export const ContactForm = () =>{

    const formik = useFormik({
        initialValues: {
            name: '',
            subject: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('please tape your name'),

            email: Yup.string()
                .email('Invalid email address')
                .required('email is required'),
            message:Yup.string()
                .required('Required')
        }),

        onSubmit:(values, {resetForm}) => {
            axios.post("https://gmail--nodejs--server.herokuapp.com/sendMessage",{values})
            resetForm();
            },
    });
    return (

        <StyledFormInner>
            <H2styled>
                LET'S KEEP IN TOUCH
            </H2styled>


        <form onSubmit={formik.handleSubmit }>
            <label htmlFor="name"></label>


            <DivStyled className={style.DivStyled}>

            <InputStyled
                placeholder='*Name'
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={style.inputStyled}
            />
            {formik.touched.name && formik.errors.name ? (
                <ErrorMessage>{formik.errors.name}</ErrorMessage>
            ) : null}


            <label htmlFor="email"></label>

            <InputStyled
                placeholder='*Email address'
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <ErrorMessage style={{right:"0px"}}>{formik.errors.email}</ErrorMessage>
            ) : null}

            </DivStyled>


            <label htmlFor="subject"></label>
            <InputStyled
                placeholder={"Subject"}
                id="subject"
                name="subject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
                <p>{formik.errors.subject}</p>
            ) : null}
            <DivStyled>
            <label htmlFor="message"></label>
            <TextArea
                placeholder="*Message"
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
                <ErrorMessage style={{top:'80px'}}>{formik.errors.message}</ErrorMessage>
            ) : null}
            </DivStyled>
            <ButtonStyled type="submit">Send Message</ButtonStyled>
        </form>
        </StyledFormInner>
    );
}

