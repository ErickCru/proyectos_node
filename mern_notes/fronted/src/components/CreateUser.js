import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  state = {
    users: [],
    username: ''
  };

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    this.setState({ users: res.data });
  };

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    await axios.post('http://localhost:5000/api/users', {
      username: this.state.username
    });

    this.setState({ username: '' });
    this.getUsers();
  };

  deleteUser = async id => {
    await axios.delete('http://localhost:5000/api/users/' + id);
    this.getUsers();
  };

  render() {
    return (
      <div className='row'>
        <div className='col-md-4'>
          <div className='card card-body'>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <button className='btn btn-primary'>Save</button>
            </form>
            <div className='card-outline-info mt-3'>
              Double click a user to delete
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <ul className='list-group'>
            {this.state.users.map(user => (
              <li
                className='list-group-item list-group-item-action mb-2 text-center'
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
