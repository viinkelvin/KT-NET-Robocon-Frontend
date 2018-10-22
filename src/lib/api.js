import { AsyncStorage } from "react-native";

class Api {
	async _fetch(options) {
		const domain = global.domain;

		options = {
			method: 'GET',
			url : null,
			body: null,
			headers: {
				lang: global.selectedLanguage,
			},
			...options
		};

		const url = "http://" + domain + "/" + options.url;

	  try {
	    const response = await fetch(url, options);
	    let responseJson = await response.json();
	    return responseJson;
	  } catch (error) {
	    console.error(error);
	  }
	}


	async FBMovies(url) {
		return this._fetch({
			url,
		});
	}

	async getResult(url) {
		return this._fetch({
			url,
		});
	}
}

const api = new Api();
export default api;