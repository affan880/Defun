import styled from "styled-components";
import bg from '../../Images/wave.svg'

export const Homepage = styled.div`
  width: 100%;
  height: 600px;
  min-height: auto;
  max-height: auto;
  margin: 0 auto;
  margin-top: 10%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Desc = styled.div`
 height:280px;
 width:600px;
 margin: auto;
 max-width:600px;
 text-align:center
`
export const Heading = styled.div`
 font-family: Raleway,sans-serif;
 font-size:48px;
 font-weight:800;
 line-height:57.6px;
 text-align:center;
 word-spacing:0px; 
`
export const Description = styled.div`
 margin-top:20px;
 font-family: Open-sans,sans-serif;
 font-size:16px;
 font-weight:500;
 text-align:center;
 word-spacing:0px; 
`
export const ButtonContainer = styled.div`
 height: 64px;
 width: 600px;
 margin:20px 0 0 0;
 max-width:600px;
 
`
export const CusrtomButton = styled.button`
  height: 44px;
  width: 180px;
  margin: 10px;
  padding: 10px 30px 10px 30px;
  min-height: auto;
  min-width: auto;
  background-color: #000000;
  font-size: 16px;
  font-family: Open-sans, sans-serif;
  font-weight: 700;
  text-decoration: none solid rgb(255, 255, 255);
  color: white;
  text-align: center;
  border-radius: 10px;
  &:hover {
    background-color: #fff;
    color: #000000;
    text-decoration: none;
    transform: none;
    transition: all 0.2s ease 0s;
    outline: rgb(255, 255, 255) dashed 5px;
    box-sizing: border-box;
    border-top-left: 5px;
  }
`;