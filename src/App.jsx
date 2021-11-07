import './App.css';
import Navbar from './components/Navbar/Navbar'
import Input from './components/Input/Input'
import Tasks from './components/Tasks/Tasks'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Input></Input>
      <Tasks/>
    </div>
  );
}

export default App;
