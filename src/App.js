import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';

import Navpane from './Container/Nav';
import Users from './Component/Users';

class App extends Component {
  state = {
    logoname: 'Github Finder',
    home: 'Home',
    about: 'About',
    logoicon: 'fab fa-github',
    users: [],
    loading: false
  }

  async componentDidMount() {
     this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users`);
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }


  render() {
    return (
      <Fragment>
        <Navpane
          Logoname={this.state.logoname}
          Home={this.state.home}
          About={this.state.about}
          Icon={this.state.logoicon}
        />
        <Users users={this.state.users} loading={this.state.loading} />
      </Fragment>
    )
  }
}

export default App;
