import React from 'react';

type MyState = {
  count: number;
};

class SearchBar extends React.Component<MyState> {
  state = { count: 0 };

  render() {
    return (
      <section>
        <div>
          <h2>Github Searcher</h2>
          <p>Search Users or Repositories below</p>
        </div>
        <div>
          <input placeholder='Start typing to search'></input>
          <div className="dropdown">
            <select>
              <option value="0">User</option>
              <option value="1">Repository</option>
            </select>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBar;