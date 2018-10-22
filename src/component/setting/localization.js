import BaseLocalization from '../../lib/baseLocalization';

export const localizationStrings = () => {
	return new BaseLocalization({
		"en" : {
			language: "Change Language",
			domain: "Change Domain Ip",
			title: 'Setting',
		},
		"ja" : {
			language: "言語を変えてください",
			domain: "ドメインIpを変更する",
			title: '設定',
		},
		"id" : {
			language: "Ganti Bahasa",
			domain: "Ganti Domain",
			title: "Pengaturan",
		},
		"tl" : {
			language: "Baguhin ang Wika",
			domain: "Baguhin ang Domain",
			title: 'Pagtatakda',
		}
	}).getLocalization();
}