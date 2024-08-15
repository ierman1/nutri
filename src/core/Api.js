const ADDRESS = 'https://api.nal.usda.gov/fdc/v1/';
const KEY = import.meta.env.VITE_API_KEY;

const nutrients = [
    301, 306, 205, 208, 203
];

export default class Api {

    static fetchByName(name) {
        const query = `${ADDRESS}/foods/search?api_key=${KEY}&query=${encodeURI(name)}&dataType=Foundation`;
        return fetch(query);
    }

    static fetchByIds(ids) {
        const query = `${ADDRESS}/foods?api_key=${KEY}&fdcIds=${ids.join(',')}&nutrients=${nutrients.join(',')}`;
        return fetch(query);
    }

}