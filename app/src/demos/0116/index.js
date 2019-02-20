import React, { Component } from 'react'
import Modal from './Modal'

export default class PortalSample extends Component {
  state = {
    visible: false
  }

  handelOpenModal = () => {
    this.setState(prevState => {
      return {
        visible: true
      }
    })
  }
  handleModalOk = (e) => {
    this.closeModal()
  }

  handleModalCancel = (e) => {
    this.closeModal()
  }

  closeModal = () => {
    this.setState(prevState => {
      return {
        visible: false
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <button className="is-small button" onClick={this.handelOpenModal}>Open Modal</button>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleModalCancel}
          onOk={this.handleModalOk}
        >
          <p>Hello</p>
        </Modal>
      </React.Fragment>
    )
  }
}
