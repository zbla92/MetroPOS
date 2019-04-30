import React from 'react';
import Login from './Login';
import Menu from './Menu';

class App extends React.Component{
    constructor(props){
        super(props)
        this.logging = this.logging.bind(this);
        this.deLogging = this.deLogging.bind(this)
        this.state = {isLoggedIn: false}
    };

    logging(){
        this.setState({
            isLoggedIn: true
        })
    }
    deLogging(){
        this.setState({
            isLoggedIn: false
        })
    }

    render(){
        if(!this.state.isLoggedIn){
            return(
                <div>
                    <Login logging={this.logging}/>
                </div>
            );
        }else{
            return(
                <div>
                    <Menu deLogging={this.deLogging}/>
                </div>   
            );
        }
    }
}
export default App;