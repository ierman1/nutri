const ADDRESS = 'https://api.nal.usda.gov/fdc/v1/';
const KEY = import.meta.env.VITE_API_KEY;

export default class Api {

    static buildQuery(query, endpoint, extra = '') {
        return `${ADDRESS}/${endpoint}?api_key=${KEY}&query=${encodeURI(query)}${extra}`
    }

    static fetchByName(name) {
        const query = this.buildQuery(name, 'foods/search', '&dataType=Foundation');
        return fetch(query);
    }

}