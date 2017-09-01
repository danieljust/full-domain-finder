const myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};
export const fetchSomeDomains = (count) =>
    fetch(`http://localhost:3000/domains?limit=${count}`, myInit)
        .then(response => response.json());
