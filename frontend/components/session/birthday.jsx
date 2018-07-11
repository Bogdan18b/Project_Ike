import React from 'react';

class Birthday extends React.Component {
  render_day() {
    return (
    <select>
      <option default>Day</option>
      {Array.from(new Array(31),(val,index)=>index + 1).map(el => <option key={el}>{el}</option>)}
    </select>
    );
  };

  render_month() {
    return (
    <select>
      <option default>Month</option>
      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(el => <option key={el}>{el}</option>)}
    </select>
    );
  };

  render_year() {
    return (
    <select>
      <option default>Year</option>
      {Array.from(new Array(100),(val,index)=>index + 1919).map(el => <option key={el}>{el}</option>)}
    </select>
    );
  };

  render() {
    return (
      <div>
        {this.render_month()}
        {this.render_day()}
        {this.render_year()}
      </div>
    );
  }
}

export default Birthday;
