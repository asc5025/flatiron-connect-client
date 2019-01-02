import React from "react";
import MessageForm from '../../containers/MessageForm/MessageForm'
import { Card, Image } from 'semantic-ui-react'

const imgStyle = {
  width: 'auto',
  height: '200px',
  borderRadius: '3px',
  padding: '1px'
}

const headerStyle = {
  backgroundColor: 'white'
}

const UserCard = ({user}) => {
  return (
    <Card>
        <Image centered style={imgStyle} src={user.img_url} alt={user.firstname}/>
      <Card.Content>
        <Card.Header style={headerStyle}>{user.firstname} {user.lastname}</Card.Header>
        <Card.Meta>{user.position}</Card.Meta>
        <Card.Meta>@ {user.company}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <MessageForm user={user}/>
      </Card.Content>
    </Card>
  )
}

export default UserCard;

// <svg width="150" height="150">
//   <image xlink:href="/images/wireframe/image.png" x="0" y="0" width="100%" height="100%"></image>
// </svg>
