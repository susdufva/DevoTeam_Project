import './App.css';
import Users from './components/GetAllUsers'

function App() {
  return (
      <main className="App">
        <div className='container'>
          <p id='header'>Meet the Team</p>
          <Users/>
        </div>
      </main>
  );
}

export default App;
