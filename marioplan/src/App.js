// import React, { Component } from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Navbar from './layout/Navbar'
// import Dashboard from  './components/dashboard/Dashboard'

// function App() {
//   return (
//       <BrowserRouter>
//         <div className="App">
//           <Navbar />
//           <Switch> {/* Makes sure only one route is loaded at a time*/ }
//             <Route path='/' component={Dashboard} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//   );
// }

// export default App;
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/'component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;