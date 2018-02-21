import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Logout } from 'components'
import { logoutAndUnauth } from 'redux/modules/users'
const createReactClass = require('create-react-class')

const LogoutContainer = createReactClass({
	propTypes: {
		dispatch: PropTypes.func.isRequired
	},
	componentDidMount() {
		this.props.dispatch(logoutAndUnauth()) 
	},
	render() {
		return (
			<div>
				<Logout />
			</div>
		)
	}
})

export default connect()(LogoutContainer)