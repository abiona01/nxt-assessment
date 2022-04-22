import styled from "styled-components"
import { Box, Typography } from "@mui/material"

export const AppContainer = styled(Box)`
height: 100vh;
width: 100vw;
display: flex;

overflow-x: hidden;
`

export const AppChild = styled(Box)`
background-color: #D4E6EA;
width: 85%;
padding: 0.5rem 2rem 0;
`
export const Heading = styled(Typography)`
font-size: 0.9rem !important;
font-weight: bold !important;

`
export const ControlBox = styled(Box)`
width: 100%;
display: flex;
justify-content: flex-end;
margin-top: 1.2rem;
`
export const ControlBoxChild = styled(Box)`
box-sizing: border-box;
padding: 0.5rem 0.8rem;
border-radius: 0.5rem;
background-color: #B0AEB0;
display: flex;
align-items: center;
.MuiSvgIcon-root{
    width: 1rem;
    height:1rem;
    fill: white;
    margin-right: 2px;
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
    &:hover{
        background-color: #0F0E1D;
    }
    &:focus{
        background-color: #0F0E1D;
    }
}
`