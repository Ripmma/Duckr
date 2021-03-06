import React from 'react'
import PropTypes from 'prop-types'
import { FacebookAuthButton } from 'components'
import { centeredContainer, largeHeader, errorMsg } from 'sharedStyles/styles.css'

Authenticate.propTypes = {
	error: PropTypes.string.isRequired,
	isFetching: PropTypes.bool.isRequired,
	onAuth: PropTypes.func.isRequired
}

export default function Authenticate ({error, isFetching, onAuth}) {
	return (
		<div className={centeredContainer}>
			<h1 className={largeHeader}>Authenticate</h1>
			<p>Facebook auth button</p>
			<FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
			{error ? <p className={errorMsg}>{error}</p> : null}
		</div>
	)
}