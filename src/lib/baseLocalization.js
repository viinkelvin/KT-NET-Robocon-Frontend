export default class BaseLocalization {
	constructor(language) {
		const lang = global.selectedLanguage;
    this.state = {
      lang: language[lang],
    }
  }	

  getLocalization() {
  	return this.state.lang;
  }
}