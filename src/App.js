import './App.css';
import { BackendTest, FetchRecipes } from './Backend/FetchRecipes'
import Main from './Frontend/Components/Main';

function App() {
  return (
    <div className="App">
      <FetchRecipes />
      <Main/>
    </div>
  );
}

export default App;
