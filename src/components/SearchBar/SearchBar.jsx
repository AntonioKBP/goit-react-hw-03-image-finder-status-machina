import PropTypes from 'prop-types';
import { Component } from 'react';
import { ReactComponent as Icon } from '../Icons/search.svg';

import { SearchButton, Form, Header, Input } from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };

  reset() {
    this.setState({ name: '' });
  }

  render() {
    const { value } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <span>
              <Icon />
            </span>
          </SearchButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            name="name"
            value={value}
          />
        </Form>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
