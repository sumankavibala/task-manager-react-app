// //lifecycle demo (class component)

// export class ClockClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { time: new Date()};
//   }

//   componentDidMount() {
//     this.timer = setInterval(()=> {
//       this.setState({time: new Date()});
//     }, 1000);
//   }

//     componentWillUnmount() {
//       clearInterval(this.timer);
//     }

//     render() {
//       return <p>Current Time: {this.state.time.toLocaleTimeString()}</p>;
//     }
// }


import React from "react";

class ClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  // Runs once after component mounts
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  // Runs before component unmounts
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <p>Current Time: {this.state.time.toLocaleTimeString()}</p>;
  }
}

export default ClockClass;
