import {useState, useEffect} from 'react';
import axios from 'axios';
import { AppChild, AppContainer, ControlBox, ControlBoxChild, Heading } from './App.style';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';



function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://swapi.dev/api/planets/?page=2');
    setData(response.data.results);
    console.log(response.data.results);
  }
useEffect(() => {
  getData();
}, []);
  return (
    <AppContainer>
     <Sidebar />
     <AppChild>
         <Heading variant="h6">current page 1</Heading>
<Main data={data} />
<ControlBox>
        <ControlBoxChild>
<ArrowBackIosIcon />
<Button variant="text">1</Button>
<Button variant="text">2</Button>
<Button variant="text">3</Button>
<Button variant="text">4</Button>
<Button variant="text">5</Button>
<Button variant="text">6</Button>
<ArrowForwardIosIcon />
        </ControlBoxChild>
        </ControlBox>
     </AppChild>
     
    </AppContainer>
  );
}

export default App;
