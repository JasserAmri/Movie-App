import React, { Component } from 'react';


const load = (WrappedComponent) => {
    return class Test extends Component {
        render(){
            return this.props.loading ? <h1 style={{fontSize: "100px"}}>Loading ...</h1> : 
            <WrappedComponent {...this.props}/>
        }
    }
}

export default load;