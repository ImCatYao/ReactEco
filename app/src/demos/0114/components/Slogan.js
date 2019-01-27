import React from 'react'
import { Consumer } from '../context'

const Slogan = (props) => {
  return (
    <Consumer>
      {
        slogan => {
          return (
            <div className="Slogan">
              <p className="desc">
                <strong>{slogan}</strong>
              </p>
            </div>
          )
        }
      }
    </Consumer>
  )
}

export default Slogan