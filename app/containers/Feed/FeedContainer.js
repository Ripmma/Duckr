import React from 'react'
import { Feed } from 'components'
var createReactClass = require('create-react-class')

const FeedContainer = createReactClass({
  render () {
    return (
      <div>
      	<Feed />
      </div>
    )
  }
})

export default FeedContainer