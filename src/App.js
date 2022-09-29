import './App.css';
import { Categories } from './components/Categories/Categories';
import { Explore } from './components/Explore/Explore';
import { Pages } from './components/Pages/Pages';

function App() {
  return (
    <div className="App">
      <Explore/>
      <Categories/>
      <Pages/>
    </div>
  );
}

export default App;