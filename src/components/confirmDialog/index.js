import confirmSource from './ConfirmDialog'

export default function confirm (props) {
  return new Promise((resolve, reject) =>  {
    if(typeof props === 'string') {
      confirmSource.show({content: props, confirm: () => {
        return resolve(1)
      }, cancle: () => {
        return resolve(0)
      }})
    }else if(props && typeof props === 'object') {
      if(!props.content) {
        throw new Error('props must have content property ')
      }
      confirmSource.show({content: props.content, title: props.title, confirm: () => {
        props.onOk && props.onOk()
        return resolve(1)
      }, cancle() {
        props.onCancel && props.onCancel()
        return resolve(0)
      }, cancelText: props.cancelText
      ,okText: props.okText})
    }
  })
}

