import './App.css';
import Users from './components/GetAllUsers'
import Sort from './components/Sort'

function App() {
  return (
    <div className="">
      <header className="App">
        <p id='header'>Meet the Team</p>
          <Sort/>
          <Users/>
      </header>
    </div>
  );
}

export default App;
