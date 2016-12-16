import React from 'react';
import User from './User';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  comonentDidMount() {
    /**
      USE AXIOS TO GET ALL USERS
      FROM DB AND POPULATE STATE
    **/
  }

  render() {
    return (
      <div>
        <h3>All Users</h3>
        {
          this.state.users.map(user => <User user={user} />)
        }
      </div>
    );
  }
}

export default Users;
