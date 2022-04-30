import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import data from './Components/data';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key = {item.title}
        item = {item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
