import React from 'react';
import Repo from './Repo';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    /**
      USE AXIOS TO GET ALL REPOS OF CURRENT USER
    **/
  }

  render() {
    return (
      <div>
        <div>
          {/* DISPLAY USER'S INFO HERE */}
        </div>
        <div>
          {
            this.state.repos.map(repo => <Repo repo={repo} />)
          }
        </div>
      </div>
    );
  }
}

export default User;
