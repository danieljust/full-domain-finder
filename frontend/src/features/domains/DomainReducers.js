import {handleActions} from 'redux-actions';
import * as actions from './DomainActions';

export default handleActions({
        [actions.FETCH_DOMAINS_START]: (state, action) => ({
            ...state,
            pending: true,
            error: null
        }),
        [actions.FETCH_DOMAINS_END]: {
            next: (state, action) => ({
                ...state,
                pending: false,
                domains: action.payload
            }),
            throw: (state, action) => ({
                ...state,
                pending: false,
                error: action.payload
            })
        }
    },
    {
        domains: [],
        pending: false,
        error: null
    });
