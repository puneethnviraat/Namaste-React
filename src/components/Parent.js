import React from 'react';
import Child2 from './Child2';
import Child1 from './Child1';
Child1;
class Parent extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log('component Did mount Parent');
    this.timer = setInterval(() => {
      console.log('this is testing');
    }, 1000);
  }
  componentDidUpdate() {
    console.log('component Did Update Parent');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h2>This is parent component..</h2>
        <Child1 name={'puneeth'} age={30} />
        <Child2 name={'Nanjappa'} age={60} />
      </div>
    );
  }
}
export default Parent;
