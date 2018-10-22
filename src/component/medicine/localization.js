import BaseLocalization from '../../lib/baseLocalization';

export const localizationStrings = () => {
	return new BaseLocalization({
		"en" : {
			title: "Medicine",
		},
		"ja" : {
			title: "薬の情報",
		},
		"id" : {
			title: "Obat",
		},
		"tl" : {
			title: "Gamot",
		}
	}).getLocalization();
}