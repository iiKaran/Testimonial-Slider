import './App.css';
import Box from './Components/Box'
import reviews from './data';
function App() {
  return (
    <div className="App">
      {console.log(reviews)}
       <Box  reviews={reviews}/>
    </div>
  );
}

export default App;
