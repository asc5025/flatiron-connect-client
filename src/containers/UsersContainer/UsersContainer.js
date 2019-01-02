import React from "react";
import UserCard from "../../components/UserCard/UserCard";

class UsersContainer extends React.Component {
  render() {

    return (
      <div className="ui four cards">
      {
        this.props.users.map(u => {
          return <UserCard key={u.id} user={u} />
        })
      }
      </div>
    )
  }
}

export default UsersContainer;
