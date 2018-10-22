import BaseLocalization from '../../lib/baseLocalization';

export const localizationStrings = () => {
	return new BaseLocalization({
		"en" : {
			title: "Please Choose Your Language",
			confirmation: "Confirmation",
			confirmation_text: "Are your sure pick this language?",
			ok: "OK",
			cancel: "Cancel",
			en:" English",
			id: "Indonesian",
			ja: "Japanese",
			tl: "Filipino",
		},
		"ja" : {
			title: "言語を選んでください。",
			confirmation:"確認",
			confirmation_text:"この言語を選んでもよろしいですか？",
			ok:"はい",
			cancel:"キャンセル",
			en:"英語",
			id:"インドネシア語",
			ja:"日本語",
			tl:"フィリピン語",
		},
		"id" : {
			title: "Silakan Pilih Bahasa Anda",
			confirmation:"Konfirmasi",
			confirmation_text:"Apakah Anda yakin memilih bahasa ini?",
			ok:"OK",
			cancel:"Membatalkan",
			en:"Bahasa Inggris",
			id:"Bahasa Indonesia",
			ja:"Bahasa Jepang",
			tl:"Bahasa Filipina",
		},
		"tl" : {
			title: "Mangyaring Piliin ang Iyong Wika",
			confirmation:"Kumpirmasyon",
			confirmation_text:"Sigurado ka bang pumili ng wikang ito?",
			ok:"OK",
			cancel:"kanselahin",
			en:"Ingles",
			id:"Indonesian",
			ja:"Japanese",
			tl:"Filipino",
		}
	}).getLocalization();
}