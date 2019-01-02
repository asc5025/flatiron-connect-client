import React from 'react';
import { Modal, Form, Button, Icon, Header, Image, Message } from 'semantic-ui-react';

class MessageForm extends React.Component {
  state = {
    message: '',
    modalOpen: false,
    messageSent: false
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.message);
    if (this.state.message.length > 0) {
      this.setState({ message: '', messageSent: true })
      setTimeout(() => {
        this.setState({ modalOpen: false, messageSent: false })
      }, 650)
    } else {
      alert('Missing Text')
    }
  }

  handleChange = event => {
    this.setState({ message: event.target.value })
  }

  render(){
    const { img_url, firstname } = this.props.user
    return(
      <Modal
        closeIcon
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={
          <Button onClick={this.handleOpen} primary><Icon name="comment alternate outline"/>Message</Button>}
      >
        <Header as='h3'><Image circular src={img_url}/>{firstname}</Header>
        <Modal.Content>
          <Form success error onSubmit={this.handleSubmit} >
            <Form.TextArea onChange={this.handleChange} label='Message' placeholder={`Send a message to ${firstname}`}/>
            {
              this.state.messageSent ? <Message success header="Message Sent" /> : null
            }
            <Form.Button primary>Send</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}


export default MessageForm
