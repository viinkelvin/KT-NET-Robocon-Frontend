import BaseLocalization from '../../lib/baseLocalization';

export const localizationStrings = () => {
	return new BaseLocalization({
		"en" : {
			title: "Receptionist",
			firstName:"First Name",
			lastName:"名Last Name",
			address:"Address",
			idCardNo:"ID Card",
			birthdate:"Birthday",
			submit:"Submit",
			placeholder:"Select Birthday"
		},
		"ja" : {
			title: "受付",
			firstName:"名",
			lastName:"姓",
			address:"住所",
			idCardNo:"IDカード",
			birthdate:"生年月日",
			submit:"登録",
			placeholder:"誕生日を選択",
		},
		"id" : {
			title: "Resepsionis",
			firstName:"Nama Depan",
			lastName:"Nama Belakang",
			address:"Alamat",
			idCardNo:"kartu identitas",
			birthdate:"Tanggal Lahir",
			submit:"Registrasi",
			placeholder:"Pilih Ulang Tahun",
		},
		"tl" : {
			title: "Receptionist",
			firstName:"Pangalan",
			lastName:"huling pangalan",
			address:"Address",
			idCardNo:"ID Card",
			birthdate:"Petsa ng kapanganakan",
			submit:"Pagpaparehistro",
			placeholder:"Piliin ang Kaarawan",
		}
	}).getLocalization();
}