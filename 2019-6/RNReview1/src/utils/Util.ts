import { WToast } from 'react-native-smart-tip'

export const showToast = (data: string) => {
  const toastOpts = {
    data,
    position: WToast.position.CENTER,
    textColor: '#ffffff',
    backgroundColor: '#1ABC8C'
  }
  WToast.show(toastOpts)
}
