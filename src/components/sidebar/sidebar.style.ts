import styled from "styled-components"
import { Box } from "@mui/material"

export const SidebarBox = styled(Box)`
  height: 100%;
  width: 15%;
  background-color: #1a1a34;

  .MuiTypography-root.MuiTypography-body1 {
    color: white;
  }
  @media only screen and (max-width: 700px){
    display: none;
  }
`;