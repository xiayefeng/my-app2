import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './index.scss'

function ConfirmDialog (props) {
  const {confirm, cancle, title, content, cancelText, okText} = props

  return (
    <div className="dialog-wrap">
      <div className="dialog-mask" />
      <div className="dialog-box">
        <div className="dialog-header">
          <span className="dialog-title">{title}</span>
          <span className="close-btn" onClick={() => {
            cancle()
            confirmSource.hide()
          }} />
        </div>
        <div className="dialog-body">
          {content}
        </div>
        <div className="dialog-footer">
          <button className="cancle-btn" onClick={e => {
            cancle()
            confirmSource.hide()
          }}>{cancelText}</button>
          <button className="sure-btn" onClick={e => {
            confirm()
            confirmSource.hide()
          }}>{okText}</button>
        </div>
      </div>
    </div>
  )
}

ConfirmDialog.propTypes = {
  confirm: PropTypes.func,
  cancle: PropTypes.func,
  title: PropTypes.string,
  // content: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.element
  // ])
  content: PropTypes.node.isRequired
}

ConfirmDialog.defaultProps = {
  confirm: () => confirmSource.hide(),
  cancle: () => confirmSource.hide(),
  title: '标题',
  cancelText: '取消',
  okText: '确定'
}

let node = null

const confirmSource = {
  show(obj){
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<ConfirmDialog content={obj.content} title={obj.title} confirm={obj.confirm} cancle={obj.cancle} okText={obj.okText} cancelText={obj.cancelText} />, node)
  },
  hide(){
    if(node){
      ReactDOM.unmountComponentAtNode(node)
      document.body.removeChild(node)
      node = null
    }
  }
}

export default confirmSource