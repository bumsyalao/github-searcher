import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiMenuDown } from '@mdi/js';

type MyState = {
  count: number;
};
type MyProps = {};
class SearchBar extends React.Component<MyProps, MyState>{
  state = { count: 0 };

  render() {
    return (
      <section className="search-bar">
        <div className='heading'>
          <div className='icon'>
            <Icon path={mdiGithub}
              title="User Profile"

            />
          </div>
          <div className="sub-heading">
            <h2>Github Searcher</h2>
            <p>Search users or repositories below</p>
          </div>
        </div>
        <div className="form">
          <input placeholder='Start typing to search...'></input>
          <div className="dropdown">
            <select>
              <option value="0">User</option>
              <option value="1">Repository</option>
            </select>
            <Icon path={mdiMenuDown} title="dropdown" size={1} />
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBar;