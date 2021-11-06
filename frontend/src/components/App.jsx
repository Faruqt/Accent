import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from "./Header"
import Search from "./Search"
import Footer from "./Footer"

function App() {
    
  const [appState, setAppState] = useState({
    loading: false,
    agents: null,
    fee: null,
  });

  let one = "/api/properties/"
  let two = "/api/grandtotal/"

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);

  useEffect(() => {
    setAppState({ loading: true });
      axios.all([requestOne, requestTwo]).then(axios.spread((...agents) => {
          const [allEstates, total] = agents
          setAppState({ loading: false, agents: allEstates.data, fee: total.data});
        })).catch((err) => console.log(err));

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [setAppState]);

  return (
    <div className='App'>
      <Header/>
      <Search isLoading={appState.loading} agentz={appState.agents} fees={appState.fee}/>
       <Footer />
    </div>
  );
}

export default App;





