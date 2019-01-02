import React from 'react';
import { USERS_BASE } from '../../apis/index.js';
import Search from '../../components/Search/Search';
import UsersContainer from '../UsersContainer/UsersContainer';

class MainContainer extends React.Component {
  state = {
    users: [],
    searchTerm: '',
    filters: {
      type: 'all'
    }
  }

  componentDidMount() {
    fetch(USERS_BASE)
    .then(res => res.json())
    .then(users => {
      this.setState({ users })
    })
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  onIndustryChange = (event) => {
    event.persist();
    this.setState({ filters: {...this.state.filters, type: event.target.value} })
  }


  filterUsers = () => {
    const { users, searchTerm, filters: { type } } = this.state
    return users.filter(u => {
      if (type === 'all') {
        return u.company.toLowerCase().includes(searchTerm.toLowerCase()) || u.industry.toLowerCase().includes(searchTerm.toLowerCase())
      } else {
        return u.industry.toLowerCase().includes(type.toLowerCase()) && u.company.toLowerCase().includes(searchTerm.toLowerCase())
      }
    })
  }

  render() {
    const industries = [...(new Set(this.state.users.map(({industry}) => industry)))]
    return (
      <div className="">
        <Search searchTerm={this.state.searchTerm} handleIndustryChange={this.onIndustryChange} search={this.handleChange} industries={industries}/>
        <UsersContainer users={this.filterUsers()}/>
      </div>
    )
  }
}

export default MainContainer;
