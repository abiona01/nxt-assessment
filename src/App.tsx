import { useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import {
  AppChild,
  AppContainer,
  ControlBox,
  ControlBoxChild,
  Header,
  Heading,
} from "./App.style";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [miniLoading, setMiniLoading] = useState(false);
  const getData = async (page: number) => {
    if (miniLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }

    const response = await axios.get(
      `https://swapi.dev/api/planets/?page=${page}`
    );
    setData(response.data.results);
    setLoading(false);
    setMiniLoading(false);
    console.log(response.data.results);
  };
  useEffect(() => {
    getData(page);
  }, [page]);

  //   const changePage = (page: number) =>{
  // setPage(page);
  //   }
  return (
    <AppContainer>
      {loading ? (
        <ReactLoading type="spin" color="#0F0E1D" height={50} width={65} />
      ) : (
        <>
          {" "}
          <Sidebar />
          <AppChild>
           <Header> <Heading variant="h6">current page 1</Heading>
           {miniLoading ? (<ReactLoading type="spin" color="#0F0E1D" height={20} width={25} />) : " "}
           </Header>
            <Main data={data} />
            <ControlBox>
              <ControlBoxChild>
                <ArrowBackIosIcon />
                <Button
                  variant="text"
                  onClick={() => {
                    setPage(1);
                    setMiniLoading(true);
                  }}
                >
                  1
                </Button>
                <Button
                  variant="text"
                  onClick={() => {
                    setPage(2);
                    setMiniLoading(true);
                  }}
                >
                  2
                </Button>
                <Button
                  variant="text"
                  onClick={() => {
                    setPage(3);
                    setMiniLoading(true);
                  }}
                >
                  3
                </Button>
                <Button
                  variant="text"
                  onClick={() => {
                    setPage(4);
                  }}
                >
                  4
                </Button>
                <Button
                  variant="text"
                  onClick={() => {
                    setPage(5);
                    setMiniLoading(true);
                  }}
                >
                  5
                </Button>
                <Button
                  variant="text"
                  onClick={() => {
                    setPage(6);
                    setMiniLoading(true);
                  }}
                >
                  6
                </Button>
                <ArrowForwardIosIcon />
              </ControlBoxChild>
            </ControlBox>
          </AppChild>
        </>
      )}
    </AppContainer>
  );
}

export default App;
