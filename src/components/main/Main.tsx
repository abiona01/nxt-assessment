import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MainBox } from "./main.style";

type Props = {
  data: Array<any>;
  page: number
};
const Main = ({ data, page }: Props) => {
  return (
    <MainBox>
    
      {data && (
     <>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>s/n</TableCell>
                <TableCell>planet</TableCell>
                <TableCell>climate</TableCell>
                <TableCell>terrain</TableCell>
                <TableCell>date</TableCell>
                <TableCell>population</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((dataItem, index) => {
                const { name, climate, terrain, population, created } =
                  dataItem;
                const date = created?.split("T")[0];
                let format = page -1;
let extraFormat = format * 10
                
                return (
                  <TableRow key={index}>
                      {page ===1 ? (<TableCell>{index + 1}</TableCell>) : ( <TableCell>{index +1 + extraFormat}</TableCell>)}
                
                    <TableCell>{name}</TableCell>
                    <TableCell>{climate}</TableCell>
                    <TableCell>{terrain}</TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>{population}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        
     </>

        
      )}
    </MainBox>
  );
};

export default Main;
