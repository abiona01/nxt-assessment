import { useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    axios
      .get(`https://swapi.dev/api/planets/?page=${page}`)
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
        setMiniLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setMiniLoading(false);
        toast.error("Error, try later");
      });
    // console.log(response.data.results);
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  const getNextPage = () => {
    if (page >= 1 && page < 6) {
      setPage(page + 1);
      setMiniLoading(true);
    }
  };
  const getPrevPage = () => {
    if (page > 1 && page <= 6) {
      setPage(page - 1);
      setMiniLoading(true);
    }
  };
  return (
    <AppContainer>
      {loading ? (
        <ReactLoading type="spin" color="#0F0E1D" height={50} width={65} />
      ) : (
        <>
          {" "}
          <Sidebar />
          <AppChild>
            <Header>
              {" "}
              <Heading variant="h6">current page {page}</Heading>
              {miniLoading ? (
                <ReactLoading
                  type="spin"
                  color="#0F0E1D"
                  height={20}
                  width={25}
                />
              ) : (
                " "
              )}
            </Header>
            <Main data={data} page={page} />
            <ControlBox>
              <ControlBoxChild>
                <button onClick={getPrevPage}>
                  {" "}
                  <ArrowBackIosIcon />
                </button>
                <Button
                  variant="text"
                  className={page === 1 ? "active" : "inactive"}
                  onClick={() => {
                    setPage(1);
                    if (page !== 1) setMiniLoading(true);
                  }}
                >
                  1
                </Button>
                <Button
                  variant="text"
                  className={page === 2 ? "active" : "inactive"}
                  onClick={() => {
                    setPage(2);
                    setMiniLoading(true);
                  }}
                >
                  2
                </Button>
                <Button
                  variant="text"
                  className={page === 3 ? "active" : "inactive"}
                  onClick={() => {
                    setPage(3);
                    setMiniLoading(true);
                  }}
                >
                  3
                </Button>
                <Button
                  variant="text"
                  className={page === 4 ? "active" : "inactive"}
                  onClick={() => {
                    setPage(4);
                  }}
                >
                  4
                </Button>
                <Button
                  variant="text"
                  className={page === 5 ? "active" : "inactive"}
                  onClick={() => {
                    setPage(5);
                    setMiniLoading(true);
                  }}
                >
                  5
                </Button>
                <Button
                  variant="text"
                  className={page === 6 ? "active" : "inactive"}
                  onClick={() => {
                    setPage(6);
                    setMiniLoading(true);
                  }}
                >
                  6
                </Button>
                <button onClick={getNextPage}>
                  <ArrowForwardIosIcon />
                </button>
              </ControlBoxChild>
            </ControlBox>
          </AppChild>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </AppContainer>
  );
}

export default App;
