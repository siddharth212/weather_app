import React, {Component} from 'react'; 

import './App.css';

import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            name: 'React'
        };
    }

 

 render() {
     return(
         <div id="container">
             <Header/>

             <MainContent/>

             <Footer/>
         </div>
     );
 }

}

export default App;
