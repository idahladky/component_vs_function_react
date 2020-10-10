import React from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // this defines what is in state
      count: this.props.start // start is coming from the start in APP
    };
  }

  addOne() {
    this.setState({ count: (this.state.count += 1) }); // setState triggers the component to rebuild itself
    console.log(this.state.count);
  }

  render() {
    const above = <h1>It's 10 or above</h1>;
    const below = <h1>It's below 10</h1>;

    // if/else statement instead of ternary operator in return function below
    // let result

    // if(this.state.count < 10) {
    //   result = below
    // } else {
    //   result = above
    // }

    return (
      <>
        {/* this is instead of inserting a div, and allows the below tags to be at the top */}
        {this.state.count < 10 ? below : above}{" "}
        {/* if this.state.count is less than 10, render below (TRUE) otherwise render above (FALSE) */}
        <h1>{this.state.count}</h1>
        <button onClick={() => this.addOne()}>Add One</button>{" "}
        {/*the arrow function binds the function to the class rather than the element*/}
      </>
    );
  }
}

export default Count;
