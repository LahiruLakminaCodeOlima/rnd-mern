import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return window.pageYOffset
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      console.log(snapshot);
      if(this.state.count === 5) {
        const scrollElement = document.querySelector(".childTwoBox");
        scrollElement.scrollTo(0, 0);
      }
      window.scrollTo(0, snapshot);
    }
  }

  render() {
    return (
      <div style={{margin:"50px", height:"150px", width:"300px", backgroundColor:"red",display:"flex",alignItems: "center",flexDirection:"column",justifyContent: "center", borderRadius:"10px",}} >
        <div style={{display:"flex",alignItems: "center",flexDirection:"column", padding:"10px",overflowY:"scroll"}} className='childTwoBox'>
          <h1>COUNT: {this.state.count}</h1>
          <p style={{textAlign:"justify"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
          </p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })} style={{ background:"black",outline:"none",border:"none",borderRadius:"10px",height:"80px",color:"white",padding:"10px"}}>
            Increment Count {this.state.count}
          </button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
