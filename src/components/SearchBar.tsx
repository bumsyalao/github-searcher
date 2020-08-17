import React from 'react';
import ReactPaginate from 'react-paginate';
import Icon from '@mdi/react';
import { mdiGithub, mdiMenuDown } from '@mdi/js';

type MyState = {
  search: string;
  filter: string;
  loading: boolean;
  page: number;
  perPage: number;
};
type MyProps = {
  onSearch: Function;
  onClearSearch: Function;
  searchResult: any;
};

let timerId;

/**
 * Renders SearchBar
 *
 * @class SearchBar
 * @extends {React.Component<MyProps, MyState>}
 */
class SearchBar extends React.Component<MyProps, MyState>{
  constructor(props: MyProps) {
    super(props);
    this.state = {
      search: '',
      filter: 'user',
      loading: false,
      page: 1,
      perPage: 30

    };
  }
  onFetchSearch = () => {
    const { search, filter, page, perPage } = this.state;
    if (this.state.search.length < 3) {
      this.props.onClearSearch();
      return;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(async () => {
        this.setState({ loading: true })
        await this.props.onSearch(search, filter, page, perPage);
        this.setState({ loading: false })
      }
        , 2000)
    }
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
    this.onFetchSearch();
  }

  handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
    this.onFetchSearch();
  }
  handlePageClick = (pageData) => {
    const selected = pageData.selected;
    const perPage = this.state.perPage;
    const page = Math.ceil(selected * perPage);
    this.setState({ page });
    this.onFetchSearch();
  }

  render() {
    console.log(this.state.perPage)
    const { searchResult } = this.props;
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
        <div className="result-data">{searchResult.total_count ?
          <p>Found {searchResult && searchResult.total_count ? searchResult.total_count : 'no'}
            {' '} results...
          </p> : ''}
          {(searchResult.total_count > 10) && <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            pageCount={searchResult.total_count}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />}
        </div>
      </section>
    );
  }
}
export default SearchBar;