import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch> {/* ONly one of them shows in the browser even if the reoute matches with the other */}
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
