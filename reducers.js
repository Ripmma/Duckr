//Users
const initialUserState = {
	lastUpdated: 0,
	info: {
		name: '',
		uid: '',
		avatar: '',
	}
}

function user(state = initialUserState, action) {
	switch (action.type) {
		case FETCHING_USER_SUCCESS :
			return {
				...state,
				info: action.user,
				lastUpdated: action.timestamp,
			}
			default:
				return state
	}
}

const initialState = {
	isFetching: false,
	error: '',
	isAuthed: false,
	authedId: ''
}

function users(state = initialState, action) {
	switch (action.type) {
		case AUTH_USER :
			return {
				...state, 
				isAuthed: true,
				authedId: action.uid,
			}
		case UNAUTH_USER :
			return {
				...state,
				isAuthed: false,
				authedId: '',
			}
		case FETCHING_USER :
			return {
				...state, 
				isFetching: true,
			}
		case FETCHING_USER_FAILURE :
			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		case FETCHING_USER_SUCCESS :
			return action.user === null
				? {
					...state,
					error: '',
					isFetching: false,
				}
				: {
					...state,
					isFetching: false,
					error: '',
					[action.uid]: user(state[action.uid], action)
				}
			default:
				return state
	}
}

// Ducks
const initalState = {
	isFetching : true,
	error : '',
}

function ducks(state = initalState, action) {
	switch(action.type) {
		case: FETCHING_DUCK :
			return {
				...state,
				isFetching: true,
			}
		case: ADD_DUCK :
		case: FETCHING_DUCK_SUCCESS :
			return {
				...state,
				error: '',
				[action.duck.duckId] : action.duckId,
			}
		case: FETCHING_DUCK_ERROR :
			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		case: REMOVE_FETCHING :
			return {
				...state,
				isFetching: false,
				error: '',
			}
		case ADD_MULTIPLE_DUCKS :
			return {
				...state,
				...action
			}
		default :
			return state
	}
}

//Feeds
const initalState = {
	isFetching: false,
	newDucksAvailable: false,
	newDucksToAdd: [],
	error: '',
	duckIds: [], 
}

function feed(state, action) {
	switch(action.type) {
		case: SETTING_FEED_LISTENER :
			return {
				...state,
				isFetching: true,
				error: '',
			}
		case: SETTING_FEED_LISTENER_ERROR :
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		case: SETTING_FEED_LISTENER_SUCCESS : 
			return {
				...state,
				isFetching: false,
				error: '',
				duckIds: action.duckIds,
				newDucksAvailable: false,
			}
		case: ADD_NEW_DUCK_ID_TO_FEED:
			return {
				...state,
				newDucksToAdd: [action.duckId, ...state.newDucksToAdd]
			}
		case: RESET_NEW_DUCKS_AVAILABLE:
			return {
				...state,
				duckIds: [...state.newDucksToAdd, ...state.duckIds],
				newDucksToAdd: [],
				newDucksAvailable: false,
			}
		default: 
			return state
	}
}

//Listeners
export default function listeners (state = {}, action) {
	switch (action.type) {
		case ADD_LISTENER :
			return {
				...state,
				[action.listenerId]: true,
			}
		default:
			return state
	}
}

//Modal
const initialState {
	duckText: '',
	isOpen: false,
}

export default function modal (state = initalState, action) {
	switch (action.type) {
		case OPEN_MODAL :
			return {
				...state,
				isOpen: true,
			}
		case CLOSE_MODAL :
			return {
				...state,
				isOpen: false,
			}
		case UPDATE_DUCK_TEXT {
			return {
				...state,
				duckText: action.newDuckText,
			}
		}
		default:
			return state
	}
}

//usersLikes
const initalState = {
	isFetching: false,
	error: ''
}

export default function usersLikes (state = initalState, action) {
	switch(action.type) {
		case FETCHING_LIKES :
			return {
				...state,
				isFetching: true,
			}
		case FETCING_LIKES_ERROR :
			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		case FETCHING_LIKES_SUCCESS :
			return {
				...state,
				...action.likes,
				isFetching: false,
				error: '',
			}
		case ADD_LIKE :
			return {
				...state,
				[action.duckId]: true
			}
		case: REMOVE_LIKE :
			return Object.keys(state)
				.filter((duckId) => action.duckId !== duckId)
				.reduce((prev, current) => {
					prev[current] = state[current]
					return prev 
				}, {})
		default : 
			return state
	}
}

//likeCount
function count (state, action) {
	switch(action.type) {
		case ADD_LIKE :
			return state + 1
		case REMOVE_LIKE :
			return state - 1
		default :
			return state
	}
}

const initalState = {
	isFetching: false,
	error: '',
}

export default function likeCount (state = initalState, action) {
	switch (action.type) {
		case FETCHING_COUNT :
			return {
				...state,
				isFetching: true,
			}
		case FETCHING_COUNT_ERROR :
			return {
				...state,
				isFetching: false,
				error: action.error,
			}
		case FETCHING_COUNT_SUCCESS :
			return {
				...state,
				...initalState,
				[action.duckId]: action.count
			}
		case ADD_LIKE :
		case REMOVE_LIKE :
			return typeof state[action.duckId] === 'undefined' 
				? state
				: {
					...state,
					[action.duckId]: count(state[action.duckId], action)
				}
		default {
			return state
		}
	}
}

//usersDucks
const initialUsersDuckState = {
  lastUpdated: 0,
  duckIds: [],
}

function usersDuck (state = initialUsersDuckState, action) {
  switch (action.type) {
    case ADD_SINGLE_USERS_DUCK :
      return {
        ...state,
        duckIds: state.duckIds.concat([action.duckId]),
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: true,
  error: '',
}

export default function usersDucks (state = initialState, action) {
  switch (action.type) {
    case FETCHING_USERS_DUCKS :
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USERS_DUCKS_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USERS_DUCKS_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
        [action.uid]: {
          lastUpdated: action.lastUpdated,
          duckIds: action.duckIds,
        },
      }
    case ADD_SINGLE_USERS_DUCK :
      return typeof state[action.uid] === 'undefined'
        ? state
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: usersDuck(state[action.uid], action),
        }
    default :
      return state
  }
}

//Replies
const initialReply = {
	name: '',
	reply: '',
	uid: '',
	timestamp: 0,
	avatar: '',
	replyId: '',
}

function duckReplies(state = initialReply, action) {
	switch(action.type) {
		case ADD_REPLY :
			return {
				...state,
				[action.reply.replyId]: 
			}
		case REMOVE_REPLY :
			return {
				...state,
				[action.reply.replyId]: undefined,
			}
		default :
			return state
	}
}

const initalDuckState = {
	lastUpdated: Date.now(),
	replies: {}
}

function repliesAndLastUpdated(state = initalDuckState, action) {
	switch(action.type) {
		case FETCHING_REPLIES_SUCCESS :
			return {
				...state,
				lastUpdated: action.lastUpdated,
				replies: action.replies,
			}
		case ADD_REPLY :
		case REMOVE_REPLY :
			return {
				...state,
				replies: duckReplies(state.replies, action)
			}
		default :
			return state
	}
}

const initalState = {
	isFetching: true,
	error: '',
}

export default function replies (state = initalState, action) {
	switch(action.type) {
		case FETCHING_REPLIES :
		 return	{
		 	isFetching true,
		 }
		case FETCHING_REPLIES_ERROR :
		case ADD_REPLY_ERROR :
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		case ADD_REPLY :
		case FETCHING_REPLIES_SUCCESS :
		case REMOVE_REPLY :
			return {
				isFetching: false,
				error: '',
				[action.duckId]: repliesAndLastUpdated(state[action.duckId], action)
			}
		default :
			return state
	}
}