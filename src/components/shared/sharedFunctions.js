// A R R A Y - L I S T - R O T A T I O N
import React, { Component } from 'react';

class SharedFunctions extends Component {
  constructor(props) {
    super(props);
    this.rotateArray = this.rotateArray.bind(this);
  }

  rotateArray = (nums, k) => {
    if (k > nums.length) {
      alert('Number of Circular rotation greater than list');
      return false;
    }
    if (!nums.length) {
      alert('List must be an array');
      return;
    }
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
    }
    console.log('reverse', nums);
    return nums;
  };
  render() {
    const nu = [2, 3, 4, 5, 6];
    return (
      <div>
        <h5>Test</h5>
        {this.rotateArray(nu, 3)}
      </div>
    );
  }
}

export default SharedFunctions;
