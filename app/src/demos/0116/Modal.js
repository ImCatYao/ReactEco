import React from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'

// style: https://bulma.io/documentation/components/modal/
// api: https://ant.design/components/modal/
export default class Modal extends React.PureComponent {
  ele = document.createElement('div')

  componentDidMount() {
    this.ele.className = 'modal-container'
    document.body.appendChild(this.ele)
  }

  render () {
    if(!this.props.visible) {
      this.ele.remove()
      return null
    }
  
    document.body.appendChild(this.ele)
    const { okText = 'Ok', cancelText ="Cancel", onOk, onCancel, modalTitle, children } = this.props

    return ReactDOM.createPortal((
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head" style={{'justify-content': 'space-between'}}>
            {
              modalTitle ? <p className="modal-card-title">{modalTitle}</p> : <p></p>
            }
            <button className="delete" aria-label="close" onClick={onCancel}></button>
          </header>
          <section className="modal-card-body">
            {children}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={onOk}>{okText}</button>
            <button className="button" onClick={onCancel}>{cancelText}</button>
          </footer>
        </div>
      </div>
    ), this.ele)
  }
}

Modal.propTypes = {
  visible: PropTypes.bool,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  modalTitle: PropTypes.string
}
