import React from 'react'

export const Language = {
  en: 'I love China',
  cn: '我爱中国'
}

const SloganContext = React.createContext(Language['cn'])

export default SloganContext

export const { Provider, Consumer } = SloganContext
