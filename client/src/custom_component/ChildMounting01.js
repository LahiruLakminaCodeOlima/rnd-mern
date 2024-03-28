import React, { Component } from 'react'

export class ChildMounting01 extends Component {
    constructor(props) {
        super(props);
        this.state={
            child: "Lakmina",
        };
        console.log("Child constructor");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Child getDerivedStateFromProps");
        if(nextProps.valueP === ''){
            return {
                child: prevState.child
            }
        }
        else{
            return {
                child: nextProps.valueP
            }
        }
    }
    componentDidMount(){
        console.log("Child componentDidMount");
    }
    render() {
        console.log("Child render");
    return (
      <div>Child {this.state.child}</div>
    )
  }
}

export default ChildMounting01