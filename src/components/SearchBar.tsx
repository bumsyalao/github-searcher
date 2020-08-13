import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiMenuDown } from '@mdi/js';

type MyState = {
  search: string;
  filter: string;
};
type MyProps = {
  onSearch: any;
};

let timerId;
class SearchBar extends React.Component<MyProps, MyState>{
  constructor(props: MyProps) {
    super(props);
    this.state = {
      search: '',
      filter: 'user'
    };
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
    if (this.state.search.length < 3) {
      return;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => this.props.onSearch(this.state.search, 2000))
    }
  }

  handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
  }

  render() {
    return (
      <section className="search-bar">
        <div className='heading'>
          <div className='icon'>
            <Icon path={mdiGithub} title="User Profile" />
          </div>
          <div className="sub-heading">
            <h2>Github Searcher</h2>
            <p>Search users or repositories below</p>
          </div>
        </div>
        <div className="form">
          <input
            placeholder='Start typing to search...'
            id="search"
            value={this.state.search}
            onChange={this.onChange}
            required
          >
          </input>
          <div className="dropdown">
            <select onChange={this.handleFilterChange}>
              <option value="user">User</option>
              <option value="repository">Repository</option>
            </select>
            <Icon path={mdiMenuDown} title="dropdown" size={1} />
          </div>
        </div>
      </section>
    );
  }
}
export default SearchBar;