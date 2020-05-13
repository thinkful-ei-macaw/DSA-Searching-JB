import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
    counter: 0,
  };
  binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
    console.log(index);

    const item = array[index];

    // console.log(start, end);
    if (item === value) {
      return this.state.counter;
    } else if (item < value) {
      return this.binarySearch(array, value, index + 1, end);
    } else if (item > value) {
      return this.binarySearch(array, value, start, index - 1);
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    let data = [
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5,
    ];
    data.sort((a, b) => a - b);
    console.log(data);
    let values = parseInt(e.target.folderinput.value);
    console.log(values);
    console.log(this.binarySearch(data, values, 0, data.length - 1));
  };

  render() {
    return (
      <div>
        <label htmlFor="add-folder-form">Add New Folder</label>
        <form name="add-folder-form" onSubmit={this.onSubmit}>
          <label htmlFor="folderinput">Number to search for:</label>
          <input id="folderinput" name="folderinput" type="number" />
          <button type="submit">Submit </button>
        </form>
      </div>
    );
  }
}

export default App;
