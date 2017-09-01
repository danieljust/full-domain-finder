import {createAction} from 'redux-actions';
import * as service from './DomainService';

export const FETCH_DOMAINS_START = 'FETCH_DOMAINS_START';
export const FETCH_DOMAINS_END = 'FETCH_DOMAINS_END';

export const ADD_DOMAIN_TO_HISTORY_START = 'ADD_DOMAIN_TO_HISTORY_START';
export const ADD_DOMAIN_TO_HISTORY_END = 'ADD_DOMAIN_TO_HISTORY_END';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_END = 'REGISTER_USER_END';



export const fetchDomainsStart = createAction(FETCH_DOMAINS_START);
export const fetchDomainsEnd = createAction(FETCH_DOMAINS_END);

export function fetchDomains(count) {
    return (dispatch) => {
        dispatch(fetchDomainsStart());
        service.fetchSomeDomains(count)
            .then(domains => dispatch(fetchDomainsEnd(domains)))
            .catch(err => dispatch(fetchDomainsEnd(err)));
    };
}
