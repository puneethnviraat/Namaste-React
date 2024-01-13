import React from 'react';

class Child2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>This is Child2 class component</h1>

        <h3>Name:{this.props.name}</h3>
        <h3>Name:{this.props.age}</h3>
      </>
    );
  }
}
export default Child2;
