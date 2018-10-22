import BaseLocalization from '../../lib/baseLocalization';

export const localizationStrings = () => {
	return new BaseLocalization({
		"en" : {
			language: "Change Language",
			domain: "Change Domain Ip",
		},
		"ja" : {
			language: "言語を変えてください",
			domain: "ドメインIpを変更する",
		},
		"id" : {
			language: "Ganti Bahasa",
			domain: "Ganti Domain",
		},
		"tl" : {
			language: "Baguhin ang Wika",
			domain: "Baguhin ang Domain",
		}
	}).getLocalization();
}