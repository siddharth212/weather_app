import React, {Component} from 'react'; 

import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    

    render(){
        return(
            <header className="header-style">
                <div>Happy Weather</div>
            </header>
        );
    }
}

export default Header;