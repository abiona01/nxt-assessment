import styled from "styled-components"
import { Box, Typography } from "@mui/material"

export const AppContainer = styled(Box)`
height: 100vh;
width: 100vw;
background-color: #D4E6EA;
display: flex;
justify-content: center;
align-items: center;
overflow-x: hidden;
@media only screen and(max-width: 1200px){
overflow-y: scroll;
}
&::-webkit-scrollbar {
    display: none;
}
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none; 
  -webkit-overflow-style: none;
`

export const AppChild = styled(Box)`
background-color: #D4E6EA;
width: 85%;
padding: 0.5rem 2rem 0;
 @media only screen and (max-width: 700px){
    width:95%;
    margin: 0 auto;
  }
`
export const Header = styled(Box)`
width: 100%;
display: flex;
justify-content: space-between;
`
export const Heading = styled(Typography)`
font-size: 0.9rem !important;
font-weight: bold !important;

`
export const ControlBox = styled(Box)`
width: 100%;
display: flex;
justify-content: flex-end;
margin-top: 1rem;
`
export const ControlBoxChild = styled(Box)`
box-sizing: border-box;
padding: 0.5rem 0.8rem;
border-radius: 0.5rem;
background-color: #B0AEB0;
display: flex;
align-items: center;
button {
    background-color: transparent;
    border: none;
    outline: none;
}
.MuiSvgIcon-root{
    width: 1rem;
    height:1rem;
    fill: white;
    margin-right: 2px;
    cursor: pointer;
    &:last-of-type{
        margin-right: 0;
        margin-left: 2px;
    }
    
}
.MuiButtonBase-root.MuiButton-root{
    min-width: 20px;
    color: white;
    margin: 0 2px;
    line-height: 1;
    /* &:hover{
        background-color: #0F0E1D;
    }
    &:focus{
        background-color: #0F0E1D;
    } */
}
.active {
      background-color: #0F0E1D !important;
}
`