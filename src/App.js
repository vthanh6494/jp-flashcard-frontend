import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Search from './components/Search';
import Detail from './components/Api_kanjin2';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




// class App extends Component {

//   state = {
//     kanjin2Unit1: []
//   }
//   componentDidMount() {
//     fetch('http://localhost:8000/api/kanjin2/detail/?week=1')
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ kanjin2Unit1: data })
//     })
//     .catch(console.log)
//   }
//   render() {
//     return (
//       <Kanjin2Unit1 kanjin2Unit1={this.state.kanjin2Unit1} />
//     )
//   }
// }


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Search} />
                    <Route path="/kanjin2" component={Detail} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
