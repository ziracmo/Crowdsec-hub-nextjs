import React from 'react';

import { SearchIcon } from '@heroicons/react/outline';

type Props = { searchQuery: string; setSearchQuery: (value: string) => {} };

type State = { value: string };

export default class SearchBar extends React.Component<Props, State> {
  public state: State = {
    value: '',
  };

  constructor(props: Props) {
    super(props);

    this.state.value = this.props.searchQuery;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  public handleChange(event: any) {
    this.setState({ value: event.target.value });
    this.props.setSearchQuery(this.state.value);
  }

  public handleClick() {
    this.props.setSearchQuery(this.state.value);
  }

  public handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      this.props.setSearchQuery(this.state.value);
    }
  }

  render() {
    const { value } = this.state;

    return (
      <div className="px-4 md:px-8">
        <div className="flex rounded-lg items-center border-2 border-primary bg-indigo-100">
          <input
            value={value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            className=" bg-transparent w-full py-4 px-6 text-indigo-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />

          <div className="pr-2">
            <button
              onClick={this.handleClick}
              className="text-indigo-700 rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
