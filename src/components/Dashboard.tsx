import React from 'react';
import ResultCard from './ResultCard';

type MyState = {};
type MyProps = {
  searchResult: any
};

class Dashboard extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-card">
          {this.props.searchResult.items && this.props.searchResult.items.map((result) => (
            <ResultCard searchResult={result} />
          ))}
        </div>
      </div>
    )
  }

}

export default Dashboard;
