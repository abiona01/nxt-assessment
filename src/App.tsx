import {useState, useEffect} from 'react';
import axios from 'axios';
import { AppContainer } from './App.style';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';



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
     <Main data={data} />
    </AppContainer>
  );
}

export default App;
