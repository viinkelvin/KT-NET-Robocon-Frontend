import BaseLocalization from '../../lib/baseLocalization';

export const localizationStrings = () => {
	return new BaseLocalization({
		"en" : {
			imgCheckBlood: "Blood Pressure",
			imgGuild: "Guide",
			imgGraph: "Statistics",
			imgMedicine: "Medicine",
			imgReceptionist: "Receptionist",
			imgResult: "Check Result",
			imgSetting: "Setting",
		},
		"ja" : {
			imgCheckBlood: "血圧",
			imgGuild: "ガイド",
			imgGraph: "健康統計",
			imgMedicine: "薬の情報",
			imgReceptionist: "受付",
			imgResult: "健康診断結果",
			imgSetting: "設定",
		},
		"id" : {
			imgCheckBlood: "Tekanan darah",
			imgGuild: "Pemandu",
			imgGraph: "Statistik",
			imgMedicine: "Obat",
			imgReceptionist: "Resepsionis",
			imgResult: "Hasil Periksa",
			imgSetting: "Pengaturan",
		},
		"tl" : {
			imgCheckBlood: "Presyon ng dugo",
			imgGuild: "Gabay",
			imgGraph: "Istatistika",
			imgMedicine: "Gamot",
			imgReceptionist: "Receptionist",
			imgResult: "Resulta ng Suriin",
			imgSetting: "Pagtatakda",
		}
	}).getLocalization();
}