import React from 'react';
import SingleDomainCard from './SingleDomainCard';

export const DomainsList = props => (
    <div>
        {
            props.domains.map(domain => (
                <SingleDomainCard key={domain.id} domain={domain}/>
            ))
        }
    </div>
);
