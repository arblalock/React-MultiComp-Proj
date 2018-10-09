import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(el => (
          <Counter
            onIncrement={onIncrement}
            onDelete={onDelete}
            key={el.id}
            counter={el}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
