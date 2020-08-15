import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiMenuDown } from '@mdi/js';

type MyState = {
  search: string;
  filter: string;
  loading: boolean;
};
type MyProps = {
  onSearch: Function;
};

let timerId;
class SearchBar extends React.Component<MyProps, MyState>{
  constructor(props: MyProps) {
    super(props);
    this.state = {
      search: '',
      filter: 'user',
      loading: false,

    };
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { search, filter } = this.state;
    this.setState({ search: e.target.value });
    if (this.state.search.length < 3) {
      return;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(async () => {
        this.setState({ loading: true })
        await this.props.onSearch(search, filter);
        this.setState({ loading: false })
      }
        , 2000)

    }
  }

  handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
    if (this.state.search.length < 3) {
      return;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(async () => {
        this.setState({ loading: true })
        await this.props.onSearch(this.state.search, this.state.filter);
        this.setState({ loading: false })
      }
        , 2000)

    }
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
            <Icon path={mdiMenuDown} title="dropdown" size={1} className="dropdown-icon" />
          </div>
        </div>
        {this.state.loading ? <p className="loading__p">fetching results...</p> : ''}

      </section>
    );
  }
}
export default SearchBar;