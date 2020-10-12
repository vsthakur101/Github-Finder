import React from 'react';
import UserItem from './UserItem';
import '../App.css';
import Spinner from './Spinner';

  const Users = ({users,loading}) => {

          if(loading)
          {
            return <Spinner />
            } else {
            return(
              <div className="user-card">
                {users.map((user)=>(
                  <UserItem 
                  key={user.id}
                  Avtar={user.avatar_url} 
                  Name={user.login}
                  More={user.html_url}  />
                ))}
              </div>
            )} }

export default Users;