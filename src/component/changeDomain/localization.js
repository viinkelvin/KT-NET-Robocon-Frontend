import BaseLocalization from '../../lib/baseLocalization';

export const localizationStrings = () => {
	return new BaseLocalization({
		"en" : {
			title: "Change Domain",
			submit: "Submit",
		},
		"ja" : {
			title: "ドメインの変更",
			submit: "登録",
		},
		"id" : {
			title: "Ubah Domain",
			submit: "Submit",
		},
		"tl" : {
			title: "Baguhin ang Domain",
			submit: "Ipasa",
		}
	}).getLocalization();
}