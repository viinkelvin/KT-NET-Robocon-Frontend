import BaseLocalization from '../../lib/baseLocalization';

export const localizationStrings = () => {
	return new BaseLocalization({
		"en" : {
			title: "Result of Medical Examination",
		},
		"ja" : {
			title: "健康診断の結果",
		},
		"id" : {
			title: "Hasil Pemeriksaan Medis",
		},
		"tl" : {
			title: "Resulta ng Medical Examination",
		}
	}).getLocalization();
}