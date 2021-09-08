import './App.css';
import Header from './Header';
import Home from './Home';
function App() {
  return (
    // BEM naming convention 
    <div className="app">
      {/* <h1>Hello, My name is Ankit Kumar and I'm gonna build the Amazon Store </h1> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
