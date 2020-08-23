import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return (
//         <Fragment>
//             <div>Latitude:  </div>
//             <div>Logitude:  </div>
//         </Fragment>
//     );
// }

class App extends Component {
    constructor(props) {
        super(props)
        console.log("constructor");
        this.state = {
            latitude: null,
            longitude: null,
            errorMessage:null
        }

        

    }
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude});
                this.setState({longitude: position.coords.longitude});
                //console.log(position);
            },
            (err) => {
                this.setState({errorMessage: err.message});
                //console.log(err);
            }
        );
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentWillUpdate");

    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        if(this.state.errorMessage){
            return (
                <Fragment>
                    <div> Error: {this.state.errorMessage}</div>
                </Fragment>
            )
        }
        if(this.state.longitude && this.state.latitude){
            return (
                <Fragment>
                    {/* <div>Latitude: {this.state.latitude} </div>
                    <div>Logitude: {this.state.logitude} </div> */}
                    <SeasonDisplay latitude={this.state.latitude} longitude={this.state.longitude} />
                </Fragment>
            )
        }

        return <Spinner message="Please accept location request"/>
        
    }
}


ReactDOM.render(<App />, document.getElementById('root'));