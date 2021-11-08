import './App.css';
import { useState,useEffect } from 'react';
import Web3 from 'web3'
import Navbar from './components/Navbar/Navbar'
import Input from './components/Input/Input'
import Tasks from './components/Tasks/Tasks'
const {TRUFFLE_CONTRACT_ABI,TRUFFLE_CONTRACT_ADDRESS} = require('./config.js')

function App() {

  //States to hold the data
  const [tasks,setTasks] = useState([])
  const [account,setAccount] = useState("")
  const [methods,setMethods] = useState([])

  //To connect to theblockchain and fetch data
  const load = async () => {

    //Connect to blockchain netwrk set up using Ganache
    const web3 = new Web3("http://localhost:7545");
    await window.ethereum.enable();
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const contract = new web3.eth.Contract(TRUFFLE_CONTRACT_ABI,TRUFFLE_CONTRACT_ADDRESS)

    //Fetch the data by running their functions
    const taskCount = await contract.methods.taskCount().call()

    for (let i=1; i<=taskCount; i++) {
      const task = await contract.methods.tasks(i).call()
      tasks.push(task)
      setTasks(tasks)
    }

    const methods = contract.methods

    //Update the states
    setTasks(tasks)
    setAccount(accounts[0])
    setMethods(methods)
  }

  useEffect(() => {
    load()
  },[tasks])


  return (
    <div className="App">
      <Navbar/>
      <Input methods={methods} account={account} ></Input>
      <Tasks tasks={tasks} methods={methods} account={account}/>
    </div>
  );
}

export default App;
