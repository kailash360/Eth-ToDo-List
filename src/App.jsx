import './App.css';
import { useState,useEffect } from 'react';
import Web3 from 'web3'
import Navbar from './components/Navbar/Navbar'
import Input from './components/Input/Input'
import Tasks from './components/Tasks/Tasks'
const {TRUFFLE_CONTRACT_ABI,TRUFFLE_CONTRACT_ADDRESS} = require('./truffle-config')

function App() {

  const load = async () => {
    const web3 = new Web3("http://localhost:7545");
    const network = await web3.eth.net.getId()
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(TRUFFLE_CONTRACT_ABI,TRUFFLE_CONTRACT_ADDRESS)

    console.log(network)
    console.log(accounts)
    console.log(contract)
  }

  useEffect(() => {
    load()
  }, [])


  return (
    <div className="App">
      <Navbar/>
      <Input></Input>
      <Tasks/>
    </div>
  );
}

export default App;
