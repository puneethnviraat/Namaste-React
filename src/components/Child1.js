import React from 'react';

class Child1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('component Did mount Chaild 1');
  }
  componentDidUpdate() {
    console.log('component Did Update Chaild 1');
  }
  render() {
    return (
      <>
        <p>This is Child1 class component</p>
        <h3>Name:{this.props.name}</h3>
        <h3>Name:{this.props.age}</h3>
        <h1>{this.state.count}</h1>
        <button
          className="btn-primary btn"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase count
        </button>
        <button
          className="btn-light btn"
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Decrease count
        </button>
      </>
    );
  }
}
export default Child1;
