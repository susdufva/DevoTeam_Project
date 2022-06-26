import './App.css';
import Users from './components/GetAllUsers'
import Sort from './components/Sort'

function App() {
  return (
    <div className="">
      <header className="">
        <Sort/>
        <Users/>
      </header>
    </div>
  );
}

export default App;
