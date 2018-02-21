import React from 'react'
import PropTypes from 'prop-types'
import { Authenticate } from 'components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionsCreators from 'redux/modules/users'
const createReactClass = require('create-react-class')

const AuthenticateContainer = createReactClass({
	propTypes: {
		isFetching: PropTypes.bool.isRequired,
		error: PropTypes.string.isRequired,
		fetchAndHandleAuthedUser: PropTypes.func.isRequired
	},
	contextTypes: {
		router: PropTypes.object.isRequired
	},
	handleAuth (e) {
		e.preventDefault()
		this.props.fetchAndHandleAuthedUser()
		.then(() => this.context.router.history.replace('feed'))
	},
	render(){
		console.log('Is Fetching', this.props.isFetching)
		return(
			<div>
				<Authenticate
					isFetching={this.props.isFetching}
					error={this.props.error}
					onAuth={this.handleAuth}
				 />
			</div>
		)
	}
})

function mapStateToProps (state) {
	return {
		isFetching: state.users.isFetching,
		error: state.users.error
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(userActionsCreators, dispatch)
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(AuthenticateContainer)