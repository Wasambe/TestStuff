var body = document.getElementById('body');

rootonlyyesno = 'no';
searchtreeyesno = 'no';
		
adminyesno = localStorage.getItem("adminyesno");
emergencystartyesno = localStorage.getItem("emergencystartyesno");


 if (adminyesno == "no") {
   var padmin = document.getElementById('padmin');
   padmin.style.display = 'none';
	}else{
	var padmin = document.getElementById('padmin');
   padmin.style.display = 'float:left';
	}

opentreeyesno = '';
startoptions = '';
startoptions = localStorage.getItem("startoptions");
opentreeyesno = localStorage.getItem('opentreeyesno');
if (opentreeyesno == 'yes'){
startoptions = '';
opentreeyesno = '';
}



	if (startoptions == "wilson"){
var myrootemergency = {"data":{"name":"Thomas ~1842","nameid":1,"parentname":"","parentid":""},"height":6,"parent":null,"children":[{"data":{"name":"Maybelle","nameid":"326b9233-50ce-44f5-aafc-e38d88730408","parentname":"Thomas","parentid":"1"},"height":0,"name":"Maybelle"},{"data":{"name":"Martha","nameid":"57ca367e-e475-4c97-ae9b-9aab58984718","parentname":"Thomas","parentid":"1"},"height":0,"name":"Martha"},{"data":{"name":"Joseph 1877","nameid":"e594a2b1-625d-4cb4-ac3a-47fd04a8da69","parentname":"Thomas","parentid":"1"},"height":5,"name":"Joseph 1877","_children":[{"data":{"name":"Tracy","nameid":"0f1a8aaf-2b70-4c12-87df-20f3f1e9ef97","parentname":"Joseph","parentid":"e594a2b1-625d-4cb4-ac3a-47fd04a8da69"},"height":4,"children":null,"name":"Tracy","_children":[{"data":{"name":"Thomas Sr","nameid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8","parentname":"Tracy","parentid":"0f1a8aaf-2b70-4c12-87df-20f3f1e9ef97"},"height":3,"children":null,"name":"Thomas Sr","_children":[{"data":{"name":"Thomas Jr","nameid":"dd2cbfb0-cbfe-40d8-83f8-701a15ee7d05","parentname":"Thomas Sr","parentid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8"},"height":2,"children":null,"name":"Thomas Jr","_children":[{"data":{"name":"Marshall","nameid":"d9efc50e-ba0a-4612-8194-a3351e585a90","parentname":"Thomas Jr","parentid":"dd2cbfb0-cbfe-40d8-83f8-701a15ee7d05"},"height":1,"children":null,"name":"Marshall","_children":[{"data":{"name":"Taj","nameid":"b4ec858b-404b-4a1f-90f8-4770c8c31c22","parentname":"Marshall","parentid":"d9efc50e-ba0a-4612-8194-a3351e585a90"},"height":0,"name":"Taj"},{"data":{"name":"Tariq","nameid":"144938b0-b28f-4873-9e4b-46bbc8cf56d7","parentname":"Marshall","parentid":"d9efc50e-ba0a-4612-8194-a3351e585a90"},"height":0,"name":"Tariq"},{"data":{"name":"Taiquon","nameid":"d2e1a500-ac6a-49a0-b4e1-85534a5b69fb","parentname":"Marshall","parentid":"d9efc50e-ba0a-4612-8194-a3351e585a90"},"height":0,"name":"Taiquon"}]},{"data":{"name":"Shawn","nameid":"9e4832be-9ee4-43f2-9623-221dc59d6eb8","parentname":"Thomas Jr","parentid":"dd2cbfb0-cbfe-40d8-83f8-701a15ee7d05"},"height":0,"name":"Shawn"}]},{"data":{"name":"Sheryl","nameid":"ccc8cfdd-c6d6-40ca-992e-39b4c5916bf2","parentname":"Thomas Sr","parentid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8"},"height":2,"children":null,"name":"Sheryl","_children":[{"data":{"name":"Stacy","nameid":"906ea5ee-18bf-43c4-98eb-54f3dacf5eaa","parentname":"Sheryl","parentid":"ccc8cfdd-c6d6-40ca-992e-39b4c5916bf2"},"height":0,"name":"Stacy"},{"data":{"name":"Monique","nameid":"09806f8a-3c29-4943-a6ff-07f71561fae4","parentname":"Sheryl","parentid":"ccc8cfdd-c6d6-40ca-992e-39b4c5916bf2"},"height":1,"children":null,"name":"Monique","_children":[{"data":{"name":"Angela","nameid":"e626214d-ca5d-49de-acf3-6a6b6d4c4891","parentname":"Monique","parentid":"09806f8a-3c29-4943-a6ff-07f71561fae4"},"height":0,"name":"Angela"},{"data":{"name":"Brooklyn","nameid":"335d07f1-7d73-41b7-a28d-799757390648","parentname":"Monique","parentid":"09806f8a-3c29-4943-a6ff-07f71561fae4"},"height":0,"name":"Brooklyn"},{"data":{"name":"Stacy","nameid":"fb031c06-9b9e-4e53-add8-f56c9e0ddbd5","parentname":"Monique","parentid":"09806f8a-3c29-4943-a6ff-07f71561fae4"},"height":0,"name":"Stacy"},{"data":{"name":"Lennox","nameid":"bb442300-a19f-434f-8dce-b902405ea9c0","parentname":"Monique","parentid":"09806f8a-3c29-4943-a6ff-07f71561fae4"},"height":0,"name":"Lennox"}]}]},{"data":{"name":"Michael","nameid":"f30fb65f-0e9e-45cc-b714-d4089c98d65a","parentname":"Thomas Sr","parentid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8"},"height":0,"name":"Michael"},{"data":{"name":"David","nameid":"e648a99d-0fdf-4fd7-9895-cc3eccc34a7e","parentname":"Thomas Sr","parentid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8"},"height":0,"name":"David"}]},{"data":{"name":"Lynette","nameid":"5a51a43b-d146-4ec9-8e58-20daa0bc6992","parentname":"Tracy","parentid":"0f1a8aaf-2b70-4c12-87df-20f3f1e9ef97"},"height":1,"children":null,"name":"Lynette","_children":[{"data":{"name":"Dana","nameid":"32a73e09-a581-40c7-96a4-b8573f7660fb","parentname":"Lynette","parentid":"5a51a43b-d146-4ec9-8e58-20daa0bc6992"},"height":0,"name":"Dana"}]},{"data":{"name":"Gilbert","nameid":"6e6afd4a-0b47-4cd5-ab19-a24ab14d9d0a","parentname":"Tracy","parentid":"0f1a8aaf-2b70-4c12-87df-20f3f1e9ef97"},"height":0,"name":"Gilbert"}]},{"data":{"name":"Irma Jean","nameid":"b548b308-6509-45bc-9bfe-1a0263218466","parentname":"Joseph","parentid":"e594a2b1-625d-4cb4-ac3a-47fd04a8da69"},"height":4,"children":null,"name":"Irma Jean","_children":[{"data":{"name":"Tracy Johnson","nameid":"4e7c26c0-bc9c-490b-be18-e42754131dfb","parentname":"Irma Jean","parentid":"b548b308-6509-45bc-9bfe-1a0263218466"},"height":3,"children":null,"name":"Tracy Johnson","_children":[{"data":{"name":"Craig Johnson","nameid":"65430f78-9bfc-4d52-9771-8e442b179875","parentname":"Tracy Johnson","parentid":"4e7c26c0-bc9c-490b-be18-e42754131dfb"},"height":2,"children":null,"name":"Craig Johnson","_children":[{"data":{"name":"Brandi Johnson","nameid":"e5539e68-a19c-4f6e-a6e3-a96dead2fbd7","parentname":"Craig Johnson","parentid":"65430f78-9bfc-4d52-9771-8e442b179875"},"height":1,"children":null,"name":"Brandi Johnson","_children":[{"data":{"name":"Miya Johnson-Streeter","nameid":"d932dfa9-e741-492a-a1b5-daa7a29d8f9b","parentname":"Brandi Johnson","parentid":"e5539e68-a19c-4f6e-a6e3-a96dead2fbd7"},"height":0,"name":"Miya Johnson-Streeter"},{"data":{"name":"Dylan Johnson-Streeter","nameid":"bc8a64b4-6893-4fb2-9311-b541c3ff4f49","parentname":"Brandi Johnson","parentid":"e5539e68-a19c-4f6e-a6e3-a96dead2fbd7"},"height":0,"name":"Dylan Johnson-Streeter"},{"data":{"name":"Arielle Amani Olden","nameid":"85423503-593f-44fc-b7db-13441be2e0b9","parentname":"Brandi Johnson","parentid":"e5539e68-a19c-4f6e-a6e3-a96dead2fbd7"},"height":0,"name":"Arielle Amani Olden"}]},{"data":{"name":"Traci Johnson","nameid":"c0cda4f1-cf48-4f6f-a227-5d09017b9f81","parentname":"Craig Johnson","parentid":"65430f78-9bfc-4d52-9771-8e442b179875"},"height":1,"children":null,"name":"Traci Johnson","_children":[{"data":{"name":"Logan Parker Smith","nameid":"ea6eb6a5-3211-4eee-8663-fd276950d2a9","parentname":"Traci Johnson","parentid":"c0cda4f1-cf48-4f6f-a227-5d09017b9f81"},"height":0,"name":"Logan Parker Smith"}]}]},{"data":{"name":"Tonya Johnson","nameid":"8c5c66dc-aeef-4e3a-8d0a-6938bc6ddd68","parentname":"Tracy Johnson","parentid":"4e7c26c0-bc9c-490b-be18-e42754131dfb"},"height":0,"name":"Tonya Johnson"},{"data":{"name":"Collette Johnson","nameid":"5d8ddb39-c580-4ae1-866f-11d3f4850c66","parentname":"Tracy Johnson","parentid":"4e7c26c0-bc9c-490b-be18-e42754131dfb"},"height":1,"children":null,"name":"Collette Johnson","_children":[{"data":{"name":"Connor Johnson","nameid":"78388986-0474-40fb-9db9-ea2be5513a98","parentname":"Collette","parentid":"5d8ddb39-c580-4ae1-866f-11d3f4850c66"},"height":0,"name":"Connor Johnson"}]},{"data":{"name":"Brant Johnson","nameid":"0aeae9db-00c2-438f-a183-581db8251f19","parentname":"Tracy Johnson","parentid":"4e7c26c0-bc9c-490b-be18-e42754131dfb"},"height":0,"name":"Brant Johnson"}]},{"data":{"name":"Gwendolyn","nameid":"f065f6af-bc6e-4801-8bf6-070c04266fff","parentname":"Irma Jean","parentid":"b548b308-6509-45bc-9bfe-1a0263218466"},"height":3,"children":null,"name":"Gwendolyn","_children":[{"data":{"name":"Robert","nameid":"e4138991-f238-456b-8c2f-e693e2c8d237","parentname":"Gwendolyn","parentid":"f065f6af-bc6e-4801-8bf6-070c04266fff"},"height":2,"children":null,"name":"Robert","_children":[{"data":{"name":"Charles","nameid":"c01b265d-cdff-4f72-a32b-680e0b6a1043","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":1,"children":null,"name":"Charles","_children":[{"data":{"name":"Charles Jr","nameid":"aa70bfb5-286f-42b2-8176-e7bac47b8420","parentname":"Charles","parentid":"c01b265d-cdff-4f72-a32b-680e0b6a1043"},"height":0,"name":"Charles Jr"}]},{"data":{"name":"Gwen","nameid":"964cca32-fd0b-4bce-b3b2-3d38931523fc","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"Gwen"},{"data":{"name":"Dominique","nameid":"866dbbc2-9f11-41d8-b655-e7dd7542d8ae","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"Dominique"},{"data":{"name":"DoRon","nameid":"390a706b-c79a-4592-99f3-9a3efad6db52","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"DoRon"},{"data":{"name":"Dashia","nameid":"bb4204dd-7c5b-45b0-a3b9-9bcd5eee5391","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"Dashia"},{"data":{"name":"Jaylen","nameid":"38d088af-52d2-4cb1-8b64-93ee88d03ced","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"Jaylen"}]},{"data":{"name":"Aaron","nameid":"7c81b3e6-4e69-4c2a-b8b7-c685fc865d99","parentname":"Gwendolyn","parentid":"f065f6af-bc6e-4801-8bf6-070c04266fff"},"height":1,"children":null,"name":"Aaron","_children":[{"data":{"name":"Son 1","nameid":"f706e076-2782-44c5-be55-7faeae4cc8ba","parentname":"Aaron","parentid":"7c81b3e6-4e69-4c2a-b8b7-c685fc865d99"},"height":0,"name":"Son 1"},{"data":{"name":"Son 2","nameid":"07ce0a59-ba6b-461c-bcfa-633d938e87ed","parentname":"Aaron","parentid":"7c81b3e6-4e69-4c2a-b8b7-c685fc865d99"},"height":0,"name":"Son 2"}]},{"data":{"name":"Edward","nameid":"476d0428-c827-4660-8a77-68fecf1f4d20","parentname":"Gwendolyn","parentid":"f065f6af-bc6e-4801-8bf6-070c04266fff"},"height":2,"children":null,"name":"Edward","_children":[{"data":{"name":"Edward Jr","nameid":"cfcb75d6-59f6-4369-9499-b26d84b57f31","parentname":"Edward","parentid":"476d0428-c827-4660-8a77-68fecf1f4d20"},"height":1,"children":null,"name":"Edward Jr","_children":[{"data":{"name":"Edward 3rd","nameid":"049aa417-b7cb-47ba-9a42-7354590818fa","parentname":"Edward Jr","parentid":"cfcb75d6-59f6-4369-9499-b26d84b57f31"},"height":0,"name":"Edward 3rd"}]},{"data":{"name":"Martel","nameid":"3756425d-f6ce-421e-91af-92a202aea089","parentname":"Edward","parentid":"476d0428-c827-4660-8a77-68fecf1f4d20"},"height":0,"name":"Martel"}]},{"data":{"name":"Kimberly","nameid":"21b9ed9c-09d4-436f-931c-6b4177d8fd69","parentname":"Gwendolyn","parentid":"f065f6af-bc6e-4801-8bf6-070c04266fff"},"height":0,"name":"Kimberly"}]},{"data":{"name":"Beverly","nameid":"8175ca69-aedb-409c-8877-d8219077f0de","parentname":"Irma Jean","parentid":"b548b308-6509-45bc-9bfe-1a0263218466"},"height":2,"children":null,"name":"Beverly","_children":[{"data":{"name":"Richard 3rd","nameid":"33232195-50e2-4861-9ae1-769e6bf43ffa","parentname":"Beverly","parentid":"8175ca69-aedb-409c-8877-d8219077f0de"},"height":1,"children":null,"name":"Richard 3rd","_children":[{"data":{"name":"Richard 4th","nameid":"ae03edb1-3abc-4775-98b0-04e703ed19ba","parentname":"Richard III","parentid":"33232195-50e2-4861-9ae1-769e6bf43ffa"},"height":0,"name":"Richard 4th"}]}]}]}]},{"data":{"name":"Elijah 1881","nameid":"cc33a401-9cef-4d96-af90-f553fb60a01a","parentname":"Thomas","parentid":"1"},"height":4,"name":"Elijah 1881","_children":[{"data":{"name":"Elijah Jr","nameid":"dedfb62d-b1e7-4614-bcd6-1ca2b636e84a","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Elijah Jr"},{"data":{"name":"Juanita","nameid":"32da51d5-693b-45ad-a09a-9c7880973ad1","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Juanita"},{"data":{"name":"Howard","nameid":"bf25fd68-4941-4ff1-9f63-86b07597139a","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Howard"},{"data":{"name":"Gwendolyn","nameid":"8ccd725a-f97f-4403-9c85-9abf99c59b32","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":3,"children":null,"name":"Gwendolyn","_children":[{"data":{"name":"Carolese","nameid":"c1de20ca-4b96-47ee-b6eb-5b8f32a2af59","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Carolese"},{"data":{"name":"Alfred","nameid":"8bc72e44-676e-4ef0-a017-528bd618ba3e","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Alfred"},{"data":{"name":"Wilson","nameid":"e64edb79-8a64-4472-85d9-5f77e396b423","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Wilson"},{"data":{"name":"Geraldine","nameid":"e0397915-376a-4bad-a92d-d2021738b142","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Geraldine"},{"data":{"name":"Juanita","nameid":"7db80d0c-f739-4eda-b7b8-fc983fa5165e","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Juanita"},{"data":{"name":"Richard","nameid":"4d301f50-5f0d-4c42-a39c-9fd4d287664d","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":2,"children":null,"name":"Richard","_children":[{"data":{"name":"Michela","nameid":"c5bdc392-a945-4475-b993-500042d94778","parentname":"Richard","parentid":"4d301f50-5f0d-4c42-a39c-9fd4d287664d"},"height":1,"children":null,"name":"Michela","_children":[{"data":{"name":"A'nylah","nameid":"98749811-d0db-443b-aea2-54ce63e69ad6","parentname":"Michela","parentid":"c5bdc392-a945-4475-b993-500042d94778"},"height":0,"name":"A'nylah"}]}]},{"data":{"name":"Coretha","nameid":"1af4e094-63f4-403d-86c4-457bd1bf0f4b","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Coretha"}]},{"data":{"name":"Margaret","nameid":"8873f016-3b3c-4041-9e4c-012aa326e9ec","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":1,"children":null,"name":"Margaret","_children":[{"data":{"name":"Kimberly","nameid":"2768e60f-7de4-422c-a025-48f05fda65b4","parentname":"Margaret","parentid":"8873f016-3b3c-4041-9e4c-012aa326e9ec"},"height":0,"name":"Kimberly"},{"data":{"name":"Avis","nameid":"42ce114b-913b-4b75-a821-673f729de42e","parentname":"Margaret","parentid":"8873f016-3b3c-4041-9e4c-012aa326e9ec"},"height":0,"name":"Avis"},{"data":{"name":"James","nameid":"d8c49b30-4993-4f18-a35a-d902c56a9499","parentname":"Margaret","parentid":"8873f016-3b3c-4041-9e4c-012aa326e9ec"},"height":0,"name":"James"}]},{"data":{"name":"James","nameid":"95f84bee-e964-48aa-9d5f-2f04dc0b6684","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"James"},{"data":{"name":"Herman","nameid":"cf18d9b1-6161-4a0d-b796-e9c2026e37f6","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Herman"},{"data":{"name":"Frederick","nameid":"8835a91b-7701-4cd0-a6d8-d8e3941464b5","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":2,"children":null,"name":"Frederick","_children":[{"data":{"name":"Valerie","nameid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2","parentname":"Frederick","parentid":"8835a91b-7701-4cd0-a6d8-d8e3941464b5"},"height":1,"children":null,"name":"Valerie","_children":[{"data":{"name":"Randy","nameid":"a7cf1243-b4c0-4df3-9055-80cee623b5c5","parentname":"Valerie","parentid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2"},"height":0,"name":"Randy"},{"data":{"name":"Miranda","nameid":"491cbef8-bc4a-4c5b-b5c4-96b22efe2886","parentname":"Valerie","parentid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2"},"height":0,"name":"Miranda"},{"data":{"name":"Monica","nameid":"4fbf23cb-169e-4d65-859f-63569da6e896","parentname":"Valerie","parentid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2"},"height":0,"name":"Monica"},{"data":{"name":"Kristen","nameid":"d7bf017a-6c50-4c6e-890c-4614ee69fbd8","parentname":"Valerie","parentid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2"},"height":0,"name":"Kristen"}]},{"data":{"name":"Garrett","nameid":"5b9f72cb-6371-41a2-bfb0-8648ffcd6177","parentname":"Frederick","parentid":"8835a91b-7701-4cd0-a6d8-d8e3941464b5"},"height":0,"name":"Garrett"}]},{"data":{"name":"Frances","nameid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":3,"children":null,"name":"Frances","_children":[{"data":{"name":"Maritena","nameid":"408ae57d-2986-4fd9-9b94-244c55d6a60d","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":1,"children":null,"name":"Maritena","_children":[{"data":{"name":"Darrius","nameid":"051cc44f-7ac9-4cc2-9bd3-1dbc0176cd4f","parentname":"Maritena","parentid":"408ae57d-2986-4fd9-9b94-244c55d6a60d"},"height":0,"name":"Darrius"},{"data":{"name":"Helena","nameid":"e96e2af9-34c0-4242-a7d2-a69821d06209","parentname":"Maritena","parentid":"408ae57d-2986-4fd9-9b94-244c55d6a60d"},"height":0,"name":"Helena"},{"data":{"name":"Albert","nameid":"f926bfc5-ad79-44f6-b42f-068d385d2fc8","parentname":"Maritena","parentid":"408ae57d-2986-4fd9-9b94-244c55d6a60d"},"height":0,"name":"Albert"}]},{"data":{"name":"Luwena","nameid":"fa000e38-005f-4df5-bfd0-65ae94cff88e","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":2,"children":null,"name":"Luwena","_children":[{"data":{"name":"Kayla Reese","nameid":"4171de88-4d11-4332-a5eb-3e09c2b07461","parentname":"Luwena","parentid":"fa000e38-005f-4df5-bfd0-65ae94cff88e"},"height":1,"children":null,"name":"Kayla Reese","_children":[{"data":{"name":"Madyson","nameid":"5ebd4aca-6efd-4de3-874a-6ef4f7db2845","parentname":"Kayla Reese","parentid":"4171de88-4d11-4332-a5eb-3e09c2b07461"},"height":0,"name":"Madyson"}]}]},{"data":{"name":"Francena","nameid":"f02848a0-9f63-408b-aa03-76a61066fc3b","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":2,"children":null,"name":"Francena","_children":[{"data":{"name":"Adrian","nameid":"0c8f314f-6e1f-462a-a0aa-c8c735fb22ea","parentname":"Francena","parentid":"f02848a0-9f63-408b-aa03-76a61066fc3b"},"height":1,"children":null,"name":"Adrian","_children":[{"data":{"name":"Ivory","nameid":"d6dd4e3d-dfea-4893-a3bc-5eede62f27de","parentname":"Adrian","parentid":"0c8f314f-6e1f-462a-a0aa-c8c735fb22ea"},"height":0,"name":"Ivory"},{"data":{"name":"Ayanna","nameid":"e821d993-2a00-4549-a445-62fa9286ac08","parentname":"Adrian","parentid":"0c8f314f-6e1f-462a-a0aa-c8c735fb22ea"},"height":0,"name":"Ayanna"}]},{"data":{"name":"April","nameid":"7fbed228-5162-4f09-924a-eb45f78d07d3","parentname":"Francena","parentid":"f02848a0-9f63-408b-aa03-76a61066fc3b"},"height":1,"children":null,"name":"April","_children":[{"data":{"name":"Donta","nameid":"8f87d563-b8d6-4cba-b5d9-ff894464d270","parentname":"April","parentid":"7fbed228-5162-4f09-924a-eb45f78d07d3"},"height":0,"name":"Donta"},{"data":{"name":"Allen","nameid":"e96db594-5c83-4fa5-a650-7e42cfc4c672","parentname":"April","parentid":"7fbed228-5162-4f09-924a-eb45f78d07d3"},"height":0,"name":"Allen"}]}]},{"data":{"name":"Jackie","nameid":"c31b99aa-7e89-40df-828c-e0a1527e8d61","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":2,"children":null,"name":"Jackie","_children":[{"data":{"name":"Sean","nameid":"aa6ffeaa-dcd9-4ba6-8bc2-0c40761dd486","parentname":"Jackie","parentid":"c31b99aa-7e89-40df-828c-e0a1527e8d61"},"height":1,"children":null,"name":"Sean","_children":[{"data":{"name":"Kayah","nameid":"cfada2b3-f466-4069-b37a-a6db0ba6bd56","parentname":"Sean","parentid":"aa6ffeaa-dcd9-4ba6-8bc2-0c40761dd486"},"height":0,"name":"Kayah"},{"data":{"name":"Kelsy","nameid":"100ff3bf-044e-4ce6-970e-5e6a3cf7819e","parentname":"Sean","parentid":"aa6ffeaa-dcd9-4ba6-8bc2-0c40761dd486"},"height":0,"name":"Kelsy"}]}]},{"data":{"name":"Fredrick","nameid":"2fc2271f-430b-4601-b4d0-884da1454450","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":1,"children":null,"name":"Fredrick","_children":[{"data":{"name":"Fred","nameid":"2058d697-1712-4d41-8e8a-7858fe5388de","parentname":"Fredrick","parentid":"2fc2271f-430b-4601-b4d0-884da1454450"},"height":0,"name":"Fred"}]}]},{"data":{"name":"Horatio","nameid":"5d760af7-5132-4530-acb8-d074425a464c","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Horatio"}]},{"data":{"name":"Timothy 1883","nameid":"679ecce6-138a-4337-af40-495f3a132b02","parentname":"Thomas","parentid":"1"},"height":5,"name":"Timothy 1883","_children":[{"data":{"name":"Anna Rossie 1908","nameid":"4e99f224-b969-4f95-a5c2-125e5649bbb0","parentname":"Timothy","parentid":"679ecce6-138a-4337-af40-495f3a132b02"},"height":4,"children":null,"name":"Anna Rossie 1908","_children":[{"data":{"name":"Anna Marie","nameid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":3,"children":null,"name":"Anna Marie","_children":[{"data":{"name":"Joyce","nameid":"fcd3b22b-e08c-4174-95e5-089fe1e4ad52","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":2,"children":null,"name":"Joyce","_children":[{"data":{"name":"Rena","nameid":"06279ba3-c053-435e-be46-a3cc65ebf76d","parentname":"Joyce","parentid":"fcd3b22b-e08c-4174-95e5-089fe1e4ad52"},"height":1,"children":null,"name":"Rena","_children":[{"data":{"name":"Brianna","nameid":"b2c3471c-54e1-46da-81a6-76ce5e177795","parentname":"Rena","parentid":"06279ba3-c053-435e-be46-a3cc65ebf76d"},"height":0,"name":"Brianna"},{"data":{"name":"Brian","nameid":"23721a3f-3648-4116-846b-35257d4c27f7","parentname":"Rena","parentid":"06279ba3-c053-435e-be46-a3cc65ebf76d"},"height":0,"name":"Brian"},{"data":{"name":"Daughter","nameid":"2ff57478-ada6-4121-8a93-f234e2bc2319","parentname":"Rena","parentid":"06279ba3-c053-435e-be46-a3cc65ebf76d"},"height":0,"name":"Daughter"}]},{"data":{"name":"David","nameid":"0ad47dcc-bc47-4751-b5b4-39430710997a","parentname":"Joyce","parentid":"fcd3b22b-e08c-4174-95e5-089fe1e4ad52"},"height":1,"children":null,"name":"David","_children":[{"data":{"name":"Davisha","nameid":"5e1e8de1-cfcb-4b7a-a353-5700527c3ccf","parentname":"David","parentid":"0ad47dcc-bc47-4751-b5b4-39430710997a"},"height":0,"name":"Davisha"},{"data":{"name":"Davitona","nameid":"b406a48e-92c5-4f9a-a29c-6be1cc34b9cb","parentname":"David","parentid":"0ad47dcc-bc47-4751-b5b4-39430710997a"},"height":0,"name":"Davitona"},{"data":{"name":"David","nameid":"5a13bafd-7ea6-47a7-a62b-a092cc5f4562","parentname":"David","parentid":"0ad47dcc-bc47-4751-b5b4-39430710997a"},"height":0,"name":"David"}]},{"data":{"name":"Tom","nameid":"72d3e310-25cf-4e23-bb2f-9e50c1ac02a3","parentname":"Joyce","parentid":"fcd3b22b-e08c-4174-95e5-089fe1e4ad52"},"height":1,"children":null,"name":"Tom","_children":[{"data":{"name":"Justin","nameid":"cfc3fef5-813d-47eb-9bfa-222f9755bb49","parentname":"Tom","parentid":"72d3e310-25cf-4e23-bb2f-9e50c1ac02a3"},"height":0,"name":"Justin"},{"data":{"name":"Jada","nameid":"b4cc0bd6-5723-49f3-a99b-0b384820aef4","parentname":"Tom","parentid":"72d3e310-25cf-4e23-bb2f-9e50c1ac02a3"},"height":0,"name":"Jada"}]}]},{"data":{"name":"Edrina","nameid":"9a520422-8e05-46f5-b7ff-db36a189f2af","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":1,"children":null,"name":"Edrina","_children":[{"data":{"name":"Anissa","nameid":"fea9d485-4aa1-4d77-b118-d64cf33a4ae1","parentname":"Edrina","parentid":"9a520422-8e05-46f5-b7ff-db36a189f2af"},"height":0,"name":"Anissa"},{"data":{"name":"Chauntay","nameid":"700edf99-5772-43ef-8881-2e51bc24e82d","parentname":"Edrina","parentid":"9a520422-8e05-46f5-b7ff-db36a189f2af"},"height":0,"name":"Chauntay"},{"data":{"name":"Johnny","nameid":"c5780fd7-96ef-4bc5-8261-af985a424445","parentname":"Edrina","parentid":"9a520422-8e05-46f5-b7ff-db36a189f2af"},"height":0,"name":"Johnny"}]},{"data":{"name":"Michael","nameid":"f61e00cd-9079-4f76-90ff-c956ca2e84bc","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":2,"children":null,"name":"Michael","_children":[{"data":{"name":"Tim","nameid":"36dbd244-8aba-4ffb-a64f-98de0db6d869","parentname":"Michael","parentid":"f61e00cd-9079-4f76-90ff-c956ca2e84bc"},"height":1,"children":null,"name":"Tim","_children":[{"data":{"name":"Leah","nameid":"9a78eaa1-bd37-439f-9af7-97563227411d","parentname":"Tim","parentid":"36dbd244-8aba-4ffb-a64f-98de0db6d869"},"height":0,"name":"Leah"}]}]},{"data":{"name":"Rosalind","nameid":"6284fe12-6c6a-4600-9cc1-03f6065eb579","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":1,"children":null,"name":"Rosalind","_children":[{"data":{"name":"Mikhael","nameid":"25f33a22-393b-49b7-bcc9-fada1731e987","parentname":"Rosalind","parentid":"6284fe12-6c6a-4600-9cc1-03f6065eb579"},"height":0,"name":"Mikhael"},{"data":{"name":"Kjamiryn","nameid":"c17f381a-d437-438d-939d-6614813e9014","parentname":"Rosalind","parentid":"6284fe12-6c6a-4600-9cc1-03f6065eb579"},"height":0,"name":"Kjamiryn"}]},{"data":{"name":"James","nameid":"a7575d74-76e7-4122-9707-88f2ac9a9012","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":1,"children":null,"name":"James","_children":[{"data":{"name":"Olivia","nameid":"40e7c400-3e88-4ff5-8aaa-8d4d07e1b79b","parentname":"James","parentid":"a7575d74-76e7-4122-9707-88f2ac9a9012"},"height":0,"name":"Olivia"},{"data":{"name":"Victoria","nameid":"e217f084-5d1f-4bba-be9c-dd230ef585fb","parentname":"James","parentid":"a7575d74-76e7-4122-9707-88f2ac9a9012"},"height":0,"name":"Victoria"}]},{"data":{"name":"Kevin","nameid":"1b15ae06-bb5f-4fd0-9a10-53e74964877b","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":0,"name":"Kevin"},{"data":{"name":"Melani","nameid":"b4f8fc28-5e27-4ef0-81c1-25e2ffaf11af","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":0,"name":"Melani"}]},{"data":{"name":"John","nameid":"42b95115-95e9-4941-981d-85e25821718f","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":1,"children":null,"name":"John","_children":[{"data":{"name":"Todd","nameid":"d9595f20-0757-46c7-b235-50bc346da14c","parentname":"John","parentid":"42b95115-95e9-4941-981d-85e25821718f"},"height":0,"name":"Todd"},{"data":{"name":"Stacie","nameid":"a7dcde47-dcf4-418b-ba3a-f2208d67f8dc","parentname":"John","parentid":"42b95115-95e9-4941-981d-85e25821718f"},"height":0,"name":"Stacie"}]},{"data":{"name":"Carol","nameid":"11a7942c-8556-4594-8c94-bafd9e9649d0","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":1,"children":null,"name":"Carol","_children":[{"data":{"name":"Kendra","nameid":"0c024894-6c0b-42b0-b8f4-e90a119622d3","parentname":"Carol","parentid":"11a7942c-8556-4594-8c94-bafd9e9649d0"},"height":0,"name":"Kendra"}]},{"data":{"name":"Ada","nameid":"b71842e0-9326-4d0b-bbf9-1388145dd440","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":2,"children":null,"name":"Ada","_children":[{"data":{"name":"Tyra","nameid":"b7989deb-f380-4d7c-b2e7-e325f9c25485","parentname":"Ada","parentid":"b71842e0-9326-4d0b-bbf9-1388145dd440"},"height":0,"name":"Tyra"},{"data":{"name":"Bernard","nameid":"4ceaf519-1834-4ca3-84d5-9aa1c7e5eb5a","parentname":"Ada","parentid":"b71842e0-9326-4d0b-bbf9-1388145dd440"},"height":0,"name":"Bernard"},{"data":{"name":"Juan","nameid":"d58562ed-84a0-41f4-9416-5329528b0dc7","parentname":"Ada","parentid":"b71842e0-9326-4d0b-bbf9-1388145dd440"},"height":1,"children":null,"name":"Juan","_children":[{"data":{"name":"Kyjuan","nameid":"b5125424-4818-4430-b04c-562c788dcf18","parentname":"Juan","parentid":"d58562ed-84a0-41f4-9416-5329528b0dc7"},"height":0,"name":"Kyjuan"}]}]},{"data":{"name":"Beverly","nameid":"6d0e1047-d5be-4db1-8636-4872f762383b","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":1,"children":null,"name":"Beverly","_children":[{"data":{"name":"Dawn","nameid":"ece8fc3e-d0d0-420e-8751-93f1f17faf6c","parentname":"Beverly","parentid":"6d0e1047-d5be-4db1-8636-4872f762383b"},"height":0,"name":"Dawn"},{"data":{"name":"Vida","nameid":"1cb7cc8e-aa55-48bf-bbf0-d894274c39a7","parentname":"Beverly","parentid":"6d0e1047-d5be-4db1-8636-4872f762383b"},"height":0,"name":"Vida"}]}]},{"data":{"name":"Timothy","nameid":"9cb1f803-b442-4c6a-a0e2-22eef97a9ffb","parentname":"Timothy","parentid":"679ecce6-138a-4337-af40-495f3a132b02"},"height":0,"name":"Timothy"}]},{"data":{"name":"Sumner 1885","nameid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a","parentname":"Thomas","parentid":"1"},"height":4,"name":"Sumner 1885","_children":[{"data":{"name":"Sumner","nameid":"c944356e-99b1-4b86-ad98-e6353c6d940a","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Sumner","_children":[{"data":{"name":"Sandra","nameid":"d854de4c-0273-46b4-b58b-f09af7247b21","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":0,"name":"Sandra"},{"data":{"name":"Sumner Rawn","nameid":"ede2b822-d52a-41cf-a43b-161ad509f19e","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":2,"children":null,"name":"Sumner Rawn","_children":[{"data":{"name":"S Jeyson","nameid":"3420817e-fe47-473f-bb7d-8ca93d03258e","parentname":"Sumner","parentid":"ede2b822-d52a-41cf-a43b-161ad509f19e"},"height":1,"children":null,"name":"S Jeyson","_children":[{"data":{"name":"India","nameid":"f1523a89-f327-4080-9642-40b29910a66f","parentname":"S Jeyson","parentid":"3420817e-fe47-473f-bb7d-8ca93d03258e"},"height":0,"name":"India"},{"data":{"name":"Dana","nameid":"723adcbb-e95f-43cb-abe4-87c09ab42e74","parentname":"S Jeyson","parentid":"3420817e-fe47-473f-bb7d-8ca93d03258e"},"height":0,"name":"Dana"}]},{"data":{"name":"Sumner Rawn","nameid":"443a2d62-3158-4ee6-a182-a1c930471790","parentname":"Sumner","parentid":"ede2b822-d52a-41cf-a43b-161ad509f19e"},"height":0,"name":"Sumner Rawn"}]},{"data":{"name":"Vincent","nameid":"3a9381e2-a044-4cf7-a909-e4db465c7d43","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":0,"name":"Vincent"},{"data":{"name":"Darrawn","nameid":"ba1e2300-76fc-4319-b32b-8bb3da9900c6","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":1,"children":null,"name":"Darrawn","_children":[{"data":{"name":"Briana","nameid":"9a0f79ca-288b-448b-994f-fb7807d8836a","parentname":"Darrawn","parentid":"ba1e2300-76fc-4319-b32b-8bb3da9900c6"},"height":0,"name":"Briana"}]},{"data":{"name":"Joseph","nameid":"edd52b9b-dfb9-4fdf-993e-ced798bc8b84","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":0,"name":"Joseph"},{"data":{"name":"Chester","nameid":"7a48b4c2-b890-4e20-ae59-081ecb731d73","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":1,"children":null,"name":"Chester","_children":[{"data":{"name":"Talon","nameid":"1059a6d5-3b56-46ec-9e75-4c0638902abc","parentname":"Chester","parentid":"7a48b4c2-b890-4e20-ae59-081ecb731d73"},"height":0,"name":"Talon"}]},{"data":{"name":"Crystal","nameid":"1f01eb44-7f26-4789-adba-027ad08af7f9","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":1,"children":null,"name":"Crystal","_children":[{"data":{"name":"Ashley","nameid":"0bfc65aa-739b-4e01-863d-251428609c99","parentname":"Crystal","parentid":"1f01eb44-7f26-4789-adba-027ad08af7f9"},"height":0,"name":"Ashley"}]}]},{"data":{"name":"Benjamin","nameid":"ae1d2ff8-7b81-4b8e-bbc1-386024caa69d","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Benjamin","_children":[{"data":{"name":"Benjamin Jr","nameid":"4094533a-9951-4e1f-bf1a-461f00e14e44","parentname":"Benjamin","parentid":"ae1d2ff8-7b81-4b8e-bbc1-386024caa69d"},"height":1,"children":null,"name":"Benjamin Jr","_children":[{"data":{"name":"Ayanna","nameid":"7929d91c-df5b-4594-a635-d1dabada812a","parentname":"Benjamin Jr","parentid":"4094533a-9951-4e1f-bf1a-461f00e14e44"},"height":0,"name":"Ayanna"},{"data":{"name":"Danya","nameid":"9fcbf239-f254-41db-8b70-2c6326203104","parentname":"Benjamin Jr","parentid":"4094533a-9951-4e1f-bf1a-461f00e14e44"},"height":0,"name":"Danya"},{"data":{"name":"Nikki","nameid":"14238d0e-ee16-43ba-baa3-bf359decfcaa","parentname":"Benjamin Jr","parentid":"4094533a-9951-4e1f-bf1a-461f00e14e44"},"height":0,"name":"Nikki"}]},{"data":{"name":"Sharon","nameid":"bb4c7488-40f3-4196-8276-892365064091","parentname":"Benjamin","parentid":"ae1d2ff8-7b81-4b8e-bbc1-386024caa69d"},"height":2,"children":null,"name":"Sharon","_children":[{"data":{"name":"Chaka","nameid":"baa894fa-67a1-4c79-a57a-f3aa20902682","parentname":"Sharon","parentid":"bb4c7488-40f3-4196-8276-892365064091"},"height":1,"children":null,"name":"Chaka","_children":[{"data":{"name":"Belle' Lynn","nameid":"8a093d7a-92d1-41ee-a01d-d33954769a9f","parentname":"Chaka","parentid":"baa894fa-67a1-4c79-a57a-f3aa20902682"},"height":0,"name":"Belle' Lynn"},{"data":{"name":"Dollie","nameid":"a9d794c8-d012-45f1-9834-d0f6dbc4b92d","parentname":"Chaka","parentid":"baa894fa-67a1-4c79-a57a-f3aa20902682"},"height":0,"name":"Dollie"}]}]}]},{"data":{"name":"Rudolph","nameid":"167a87a5-7cc3-44af-a240-5a6be725d48a","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":2,"children":null,"name":"Rudolph","_children":[{"data":{"name":"Claudia","nameid":"ba755cfa-e757-4758-a843-9a7583a969b5","parentname":"Rudolph","parentid":"167a87a5-7cc3-44af-a240-5a6be725d48a"},"height":1,"children":null,"name":"Claudia","_children":[{"data":{"name":"Mariama","nameid":"2a9e35c5-f798-4089-aee4-367cdb860da8","parentname":"Claudia","parentid":"ba755cfa-e757-4758-a843-9a7583a969b5"},"height":0,"name":"Mariama"},{"data":{"name":"Malene","nameid":"2caf7526-160b-48fa-a559-ec6fefa22f4c","parentname":"Claudia","parentid":"ba755cfa-e757-4758-a843-9a7583a969b5"},"height":0,"name":"Malene"}]},{"data":{"name":"Kevin Sr","nameid":"6bedb333-7311-4808-9779-c9f932b6d8e5","parentname":"Rudolph","parentid":"167a87a5-7cc3-44af-a240-5a6be725d48a"},"height":1,"children":null,"name":"Kevin Sr","_children":[{"data":{"name":"Tashia","nameid":"2382c1dc-e312-41cd-8a8b-c07981e6b4c0","parentname":"Kevin","parentid":"6bedb333-7311-4808-9779-c9f932b6d8e5"},"height":0,"name":"Tashia"},{"data":{"name":"Kevin Jr","nameid":"a4712a1b-a567-4231-bf40-34cb447c8257","parentname":"Kevin Sr","parentid":"6bedb333-7311-4808-9779-c9f932b6d8e5"},"height":0,"name":"Kevin Jr"}]}]},{"data":{"name":"Wilhelmina","nameid":"11222044-edae-4d02-a0a0-e3083f92af76","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Wilhelmina","_children":[{"data":{"name":"Claude Jr","nameid":"8bb3166b-636f-476a-9dba-d7d8f8bf674a","parentname":"Wilhelmina","parentid":"11222044-edae-4d02-a0a0-e3083f92af76"},"height":2,"children":null,"name":"Claude Jr","_children":[{"data":{"name":"Deliria","nameid":"0e7041cd-4d0c-4ccd-a87b-b3d060b5267a","parentname":"Claude Jr","parentid":"8bb3166b-636f-476a-9dba-d7d8f8bf674a"},"height":1,"children":null,"name":"Deliria","_children":[{"data":{"name":"Baylie","nameid":"91cd534a-0078-4546-ab7e-810016c343b1","parentname":"Deliria","parentid":"0e7041cd-4d0c-4ccd-a87b-b3d060b5267a"},"height":0,"name":"Baylie"}]},{"data":{"name":"Claude 3rd","nameid":"79113a4b-8ceb-4fed-95a9-bd04d00d343c","parentname":"Claude Jr","parentid":"8bb3166b-636f-476a-9dba-d7d8f8bf674a"},"height":1,"children":null,"name":"Claude 3rd","_children":[{"data":{"name":"Aerulon","nameid":"5bf32db6-8cca-49b1-abd7-0583f4e983bb","parentname":"Claude 3rd","parentid":"79113a4b-8ceb-4fed-95a9-bd04d00d343c"},"height":0,"name":"Aerulon"}]},{"data":{"name":"Zakkiyah","nameid":"7093ab0c-df5d-4795-b904-03f1e740e8fd","parentname":"Claude Jr","parentid":"8bb3166b-636f-476a-9dba-d7d8f8bf674a"},"height":0,"name":"Zakkiyah"}]}]},{"data":{"name":"Clarence","nameid":"351ec010-27ad-4df7-b8a2-6a51a0e36cc7","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Clarence","_children":[{"data":{"name":"Clarence Jr","nameid":"9c591601-c690-42e4-acc7-922c2f711a70","parentname":"Clarence","parentid":"351ec010-27ad-4df7-b8a2-6a51a0e36cc7"},"height":2,"children":null,"name":"Clarence Jr","_children":[{"data":{"name":"Aja","nameid":"d11eaf9b-8f9d-43e6-be31-87ca9d9a1246","parentname":"Clarence Jr","parentid":"9c591601-c690-42e4-acc7-922c2f711a70"},"height":1,"children":null,"name":"Aja","_children":[{"data":{"name":"De'Lani","nameid":"9a02bf43-f23a-45db-bdf1-205fce2d21f1","parentname":"Aja","parentid":"d11eaf9b-8f9d-43e6-be31-87ca9d9a1246"},"height":0,"name":"De'Lani"}]},{"data":{"name":"Ciara","nameid":"12c57bba-f1e5-49f6-a6cb-256530d47d4d","parentname":"Clarence Jr","parentid":"9c591601-c690-42e4-acc7-922c2f711a70"},"height":1,"children":null,"name":"Ciara","_children":[{"data":{"name":"Myles","nameid":"01a34cb6-7228-497b-9096-5db8e1619d67","parentname":"Ciara","parentid":"12c57bba-f1e5-49f6-a6cb-256530d47d4d"},"height":0,"name":"Myles"}]},{"data":{"name":"Clarence 3rd","nameid":"ee01eee4-6a92-4dba-b083-054157f79cbb","parentname":"Clarence Jr","parentid":"9c591601-c690-42e4-acc7-922c2f711a70"},"height":0,"name":"Clarence 3rd"}]},{"data":{"name":"Lillian","nameid":"5748e9cb-2b35-49c5-8292-51a9c5ac8b40","parentname":"Clarence","parentid":"351ec010-27ad-4df7-b8a2-6a51a0e36cc7"},"height":1,"children":null,"name":"Lillian","_children":[{"data":{"name":"Chloe","nameid":"3c4b00c0-e99a-4a10-9a16-fc695181e475","parentname":"Lillian","parentid":"5748e9cb-2b35-49c5-8292-51a9c5ac8b40"},"height":0,"name":"Chloe"},{"data":{"name":"Bryce","nameid":"4f54cbfe-4db7-40fb-99a1-d5894b339b54","parentname":"Lillian","parentid":"5748e9cb-2b35-49c5-8292-51a9c5ac8b40"},"height":0,"name":"Bryce"},{"data":{"name":"Ava","nameid":"529e426b-3178-4936-9f49-38a84f9a79ac","parentname":"Lillian","parentid":"5748e9cb-2b35-49c5-8292-51a9c5ac8b40"},"height":0,"name":"Ava"}]}]},{"data":{"name":"Edward","nameid":"adf92481-b876-4629-a2e4-b55713f3e6fe","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Edward","_children":[{"data":{"name":"Edward Jr","nameid":"c7ad5963-7ce4-4b27-a499-93c2451dc692","parentname":"Edward","parentid":"adf92481-b876-4629-a2e4-b55713f3e6fe"},"height":2,"children":null,"name":"Edward Jr","_children":[{"data":{"name":"Tamika","nameid":"6e9c343e-3f79-4555-8248-d3860ed989e2","parentname":"Edward Jr","parentid":"c7ad5963-7ce4-4b27-a499-93c2451dc692"},"height":1,"children":null,"name":"Tamika","_children":[{"data":{"name":"Ariel","nameid":"8afde4ac-5c00-4db5-a38e-3d00eab82a54","parentname":"Tamika","parentid":"6e9c343e-3f79-4555-8248-d3860ed989e2"},"height":0,"name":"Ariel"},{"data":{"name":"Tre'Tale","nameid":"a5aeab01-ddc7-4a86-8f12-ef07b34d17f3","parentname":"Tamika","parentid":"6e9c343e-3f79-4555-8248-d3860ed989e2"},"height":0,"name":"Tre'Tale"}]},{"data":{"name":"Edward 3rd","nameid":"990f51fe-7a34-4120-829d-80fbdf79b307","parentname":"Edward Jr","parentid":"c7ad5963-7ce4-4b27-a499-93c2451dc692"},"height":0,"name":"Edward 3rd"},{"data":{"name":"TaJuan","nameid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e","parentname":"Edward Jr","parentid":"c7ad5963-7ce4-4b27-a499-93c2451dc692"},"height":1,"children":null,"name":"TaJuan","_children":[{"data":{"name":"Danny","nameid":"575ed567-683b-4fae-9997-63e700d2a70f","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Danny"},{"data":{"name":"Trevon","nameid":"66933e71-4faf-4eaf-acfc-5d68a0ea6e56","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Trevon"},{"data":{"name":"Izzy","nameid":"c3f9ee4e-a1e7-465c-befa-7b913da3d16e","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Izzy"},{"data":{"name":"Joseph","nameid":"06cc5758-c3c3-4a07-ac73-7c105b4bc764","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Joseph"},{"data":{"name":"Nevaeh","nameid":"f6e16687-5866-4f41-b4b0-d861f8fa02f9","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Nevaeh"},{"data":{"name":"Trinity","nameid":"0128d7ff-f421-480c-a269-ee7735767cb2","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Trinity"},{"data":{"name":"Isaricca","nameid":"b86ceec5-1798-4543-82cf-2b9203ff391d","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Isaricca"}]}]},{"data":{"name":"Clotel (Susan)","nameid":"7bfaf5ca-7d5f-4bad-ac65-25bf815cf81b","parentname":"Edward","parentid":"adf92481-b876-4629-a2e4-b55713f3e6fe"},"height":2,"children":null,"name":"Clotel (Susan)","_children":[{"data":{"name":"Ezra","nameid":"21dc2c1f-9eed-461b-8d14-8ff8195d3114","parentname":"Clotel (Susan)","parentid":"7bfaf5ca-7d5f-4bad-ac65-25bf815cf81b"},"height":1,"children":null,"name":"Ezra","_children":[{"data":{"name":"Caleb","nameid":"3334b90e-a72f-4a16-be60-5650382b5726","parentname":"Ezra","parentid":"21dc2c1f-9eed-461b-8d14-8ff8195d3114"},"height":0,"name":"Caleb"}]},{"data":{"name":"James 3rd","nameid":"36ff488c-8b91-4740-a1b1-fdfb658fd685","parentname":"Clotel (Susan)","parentid":"7bfaf5ca-7d5f-4bad-ac65-25bf815cf81b"},"height":0,"name":"James 3rd"}]},{"data":{"name":"Otis","nameid":"3d9b4cc0-1e2f-41f4-9258-469cd488ec63","parentname":"Edward","parentid":"adf92481-b876-4629-a2e4-b55713f3e6fe"},"height":0,"name":"Otis"}]},{"data":{"name":"Minnie","nameid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Minnie","_children":[{"data":{"name":"Myrtle","nameid":"7ce85bcf-0029-424c-ad76-5c465d235bd0","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":1,"children":null,"name":"Myrtle","_children":[{"data":{"name":"Venda","nameid":"e3f0e655-9cdb-41c9-8949-3d9fad571664","parentname":"Myrtle","parentid":"7ce85bcf-0029-424c-ad76-5c465d235bd0"},"height":0,"name":"Venda"},{"data":{"name":"Demetrius","nameid":"1a5d62dc-f546-4038-9d3c-c202ad0f7dce","parentname":"Myrtle","parentid":"7ce85bcf-0029-424c-ad76-5c465d235bd0"},"height":0,"name":"Demetrius"}]},{"data":{"name":"Robyn","nameid":"30c3ab32-3df3-4bab-95b7-ebd21d082688","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":1,"children":null,"name":"Robyn","_children":[{"data":{"name":"Minnie","nameid":"17b42215-e1d9-43b5-87c4-58a63b79a1df","parentname":"Robyn","parentid":"30c3ab32-3df3-4bab-95b7-ebd21d082688"},"height":0,"name":"Minnie"},{"data":{"name":"Grier","nameid":"2f4bc27a-43e8-4d1a-b1fc-68140c4a9418","parentname":"Robyn","parentid":"30c3ab32-3df3-4bab-95b7-ebd21d082688"},"height":0,"name":"Grier"}]},{"data":{"name":"Hotley Jr","nameid":"c015a054-9c8f-498e-b255-76167531b65c","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":2,"children":null,"name":"Hotley Jr","_children":[{"data":{"name":"T'Angela","nameid":"62bfe507-6c4c-4ea7-99d2-ea6b97c6a005","parentname":"Hotley Jr","parentid":"c015a054-9c8f-498e-b255-76167531b65c"},"height":0,"name":"T'Angela"},{"data":{"name":"Hailey","nameid":"b848d98f-b683-4d14-9f42-5898475bf55a","parentname":"Hotley Jr","parentid":"c015a054-9c8f-498e-b255-76167531b65c"},"height":0,"name":"Hailey"},{"data":{"name":"Sydney","nameid":"c45961a8-5eac-45b9-8ac8-6a3949b37039","parentname":"Hotley Jr","parentid":"c015a054-9c8f-498e-b255-76167531b65c"},"height":0,"name":"Sydney"},{"data":{"name":"Olympia","nameid":"e41cf8d6-fe61-4c9a-aab7-fe5fdfa48215","parentname":"Hotley Jr","parentid":"c015a054-9c8f-498e-b255-76167531b65c"},"height":1,"children":null,"name":"Olympia","_children":[{"data":{"name":"Gieselle","nameid":"3b39f06d-45d7-4352-93dc-02f7397b3a51","parentname":"Olympia","parentid":"e41cf8d6-fe61-4c9a-aab7-fe5fdfa48215"},"height":0,"name":"Gieselle"}]}]},{"data":{"name":"Kimberly","nameid":"dbe66706-7386-45f1-8c7b-6dd6550ef799","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":0,"name":"Kimberly"},{"data":{"name":"Kari","nameid":"2dcb4fae-cbd4-491c-ad06-b6359a96d6e9","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":0,"name":"Kari"},{"data":{"name":"Lillian","nameid":"2fa6f3af-74ab-41d7-be17-e55c36a82e3c","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":1,"children":null,"name":"Lillian","_children":[{"data":{"name":"Chloe","nameid":"a16e8edf-4c1f-4a31-883b-517a96c908e5","parentname":"Lillian","parentid":"2fa6f3af-74ab-41d7-be17-e55c36a82e3c"},"height":0,"name":"Chloe"},{"data":{"name":"Bryce","nameid":"2f54884a-12e8-4276-b408-06ba7f48a042","parentname":"Lillian","parentid":"2fa6f3af-74ab-41d7-be17-e55c36a82e3c"},"height":0,"name":"Bryce"},{"data":{"name":"Ava","nameid":"b5997038-93c7-4a82-8db1-ec92d0788922","parentname":"Lillian","parentid":"2fa6f3af-74ab-41d7-be17-e55c36a82e3c"},"height":0,"name":"Ava"}]}]},{"data":{"name":"Walter","nameid":"05b649e8-58b1-47e9-8a22-2c58c831f082","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Walter","_children":[{"data":{"name":"Amado","nameid":"aa30ba58-db56-4b2b-bd30-252dd06f4f23","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":2,"children":null,"name":"Amado","_children":[{"data":{"name":"Shakena","nameid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b","parentname":"Amado","parentid":"aa30ba58-db56-4b2b-bd30-252dd06f4f23"},"height":1,"children":null,"name":"Shakena","_children":[{"data":{"name":"Tiambra","nameid":"a19968ad-5802-442a-ba37-15441ed750ca","parentname":"Shakena","parentid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b"},"height":0,"name":"Tiambra"},{"data":{"name":"Toure","nameid":"a13c0111-e08c-4315-aa77-470bb11cb305","parentname":"Shakena","parentid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b"},"height":0,"name":"Toure"},{"data":{"name":"Tiandria","nameid":"8d495e54-39b0-4cec-b831-ce755f176cd6","parentname":"Shakena","parentid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b"},"height":0,"name":"Tiandria"},{"data":{"name":"Tianna","nameid":"9295c3bf-70dc-402b-bb29-39ebd288f03e","parentname":"Shakena","parentid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b"},"height":0,"name":"Tianna"}]},{"data":{"name":"Ashley","nameid":"a146f086-796b-4fbf-85e4-f6c61ffefc2a","parentname":"Amado","parentid":"aa30ba58-db56-4b2b-bd30-252dd06f4f23"},"height":1,"children":null,"name":"Ashley","_children":[{"data":{"name":"Four Daughters","nameid":"dec590c4-d680-4144-ba6f-ff3868f14a8e","parentname":"Ashley","parentid":"a146f086-796b-4fbf-85e4-f6c61ffefc2a"},"height":0,"name":"Four Daughters"}]},{"data":{"name":"Amanda","nameid":"44ed7b8a-94f0-4f39-9c9e-b3c15ca902ec","parentname":"Amado","parentid":"aa30ba58-db56-4b2b-bd30-252dd06f4f23"},"height":1,"children":null,"name":"Amanda","_children":[{"data":{"name":"Chloe","nameid":"6e944712-6d1f-4762-82e7-261cf1de89b8","parentname":"Amanda","parentid":"44ed7b8a-94f0-4f39-9c9e-b3c15ca902ec"},"height":0,"name":"Chloe"}]}]},{"data":{"name":"Delena","nameid":"b221525c-3c70-4533-93bc-f15e6746f403","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":2,"children":null,"name":"Delena","_children":[{"data":{"name":"Paul Jr","nameid":"9ca130eb-ee6d-4f61-8b31-2656e9e1ed9f","parentname":"Delena","parentid":"b221525c-3c70-4533-93bc-f15e6746f403"},"height":1,"children":null,"name":"Paul Jr","_children":[{"data":{"name":"Cadie","nameid":"54830291-4385-4694-9f37-ef6f35f5a828","parentname":"Paul Jr","parentid":"9ca130eb-ee6d-4f61-8b31-2656e9e1ed9f"},"height":0,"name":"Cadie"},{"data":{"name":"Isaac","nameid":"5dda6192-3183-4a24-82d1-e8fce111f730","parentname":"Paul Jr","parentid":"9ca130eb-ee6d-4f61-8b31-2656e9e1ed9f"},"height":0,"name":"Isaac"}]},{"data":{"name":"Alandria","nameid":"180ef035-77a2-4341-9294-daf4af5d5156","parentname":"Delena","parentid":"b221525c-3c70-4533-93bc-f15e6746f403"},"height":1,"children":null,"name":"Alandria","_children":[{"data":{"name":"Patrick","nameid":"b32a6266-b986-4de4-b37a-db59d68dae90","parentname":"Alandria","parentid":"180ef035-77a2-4341-9294-daf4af5d5156"},"height":0,"name":"Patrick"}]},{"data":{"name":"Clyde","nameid":"694af8df-833f-4815-96e7-79cd3e1d23f2","parentname":"Delena","parentid":"b221525c-3c70-4533-93bc-f15e6746f403"},"height":1,"children":null,"name":"Clyde","_children":[{"data":{"name":"Caliyah","nameid":"25ca3d3f-60f8-4c7a-a96c-43f506361311","parentname":"Clyde","parentid":"694af8df-833f-4815-96e7-79cd3e1d23f2"},"height":0,"name":"Caliyah"}]},{"data":{"name":"Kaelin","nameid":"b99da16a-0a5a-472b-81d8-4fd8de33e752","parentname":"Delena","parentid":"b221525c-3c70-4533-93bc-f15e6746f403"},"height":0,"name":"Kaelin"}]},{"data":{"name":"Walter Jr","nameid":"7af49bb8-d987-4bcc-9ee7-7ac14edf29ee","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":0,"name":"Walter Jr"},{"data":{"name":"Tami","nameid":"c6c2cbe6-7ab3-4ae8-82b3-b84aebe22c76","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":2,"children":null,"name":"Tami","_children":[{"data":{"name":"Laurkeisha","nameid":"08c027a9-a4fb-401e-9f7a-612edb5680c4","parentname":"Tami","parentid":"c6c2cbe6-7ab3-4ae8-82b3-b84aebe22c76"},"height":1,"children":null,"name":"Laurkeisha","_children":[{"data":{"name":"Sacred","nameid":"34c77471-382c-4f9c-9078-d1d314f633ce","parentname":"Laurkeisha","parentid":"08c027a9-a4fb-401e-9f7a-612edb5680c4"},"height":0,"name":"Sacred"}]}]},{"data":{"name":"Jonah","nameid":"b48d3687-d39b-4b12-ac2f-9f5e15524394","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":1,"children":null,"name":"Jonah","_children":[{"data":{"name":"Pistis","nameid":"a5a150e3-2050-49d2-ad1e-08f36caa2d7f","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Pistis"},{"data":{"name":"Giovannni","nameid":"b6848740-3a10-4c65-9749-2f3cc75fd55c","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Giovannni"},{"data":{"name":"Soloman","nameid":"e26def33-2466-48be-84e3-3b3a7b924330","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Soloman"},{"data":{"name":"Paris","nameid":"7deea66a-8918-45f7-b5c3-8ffe55c3c085","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Paris"},{"data":{"name":"James","nameid":"33cef867-40f3-43cc-a050-5871dc29669f","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"James"},{"data":{"name":"Jonevaeh","nameid":"e0d7772b-4c96-4e4b-9dac-4d0b339a8082","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Jonevaeh"}]}]},{"data":{"name":"Betty","nameid":"51065cfa-2edc-477b-9d50-fa6286a3397a","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Betty","_children":[{"data":{"name":"Gina","nameid":"c45ab36c-50b4-460b-a750-94d47a01d2f5","parentname":"Betty","parentid":"51065cfa-2edc-477b-9d50-fa6286a3397a"},"height":2,"children":null,"name":"Gina","_children":[{"data":{"name":"Nikisha","nameid":"cc6da084-4605-4420-9ea9-3773b467e3e1","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":1,"children":null,"name":"Nikisha","_children":[{"data":{"name":"Rodney","nameid":"a3c94ace-59ff-4d76-a152-d6fabe31aa21","parentname":"Nikisha","parentid":"cc6da084-4605-4420-9ea9-3773b467e3e1"},"height":0,"name":"Rodney"}]},{"data":{"name":"Janaka","nameid":"ef758e01-77dd-4e7f-befe-2b4089b1f41b","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":1,"children":null,"name":"Janaka","_children":[{"data":{"name":"Promise","nameid":"141768ae-4349-4466-ac14-9a74a5bfa783","parentname":"Janaka","parentid":"ef758e01-77dd-4e7f-befe-2b4089b1f41b"},"height":0,"name":"Promise"},{"data":{"name":"Aujonae","nameid":"41926895-6cf4-440e-9663-862085a454bf","parentname":"Janaka","parentid":"ef758e01-77dd-4e7f-befe-2b4089b1f41b"},"height":0,"name":"Aujonae"},{"data":{"name":"Elijah","nameid":"c89c6eb4-d756-4a5d-8601-f0c2c39e2d66","parentname":"Janaka","parentid":"ef758e01-77dd-4e7f-befe-2b4089b1f41b"},"height":0,"name":"Elijah"}]},{"data":{"name":"Najee","nameid":"a5400e92-e7cb-4b79-877a-0d3cb06b68e3","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":0,"name":"Najee"},{"data":{"name":"Vaskey","nameid":"bef28763-6203-4989-a1f5-16b4093b8d75","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":0,"name":"Vaskey"},{"data":{"name":"Nikki","nameid":"687d9e58-19a8-408f-ae4b-2ba213aa4a77","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":0,"name":"Nikki"}]},{"data":{"name":"Traci","nameid":"76b9581b-509b-4283-85ea-cf658616a058","parentname":"Betty","parentid":"51065cfa-2edc-477b-9d50-fa6286a3397a"},"height":1,"children":null,"name":"Traci","_children":[{"data":{"name":"Dylan","nameid":"b6cbff4c-bbb0-445d-8d2f-183b09941f99","parentname":"Traci","parentid":"76b9581b-509b-4283-85ea-cf658616a058"},"height":0,"name":"Dylan"},{"data":{"name":"Reghan","nameid":"d8ed5ab4-3e22-4663-b2f2-a6f071f422ed","parentname":"Traci","parentid":"76b9581b-509b-4283-85ea-cf658616a058"},"height":0,"name":"Reghan"}]},{"data":{"name":"Shawn","nameid":"dfabff19-2d72-497a-8cfe-50a020c5e5c3","parentname":"Betty","parentid":"51065cfa-2edc-477b-9d50-fa6286a3397a"},"height":0,"name":"Shawn"}]},{"data":{"name":"Thomas","nameid":"a376fcb5-d2d3-43b7-9e9f-0a37dc2ee310","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Thomas","_children":[{"data":{"name":"Tona","nameid":"981e2b3f-15bb-434b-afba-c901a88dcc11","parentname":"Thomas","parentid":"a376fcb5-d2d3-43b7-9e9f-0a37dc2ee310"},"height":0,"name":"Tona"},{"data":{"name":"Lillian","nameid":"24639dc4-a0c9-4d29-b115-80ba18f235ae","parentname":"Thomas","parentid":"a376fcb5-d2d3-43b7-9e9f-0a37dc2ee310"},"height":0,"name":"Lillian"},{"data":{"name":"Joseph","nameid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69","parentname":"Thomas","parentid":"a376fcb5-d2d3-43b7-9e9f-0a37dc2ee310"},"height":2,"children":null,"name":"Joseph","_children":[{"data":{"name":"Amber","nameid":"8453dad0-a7a3-4ee4-b8ad-9b3d8989090d","parentname":"Joseph","parentid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69"},"height":1,"children":null,"name":"Amber","_children":[{"data":{"name":"Ayanna","nameid":"44b8e448-6126-4112-930b-c3367f73d4a1","parentname":"Amber","parentid":"8453dad0-a7a3-4ee4-b8ad-9b3d8989090d"},"height":0,"name":"Ayanna"}]},{"data":{"name":"Ashlee","nameid":"63fc6423-844d-46b1-835f-bb2bdf80930b","parentname":"Joseph","parentid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69"},"height":1,"children":null,"name":"Ashlee","_children":[{"data":{"name":"Brayden","nameid":"5e656687-2eb1-4600-8a09-8eb754d1737c","parentname":"Ashlee","parentid":"63fc6423-844d-46b1-835f-bb2bdf80930b"},"height":0,"name":"Brayden"},{"data":{"name":"Ashton","nameid":"688b0b35-727b-4fe9-95dd-dea308295510","parentname":"Ashlee","parentid":"63fc6423-844d-46b1-835f-bb2bdf80930b"},"height":0,"name":"Ashton"}]},{"data":{"name":"Tana","nameid":"4925295f-26cc-4ef3-a617-0f9ec2c60afd","parentname":"Joseph","parentid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69"},"height":0,"name":"Tana"},{"data":{"name":"Tiana","nameid":"d35ac5b4-4872-43b4-9e64-56a51f3b0723","parentname":"Joseph","parentid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69"},"height":0,"name":"Tiana"}]}]},{"data":{"name":"Juanita","nameid":"dc7278b8-ce62-49bb-bf1a-0c976fa7483d","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":0,"name":"Juanita"},{"data":{"name":"Miriam","nameid":"62c59a15-8ea9-47ba-a65c-1dc20fdb9ff2","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Miriam","_children":[{"data":{"name":"Michael","nameid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7","parentname":"Miriam","parentid":"62c59a15-8ea9-47ba-a65c-1dc20fdb9ff2"},"height":2,"children":null,"name":"Michael","_children":[{"data":{"name":"Jastin","nameid":"9c8300bd-0e23-409d-8916-be9d1898553e","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":0,"name":"Jastin"},{"data":{"name":"Mykala","nameid":"3a8d95b0-20ea-4d7e-b822-4af1d0fdb056","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":0,"name":"Mykala"},{"data":{"name":"Derrya","nameid":"e2c81083-e2ee-4d82-a5d0-ca07212c9ccf","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":0,"name":"Derrya"},{"data":{"name":"Tiffany","nameid":"de36b184-acc7-4adf-ad8b-919ef7d5b1df","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":0,"name":"Tiffany"},{"data":{"name":"Shekea","nameid":"8384ebb6-889d-45cd-8b1f-04b5490c98b7","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":1,"children":null,"name":"Shekea","_children":[{"data":{"name":"Taobie","nameid":"60730331-291c-4e45-afb4-33a8271de7ae","parentname":"Shekea","parentid":"8384ebb6-889d-45cd-8b1f-04b5490c98b7"},"height":0,"name":"Taobie"}]}]},{"data":{"name":"Dionne","nameid":"e4084af4-97af-4db1-addb-bb177a7ff70e","parentname":"Miriam","parentid":"62c59a15-8ea9-47ba-a65c-1dc20fdb9ff2"},"height":1,"children":null,"name":"Dionne","_children":[{"data":{"name":"Anthony Jr","nameid":"13d692e4-ff1a-4c00-ac74-1a88d6b80635","parentname":"Dionne","parentid":"e4084af4-97af-4db1-addb-bb177a7ff70e"},"height":0,"name":"Anthony Jr"}]},{"data":{"name":"Ronald","nameid":"ddde8021-1ce8-4bbf-90cf-2b60d91c3730","parentname":"Miriam","parentid":"62c59a15-8ea9-47ba-a65c-1dc20fdb9ff2"},"height":2,"children":null,"name":"Ronald","_children":[{"data":{"name":"Tiffani","nameid":"985de712-2c14-4bd9-97ee-6bed407e1560","parentname":"Ronald","parentid":"ddde8021-1ce8-4bbf-90cf-2b60d91c3730"},"height":0,"name":"Tiffani"},{"data":{"name":"Courtney","nameid":"2dca7e50-d760-407c-83b1-ad553fb13c1e","parentname":"Ronald","parentid":"ddde8021-1ce8-4bbf-90cf-2b60d91c3730"},"height":1,"children":null,"name":"Courtney","_children":[{"data":{"name":"Solomon","nameid":"8e677e3e-ca91-4741-839b-78db8fd5583c","parentname":"Courtney","parentid":"2dca7e50-d760-407c-83b1-ad553fb13c1e"},"height":0,"name":"Solomon"}]}]}]},{"data":{"name":"Howard","nameid":"55bf7d6a-7612-41cf-96c7-935c69587bec","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":2,"children":null,"name":"Howard","_children":[{"data":{"name":"Aaron","nameid":"f0befd12-6ea0-4c97-b890-e22c8728cccc","parentname":"Howard","parentid":"55bf7d6a-7612-41cf-96c7-935c69587bec"},"height":1,"children":null,"name":"Aaron","_children":[{"data":{"name":"Antonio","nameid":"4ebf0677-8979-407c-b257-d8b8db4ad388","parentname":"Aaron","parentid":"f0befd12-6ea0-4c97-b890-e22c8728cccc"},"height":0,"name":"Antonio"},{"data":{"name":"Alex","nameid":"6dff3c54-5e1b-409b-93ec-53d3a47f3f7d","parentname":"Aaron","parentid":"f0befd12-6ea0-4c97-b890-e22c8728cccc"},"height":0,"name":"Alex"},{"data":{"name":"CJ","nameid":"793d1410-c801-4817-b221-546e50186399","parentname":"Aaron","parentid":"f0befd12-6ea0-4c97-b890-e22c8728cccc"},"height":0,"name":"CJ"}]},{"data":{"name":"Kimberly","nameid":"57f876dd-c6fe-4e18-8f1b-837c5cd81417","parentname":"Howard","parentid":"55bf7d6a-7612-41cf-96c7-935c69587bec"},"height":1,"children":null,"name":"Kimberly","_children":[{"data":{"name":"Kailyn","nameid":"6f05ff4e-53d4-469c-aa7e-234e2c0f8204","parentname":"Kimberly","parentid":"57f876dd-c6fe-4e18-8f1b-837c5cd81417"},"height":0,"name":"Kailyn"},{"data":{"name":"Nicholas","nameid":"0471dd46-eec1-4bc1-ae76-3b0e8436cf4d","parentname":"Kimberly","parentid":"57f876dd-c6fe-4e18-8f1b-837c5cd81417"},"height":0,"name":"Nicholas"},{"data":{"name":"Lilly","nameid":"00bbfee3-7da0-4146-a989-93cd670fd192","parentname":"Kimberly","parentid":"57f876dd-c6fe-4e18-8f1b-837c5cd81417"},"height":0,"name":"Lilly"}]}]},{"data":{"name":"Norma Jean","nameid":"7139a9a1-cd6c-4723-9d52-54d514bac964","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":2,"children":null,"name":"Norma Jean","_children":[{"data":{"name":"Sumner","nameid":"526cfa95-f13d-4be8-ac49-cbadd85a64e0","parentname":"Norma Jean","parentid":"7139a9a1-cd6c-4723-9d52-54d514bac964"},"height":1,"children":null,"name":"Sumner","_children":[{"data":{"name":"Juanita","nameid":"61870b10-544b-4a40-b73f-c707873d259e","parentname":"Sumner","parentid":"526cfa95-f13d-4be8-ac49-cbadd85a64e0"},"height":0,"name":"Juanita"},{"data":{"name":"Thomas","nameid":"3ab0dc9e-01b7-4281-ab13-32fad2149c9f","parentname":"Sumner","parentid":"526cfa95-f13d-4be8-ac49-cbadd85a64e0"},"height":0,"name":"Thomas"}]},{"data":{"name":"Ryan","nameid":"5e9477a0-5f63-4994-8bfb-28504ef4ec1f","parentname":"Norma Jean","parentid":"7139a9a1-cd6c-4723-9d52-54d514bac964"},"height":0,"name":"Ryan"}]}]},{"data":{"name":"Beatrice 1888","nameid":"ac896a6e-a5d0-4a90-b5ba-e44837612929","parentname":"Thomas","parentid":"1"},"height":5,"name":"Beatrice 1888","_children":[{"data":{"name":"Ophelia","nameid":"722176cb-2995-427b-8738-9885f0cb4417","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":4,"children":null,"name":"Ophelia","_children":[{"data":{"name":"Johnnie Mae","nameid":"09f87fff-edfe-498e-bb34-9de53a5e8132","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Johnnie Mae"},{"data":{"name":"Doris","nameid":"39d3e45e-c3a0-49b5-86d2-a3da38c28a60","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Doris"},{"data":{"name":"Alton","nameid":"1d419315-4873-48c0-96dd-aeb118fdf8fb","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":3,"children":null,"name":"Alton","_children":[{"data":{"name":"Rose","nameid":"c2c8542a-41c6-4688-bfdb-6d3bab8b18f9","parentname":"Alton","parentid":"1d419315-4873-48c0-96dd-aeb118fdf8fb"},"height":2,"children":null,"name":"Rose","_children":[{"data":{"name":"Karen","nameid":"e9577cf2-edb0-497d-8b06-2d92450dfe48","parentname":"Rose","parentid":"c2c8542a-41c6-4688-bfdb-6d3bab8b18f9"},"height":1,"children":null,"name":"Karen","_children":[{"data":{"name":"Krystal","nameid":"644ac701-e471-4258-b618-43e00e0069eb","parentname":"Karen","parentid":"e9577cf2-edb0-497d-8b06-2d92450dfe48"},"height":0,"name":"Krystal"},{"data":{"name":"Kanesha","nameid":"7743c2e2-df9a-4788-b84d-e5e04ee5b2fa","parentname":"Karen","parentid":"e9577cf2-edb0-497d-8b06-2d92450dfe48"},"height":0,"name":"Kanesha"}]},{"data":{"name":"Deanna","nameid":"e793c3b6-5644-47d5-9f5a-a2bca1836821","parentname":"Rose","parentid":"c2c8542a-41c6-4688-bfdb-6d3bab8b18f9"},"height":1,"children":null,"name":"Deanna","_children":[{"data":{"name":"Prince","nameid":"4eaab3d2-5ffa-45e5-b4ff-4b425fc13c94","parentname":"Deanna","parentid":"e793c3b6-5644-47d5-9f5a-a2bca1836821"},"height":0,"name":"Prince"}]},{"data":{"name":"Jessica","nameid":"b713b1f7-4d94-47c2-8bf3-1202ff9a2548","parentname":"Rose","parentid":"c2c8542a-41c6-4688-bfdb-6d3bab8b18f9"},"height":0,"name":"Jessica"}]},{"data":{"name":"Charlie","nameid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e","parentname":"Alton","parentid":"1d419315-4873-48c0-96dd-aeb118fdf8fb"},"height":1,"children":null,"name":"Charlie","_children":[{"data":{"name":"Zakiah","nameid":"078fe97c-2052-4489-8f99-bb1e6d2bc639","parentname":"Charlie","parentid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e"},"height":0,"name":"Zakiah"},{"data":{"name":"Jameka","nameid":"81f89150-bdb5-4cea-a660-af58043692eb","parentname":"Charlie","parentid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e"},"height":0,"name":"Jameka"},{"data":{"name":"Jeannie","nameid":"36655d40-cbb9-438f-8e35-9e04139edae9","parentname":"Charlie","parentid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e"},"height":0,"name":"Jeannie"},{"data":{"name":"Tony","nameid":"173473b5-1f2c-4e88-bb64-f8da582f808d","parentname":"Charlie","parentid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e"},"height":0,"name":"Tony"}]},{"data":{"name":"Sandra","nameid":"b9f7632e-1cc9-4dea-9356-4ba8a7b51248","parentname":"Alton","parentid":"1d419315-4873-48c0-96dd-aeb118fdf8fb"},"height":2,"children":null,"name":"Sandra","_children":[{"data":{"name":"Tisha","nameid":"84642062-1277-496f-aa6f-1f9b08c7a161","parentname":"Sandra","parentid":"b9f7632e-1cc9-4dea-9356-4ba8a7b51248"},"height":1,"children":null,"name":"Tisha","_children":[{"data":{"name":"Carmen","nameid":"03bbd8e9-9ee3-4c1c-bc13-fec7b41cb64b","parentname":"Tisha","parentid":"84642062-1277-496f-aa6f-1f9b08c7a161"},"height":0,"name":"Carmen"}]},{"data":{"name":"Darnell","nameid":"542acc39-e120-4ab2-90d8-dd7d1dfe33aa","parentname":"Sandra","parentid":"b9f7632e-1cc9-4dea-9356-4ba8a7b51248"},"height":0,"name":"Darnell"}]},{"data":{"name":"Helen","nameid":"8f790c3d-ed1b-44a6-b789-8abee1c314a4","parentname":"Alton","parentid":"1d419315-4873-48c0-96dd-aeb118fdf8fb"},"height":0,"name":"Helen"}]},{"data":{"name":"RJ","nameid":"2e70ba6a-6273-4d20-a255-fb1ca4a06330","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"RJ"},{"data":{"name":"Pearl","nameid":"1197d2a1-5634-4ff8-8808-bb6e37053e39","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Pearl"},{"data":{"name":"Joseph","nameid":"ad29dd11-1bf6-4970-90c3-65eed3f52cb6","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Joseph"},{"data":{"name":"Earline","nameid":"b9aa1a79-7831-405e-8517-36e88714e041","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Earline"}]},{"data":{"name":"Ruby","nameid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":3,"children":null,"name":"Ruby","_children":[{"data":{"name":"WIlliam","nameid":"cf0ac93a-e32c-4a15-adec-b9619c2b0a38","parentname":"Ruby","parentid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa"},"height":0,"name":"WIlliam"},{"data":{"name":"Donald","nameid":"3502545d-bebc-455e-974b-c169b71ca1cb","parentname":"Ruby","parentid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa"},"height":0,"name":"Donald"},{"data":{"name":"Pearl","nameid":"dfc2d0b3-bbe7-4a8d-9236-f933d5cce9db","parentname":"Ruby","parentid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa"},"height":0,"name":"Pearl"},{"data":{"name":"Lorraine","nameid":"34608069-6beb-4efc-a9d4-a4f91148aec9","parentname":"Ruby","parentid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa"},"height":2,"children":null,"name":"Lorraine","_children":[{"data":{"name":"George","nameid":"41ba1a9f-1987-4562-9020-6a7b43e14322","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":0,"name":"George"},{"data":{"name":"Kent","nameid":"6d259189-976b-451a-a0be-117d350c8516","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":0,"name":"Kent"},{"data":{"name":"Evan","nameid":"04a06ef8-85a5-4d15-9941-9d3607e3a776","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":0,"name":"Evan"},{"data":{"name":"Vance","nameid":"cf4c1651-bf3d-47c1-96fe-e28bf9c5d040","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":1,"children":null,"name":"Vance","_children":[{"data":{"name":"Vance Jr","nameid":"672da473-f66a-46e3-b411-712bb9c65cdb","parentname":"Vance","parentid":"cf4c1651-bf3d-47c1-96fe-e28bf9c5d040"},"height":0,"name":"Vance Jr"},{"data":{"name":"Ashlee","nameid":"8722ecb3-e548-4c5d-876f-09b0dbe434ae","parentname":"Vance","parentid":"cf4c1651-bf3d-47c1-96fe-e28bf9c5d040"},"height":0,"name":"Ashlee"},{"data":{"name":"Tinia","nameid":"34a01da8-8a1b-41f7-9ae9-14b52d002551","parentname":"Vance","parentid":"cf4c1651-bf3d-47c1-96fe-e28bf9c5d040"},"height":0,"name":"Tinia"}]},{"data":{"name":"Charles","nameid":"944d2d9b-deb5-4cc4-b0e2-6920696179cf","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":0,"name":"Charles"}]}]},{"data":{"name":"Jerusha","nameid":"813d7e30-3efe-48ed-a7f0-fbc27188aea8","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":0,"name":"Jerusha"},{"data":{"name":"Lillian","nameid":"208bda92-1e60-4906-bef4-815f1bbd08bd","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":0,"name":"Lillian"},{"data":{"name":"Joseph","nameid":"b8d5c3ac-f52b-4daa-adcc-10bd00ba7397","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":0,"name":"Joseph"}]},{"data":{"name":"Lillian","nameid":"fa7a9ba4-2aad-4c62-a384-ecbd1f36b317","parentname":"Thomas","parentid":"1"},"height":0,"name":"Lillian"}],"name":"Thomas ~1842"};
//var myrootemergency = {"data":{"name":"Chaney","nameid":1,"parentname":"","parentid":""},"height":7,"parent":null,"children":[{"data":{"name":"Sally","nameid":2,"parentname":"Chaney","parentid":1},"height":0,"name":"Sally"},{"data":{"name":"John","nameid":3,"parentname":"Chaney","parentid":1},"height":0,"name":"John"},{"data":{"name":"Mary","nameid":4,"parentname":"Chaney","parentid":1},"height":0,"name":"Mary"},{"data":{"name":"William","nameid":5,"parentname":"Chaney","parentid":1},"height":6,"name":"William","_children":[{"data":{"name":"John","nameid":7,"parentname":"William","parentid":5},"height":0,"name":"John"},{"data":{"name":"George","nameid":8,"parentname":"William","parentid":5},"height":0,"name":"George"},{"data":{"name":"Mamie","nameid":9,"parentname":"William","parentid":5},"height":0,"name":"Mamie"},{"data":{"name":"Cornnelia","nameid":10,"parentname":"William","parentid":5},"height":0,"name":"Cornnelia"},{"data":{"name":"Bessie","nameid":11,"parentname":"William","parentid":5},"height":0,"name":"Bessie"},{"data":{"name":"James","nameid":12,"parentname":"William","parentid":5},"height":0,"name":"James"},{"data":{"name":"Sallie","nameid":13,"parentname":"William","parentid":5},"height":0,"name":"Sallie"},{"data":{"name":"William","nameid":14,"parentname":"William","parentid":5},"height":0,"name":"William"},{"data":{"name":"Joe Thomas","nameid":15,"parentname":"William","parentid":5},"height":5,"children":null,"name":"Joe Thomas","_children":[{"data":{"name":"Gladys","nameid":17,"parentname":"Joe Thomas","parentid":15},"height":4,"children":null,"name":"Gladys","_children":[{"data":{"name":"Dora","nameid":25,"parentname":"Gladys","parentid":17},"height":3,"children":null,"name":"Dora","_children":[{"data":{"name":"Bruce Jr","nameid":49,"parentname":"Dora","parentid":25},"height":2,"children":null,"name":"Bruce Jr","_children":[{"data":{"name":"Melody","nameid":100,"parentname":"Bruce Jr","parentid":49},"height":1,"children":null,"name":"Melody","_children":[{"data":{"name":"Breasha","nameid":161,"parentname":"Melody","parentid":100},"height":0,"name":"Breasha"}]},{"data":{"name":"Bruce 3rd","nameid":101,"parentname":"Bruce Jr","parentid":49},"height":1,"children":null,"name":"Bruce 3rd","_children":[{"data":{"name":"Bruce 4th","nameid":162,"parentname":"Bruce 3rd","parentid":101},"height":0,"name":"Bruce 4th"}]},{"data":{"name":"Damarcus","nameid":102,"parentname":"Bruce Jr","parentid":49},"height":0,"name":"Damarcus"}]},{"data":{"name":"Cheryl","nameid":50,"parentname":"Dora","parentid":25},"height":0,"name":"Cheryl"},{"data":{"name":"James","nameid":51,"parentname":"Dora","parentid":25},"height":2,"children":null,"name":"James","_children":[{"data":{"name":"Victoria","nameid":103,"parentname":"James","parentid":51},"height":1,"children":null,"name":"Victoria","_children":[{"data":{"name":"Jaiden","nameid":163,"parentname":"Victoria","parentid":103},"height":0,"name":"Jaiden"},{"data":{"name":"Amiwah","nameid":164,"parentname":"Victoria","parentid":103},"height":0,"name":"Amiwah"},{"data":{"name":"Jayce","nameid":165,"parentname":"Victoria","parentid":103},"height":0,"name":"Jayce"}]},{"data":{"name":"Olivia","nameid":104,"parentname":"James","parentid":51},"height":0,"name":"Olivia"}]},{"data":{"name":"Lisa","nameid":52,"parentname":"Dora","parentid":25},"height":1,"children":null,"name":"Lisa","_children":[{"data":{"name":"Brittany","nameid":105,"parentname":"Lisa","parentid":52},"height":0,"name":"Brittany"},{"data":{"name":"Anthony","nameid":106,"parentname":"Lisa","parentid":52},"height":0,"name":"Anthony"},{"data":{"name":"Donte","nameid":107,"parentname":"Lisa","parentid":52},"height":0,"name":"Donte"}]},{"data":{"name":"Tony","nameid":53,"parentname":"Dora","parentid":25},"height":1,"children":null,"name":"Tony","_children":[{"data":{"name":"Brandon","nameid":108,"parentname":"Tony","parentid":53},"height":0,"name":"Brandon"},{"data":{"name":"Marcus","nameid":109,"parentname":"Tony","parentid":53},"height":0,"name":"Marcus"},{"data":{"name":"3rd child","nameid":110,"parentname":"Tony","parentid":53},"height":0,"name":"3rd child"}]}]},{"data":{"name":"Don","nameid":26,"parentname":"Gladys","parentid":17},"height":3,"children":null,"name":"Don","_children":[{"data":{"name":"Donna","nameid":54,"parentname":"Don","parentid":26},"height":1,"children":null,"name":"Donna","_children":[{"data":{"name":"Neaisha","nameid":111,"parentname":"Donna","parentid":54},"height":0,"name":"Neaisha"}]},{"data":{"name":"Debbie","nameid":55,"parentname":"Don","parentid":26},"height":0,"name":"Debbie"},{"data":{"name":"Danita","nameid":56,"parentname":"Don","parentid":26},"height":2,"children":null,"name":"Danita","_children":[{"data":{"name":"Brandon","nameid":112,"parentname":"Danita","parentid":56},"height":1,"children":null,"name":"Brandon","_children":[{"data":{"name":"Heavenly","nameid":166,"parentname":"Brandon","parentid":112},"height":0,"name":"Heavenly"},{"data":{"name":"CamRyn","nameid":167,"parentname":"Brandon","parentid":112},"height":0,"name":"CamRyn"},{"data":{"name":"Elizabeth","nameid":168,"parentname":"Brandon","parentid":112},"height":0,"name":"Elizabeth"},{"data":{"name":"Eliyanni","nameid":178,"parentname":"Brandon","parentid":112},"height":0,"name":"Eliyanni"}]}]}]},{"data":{"name":"Juanita","nameid":27,"parentname":"Gladys","parentid":17},"height":2,"children":null,"name":"Juanita","_children":[{"data":{"name":"Benny","nameid":57,"parentname":"Juanita","parentid":27},"height":1,"children":null,"name":"Benny","_children":[{"data":{"name":"Daniel","nameid":113,"parentname":"Benny","parentid":57},"height":0,"name":"Daniel"},{"data":{"name":"Tyree","nameid":114,"parentname":"Benny","parentid":57},"height":0,"name":"Tyree"}]},{"data":{"name":"James","nameid":58,"parentname":"Juanita","parentid":27},"height":1,"children":null,"name":"James","_children":[{"data":{"name":"Marquis","nameid":115,"parentname":"James","parentid":58},"height":0,"name":"Marquis"}]},{"data":{"name":"Kim","nameid":59,"parentname":"Juanita","parentid":27},"height":1,"children":null,"name":"Kim","_children":[{"data":{"name":"Kayden","nameid":116,"parentname":"Kim","parentid":59},"height":0,"name":"Kayden"},{"data":{"name":"Jayden","nameid":117,"parentname":"Kim","parentid":59},"height":0,"name":"Jayden"}]}]}]},{"data":{"name":"Lillie","nameid":18,"parentname":"Joe Thomas","parentid":15},"height":3,"children":null,"name":"Lillie","_children":[{"data":{"name":"Wyatt","nameid":28,"parentname":"Lillie","parentid":18},"height":2,"children":null,"name":"Wyatt","_children":[{"data":{"name":"Michelle","nameid":60,"parentname":"Wyatt","parentid":28},"height":1,"children":null,"name":"Michelle","_children":[{"data":{"name":"Devon","nameid":118,"parentname":"Michelle","parentid":60},"height":0,"name":"Devon"}]},{"data":{"name":"Sherisse","nameid":61,"parentname":"Wyatt","parentid":28},"height":1,"children":null,"name":"Sherisse","_children":[{"data":{"name":"Achinae","nameid":119,"parentname":"Sherisse","parentid":61},"height":0,"name":"Achinae"},{"data":{"name":"Wayne","nameid":120,"parentname":"Sherisse","parentid":61},"height":0,"name":"Wayne"}]}]},{"data":{"name":"Kay","nameid":29,"parentname":"Lillie","parentid":18},"height":1,"children":null,"name":"Kay","_children":[{"data":{"name":"Antonio","nameid":62,"parentname":"Kay","parentid":29},"height":0,"name":"Antonio"},{"data":{"name":"Thomas","nameid":63,"parentname":"Kay","parentid":29},"height":0,"name":"Thomas"}]},{"data":{"name":"Constance","nameid":30,"parentname":"Lillie","parentid":18},"height":2,"children":null,"name":"Constance","_children":[{"data":{"name":"James Jr","nameid":64,"parentname":"Constance","parentid":30},"height":1,"children":null,"name":"James Jr","_children":[{"data":{"name":"Sheneka","nameid":121,"parentname":"James Jr","parentid":64},"height":0,"name":"Sheneka"},{"data":{"name":"Jamesha","nameid":122,"parentname":"James Jr","parentid":64},"height":0,"name":"Jamesha"}]},{"data":{"name":"Cynthia","nameid":65,"parentname":"Constance","parentid":30},"height":1,"children":null,"name":"Cynthia","_children":[{"data":{"name":"Constance","nameid":123,"parentname":"Cynthia","parentid":65},"height":0,"name":"Constance"}]}]},{"data":{"name":"Angela","nameid":31,"parentname":"Lillie","parentid":18},"height":1,"children":null,"name":"Angela","_children":[{"data":{"name":"April","nameid":66,"parentname":"Angela","parentid":31},"height":0,"name":"April"},{"data":{"name":"Kimmey","nameid":67,"parentname":"Angela","parentid":31},"height":0,"name":"Kimmey"},{"data":{"name":"Carl","nameid":68,"parentname":"Angela","parentid":31},"height":0,"name":"Carl"}]},{"data":{"name":"Sabrina","nameid":32,"parentname":"Lillie","parentid":18},"height":2,"children":null,"name":"Sabrina","_children":[{"data":{"name":"Wayneman","nameid":69,"parentname":"Sabrina","parentid":32},"height":1,"children":null,"name":"Wayneman","_children":[{"data":{"name":"Cameron","nameid":172,"parentname":"Wayneman","parentid":69},"height":0,"name":"Cameron"}]},{"data":{"name":"Richard","nameid":70,"parentname":"Sabrina","parentid":32},"height":1,"children":null,"name":"Richard","_children":[{"data":{"name":"Alexis","nameid":173,"parentname":"Richard","parentid":70},"height":0,"name":"Alexis"},{"data":{"name":"Leila","nameid":174,"parentname":"Richard","parentid":70},"height":0,"name":"Leila"}]},{"data":{"name":"Tameka","nameid":71,"parentname":"Sabrina","parentid":32},"height":0,"name":"Tameka"},{"data":{"name":"Tamara","nameid":72,"parentname":"Sabrina","parentid":32},"height":1,"children":null,"name":"Tamara","_children":[{"data":{"name":"Tyshaun","nameid":175,"parentname":"Tamara","parentid":72},"height":0,"name":"Tyshaun"},{"data":{"name":"Miracle","nameid":176,"parentname":"Tamara","parentid":72},"height":0,"name":"Miracle"},{"data":{"name":"Journey","nameid":177,"parentname":"Tamara","parentid":72},"height":0,"name":"Journey"}]}]},{"data":{"name":"Sheila","nameid":33,"parentname":"Lillie","parentid":18},"height":2,"children":null,"name":"Sheila","_children":[{"data":{"name":"Angel","nameid":73,"parentname":"Sheila","parentid":33},"height":0,"name":"Angel"},{"data":{"name":"Jack","nameid":74,"parentname":"Sheila","parentid":33},"height":0,"name":"Jack"},{"data":{"name":"Benjamin Jr","nameid":75,"parentname":"Sheila","parentid":33},"height":1,"children":null,"name":"Benjamin Jr","_children":[{"data":{"name":"Deja","nameid":124,"parentname":"Benjamin Jr","parentid":75},"height":0,"name":"Deja"},{"data":{"name":"Benjamin 3rd","nameid":125,"parentname":"Benjamin Jr","parentid":75},"height":0,"name":"Benjamin 3rd"}]}]},{"data":{"name":"Richard","nameid":34,"parentname":"Lillie","parentid":18},"height":1,"children":null,"name":"Richard","_children":[{"data":{"name":"Ricardo","nameid":76,"parentname":"Richard","parentid":34},"height":0,"name":"Ricardo"},{"data":{"name":"Kaylyn","nameid":77,"parentname":"Richard","parentid":34},"height":0,"name":"Kaylyn"},{"data":{"name":"Kennedy","nameid":78,"parentname":"Richard","parentid":34},"height":0,"name":"Kennedy"}]}]},{"data":{"name":"Joseph","nameid":19,"parentname":"Joe Thomas","parentid":15},"height":0,"name":"Joseph"},{"data":{"name":"Lucille","nameid":20,"parentname":"Joe Thomas","parentid":15},"height":0,"name":"Lucille"},{"data":{"name":"Ruth","nameid":21,"parentname":"Joe Thomas","parentid":15},"height":3,"children":null,"name":"Ruth","_children":[{"data":{"name":"Thomas Jr","nameid":35,"parentname":"Ruth","parentid":21},"height":2,"children":null,"name":"Thomas Jr","_children":[{"data":{"name":"Thomas 3rd","nameid":79,"parentname":"Thomas Jr","parentid":35},"height":1,"children":null,"name":"Thomas 3rd","_children":[{"data":{"name":"Thomas","nameid":126,"parentname":"Thomas 3rd","parentid":79},"height":0,"name":"Thomas"},{"data":{"name":"Tariq","nameid":127,"parentname":"Thomas 3rd","parentid":79},"height":0,"name":"Tariq"},{"data":{"name":"Taiquon","nameid":128,"parentname":"Thomas 3rd","parentid":79},"height":0,"name":"Taiquon"}]},{"data":{"name":"Shaughn","nameid":80,"parentname":"Thomas Jr","parentid":35},"height":0,"name":"Shaughn"}]},{"data":{"name":"Sheryl","nameid":36,"parentname":"Ruth","parentid":21},"height":2,"children":null,"name":"Sheryl","_children":[{"data":{"name":"Stacy","nameid":81,"parentname":"Sheryl","parentid":36},"height":0,"name":"Stacy"},{"data":{"name":"Monique","nameid":82,"parentname":"Sheryl","parentid":36},"height":1,"children":null,"name":"Monique","_children":[{"data":{"name":"Angela","nameid":129,"parentname":"Monique","parentid":82},"height":0,"name":"Angela"},{"data":{"name":"Brooklyn","nameid":130,"parentname":"Monique","parentid":82},"height":0,"name":"Brooklyn"},{"data":{"name":"Stacy","nameid":131,"parentname":"Monique","parentid":82},"height":0,"name":"Stacy"},{"data":{"name":"Lenox","nameid":132,"parentname":"Monique","parentid":82},"height":0,"name":"Lenox"}]}]},{"data":{"name":"Michael","nameid":37,"parentname":"Ruth","parentid":21},"height":0,"name":"Michael"},{"data":{"name":"David","nameid":38,"parentname":"Ruth","parentid":21},"height":0,"name":"David"}]},{"data":{"name":"James","nameid":22,"parentname":"Joe Thomas","parentid":15},"height":3,"children":null,"name":"James","_children":[{"data":{"name":"Angela","nameid":39,"parentname":"James","parentid":22},"height":0,"name":"Angela"},{"data":{"name":"Anita","nameid":40,"parentname":"James","parentid":22},"height":2,"children":null,"name":"Anita","_children":[{"data":{"name":"Jessica","nameid":83,"parentname":"Anita","parentid":40},"height":1,"children":null,"name":"Jessica","_children":[{"data":{"name":"Michael Jr","nameid":133,"parentname":"Jessica","parentid":83},"height":0,"name":"Michael Jr"}]}]},{"data":{"name":"Michael","nameid":41,"parentname":"James","parentid":22},"height":1,"children":null,"name":"Michael","_children":[{"data":{"name":"Michael Jr","nameid":84,"parentname":"Michael","parentid":41},"height":0,"name":"Michael Jr"},{"data":{"name":"Erica","nameid":85,"parentname":"Michael","parentid":41},"height":0,"name":"Erica"}]}]},{"data":{"name":"Clara","nameid":23,"parentname":"Joe Thomas","parentid":15},"height":2,"children":null,"name":"Clara","_children":[{"data":{"name":"Phylis","nameid":42,"parentname":"Clara","parentid":23},"height":1,"children":null,"name":"Phylis","_children":[{"data":{"name":"Christian","nameid":86,"parentname":"Phylis","parentid":42},"height":0,"name":"Christian"}]},{"data":{"name":"Belinda","nameid":43,"parentname":"Clara","parentid":23},"height":1,"children":null,"name":"Belinda","_children":[{"data":{"name":"Markel","nameid":87,"parentname":"Belinda","parentid":43},"height":0,"name":"Markel"}]}]},{"data":{"name":"John","nameid":24,"parentname":"Joe Thomas","parentid":15},"height":4,"children":null,"name":"John","_children":[{"data":{"name":"Juanda","nameid":44,"parentname":"John","parentid":24},"height":3,"children":null,"name":"Juanda","_children":[{"data":{"name":"Tawanda","nameid":88,"parentname":"Juanda","parentid":44},"height":2,"children":null,"name":"Tawanda","_children":[{"data":{"name":"Cederick","nameid":134,"parentname":"Tawanda","parentid":88},"height":1,"children":null,"name":"Cederick","_children":[{"data":{"name":"Kellan","nameid":169,"parentname":"Cederick","parentid":134},"height":0,"name":"Kellan"},{"data":{"name":"Kayliah","nameid":170,"parentname":"Cederick","parentid":134},"height":0,"name":"Kayliah"}]},{"data":{"name":"Ananda","nameid":135,"parentname":"Tawanda","parentid":88},"height":1,"children":null,"name":"Ananda","_children":[{"data":{"name":"Kynlee","nameid":171,"parentname":"Ananda","parentid":135},"height":0,"name":"Kynlee"},{"data":{"name":"Kiyle","nameid":179,"parentname":"Ananda","parentid":135},"height":0,"name":"Kiyle"}]}]},{"data":{"name":"Kristopher","nameid":89,"parentname":"Juanda","parentid":44},"height":1,"children":null,"name":"Kristopher","_children":[{"data":{"name":"Caleb","nameid":136,"parentname":"Kristopher","parentid":89},"height":0,"name":"Caleb"},{"data":{"name":"Amami","nameid":137,"parentname":"Kristopher","parentid":89},"height":0,"name":"Amami"},{"data":{"name":"Arionna","nameid":138,"parentname":"Kristopher","parentid":89},"height":0,"name":"Arionna"},{"data":{"name":"Kristolyn","nameid":139,"parentname":"Kristopher","parentid":89},"height":0,"name":"Kristolyn"},{"data":{"name":"Chaun","nameid":140,"parentname":"Kristopher","parentid":89},"height":0,"name":"Chaun"},{"data":{"name":"Jayden","nameid":141,"parentname":"Kristopher","parentid":89},"height":0,"name":"Jayden"}]}]},{"data":{"name":"Yolanda","nameid":45,"parentname":"John","parentid":24},"height":0,"name":"Yolanda"},{"data":{"name":"John Jr","nameid":46,"parentname":"John","parentid":24},"height":2,"children":null,"name":"John Jr","_children":[{"data":{"name":"Derrick","nameid":90,"parentname":"John Jr","parentid":46},"height":1,"children":null,"name":"Derrick","_children":[{"data":{"name":"Hannah","nameid":142,"parentname":"Derrick","parentid":90},"height":0,"name":"Hannah"},{"data":{"name":"Jaydon","nameid":143,"parentname":"Derrick","parentid":90},"height":0,"name":"Jaydon"},{"data":{"name":"Aiden","nameid":144,"parentname":"Derrick","parentid":90},"height":0,"name":"Aiden"},{"data":{"name":"Addison","nameid":145,"parentname":"Derrick","parentid":90},"height":0,"name":"Addison"},{"data":{"name":"Alania","nameid":146,"parentname":"Derrick","parentid":90},"height":0,"name":"Alania"},{"data":{"name":"Asher","nameid":147,"parentname":"Derrick","parentid":90},"height":0,"name":"Asher"}]},{"data":{"name":"Brandon","nameid":91,"parentname":"John Jr","parentid":46},"height":1,"children":null,"name":"Brandon","_children":[{"data":{"name":"Jackson","nameid":148,"parentname":"Brandon","parentid":91},"height":0,"name":"Jackson"},{"data":{"name":"Jordan","nameid":149,"parentname":"Brandon","parentid":91},"height":0,"name":"Jordan"}]},{"data":{"name":"Candice","nameid":92,"parentname":"John Jr","parentid":46},"height":0,"name":"Candice"},{"data":{"name":"Joseph","nameid":93,"parentname":"John Jr","parentid":46},"height":1,"children":null,"name":"Joseph","_children":[{"data":{"name":"Joseph","nameid":150,"parentname":"Joseph","parentid":93},"height":0,"name":"Joseph"},{"data":{"name":"Cohen","nameid":151,"parentname":"Joseph","parentid":93},"height":0,"name":"Cohen"},{"data":{"name":"Lillie","nameid":152,"parentname":"Joseph","parentid":93},"height":0,"name":"Lillie"},{"data":{"name":"Gracie","nameid":153,"parentname":"Joseph","parentid":93},"height":0,"name":"Gracie"},{"data":{"name":"Breelyn","nameid":154,"parentname":"Joseph","parentid":93},"height":0,"name":"Breelyn"}]}]},{"data":{"name":"Tony","nameid":47,"parentname":"John","parentid":24},"height":1,"children":null,"name":"Tony","_children":[{"data":{"name":"Teven","nameid":94,"parentname":"Tony","parentid":47},"height":0,"name":"Teven"},{"data":{"name":"Katurah","nameid":95,"parentname":"Tony","parentid":47},"height":0,"name":"Katurah"}]},{"data":{"name":"Elwin","nameid":48,"parentname":"John","parentid":24},"height":2,"children":null,"name":"Elwin","_children":[{"data":{"name":"Latosha","nameid":96,"parentname":"Elwin","parentid":48},"height":1,"children":null,"name":"Latosha","_children":[{"data":{"name":"Kyran","nameid":155,"parentname":"Latosha","parentid":96},"height":0,"name":"Kyran"},{"data":{"name":"Kaiden","nameid":156,"parentname":"Latosha","parentid":96},"height":0,"name":"Kaiden"}]},{"data":{"name":"Elwin Jr","nameid":97,"parentname":"Elwin","parentid":48},"height":1,"children":null,"name":"Elwin Jr","_children":[{"data":{"name":"Teagan Jr","nameid":157,"parentname":"Elwin Jr","parentid":97},"height":0,"name":"Teagan Jr"},{"data":{"name":"Taylor","nameid":158,"parentname":"Elwin Jr","parentid":97},"height":0,"name":"Taylor"},{"data":{"name":"Toryn","nameid":159,"parentname":"Elwin Jr","parentid":97},"height":0,"name":"Toryn"},{"data":{"name":"Chailyn","nameid":160,"parentname":"Elwin Jr","parentid":97},"height":0,"name":"Chailyn"}]},{"data":{"name":"Donte","nameid":98,"parentname":"Elwin","parentid":48},"height":0,"name":"Donte"},{"data":{"name":"Santana","nameid":99,"parentname":"Elwin","parentid":48},"height":0,"name":"Santana"}]}]}]},{"data":{"name":"Daniel","nameid":16,"parentname":"William","parentid":5},"height":0,"name":"Daniel"}]},{"data":{"name":"Lucy","nameid":6,"parentname":"Chaney","parentid":1},"height":0,"name":"Lucy"}],"name":"Chaney"};
localStorage.setItem("myrootemergencystr", JSON.stringify(myrootemergency));
localStorage.setItem("myjsonstr", JSON.stringify(myrootemergency));
treeData = myrootemergency;
}else if (startoptions == "thomas"){
//var myrootemergency = {"data":{"name":"Thomas ~1842","nameid":1,"parentname":"","parentid":""},"height":6,"parent":null,"children":[{"data":{"name":"Maybelle","nameid":"326b9233-50ce-44f5-aafc-e38d88730408","parentname":"Thomas","parentid":"1"},"height":0,"name":"Maybelle"},{"data":{"name":"Martha","nameid":"57ca367e-e475-4c97-ae9b-9aab58984718","parentname":"Thomas","parentid":"1"},"height":0,"name":"Martha"},{"data":{"name":"Joseph 1877","nameid":"e594a2b1-625d-4cb4-ac3a-47fd04a8da69","parentname":"Thomas","parentid":"1"},"height":5,"name":"Joseph 1877","_children":[{"data":{"name":"Tracy","nameid":"0f1a8aaf-2b70-4c12-87df-20f3f1e9ef97","parentname":"Joseph","parentid":"e594a2b1-625d-4cb4-ac3a-47fd04a8da69"},"height":4,"children":null,"name":"Tracy","_children":[{"data":{"name":"Thomas Sr","nameid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8","parentname":"Tracy","parentid":"0f1a8aaf-2b70-4c12-87df-20f3f1e9ef97"},"height":3,"children":null,"name":"Thomas Sr","_children":[{"data":{"name":"Thomas Jr","nameid":"dd2cbfb0-cbfe-40d8-83f8-701a15ee7d05","parentname":"Thomas Sr","parentid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8"},"height":2,"children":null,"name":"Thomas Jr","_children":[{"data":{"name":"Marshall","nameid":"d9efc50e-ba0a-4612-8194-a3351e585a90","parentname":"Thomas Jr","parentid":"dd2cbfb0-cbfe-40d8-83f8-701a15ee7d05"},"height":1,"children":null,"name":"Marshall","_children":[{"data":{"name":"Taj","nameid":"b4ec858b-404b-4a1f-90f8-4770c8c31c22","parentname":"Marshall","parentid":"d9efc50e-ba0a-4612-8194-a3351e585a90"},"height":0,"name":"Taj"},{"data":{"name":"Tariq","nameid":"144938b0-b28f-4873-9e4b-46bbc8cf56d7","parentname":"Marshall","parentid":"d9efc50e-ba0a-4612-8194-a3351e585a90"},"height":0,"name":"Tariq"},{"data":{"name":"Taiquon","nameid":"d2e1a500-ac6a-49a0-b4e1-85534a5b69fb","parentname":"Marshall","parentid":"d9efc50e-ba0a-4612-8194-a3351e585a90"},"height":0,"name":"Taiquon"}]},{"data":{"name":"Shawn","nameid":"9e4832be-9ee4-43f2-9623-221dc59d6eb8","parentname":"Thomas Jr","parentid":"dd2cbfb0-cbfe-40d8-83f8-701a15ee7d05"},"height":0,"name":"Shawn"}]},{"data":{"name":"Sheryl","nameid":"ccc8cfdd-c6d6-40ca-992e-39b4c5916bf2","parentname":"Thomas Sr","parentid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8"},"height":2,"children":null,"name":"Sheryl","_children":[{"data":{"name":"Stacy","nameid":"906ea5ee-18bf-43c4-98eb-54f3dacf5eaa","parentname":"Sheryl","parentid":"ccc8cfdd-c6d6-40ca-992e-39b4c5916bf2"},"height":0,"name":"Stacy"},{"data":{"name":"Monique","nameid":"09806f8a-3c29-4943-a6ff-07f71561fae4","parentname":"Sheryl","parentid":"ccc8cfdd-c6d6-40ca-992e-39b4c5916bf2"},"height":1,"children":null,"name":"Monique","_children":[{"data":{"name":"Angela","nameid":"e626214d-ca5d-49de-acf3-6a6b6d4c4891","parentname":"Monique","parentid":"09806f8a-3c29-4943-a6ff-07f71561fae4"},"height":0,"name":"Angela"},{"data":{"name":"Brooklyn","nameid":"335d07f1-7d73-41b7-a28d-799757390648","parentname":"Monique","parentid":"09806f8a-3c29-4943-a6ff-07f71561fae4"},"height":0,"name":"Brooklyn"},{"data":{"name":"Stacy","nameid":"fb031c06-9b9e-4e53-add8-f56c9e0ddbd5","parentname":"Monique","parentid":"09806f8a-3c29-4943-a6ff-07f71561fae4"},"height":0,"name":"Stacy"},{"data":{"name":"Lennox","nameid":"bb442300-a19f-434f-8dce-b902405ea9c0","parentname":"Monique","parentid":"09806f8a-3c29-4943-a6ff-07f71561fae4"},"height":0,"name":"Lennox"}]}]},{"data":{"name":"Michael","nameid":"f30fb65f-0e9e-45cc-b714-d4089c98d65a","parentname":"Thomas Sr","parentid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8"},"height":0,"name":"Michael"},{"data":{"name":"David","nameid":"e648a99d-0fdf-4fd7-9895-cc3eccc34a7e","parentname":"Thomas Sr","parentid":"8b9b74f0-41b8-44e5-8ff0-76d44e2c5ad8"},"height":0,"name":"David"}]},{"data":{"name":"Lynette","nameid":"5a51a43b-d146-4ec9-8e58-20daa0bc6992","parentname":"Tracy","parentid":"0f1a8aaf-2b70-4c12-87df-20f3f1e9ef97"},"height":1,"children":null,"name":"Lynette","_children":[{"data":{"name":"Dana","nameid":"32a73e09-a581-40c7-96a4-b8573f7660fb","parentname":"Lynette","parentid":"5a51a43b-d146-4ec9-8e58-20daa0bc6992"},"height":0,"name":"Dana"}]},{"data":{"name":"Gilbert","nameid":"6e6afd4a-0b47-4cd5-ab19-a24ab14d9d0a","parentname":"Tracy","parentid":"0f1a8aaf-2b70-4c12-87df-20f3f1e9ef97"},"height":0,"name":"Gilbert"}]},{"data":{"name":"Irma Jean","nameid":"b548b308-6509-45bc-9bfe-1a0263218466","parentname":"Joseph","parentid":"e594a2b1-625d-4cb4-ac3a-47fd04a8da69"},"height":4,"children":null,"name":"Irma Jean","_children":[{"data":{"name":"Tracy Johnson","nameid":"4e7c26c0-bc9c-490b-be18-e42754131dfb","parentname":"Irma Jean","parentid":"b548b308-6509-45bc-9bfe-1a0263218466"},"height":3,"children":null,"name":"Tracy Johnson","_children":[{"data":{"name":"Craig Johnson","nameid":"65430f78-9bfc-4d52-9771-8e442b179875","parentname":"Tracy Johnson","parentid":"4e7c26c0-bc9c-490b-be18-e42754131dfb"},"height":2,"children":null,"name":"Craig Johnson","_children":[{"data":{"name":"Brandi Johnson","nameid":"e5539e68-a19c-4f6e-a6e3-a96dead2fbd7","parentname":"Craig Johnson","parentid":"65430f78-9bfc-4d52-9771-8e442b179875"},"height":1,"children":null,"name":"Brandi Johnson","_children":[{"data":{"name":"Miya Johnson-Streeter","nameid":"d932dfa9-e741-492a-a1b5-daa7a29d8f9b","parentname":"Brandi Johnson","parentid":"e5539e68-a19c-4f6e-a6e3-a96dead2fbd7"},"height":0,"name":"Miya Johnson-Streeter"},{"data":{"name":"Dylan Johnson-Streeter","nameid":"bc8a64b4-6893-4fb2-9311-b541c3ff4f49","parentname":"Brandi Johnson","parentid":"e5539e68-a19c-4f6e-a6e3-a96dead2fbd7"},"height":0,"name":"Dylan Johnson-Streeter"},{"data":{"name":"Arielle Amani Olden","nameid":"85423503-593f-44fc-b7db-13441be2e0b9","parentname":"Brandi Johnson","parentid":"e5539e68-a19c-4f6e-a6e3-a96dead2fbd7"},"height":0,"name":"Arielle Amani Olden"}]},{"data":{"name":"Traci Johnson","nameid":"c0cda4f1-cf48-4f6f-a227-5d09017b9f81","parentname":"Craig Johnson","parentid":"65430f78-9bfc-4d52-9771-8e442b179875"},"height":1,"children":null,"name":"Traci Johnson","_children":[{"data":{"name":"Logan Parker Smith","nameid":"ea6eb6a5-3211-4eee-8663-fd276950d2a9","parentname":"Traci Johnson","parentid":"c0cda4f1-cf48-4f6f-a227-5d09017b9f81"},"height":0,"name":"Logan Parker Smith"}]}]},{"data":{"name":"Tonya Johnson","nameid":"8c5c66dc-aeef-4e3a-8d0a-6938bc6ddd68","parentname":"Tracy Johnson","parentid":"4e7c26c0-bc9c-490b-be18-e42754131dfb"},"height":0,"name":"Tonya Johnson"},{"data":{"name":"Collette Johnson","nameid":"5d8ddb39-c580-4ae1-866f-11d3f4850c66","parentname":"Tracy Johnson","parentid":"4e7c26c0-bc9c-490b-be18-e42754131dfb"},"height":1,"children":null,"name":"Collette Johnson","_children":[{"data":{"name":"Connor Johnson","nameid":"78388986-0474-40fb-9db9-ea2be5513a98","parentname":"Collette","parentid":"5d8ddb39-c580-4ae1-866f-11d3f4850c66"},"height":0,"name":"Connor Johnson"}]},{"data":{"name":"Brant Johnson","nameid":"0aeae9db-00c2-438f-a183-581db8251f19","parentname":"Tracy Johnson","parentid":"4e7c26c0-bc9c-490b-be18-e42754131dfb"},"height":0,"name":"Brant Johnson"}]},{"data":{"name":"Gwendolyn","nameid":"f065f6af-bc6e-4801-8bf6-070c04266fff","parentname":"Irma Jean","parentid":"b548b308-6509-45bc-9bfe-1a0263218466"},"height":3,"children":null,"name":"Gwendolyn","_children":[{"data":{"name":"Robert","nameid":"e4138991-f238-456b-8c2f-e693e2c8d237","parentname":"Gwendolyn","parentid":"f065f6af-bc6e-4801-8bf6-070c04266fff"},"height":2,"children":null,"name":"Robert","_children":[{"data":{"name":"Charles","nameid":"c01b265d-cdff-4f72-a32b-680e0b6a1043","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":1,"children":null,"name":"Charles","_children":[{"data":{"name":"Charles Jr","nameid":"aa70bfb5-286f-42b2-8176-e7bac47b8420","parentname":"Charles","parentid":"c01b265d-cdff-4f72-a32b-680e0b6a1043"},"height":0,"name":"Charles Jr"}]},{"data":{"name":"Gwen","nameid":"964cca32-fd0b-4bce-b3b2-3d38931523fc","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"Gwen"},{"data":{"name":"Dominique","nameid":"866dbbc2-9f11-41d8-b655-e7dd7542d8ae","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"Dominique"},{"data":{"name":"DoRon","nameid":"390a706b-c79a-4592-99f3-9a3efad6db52","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"DoRon"},{"data":{"name":"Dashia","nameid":"bb4204dd-7c5b-45b0-a3b9-9bcd5eee5391","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"Dashia"},{"data":{"name":"Jaylen","nameid":"38d088af-52d2-4cb1-8b64-93ee88d03ced","parentname":"Robert","parentid":"e4138991-f238-456b-8c2f-e693e2c8d237"},"height":0,"name":"Jaylen"}]},{"data":{"name":"Aaron","nameid":"7c81b3e6-4e69-4c2a-b8b7-c685fc865d99","parentname":"Gwendolyn","parentid":"f065f6af-bc6e-4801-8bf6-070c04266fff"},"height":1,"children":null,"name":"Aaron","_children":[{"data":{"name":"Son 1","nameid":"f706e076-2782-44c5-be55-7faeae4cc8ba","parentname":"Aaron","parentid":"7c81b3e6-4e69-4c2a-b8b7-c685fc865d99"},"height":0,"name":"Son 1"},{"data":{"name":"Son 2","nameid":"07ce0a59-ba6b-461c-bcfa-633d938e87ed","parentname":"Aaron","parentid":"7c81b3e6-4e69-4c2a-b8b7-c685fc865d99"},"height":0,"name":"Son 2"}]},{"data":{"name":"Edward","nameid":"476d0428-c827-4660-8a77-68fecf1f4d20","parentname":"Gwendolyn","parentid":"f065f6af-bc6e-4801-8bf6-070c04266fff"},"height":2,"children":null,"name":"Edward","_children":[{"data":{"name":"Edward Jr","nameid":"cfcb75d6-59f6-4369-9499-b26d84b57f31","parentname":"Edward","parentid":"476d0428-c827-4660-8a77-68fecf1f4d20"},"height":1,"children":null,"name":"Edward Jr","_children":[{"data":{"name":"Edward 3rd","nameid":"049aa417-b7cb-47ba-9a42-7354590818fa","parentname":"Edward Jr","parentid":"cfcb75d6-59f6-4369-9499-b26d84b57f31"},"height":0,"name":"Edward 3rd"}]},{"data":{"name":"Martel","nameid":"3756425d-f6ce-421e-91af-92a202aea089","parentname":"Edward","parentid":"476d0428-c827-4660-8a77-68fecf1f4d20"},"height":0,"name":"Martel"}]},{"data":{"name":"Kimberly","nameid":"21b9ed9c-09d4-436f-931c-6b4177d8fd69","parentname":"Gwendolyn","parentid":"f065f6af-bc6e-4801-8bf6-070c04266fff"},"height":0,"name":"Kimberly"}]},{"data":{"name":"Beverly","nameid":"8175ca69-aedb-409c-8877-d8219077f0de","parentname":"Irma Jean","parentid":"b548b308-6509-45bc-9bfe-1a0263218466"},"height":2,"children":null,"name":"Beverly","_children":[{"data":{"name":"Richard 3rd","nameid":"33232195-50e2-4861-9ae1-769e6bf43ffa","parentname":"Beverly","parentid":"8175ca69-aedb-409c-8877-d8219077f0de"},"height":1,"children":null,"name":"Richard 3rd","_children":[{"data":{"name":"Richard 4th","nameid":"ae03edb1-3abc-4775-98b0-04e703ed19ba","parentname":"Richard III","parentid":"33232195-50e2-4861-9ae1-769e6bf43ffa"},"height":0,"name":"Richard 4th"}]}]}]}]},{"data":{"name":"Elijah 1881","nameid":"cc33a401-9cef-4d96-af90-f553fb60a01a","parentname":"Thomas","parentid":"1"},"height":4,"name":"Elijah 1881","_children":[{"data":{"name":"Elijah Jr","nameid":"dedfb62d-b1e7-4614-bcd6-1ca2b636e84a","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Elijah Jr"},{"data":{"name":"Juanita","nameid":"32da51d5-693b-45ad-a09a-9c7880973ad1","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Juanita"},{"data":{"name":"Howard","nameid":"bf25fd68-4941-4ff1-9f63-86b07597139a","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Howard"},{"data":{"name":"Gwendolyn","nameid":"8ccd725a-f97f-4403-9c85-9abf99c59b32","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":3,"children":null,"name":"Gwendolyn","_children":[{"data":{"name":"Carolese","nameid":"c1de20ca-4b96-47ee-b6eb-5b8f32a2af59","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Carolese"},{"data":{"name":"Alfred","nameid":"8bc72e44-676e-4ef0-a017-528bd618ba3e","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Alfred"},{"data":{"name":"Wilson","nameid":"e64edb79-8a64-4472-85d9-5f77e396b423","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Wilson"},{"data":{"name":"Geraldine","nameid":"e0397915-376a-4bad-a92d-d2021738b142","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Geraldine"},{"data":{"name":"Juanita","nameid":"7db80d0c-f739-4eda-b7b8-fc983fa5165e","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Juanita"},{"data":{"name":"Richard","nameid":"4d301f50-5f0d-4c42-a39c-9fd4d287664d","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":2,"children":null,"name":"Richard","_children":[{"data":{"name":"Michela","nameid":"c5bdc392-a945-4475-b993-500042d94778","parentname":"Richard","parentid":"4d301f50-5f0d-4c42-a39c-9fd4d287664d"},"height":1,"children":null,"name":"Michela","_children":[{"data":{"name":"A'nylah","nameid":"98749811-d0db-443b-aea2-54ce63e69ad6","parentname":"Michela","parentid":"c5bdc392-a945-4475-b993-500042d94778"},"height":0,"name":"A'nylah"}]}]},{"data":{"name":"Coretha","nameid":"1af4e094-63f4-403d-86c4-457bd1bf0f4b","parentname":"Gwendolyn","parentid":"8ccd725a-f97f-4403-9c85-9abf99c59b32"},"height":0,"name":"Coretha"}]},{"data":{"name":"Margaret","nameid":"8873f016-3b3c-4041-9e4c-012aa326e9ec","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":1,"children":null,"name":"Margaret","_children":[{"data":{"name":"Kimberly","nameid":"2768e60f-7de4-422c-a025-48f05fda65b4","parentname":"Margaret","parentid":"8873f016-3b3c-4041-9e4c-012aa326e9ec"},"height":0,"name":"Kimberly"},{"data":{"name":"Avis","nameid":"42ce114b-913b-4b75-a821-673f729de42e","parentname":"Margaret","parentid":"8873f016-3b3c-4041-9e4c-012aa326e9ec"},"height":0,"name":"Avis"},{"data":{"name":"James","nameid":"d8c49b30-4993-4f18-a35a-d902c56a9499","parentname":"Margaret","parentid":"8873f016-3b3c-4041-9e4c-012aa326e9ec"},"height":0,"name":"James"}]},{"data":{"name":"James","nameid":"95f84bee-e964-48aa-9d5f-2f04dc0b6684","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"James"},{"data":{"name":"Herman","nameid":"cf18d9b1-6161-4a0d-b796-e9c2026e37f6","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Herman"},{"data":{"name":"Frederick","nameid":"8835a91b-7701-4cd0-a6d8-d8e3941464b5","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":2,"children":null,"name":"Frederick","_children":[{"data":{"name":"Valerie","nameid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2","parentname":"Frederick","parentid":"8835a91b-7701-4cd0-a6d8-d8e3941464b5"},"height":1,"children":null,"name":"Valerie","_children":[{"data":{"name":"Randy","nameid":"a7cf1243-b4c0-4df3-9055-80cee623b5c5","parentname":"Valerie","parentid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2"},"height":0,"name":"Randy"},{"data":{"name":"Miranda","nameid":"491cbef8-bc4a-4c5b-b5c4-96b22efe2886","parentname":"Valerie","parentid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2"},"height":0,"name":"Miranda"},{"data":{"name":"Monica","nameid":"4fbf23cb-169e-4d65-859f-63569da6e896","parentname":"Valerie","parentid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2"},"height":0,"name":"Monica"},{"data":{"name":"Kristen","nameid":"d7bf017a-6c50-4c6e-890c-4614ee69fbd8","parentname":"Valerie","parentid":"ed352a6d-63bc-4ae6-a0cf-c5b8cca3efb2"},"height":0,"name":"Kristen"}]},{"data":{"name":"Garrett","nameid":"5b9f72cb-6371-41a2-bfb0-8648ffcd6177","parentname":"Frederick","parentid":"8835a91b-7701-4cd0-a6d8-d8e3941464b5"},"height":0,"name":"Garrett"}]},{"data":{"name":"Frances","nameid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":3,"children":null,"name":"Frances","_children":[{"data":{"name":"Maritena","nameid":"408ae57d-2986-4fd9-9b94-244c55d6a60d","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":1,"children":null,"name":"Maritena","_children":[{"data":{"name":"Darrius","nameid":"051cc44f-7ac9-4cc2-9bd3-1dbc0176cd4f","parentname":"Maritena","parentid":"408ae57d-2986-4fd9-9b94-244c55d6a60d"},"height":0,"name":"Darrius"},{"data":{"name":"Helena","nameid":"e96e2af9-34c0-4242-a7d2-a69821d06209","parentname":"Maritena","parentid":"408ae57d-2986-4fd9-9b94-244c55d6a60d"},"height":0,"name":"Helena"},{"data":{"name":"Albert","nameid":"f926bfc5-ad79-44f6-b42f-068d385d2fc8","parentname":"Maritena","parentid":"408ae57d-2986-4fd9-9b94-244c55d6a60d"},"height":0,"name":"Albert"}]},{"data":{"name":"Luwena","nameid":"fa000e38-005f-4df5-bfd0-65ae94cff88e","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":2,"children":null,"name":"Luwena","_children":[{"data":{"name":"Kayla Reese","nameid":"4171de88-4d11-4332-a5eb-3e09c2b07461","parentname":"Luwena","parentid":"fa000e38-005f-4df5-bfd0-65ae94cff88e"},"height":1,"children":null,"name":"Kayla Reese","_children":[{"data":{"name":"Madyson","nameid":"5ebd4aca-6efd-4de3-874a-6ef4f7db2845","parentname":"Kayla Reese","parentid":"4171de88-4d11-4332-a5eb-3e09c2b07461"},"height":0,"name":"Madyson"}]}]},{"data":{"name":"Francena","nameid":"f02848a0-9f63-408b-aa03-76a61066fc3b","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":2,"children":null,"name":"Francena","_children":[{"data":{"name":"Adrian","nameid":"0c8f314f-6e1f-462a-a0aa-c8c735fb22ea","parentname":"Francena","parentid":"f02848a0-9f63-408b-aa03-76a61066fc3b"},"height":1,"children":null,"name":"Adrian","_children":[{"data":{"name":"Ivory","nameid":"d6dd4e3d-dfea-4893-a3bc-5eede62f27de","parentname":"Adrian","parentid":"0c8f314f-6e1f-462a-a0aa-c8c735fb22ea"},"height":0,"name":"Ivory"},{"data":{"name":"Ayanna","nameid":"e821d993-2a00-4549-a445-62fa9286ac08","parentname":"Adrian","parentid":"0c8f314f-6e1f-462a-a0aa-c8c735fb22ea"},"height":0,"name":"Ayanna"}]},{"data":{"name":"April","nameid":"7fbed228-5162-4f09-924a-eb45f78d07d3","parentname":"Francena","parentid":"f02848a0-9f63-408b-aa03-76a61066fc3b"},"height":1,"children":null,"name":"April","_children":[{"data":{"name":"Donta","nameid":"8f87d563-b8d6-4cba-b5d9-ff894464d270","parentname":"April","parentid":"7fbed228-5162-4f09-924a-eb45f78d07d3"},"height":0,"name":"Donta"},{"data":{"name":"Allen","nameid":"e96db594-5c83-4fa5-a650-7e42cfc4c672","parentname":"April","parentid":"7fbed228-5162-4f09-924a-eb45f78d07d3"},"height":0,"name":"Allen"}]}]},{"data":{"name":"Jackie","nameid":"c31b99aa-7e89-40df-828c-e0a1527e8d61","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":2,"children":null,"name":"Jackie","_children":[{"data":{"name":"Sean","nameid":"aa6ffeaa-dcd9-4ba6-8bc2-0c40761dd486","parentname":"Jackie","parentid":"c31b99aa-7e89-40df-828c-e0a1527e8d61"},"height":1,"children":null,"name":"Sean","_children":[{"data":{"name":"Kayah","nameid":"cfada2b3-f466-4069-b37a-a6db0ba6bd56","parentname":"Sean","parentid":"aa6ffeaa-dcd9-4ba6-8bc2-0c40761dd486"},"height":0,"name":"Kayah"},{"data":{"name":"Kelsy","nameid":"100ff3bf-044e-4ce6-970e-5e6a3cf7819e","parentname":"Sean","parentid":"aa6ffeaa-dcd9-4ba6-8bc2-0c40761dd486"},"height":0,"name":"Kelsy"}]}]},{"data":{"name":"Fredrick","nameid":"2fc2271f-430b-4601-b4d0-884da1454450","parentname":"Frances","parentid":"2da9457b-dd7b-438e-9a4c-047dcaa354ab"},"height":1,"children":null,"name":"Fredrick","_children":[{"data":{"name":"Fred","nameid":"2058d697-1712-4d41-8e8a-7858fe5388de","parentname":"Fredrick","parentid":"2fc2271f-430b-4601-b4d0-884da1454450"},"height":0,"name":"Fred"}]}]},{"data":{"name":"Horatio","nameid":"5d760af7-5132-4530-acb8-d074425a464c","parentname":"Elijah (EJ)","parentid":"cc33a401-9cef-4d96-af90-f553fb60a01a"},"height":0,"name":"Horatio"}]},{"data":{"name":"Timothy 1883","nameid":"679ecce6-138a-4337-af40-495f3a132b02","parentname":"Thomas","parentid":"1"},"height":5,"name":"Timothy 1883","_children":[{"data":{"name":"Anna Rossie 1908","nameid":"4e99f224-b969-4f95-a5c2-125e5649bbb0","parentname":"Timothy","parentid":"679ecce6-138a-4337-af40-495f3a132b02"},"height":4,"children":null,"name":"Anna Rossie 1908","_children":[{"data":{"name":"Anna Marie","nameid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":3,"children":null,"name":"Anna Marie","_children":[{"data":{"name":"Joyce","nameid":"fcd3b22b-e08c-4174-95e5-089fe1e4ad52","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":2,"children":null,"name":"Joyce","_children":[{"data":{"name":"Rena","nameid":"06279ba3-c053-435e-be46-a3cc65ebf76d","parentname":"Joyce","parentid":"fcd3b22b-e08c-4174-95e5-089fe1e4ad52"},"height":1,"children":null,"name":"Rena","_children":[{"data":{"name":"Brianna","nameid":"b2c3471c-54e1-46da-81a6-76ce5e177795","parentname":"Rena","parentid":"06279ba3-c053-435e-be46-a3cc65ebf76d"},"height":0,"name":"Brianna"},{"data":{"name":"Brian","nameid":"23721a3f-3648-4116-846b-35257d4c27f7","parentname":"Rena","parentid":"06279ba3-c053-435e-be46-a3cc65ebf76d"},"height":0,"name":"Brian"},{"data":{"name":"Daughter","nameid":"2ff57478-ada6-4121-8a93-f234e2bc2319","parentname":"Rena","parentid":"06279ba3-c053-435e-be46-a3cc65ebf76d"},"height":0,"name":"Daughter"}]},{"data":{"name":"David","nameid":"0ad47dcc-bc47-4751-b5b4-39430710997a","parentname":"Joyce","parentid":"fcd3b22b-e08c-4174-95e5-089fe1e4ad52"},"height":1,"children":null,"name":"David","_children":[{"data":{"name":"Davisha","nameid":"5e1e8de1-cfcb-4b7a-a353-5700527c3ccf","parentname":"David","parentid":"0ad47dcc-bc47-4751-b5b4-39430710997a"},"height":0,"name":"Davisha"},{"data":{"name":"Davitona","nameid":"b406a48e-92c5-4f9a-a29c-6be1cc34b9cb","parentname":"David","parentid":"0ad47dcc-bc47-4751-b5b4-39430710997a"},"height":0,"name":"Davitona"},{"data":{"name":"David","nameid":"5a13bafd-7ea6-47a7-a62b-a092cc5f4562","parentname":"David","parentid":"0ad47dcc-bc47-4751-b5b4-39430710997a"},"height":0,"name":"David"}]},{"data":{"name":"Tom","nameid":"72d3e310-25cf-4e23-bb2f-9e50c1ac02a3","parentname":"Joyce","parentid":"fcd3b22b-e08c-4174-95e5-089fe1e4ad52"},"height":1,"children":null,"name":"Tom","_children":[{"data":{"name":"Justin","nameid":"cfc3fef5-813d-47eb-9bfa-222f9755bb49","parentname":"Tom","parentid":"72d3e310-25cf-4e23-bb2f-9e50c1ac02a3"},"height":0,"name":"Justin"},{"data":{"name":"Jada","nameid":"b4cc0bd6-5723-49f3-a99b-0b384820aef4","parentname":"Tom","parentid":"72d3e310-25cf-4e23-bb2f-9e50c1ac02a3"},"height":0,"name":"Jada"}]}]},{"data":{"name":"Edrina","nameid":"9a520422-8e05-46f5-b7ff-db36a189f2af","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":1,"children":null,"name":"Edrina","_children":[{"data":{"name":"Anissa","nameid":"fea9d485-4aa1-4d77-b118-d64cf33a4ae1","parentname":"Edrina","parentid":"9a520422-8e05-46f5-b7ff-db36a189f2af"},"height":0,"name":"Anissa"},{"data":{"name":"Chauntay","nameid":"700edf99-5772-43ef-8881-2e51bc24e82d","parentname":"Edrina","parentid":"9a520422-8e05-46f5-b7ff-db36a189f2af"},"height":0,"name":"Chauntay"},{"data":{"name":"Johnny","nameid":"c5780fd7-96ef-4bc5-8261-af985a424445","parentname":"Edrina","parentid":"9a520422-8e05-46f5-b7ff-db36a189f2af"},"height":0,"name":"Johnny"}]},{"data":{"name":"Michael","nameid":"f61e00cd-9079-4f76-90ff-c956ca2e84bc","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":2,"children":null,"name":"Michael","_children":[{"data":{"name":"Tim","nameid":"36dbd244-8aba-4ffb-a64f-98de0db6d869","parentname":"Michael","parentid":"f61e00cd-9079-4f76-90ff-c956ca2e84bc"},"height":1,"children":null,"name":"Tim","_children":[{"data":{"name":"Leah","nameid":"9a78eaa1-bd37-439f-9af7-97563227411d","parentname":"Tim","parentid":"36dbd244-8aba-4ffb-a64f-98de0db6d869"},"height":0,"name":"Leah"}]}]},{"data":{"name":"Rosalind","nameid":"6284fe12-6c6a-4600-9cc1-03f6065eb579","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":1,"children":null,"name":"Rosalind","_children":[{"data":{"name":"Mikhael","nameid":"25f33a22-393b-49b7-bcc9-fada1731e987","parentname":"Rosalind","parentid":"6284fe12-6c6a-4600-9cc1-03f6065eb579"},"height":0,"name":"Mikhael"},{"data":{"name":"Kjamiryn","nameid":"c17f381a-d437-438d-939d-6614813e9014","parentname":"Rosalind","parentid":"6284fe12-6c6a-4600-9cc1-03f6065eb579"},"height":0,"name":"Kjamiryn"}]},{"data":{"name":"James","nameid":"a7575d74-76e7-4122-9707-88f2ac9a9012","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":1,"children":null,"name":"James","_children":[{"data":{"name":"Olivia","nameid":"40e7c400-3e88-4ff5-8aaa-8d4d07e1b79b","parentname":"James","parentid":"a7575d74-76e7-4122-9707-88f2ac9a9012"},"height":0,"name":"Olivia"},{"data":{"name":"Victoria","nameid":"e217f084-5d1f-4bba-be9c-dd230ef585fb","parentname":"James","parentid":"a7575d74-76e7-4122-9707-88f2ac9a9012"},"height":0,"name":"Victoria"}]},{"data":{"name":"Kevin","nameid":"1b15ae06-bb5f-4fd0-9a10-53e74964877b","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":0,"name":"Kevin"},{"data":{"name":"Melani","nameid":"b4f8fc28-5e27-4ef0-81c1-25e2ffaf11af","parentname":"Anna Marie","parentid":"7ec6ebe5-3b03-463e-ad44-3d631cb32c0e"},"height":0,"name":"Melani"}]},{"data":{"name":"John","nameid":"42b95115-95e9-4941-981d-85e25821718f","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":1,"children":null,"name":"John","_children":[{"data":{"name":"Todd","nameid":"d9595f20-0757-46c7-b235-50bc346da14c","parentname":"John","parentid":"42b95115-95e9-4941-981d-85e25821718f"},"height":0,"name":"Todd"},{"data":{"name":"Stacie","nameid":"a7dcde47-dcf4-418b-ba3a-f2208d67f8dc","parentname":"John","parentid":"42b95115-95e9-4941-981d-85e25821718f"},"height":0,"name":"Stacie"}]},{"data":{"name":"Carol","nameid":"11a7942c-8556-4594-8c94-bafd9e9649d0","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":1,"children":null,"name":"Carol","_children":[{"data":{"name":"Kendra","nameid":"0c024894-6c0b-42b0-b8f4-e90a119622d3","parentname":"Carol","parentid":"11a7942c-8556-4594-8c94-bafd9e9649d0"},"height":0,"name":"Kendra"}]},{"data":{"name":"Ada","nameid":"b71842e0-9326-4d0b-bbf9-1388145dd440","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":2,"children":null,"name":"Ada","_children":[{"data":{"name":"Tyra","nameid":"b7989deb-f380-4d7c-b2e7-e325f9c25485","parentname":"Ada","parentid":"b71842e0-9326-4d0b-bbf9-1388145dd440"},"height":0,"name":"Tyra"},{"data":{"name":"Bernard","nameid":"4ceaf519-1834-4ca3-84d5-9aa1c7e5eb5a","parentname":"Ada","parentid":"b71842e0-9326-4d0b-bbf9-1388145dd440"},"height":0,"name":"Bernard"},{"data":{"name":"Juan","nameid":"d58562ed-84a0-41f4-9416-5329528b0dc7","parentname":"Ada","parentid":"b71842e0-9326-4d0b-bbf9-1388145dd440"},"height":1,"children":null,"name":"Juan","_children":[{"data":{"name":"Kyjuan","nameid":"b5125424-4818-4430-b04c-562c788dcf18","parentname":"Juan","parentid":"d58562ed-84a0-41f4-9416-5329528b0dc7"},"height":0,"name":"Kyjuan"}]}]},{"data":{"name":"Beverly","nameid":"6d0e1047-d5be-4db1-8636-4872f762383b","parentname":"Anna Rossie 1908","parentid":"4e99f224-b969-4f95-a5c2-125e5649bbb0"},"height":1,"children":null,"name":"Beverly","_children":[{"data":{"name":"Dawn","nameid":"ece8fc3e-d0d0-420e-8751-93f1f17faf6c","parentname":"Beverly","parentid":"6d0e1047-d5be-4db1-8636-4872f762383b"},"height":0,"name":"Dawn"},{"data":{"name":"Vida","nameid":"1cb7cc8e-aa55-48bf-bbf0-d894274c39a7","parentname":"Beverly","parentid":"6d0e1047-d5be-4db1-8636-4872f762383b"},"height":0,"name":"Vida"}]}]},{"data":{"name":"Timothy","nameid":"9cb1f803-b442-4c6a-a0e2-22eef97a9ffb","parentname":"Timothy","parentid":"679ecce6-138a-4337-af40-495f3a132b02"},"height":0,"name":"Timothy"}]},{"data":{"name":"Sumner 1885","nameid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a","parentname":"Thomas","parentid":"1"},"height":4,"name":"Sumner 1885","_children":[{"data":{"name":"Sumner","nameid":"c944356e-99b1-4b86-ad98-e6353c6d940a","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Sumner","_children":[{"data":{"name":"Sandra","nameid":"d854de4c-0273-46b4-b58b-f09af7247b21","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":0,"name":"Sandra"},{"data":{"name":"Sumner Rawn","nameid":"ede2b822-d52a-41cf-a43b-161ad509f19e","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":2,"children":null,"name":"Sumner Rawn","_children":[{"data":{"name":"S Jeyson","nameid":"3420817e-fe47-473f-bb7d-8ca93d03258e","parentname":"Sumner","parentid":"ede2b822-d52a-41cf-a43b-161ad509f19e"},"height":1,"children":null,"name":"S Jeyson","_children":[{"data":{"name":"India","nameid":"f1523a89-f327-4080-9642-40b29910a66f","parentname":"S Jeyson","parentid":"3420817e-fe47-473f-bb7d-8ca93d03258e"},"height":0,"name":"India"},{"data":{"name":"Dana","nameid":"723adcbb-e95f-43cb-abe4-87c09ab42e74","parentname":"S Jeyson","parentid":"3420817e-fe47-473f-bb7d-8ca93d03258e"},"height":0,"name":"Dana"}]},{"data":{"name":"Sumner Rawn","nameid":"443a2d62-3158-4ee6-a182-a1c930471790","parentname":"Sumner","parentid":"ede2b822-d52a-41cf-a43b-161ad509f19e"},"height":0,"name":"Sumner Rawn"}]},{"data":{"name":"Vincent","nameid":"3a9381e2-a044-4cf7-a909-e4db465c7d43","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":0,"name":"Vincent"},{"data":{"name":"Darrawn","nameid":"ba1e2300-76fc-4319-b32b-8bb3da9900c6","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":1,"children":null,"name":"Darrawn","_children":[{"data":{"name":"Briana","nameid":"9a0f79ca-288b-448b-994f-fb7807d8836a","parentname":"Darrawn","parentid":"ba1e2300-76fc-4319-b32b-8bb3da9900c6"},"height":0,"name":"Briana"}]},{"data":{"name":"Joseph","nameid":"edd52b9b-dfb9-4fdf-993e-ced798bc8b84","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":0,"name":"Joseph"},{"data":{"name":"Chester","nameid":"7a48b4c2-b890-4e20-ae59-081ecb731d73","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":1,"children":null,"name":"Chester","_children":[{"data":{"name":"Talon","nameid":"1059a6d5-3b56-46ec-9e75-4c0638902abc","parentname":"Chester","parentid":"7a48b4c2-b890-4e20-ae59-081ecb731d73"},"height":0,"name":"Talon"}]},{"data":{"name":"Crystal","nameid":"1f01eb44-7f26-4789-adba-027ad08af7f9","parentname":"Sumner","parentid":"c944356e-99b1-4b86-ad98-e6353c6d940a"},"height":1,"children":null,"name":"Crystal","_children":[{"data":{"name":"Ashley","nameid":"0bfc65aa-739b-4e01-863d-251428609c99","parentname":"Crystal","parentid":"1f01eb44-7f26-4789-adba-027ad08af7f9"},"height":0,"name":"Ashley"}]}]},{"data":{"name":"Benjamin","nameid":"ae1d2ff8-7b81-4b8e-bbc1-386024caa69d","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Benjamin","_children":[{"data":{"name":"Benjamin Jr","nameid":"4094533a-9951-4e1f-bf1a-461f00e14e44","parentname":"Benjamin","parentid":"ae1d2ff8-7b81-4b8e-bbc1-386024caa69d"},"height":1,"children":null,"name":"Benjamin Jr","_children":[{"data":{"name":"Ayanna","nameid":"7929d91c-df5b-4594-a635-d1dabada812a","parentname":"Benjamin Jr","parentid":"4094533a-9951-4e1f-bf1a-461f00e14e44"},"height":0,"name":"Ayanna"},{"data":{"name":"Danya","nameid":"9fcbf239-f254-41db-8b70-2c6326203104","parentname":"Benjamin Jr","parentid":"4094533a-9951-4e1f-bf1a-461f00e14e44"},"height":0,"name":"Danya"},{"data":{"name":"Nikki","nameid":"14238d0e-ee16-43ba-baa3-bf359decfcaa","parentname":"Benjamin Jr","parentid":"4094533a-9951-4e1f-bf1a-461f00e14e44"},"height":0,"name":"Nikki"}]},{"data":{"name":"Sharon","nameid":"bb4c7488-40f3-4196-8276-892365064091","parentname":"Benjamin","parentid":"ae1d2ff8-7b81-4b8e-bbc1-386024caa69d"},"height":2,"children":null,"name":"Sharon","_children":[{"data":{"name":"Chaka","nameid":"baa894fa-67a1-4c79-a57a-f3aa20902682","parentname":"Sharon","parentid":"bb4c7488-40f3-4196-8276-892365064091"},"height":1,"children":null,"name":"Chaka","_children":[{"data":{"name":"Belle' Lynn","nameid":"8a093d7a-92d1-41ee-a01d-d33954769a9f","parentname":"Chaka","parentid":"baa894fa-67a1-4c79-a57a-f3aa20902682"},"height":0,"name":"Belle' Lynn"},{"data":{"name":"Dollie","nameid":"a9d794c8-d012-45f1-9834-d0f6dbc4b92d","parentname":"Chaka","parentid":"baa894fa-67a1-4c79-a57a-f3aa20902682"},"height":0,"name":"Dollie"}]}]}]},{"data":{"name":"Rudolph","nameid":"167a87a5-7cc3-44af-a240-5a6be725d48a","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":2,"children":null,"name":"Rudolph","_children":[{"data":{"name":"Claudia","nameid":"ba755cfa-e757-4758-a843-9a7583a969b5","parentname":"Rudolph","parentid":"167a87a5-7cc3-44af-a240-5a6be725d48a"},"height":1,"children":null,"name":"Claudia","_children":[{"data":{"name":"Mariama","nameid":"2a9e35c5-f798-4089-aee4-367cdb860da8","parentname":"Claudia","parentid":"ba755cfa-e757-4758-a843-9a7583a969b5"},"height":0,"name":"Mariama"},{"data":{"name":"Malene","nameid":"2caf7526-160b-48fa-a559-ec6fefa22f4c","parentname":"Claudia","parentid":"ba755cfa-e757-4758-a843-9a7583a969b5"},"height":0,"name":"Malene"}]},{"data":{"name":"Kevin Sr","nameid":"6bedb333-7311-4808-9779-c9f932b6d8e5","parentname":"Rudolph","parentid":"167a87a5-7cc3-44af-a240-5a6be725d48a"},"height":1,"children":null,"name":"Kevin Sr","_children":[{"data":{"name":"Tashia","nameid":"2382c1dc-e312-41cd-8a8b-c07981e6b4c0","parentname":"Kevin","parentid":"6bedb333-7311-4808-9779-c9f932b6d8e5"},"height":0,"name":"Tashia"},{"data":{"name":"Kevin Jr","nameid":"a4712a1b-a567-4231-bf40-34cb447c8257","parentname":"Kevin Sr","parentid":"6bedb333-7311-4808-9779-c9f932b6d8e5"},"height":0,"name":"Kevin Jr"}]}]},{"data":{"name":"Wilhelmina","nameid":"11222044-edae-4d02-a0a0-e3083f92af76","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Wilhelmina","_children":[{"data":{"name":"Claude Jr","nameid":"8bb3166b-636f-476a-9dba-d7d8f8bf674a","parentname":"Wilhelmina","parentid":"11222044-edae-4d02-a0a0-e3083f92af76"},"height":2,"children":null,"name":"Claude Jr","_children":[{"data":{"name":"Deliria","nameid":"0e7041cd-4d0c-4ccd-a87b-b3d060b5267a","parentname":"Claude Jr","parentid":"8bb3166b-636f-476a-9dba-d7d8f8bf674a"},"height":1,"children":null,"name":"Deliria","_children":[{"data":{"name":"Baylie","nameid":"91cd534a-0078-4546-ab7e-810016c343b1","parentname":"Deliria","parentid":"0e7041cd-4d0c-4ccd-a87b-b3d060b5267a"},"height":0,"name":"Baylie"}]},{"data":{"name":"Claude 3rd","nameid":"79113a4b-8ceb-4fed-95a9-bd04d00d343c","parentname":"Claude Jr","parentid":"8bb3166b-636f-476a-9dba-d7d8f8bf674a"},"height":1,"children":null,"name":"Claude 3rd","_children":[{"data":{"name":"Aerulon","nameid":"5bf32db6-8cca-49b1-abd7-0583f4e983bb","parentname":"Claude 3rd","parentid":"79113a4b-8ceb-4fed-95a9-bd04d00d343c"},"height":0,"name":"Aerulon"}]},{"data":{"name":"Zakkiyah","nameid":"7093ab0c-df5d-4795-b904-03f1e740e8fd","parentname":"Claude Jr","parentid":"8bb3166b-636f-476a-9dba-d7d8f8bf674a"},"height":0,"name":"Zakkiyah"}]}]},{"data":{"name":"Clarence","nameid":"351ec010-27ad-4df7-b8a2-6a51a0e36cc7","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Clarence","_children":[{"data":{"name":"Clarence Jr","nameid":"9c591601-c690-42e4-acc7-922c2f711a70","parentname":"Clarence","parentid":"351ec010-27ad-4df7-b8a2-6a51a0e36cc7"},"height":2,"children":null,"name":"Clarence Jr","_children":[{"data":{"name":"Aja","nameid":"d11eaf9b-8f9d-43e6-be31-87ca9d9a1246","parentname":"Clarence Jr","parentid":"9c591601-c690-42e4-acc7-922c2f711a70"},"height":1,"children":null,"name":"Aja","_children":[{"data":{"name":"De'Lani","nameid":"9a02bf43-f23a-45db-bdf1-205fce2d21f1","parentname":"Aja","parentid":"d11eaf9b-8f9d-43e6-be31-87ca9d9a1246"},"height":0,"name":"De'Lani"}]},{"data":{"name":"Ciara","nameid":"12c57bba-f1e5-49f6-a6cb-256530d47d4d","parentname":"Clarence Jr","parentid":"9c591601-c690-42e4-acc7-922c2f711a70"},"height":1,"children":null,"name":"Ciara","_children":[{"data":{"name":"Myles","nameid":"01a34cb6-7228-497b-9096-5db8e1619d67","parentname":"Ciara","parentid":"12c57bba-f1e5-49f6-a6cb-256530d47d4d"},"height":0,"name":"Myles"}]},{"data":{"name":"Clarence 3rd","nameid":"ee01eee4-6a92-4dba-b083-054157f79cbb","parentname":"Clarence Jr","parentid":"9c591601-c690-42e4-acc7-922c2f711a70"},"height":0,"name":"Clarence 3rd"}]},{"data":{"name":"Lillian","nameid":"5748e9cb-2b35-49c5-8292-51a9c5ac8b40","parentname":"Clarence","parentid":"351ec010-27ad-4df7-b8a2-6a51a0e36cc7"},"height":1,"children":null,"name":"Lillian","_children":[{"data":{"name":"Chloe","nameid":"3c4b00c0-e99a-4a10-9a16-fc695181e475","parentname":"Lillian","parentid":"5748e9cb-2b35-49c5-8292-51a9c5ac8b40"},"height":0,"name":"Chloe"},{"data":{"name":"Bryce","nameid":"4f54cbfe-4db7-40fb-99a1-d5894b339b54","parentname":"Lillian","parentid":"5748e9cb-2b35-49c5-8292-51a9c5ac8b40"},"height":0,"name":"Bryce"},{"data":{"name":"Ava","nameid":"529e426b-3178-4936-9f49-38a84f9a79ac","parentname":"Lillian","parentid":"5748e9cb-2b35-49c5-8292-51a9c5ac8b40"},"height":0,"name":"Ava"}]}]},{"data":{"name":"Edward","nameid":"adf92481-b876-4629-a2e4-b55713f3e6fe","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Edward","_children":[{"data":{"name":"Edward Jr","nameid":"c7ad5963-7ce4-4b27-a499-93c2451dc692","parentname":"Edward","parentid":"adf92481-b876-4629-a2e4-b55713f3e6fe"},"height":2,"children":null,"name":"Edward Jr","_children":[{"data":{"name":"Tamika","nameid":"6e9c343e-3f79-4555-8248-d3860ed989e2","parentname":"Edward Jr","parentid":"c7ad5963-7ce4-4b27-a499-93c2451dc692"},"height":1,"children":null,"name":"Tamika","_children":[{"data":{"name":"Ariel","nameid":"8afde4ac-5c00-4db5-a38e-3d00eab82a54","parentname":"Tamika","parentid":"6e9c343e-3f79-4555-8248-d3860ed989e2"},"height":0,"name":"Ariel"},{"data":{"name":"Tre'Tale","nameid":"a5aeab01-ddc7-4a86-8f12-ef07b34d17f3","parentname":"Tamika","parentid":"6e9c343e-3f79-4555-8248-d3860ed989e2"},"height":0,"name":"Tre'Tale"}]},{"data":{"name":"Edward 3rd","nameid":"990f51fe-7a34-4120-829d-80fbdf79b307","parentname":"Edward Jr","parentid":"c7ad5963-7ce4-4b27-a499-93c2451dc692"},"height":0,"name":"Edward 3rd"},{"data":{"name":"TaJuan","nameid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e","parentname":"Edward Jr","parentid":"c7ad5963-7ce4-4b27-a499-93c2451dc692"},"height":1,"children":null,"name":"TaJuan","_children":[{"data":{"name":"Danny","nameid":"575ed567-683b-4fae-9997-63e700d2a70f","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Danny"},{"data":{"name":"Trevon","nameid":"66933e71-4faf-4eaf-acfc-5d68a0ea6e56","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Trevon"},{"data":{"name":"Izzy","nameid":"c3f9ee4e-a1e7-465c-befa-7b913da3d16e","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Izzy"},{"data":{"name":"Joseph","nameid":"06cc5758-c3c3-4a07-ac73-7c105b4bc764","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Joseph"},{"data":{"name":"Nevaeh","nameid":"f6e16687-5866-4f41-b4b0-d861f8fa02f9","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Nevaeh"},{"data":{"name":"Trinity","nameid":"0128d7ff-f421-480c-a269-ee7735767cb2","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Trinity"},{"data":{"name":"Isaricca","nameid":"b86ceec5-1798-4543-82cf-2b9203ff391d","parentname":"TaJuan","parentid":"0a09437c-fd49-4f9e-bdfa-55e24960c60e"},"height":0,"name":"Isaricca"}]}]},{"data":{"name":"Clotel (Susan)","nameid":"7bfaf5ca-7d5f-4bad-ac65-25bf815cf81b","parentname":"Edward","parentid":"adf92481-b876-4629-a2e4-b55713f3e6fe"},"height":2,"children":null,"name":"Clotel (Susan)","_children":[{"data":{"name":"Ezra","nameid":"21dc2c1f-9eed-461b-8d14-8ff8195d3114","parentname":"Clotel (Susan)","parentid":"7bfaf5ca-7d5f-4bad-ac65-25bf815cf81b"},"height":1,"children":null,"name":"Ezra","_children":[{"data":{"name":"Caleb","nameid":"3334b90e-a72f-4a16-be60-5650382b5726","parentname":"Ezra","parentid":"21dc2c1f-9eed-461b-8d14-8ff8195d3114"},"height":0,"name":"Caleb"}]},{"data":{"name":"James 3rd","nameid":"36ff488c-8b91-4740-a1b1-fdfb658fd685","parentname":"Clotel (Susan)","parentid":"7bfaf5ca-7d5f-4bad-ac65-25bf815cf81b"},"height":0,"name":"James 3rd"}]},{"data":{"name":"Otis","nameid":"3d9b4cc0-1e2f-41f4-9258-469cd488ec63","parentname":"Edward","parentid":"adf92481-b876-4629-a2e4-b55713f3e6fe"},"height":0,"name":"Otis"}]},{"data":{"name":"Minnie","nameid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Minnie","_children":[{"data":{"name":"Myrtle","nameid":"7ce85bcf-0029-424c-ad76-5c465d235bd0","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":1,"children":null,"name":"Myrtle","_children":[{"data":{"name":"Venda","nameid":"e3f0e655-9cdb-41c9-8949-3d9fad571664","parentname":"Myrtle","parentid":"7ce85bcf-0029-424c-ad76-5c465d235bd0"},"height":0,"name":"Venda"},{"data":{"name":"Demetrius","nameid":"1a5d62dc-f546-4038-9d3c-c202ad0f7dce","parentname":"Myrtle","parentid":"7ce85bcf-0029-424c-ad76-5c465d235bd0"},"height":0,"name":"Demetrius"}]},{"data":{"name":"Robyn","nameid":"30c3ab32-3df3-4bab-95b7-ebd21d082688","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":1,"children":null,"name":"Robyn","_children":[{"data":{"name":"Minnie","nameid":"17b42215-e1d9-43b5-87c4-58a63b79a1df","parentname":"Robyn","parentid":"30c3ab32-3df3-4bab-95b7-ebd21d082688"},"height":0,"name":"Minnie"},{"data":{"name":"Grier","nameid":"2f4bc27a-43e8-4d1a-b1fc-68140c4a9418","parentname":"Robyn","parentid":"30c3ab32-3df3-4bab-95b7-ebd21d082688"},"height":0,"name":"Grier"}]},{"data":{"name":"Hotley Jr","nameid":"c015a054-9c8f-498e-b255-76167531b65c","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":2,"children":null,"name":"Hotley Jr","_children":[{"data":{"name":"T'Angela","nameid":"62bfe507-6c4c-4ea7-99d2-ea6b97c6a005","parentname":"Hotley Jr","parentid":"c015a054-9c8f-498e-b255-76167531b65c"},"height":0,"name":"T'Angela"},{"data":{"name":"Hailey","nameid":"b848d98f-b683-4d14-9f42-5898475bf55a","parentname":"Hotley Jr","parentid":"c015a054-9c8f-498e-b255-76167531b65c"},"height":0,"name":"Hailey"},{"data":{"name":"Sydney","nameid":"c45961a8-5eac-45b9-8ac8-6a3949b37039","parentname":"Hotley Jr","parentid":"c015a054-9c8f-498e-b255-76167531b65c"},"height":0,"name":"Sydney"},{"data":{"name":"Olympia","nameid":"e41cf8d6-fe61-4c9a-aab7-fe5fdfa48215","parentname":"Hotley Jr","parentid":"c015a054-9c8f-498e-b255-76167531b65c"},"height":1,"children":null,"name":"Olympia","_children":[{"data":{"name":"Gieselle","nameid":"3b39f06d-45d7-4352-93dc-02f7397b3a51","parentname":"Olympia","parentid":"e41cf8d6-fe61-4c9a-aab7-fe5fdfa48215"},"height":0,"name":"Gieselle"}]}]},{"data":{"name":"Kimberly","nameid":"dbe66706-7386-45f1-8c7b-6dd6550ef799","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":0,"name":"Kimberly"},{"data":{"name":"Kari","nameid":"2dcb4fae-cbd4-491c-ad06-b6359a96d6e9","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":0,"name":"Kari"},{"data":{"name":"Lillian","nameid":"2fa6f3af-74ab-41d7-be17-e55c36a82e3c","parentname":"Minnie","parentid":"e85264f8-1a61-4964-bf3b-1f61d6b7a5b7"},"height":1,"children":null,"name":"Lillian","_children":[{"data":{"name":"Chloe","nameid":"a16e8edf-4c1f-4a31-883b-517a96c908e5","parentname":"Lillian","parentid":"2fa6f3af-74ab-41d7-be17-e55c36a82e3c"},"height":0,"name":"Chloe"},{"data":{"name":"Bryce","nameid":"2f54884a-12e8-4276-b408-06ba7f48a042","parentname":"Lillian","parentid":"2fa6f3af-74ab-41d7-be17-e55c36a82e3c"},"height":0,"name":"Bryce"},{"data":{"name":"Ava","nameid":"b5997038-93c7-4a82-8db1-ec92d0788922","parentname":"Lillian","parentid":"2fa6f3af-74ab-41d7-be17-e55c36a82e3c"},"height":0,"name":"Ava"}]}]},{"data":{"name":"Walter","nameid":"05b649e8-58b1-47e9-8a22-2c58c831f082","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Walter","_children":[{"data":{"name":"Amado","nameid":"aa30ba58-db56-4b2b-bd30-252dd06f4f23","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":2,"children":null,"name":"Amado","_children":[{"data":{"name":"Shakena","nameid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b","parentname":"Amado","parentid":"aa30ba58-db56-4b2b-bd30-252dd06f4f23"},"height":1,"children":null,"name":"Shakena","_children":[{"data":{"name":"Tiambra","nameid":"a19968ad-5802-442a-ba37-15441ed750ca","parentname":"Shakena","parentid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b"},"height":0,"name":"Tiambra"},{"data":{"name":"Toure","nameid":"a13c0111-e08c-4315-aa77-470bb11cb305","parentname":"Shakena","parentid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b"},"height":0,"name":"Toure"},{"data":{"name":"Tiandria","nameid":"8d495e54-39b0-4cec-b831-ce755f176cd6","parentname":"Shakena","parentid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b"},"height":0,"name":"Tiandria"},{"data":{"name":"Tianna","nameid":"9295c3bf-70dc-402b-bb29-39ebd288f03e","parentname":"Shakena","parentid":"d7028aab-b3bc-412d-9b7d-e03bb0804c2b"},"height":0,"name":"Tianna"}]},{"data":{"name":"Ashley","nameid":"a146f086-796b-4fbf-85e4-f6c61ffefc2a","parentname":"Amado","parentid":"aa30ba58-db56-4b2b-bd30-252dd06f4f23"},"height":1,"children":null,"name":"Ashley","_children":[{"data":{"name":"Four Daughters","nameid":"dec590c4-d680-4144-ba6f-ff3868f14a8e","parentname":"Ashley","parentid":"a146f086-796b-4fbf-85e4-f6c61ffefc2a"},"height":0,"name":"Four Daughters"}]},{"data":{"name":"Amanda","nameid":"44ed7b8a-94f0-4f39-9c9e-b3c15ca902ec","parentname":"Amado","parentid":"aa30ba58-db56-4b2b-bd30-252dd06f4f23"},"height":1,"children":null,"name":"Amanda","_children":[{"data":{"name":"Chloe","nameid":"6e944712-6d1f-4762-82e7-261cf1de89b8","parentname":"Amanda","parentid":"44ed7b8a-94f0-4f39-9c9e-b3c15ca902ec"},"height":0,"name":"Chloe"}]}]},{"data":{"name":"Delena","nameid":"b221525c-3c70-4533-93bc-f15e6746f403","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":2,"children":null,"name":"Delena","_children":[{"data":{"name":"Paul Jr","nameid":"9ca130eb-ee6d-4f61-8b31-2656e9e1ed9f","parentname":"Delena","parentid":"b221525c-3c70-4533-93bc-f15e6746f403"},"height":1,"children":null,"name":"Paul Jr","_children":[{"data":{"name":"Cadie","nameid":"54830291-4385-4694-9f37-ef6f35f5a828","parentname":"Paul Jr","parentid":"9ca130eb-ee6d-4f61-8b31-2656e9e1ed9f"},"height":0,"name":"Cadie"},{"data":{"name":"Isaac","nameid":"5dda6192-3183-4a24-82d1-e8fce111f730","parentname":"Paul Jr","parentid":"9ca130eb-ee6d-4f61-8b31-2656e9e1ed9f"},"height":0,"name":"Isaac"}]},{"data":{"name":"Alandria","nameid":"180ef035-77a2-4341-9294-daf4af5d5156","parentname":"Delena","parentid":"b221525c-3c70-4533-93bc-f15e6746f403"},"height":1,"children":null,"name":"Alandria","_children":[{"data":{"name":"Patrick","nameid":"b32a6266-b986-4de4-b37a-db59d68dae90","parentname":"Alandria","parentid":"180ef035-77a2-4341-9294-daf4af5d5156"},"height":0,"name":"Patrick"}]},{"data":{"name":"Clyde","nameid":"694af8df-833f-4815-96e7-79cd3e1d23f2","parentname":"Delena","parentid":"b221525c-3c70-4533-93bc-f15e6746f403"},"height":1,"children":null,"name":"Clyde","_children":[{"data":{"name":"Caliyah","nameid":"25ca3d3f-60f8-4c7a-a96c-43f506361311","parentname":"Clyde","parentid":"694af8df-833f-4815-96e7-79cd3e1d23f2"},"height":0,"name":"Caliyah"}]},{"data":{"name":"Kaelin","nameid":"b99da16a-0a5a-472b-81d8-4fd8de33e752","parentname":"Delena","parentid":"b221525c-3c70-4533-93bc-f15e6746f403"},"height":0,"name":"Kaelin"}]},{"data":{"name":"Walter Jr","nameid":"7af49bb8-d987-4bcc-9ee7-7ac14edf29ee","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":0,"name":"Walter Jr"},{"data":{"name":"Tami","nameid":"c6c2cbe6-7ab3-4ae8-82b3-b84aebe22c76","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":2,"children":null,"name":"Tami","_children":[{"data":{"name":"Laurkeisha","nameid":"08c027a9-a4fb-401e-9f7a-612edb5680c4","parentname":"Tami","parentid":"c6c2cbe6-7ab3-4ae8-82b3-b84aebe22c76"},"height":1,"children":null,"name":"Laurkeisha","_children":[{"data":{"name":"Sacred","nameid":"34c77471-382c-4f9c-9078-d1d314f633ce","parentname":"Laurkeisha","parentid":"08c027a9-a4fb-401e-9f7a-612edb5680c4"},"height":0,"name":"Sacred"}]}]},{"data":{"name":"Jonah","nameid":"b48d3687-d39b-4b12-ac2f-9f5e15524394","parentname":"Walter","parentid":"05b649e8-58b1-47e9-8a22-2c58c831f082"},"height":1,"children":null,"name":"Jonah","_children":[{"data":{"name":"Pistis","nameid":"a5a150e3-2050-49d2-ad1e-08f36caa2d7f","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Pistis"},{"data":{"name":"Giovannni","nameid":"b6848740-3a10-4c65-9749-2f3cc75fd55c","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Giovannni"},{"data":{"name":"Soloman","nameid":"e26def33-2466-48be-84e3-3b3a7b924330","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Soloman"},{"data":{"name":"Paris","nameid":"7deea66a-8918-45f7-b5c3-8ffe55c3c085","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Paris"},{"data":{"name":"James","nameid":"33cef867-40f3-43cc-a050-5871dc29669f","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"James"},{"data":{"name":"Jonevaeh","nameid":"e0d7772b-4c96-4e4b-9dac-4d0b339a8082","parentname":"Jonah","parentid":"b48d3687-d39b-4b12-ac2f-9f5e15524394"},"height":0,"name":"Jonevaeh"}]}]},{"data":{"name":"Betty","nameid":"51065cfa-2edc-477b-9d50-fa6286a3397a","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Betty","_children":[{"data":{"name":"Gina","nameid":"c45ab36c-50b4-460b-a750-94d47a01d2f5","parentname":"Betty","parentid":"51065cfa-2edc-477b-9d50-fa6286a3397a"},"height":2,"children":null,"name":"Gina","_children":[{"data":{"name":"Nikisha","nameid":"cc6da084-4605-4420-9ea9-3773b467e3e1","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":1,"children":null,"name":"Nikisha","_children":[{"data":{"name":"Rodney","nameid":"a3c94ace-59ff-4d76-a152-d6fabe31aa21","parentname":"Nikisha","parentid":"cc6da084-4605-4420-9ea9-3773b467e3e1"},"height":0,"name":"Rodney"}]},{"data":{"name":"Janaka","nameid":"ef758e01-77dd-4e7f-befe-2b4089b1f41b","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":1,"children":null,"name":"Janaka","_children":[{"data":{"name":"Promise","nameid":"141768ae-4349-4466-ac14-9a74a5bfa783","parentname":"Janaka","parentid":"ef758e01-77dd-4e7f-befe-2b4089b1f41b"},"height":0,"name":"Promise"},{"data":{"name":"Aujonae","nameid":"41926895-6cf4-440e-9663-862085a454bf","parentname":"Janaka","parentid":"ef758e01-77dd-4e7f-befe-2b4089b1f41b"},"height":0,"name":"Aujonae"},{"data":{"name":"Elijah","nameid":"c89c6eb4-d756-4a5d-8601-f0c2c39e2d66","parentname":"Janaka","parentid":"ef758e01-77dd-4e7f-befe-2b4089b1f41b"},"height":0,"name":"Elijah"}]},{"data":{"name":"Najee","nameid":"a5400e92-e7cb-4b79-877a-0d3cb06b68e3","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":0,"name":"Najee"},{"data":{"name":"Vaskey","nameid":"bef28763-6203-4989-a1f5-16b4093b8d75","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":0,"name":"Vaskey"},{"data":{"name":"Nikki","nameid":"687d9e58-19a8-408f-ae4b-2ba213aa4a77","parentname":"Gina","parentid":"c45ab36c-50b4-460b-a750-94d47a01d2f5"},"height":0,"name":"Nikki"}]},{"data":{"name":"Traci","nameid":"76b9581b-509b-4283-85ea-cf658616a058","parentname":"Betty","parentid":"51065cfa-2edc-477b-9d50-fa6286a3397a"},"height":1,"children":null,"name":"Traci","_children":[{"data":{"name":"Dylan","nameid":"b6cbff4c-bbb0-445d-8d2f-183b09941f99","parentname":"Traci","parentid":"76b9581b-509b-4283-85ea-cf658616a058"},"height":0,"name":"Dylan"},{"data":{"name":"Reghan","nameid":"d8ed5ab4-3e22-4663-b2f2-a6f071f422ed","parentname":"Traci","parentid":"76b9581b-509b-4283-85ea-cf658616a058"},"height":0,"name":"Reghan"}]},{"data":{"name":"Shawn","nameid":"dfabff19-2d72-497a-8cfe-50a020c5e5c3","parentname":"Betty","parentid":"51065cfa-2edc-477b-9d50-fa6286a3397a"},"height":0,"name":"Shawn"}]},{"data":{"name":"Thomas","nameid":"a376fcb5-d2d3-43b7-9e9f-0a37dc2ee310","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Thomas","_children":[{"data":{"name":"Tona","nameid":"981e2b3f-15bb-434b-afba-c901a88dcc11","parentname":"Thomas","parentid":"a376fcb5-d2d3-43b7-9e9f-0a37dc2ee310"},"height":0,"name":"Tona"},{"data":{"name":"Lillian","nameid":"24639dc4-a0c9-4d29-b115-80ba18f235ae","parentname":"Thomas","parentid":"a376fcb5-d2d3-43b7-9e9f-0a37dc2ee310"},"height":0,"name":"Lillian"},{"data":{"name":"Joseph","nameid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69","parentname":"Thomas","parentid":"a376fcb5-d2d3-43b7-9e9f-0a37dc2ee310"},"height":2,"children":null,"name":"Joseph","_children":[{"data":{"name":"Amber","nameid":"8453dad0-a7a3-4ee4-b8ad-9b3d8989090d","parentname":"Joseph","parentid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69"},"height":1,"children":null,"name":"Amber","_children":[{"data":{"name":"Ayanna","nameid":"44b8e448-6126-4112-930b-c3367f73d4a1","parentname":"Amber","parentid":"8453dad0-a7a3-4ee4-b8ad-9b3d8989090d"},"height":0,"name":"Ayanna"}]},{"data":{"name":"Ashlee","nameid":"63fc6423-844d-46b1-835f-bb2bdf80930b","parentname":"Joseph","parentid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69"},"height":1,"children":null,"name":"Ashlee","_children":[{"data":{"name":"Brayden","nameid":"5e656687-2eb1-4600-8a09-8eb754d1737c","parentname":"Ashlee","parentid":"63fc6423-844d-46b1-835f-bb2bdf80930b"},"height":0,"name":"Brayden"},{"data":{"name":"Ashton","nameid":"688b0b35-727b-4fe9-95dd-dea308295510","parentname":"Ashlee","parentid":"63fc6423-844d-46b1-835f-bb2bdf80930b"},"height":0,"name":"Ashton"}]},{"data":{"name":"Tana","nameid":"4925295f-26cc-4ef3-a617-0f9ec2c60afd","parentname":"Joseph","parentid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69"},"height":0,"name":"Tana"},{"data":{"name":"Tiana","nameid":"d35ac5b4-4872-43b4-9e64-56a51f3b0723","parentname":"Joseph","parentid":"851c86ba-3ce3-435f-8cd8-8bb43373dc69"},"height":0,"name":"Tiana"}]}]},{"data":{"name":"Juanita","nameid":"dc7278b8-ce62-49bb-bf1a-0c976fa7483d","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":0,"name":"Juanita"},{"data":{"name":"Miriam","nameid":"62c59a15-8ea9-47ba-a65c-1dc20fdb9ff2","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":3,"children":null,"name":"Miriam","_children":[{"data":{"name":"Michael","nameid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7","parentname":"Miriam","parentid":"62c59a15-8ea9-47ba-a65c-1dc20fdb9ff2"},"height":2,"children":null,"name":"Michael","_children":[{"data":{"name":"Jastin","nameid":"9c8300bd-0e23-409d-8916-be9d1898553e","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":0,"name":"Jastin"},{"data":{"name":"Mykala","nameid":"3a8d95b0-20ea-4d7e-b822-4af1d0fdb056","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":0,"name":"Mykala"},{"data":{"name":"Derrya","nameid":"e2c81083-e2ee-4d82-a5d0-ca07212c9ccf","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":0,"name":"Derrya"},{"data":{"name":"Tiffany","nameid":"de36b184-acc7-4adf-ad8b-919ef7d5b1df","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":0,"name":"Tiffany"},{"data":{"name":"Shekea","nameid":"8384ebb6-889d-45cd-8b1f-04b5490c98b7","parentname":"Michael","parentid":"578fa6ce-3304-49dd-9175-6dbeed13a2f7"},"height":1,"children":null,"name":"Shekea","_children":[{"data":{"name":"Taobie","nameid":"60730331-291c-4e45-afb4-33a8271de7ae","parentname":"Shekea","parentid":"8384ebb6-889d-45cd-8b1f-04b5490c98b7"},"height":0,"name":"Taobie"}]}]},{"data":{"name":"Dionne","nameid":"e4084af4-97af-4db1-addb-bb177a7ff70e","parentname":"Miriam","parentid":"62c59a15-8ea9-47ba-a65c-1dc20fdb9ff2"},"height":1,"children":null,"name":"Dionne","_children":[{"data":{"name":"Anthony Jr","nameid":"13d692e4-ff1a-4c00-ac74-1a88d6b80635","parentname":"Dionne","parentid":"e4084af4-97af-4db1-addb-bb177a7ff70e"},"height":0,"name":"Anthony Jr"}]},{"data":{"name":"Ronald","nameid":"ddde8021-1ce8-4bbf-90cf-2b60d91c3730","parentname":"Miriam","parentid":"62c59a15-8ea9-47ba-a65c-1dc20fdb9ff2"},"height":2,"children":null,"name":"Ronald","_children":[{"data":{"name":"Tiffani","nameid":"985de712-2c14-4bd9-97ee-6bed407e1560","parentname":"Ronald","parentid":"ddde8021-1ce8-4bbf-90cf-2b60d91c3730"},"height":0,"name":"Tiffani"},{"data":{"name":"Courtney","nameid":"2dca7e50-d760-407c-83b1-ad553fb13c1e","parentname":"Ronald","parentid":"ddde8021-1ce8-4bbf-90cf-2b60d91c3730"},"height":1,"children":null,"name":"Courtney","_children":[{"data":{"name":"Solomon","nameid":"8e677e3e-ca91-4741-839b-78db8fd5583c","parentname":"Courtney","parentid":"2dca7e50-d760-407c-83b1-ad553fb13c1e"},"height":0,"name":"Solomon"}]}]}]},{"data":{"name":"Howard","nameid":"55bf7d6a-7612-41cf-96c7-935c69587bec","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":2,"children":null,"name":"Howard","_children":[{"data":{"name":"Aaron","nameid":"f0befd12-6ea0-4c97-b890-e22c8728cccc","parentname":"Howard","parentid":"55bf7d6a-7612-41cf-96c7-935c69587bec"},"height":1,"children":null,"name":"Aaron","_children":[{"data":{"name":"Antonio","nameid":"4ebf0677-8979-407c-b257-d8b8db4ad388","parentname":"Aaron","parentid":"f0befd12-6ea0-4c97-b890-e22c8728cccc"},"height":0,"name":"Antonio"},{"data":{"name":"Alex","nameid":"6dff3c54-5e1b-409b-93ec-53d3a47f3f7d","parentname":"Aaron","parentid":"f0befd12-6ea0-4c97-b890-e22c8728cccc"},"height":0,"name":"Alex"},{"data":{"name":"CJ","nameid":"793d1410-c801-4817-b221-546e50186399","parentname":"Aaron","parentid":"f0befd12-6ea0-4c97-b890-e22c8728cccc"},"height":0,"name":"CJ"}]},{"data":{"name":"Kimberly","nameid":"57f876dd-c6fe-4e18-8f1b-837c5cd81417","parentname":"Howard","parentid":"55bf7d6a-7612-41cf-96c7-935c69587bec"},"height":1,"children":null,"name":"Kimberly","_children":[{"data":{"name":"Kailyn","nameid":"6f05ff4e-53d4-469c-aa7e-234e2c0f8204","parentname":"Kimberly","parentid":"57f876dd-c6fe-4e18-8f1b-837c5cd81417"},"height":0,"name":"Kailyn"},{"data":{"name":"Nicholas","nameid":"0471dd46-eec1-4bc1-ae76-3b0e8436cf4d","parentname":"Kimberly","parentid":"57f876dd-c6fe-4e18-8f1b-837c5cd81417"},"height":0,"name":"Nicholas"},{"data":{"name":"Lilly","nameid":"00bbfee3-7da0-4146-a989-93cd670fd192","parentname":"Kimberly","parentid":"57f876dd-c6fe-4e18-8f1b-837c5cd81417"},"height":0,"name":"Lilly"}]}]},{"data":{"name":"Norma Jean","nameid":"7139a9a1-cd6c-4723-9d52-54d514bac964","parentname":"Sumner","parentid":"e93b8145-0fe2-4d5f-abff-aecdacc4b80a"},"height":2,"children":null,"name":"Norma Jean","_children":[{"data":{"name":"Sumner","nameid":"526cfa95-f13d-4be8-ac49-cbadd85a64e0","parentname":"Norma Jean","parentid":"7139a9a1-cd6c-4723-9d52-54d514bac964"},"height":1,"children":null,"name":"Sumner","_children":[{"data":{"name":"Juanita","nameid":"61870b10-544b-4a40-b73f-c707873d259e","parentname":"Sumner","parentid":"526cfa95-f13d-4be8-ac49-cbadd85a64e0"},"height":0,"name":"Juanita"},{"data":{"name":"Thomas","nameid":"3ab0dc9e-01b7-4281-ab13-32fad2149c9f","parentname":"Sumner","parentid":"526cfa95-f13d-4be8-ac49-cbadd85a64e0"},"height":0,"name":"Thomas"}]},{"data":{"name":"Ryan","nameid":"5e9477a0-5f63-4994-8bfb-28504ef4ec1f","parentname":"Norma Jean","parentid":"7139a9a1-cd6c-4723-9d52-54d514bac964"},"height":0,"name":"Ryan"}]}]},{"data":{"name":"Beatrice 1888","nameid":"ac896a6e-a5d0-4a90-b5ba-e44837612929","parentname":"Thomas","parentid":"1"},"height":5,"name":"Beatrice 1888","_children":[{"data":{"name":"Ophelia","nameid":"722176cb-2995-427b-8738-9885f0cb4417","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":4,"children":null,"name":"Ophelia","_children":[{"data":{"name":"Johnnie Mae","nameid":"09f87fff-edfe-498e-bb34-9de53a5e8132","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Johnnie Mae"},{"data":{"name":"Doris","nameid":"39d3e45e-c3a0-49b5-86d2-a3da38c28a60","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Doris"},{"data":{"name":"Alton","nameid":"1d419315-4873-48c0-96dd-aeb118fdf8fb","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":3,"children":null,"name":"Alton","_children":[{"data":{"name":"Rose","nameid":"c2c8542a-41c6-4688-bfdb-6d3bab8b18f9","parentname":"Alton","parentid":"1d419315-4873-48c0-96dd-aeb118fdf8fb"},"height":2,"children":null,"name":"Rose","_children":[{"data":{"name":"Karen","nameid":"e9577cf2-edb0-497d-8b06-2d92450dfe48","parentname":"Rose","parentid":"c2c8542a-41c6-4688-bfdb-6d3bab8b18f9"},"height":1,"children":null,"name":"Karen","_children":[{"data":{"name":"Krystal","nameid":"644ac701-e471-4258-b618-43e00e0069eb","parentname":"Karen","parentid":"e9577cf2-edb0-497d-8b06-2d92450dfe48"},"height":0,"name":"Krystal"},{"data":{"name":"Kanesha","nameid":"7743c2e2-df9a-4788-b84d-e5e04ee5b2fa","parentname":"Karen","parentid":"e9577cf2-edb0-497d-8b06-2d92450dfe48"},"height":0,"name":"Kanesha"}]},{"data":{"name":"Deanna","nameid":"e793c3b6-5644-47d5-9f5a-a2bca1836821","parentname":"Rose","parentid":"c2c8542a-41c6-4688-bfdb-6d3bab8b18f9"},"height":1,"children":null,"name":"Deanna","_children":[{"data":{"name":"Prince","nameid":"4eaab3d2-5ffa-45e5-b4ff-4b425fc13c94","parentname":"Deanna","parentid":"e793c3b6-5644-47d5-9f5a-a2bca1836821"},"height":0,"name":"Prince"}]},{"data":{"name":"Jessica","nameid":"b713b1f7-4d94-47c2-8bf3-1202ff9a2548","parentname":"Rose","parentid":"c2c8542a-41c6-4688-bfdb-6d3bab8b18f9"},"height":0,"name":"Jessica"}]},{"data":{"name":"Charlie","nameid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e","parentname":"Alton","parentid":"1d419315-4873-48c0-96dd-aeb118fdf8fb"},"height":1,"children":null,"name":"Charlie","_children":[{"data":{"name":"Zakiah","nameid":"078fe97c-2052-4489-8f99-bb1e6d2bc639","parentname":"Charlie","parentid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e"},"height":0,"name":"Zakiah"},{"data":{"name":"Jameka","nameid":"81f89150-bdb5-4cea-a660-af58043692eb","parentname":"Charlie","parentid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e"},"height":0,"name":"Jameka"},{"data":{"name":"Jeannie","nameid":"36655d40-cbb9-438f-8e35-9e04139edae9","parentname":"Charlie","parentid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e"},"height":0,"name":"Jeannie"},{"data":{"name":"Tony","nameid":"173473b5-1f2c-4e88-bb64-f8da582f808d","parentname":"Charlie","parentid":"7ea72169-28a7-4ad2-a62f-fa76ccb5a60e"},"height":0,"name":"Tony"}]},{"data":{"name":"Sandra","nameid":"b9f7632e-1cc9-4dea-9356-4ba8a7b51248","parentname":"Alton","parentid":"1d419315-4873-48c0-96dd-aeb118fdf8fb"},"height":2,"children":null,"name":"Sandra","_children":[{"data":{"name":"Tisha","nameid":"84642062-1277-496f-aa6f-1f9b08c7a161","parentname":"Sandra","parentid":"b9f7632e-1cc9-4dea-9356-4ba8a7b51248"},"height":1,"children":null,"name":"Tisha","_children":[{"data":{"name":"Carmen","nameid":"03bbd8e9-9ee3-4c1c-bc13-fec7b41cb64b","parentname":"Tisha","parentid":"84642062-1277-496f-aa6f-1f9b08c7a161"},"height":0,"name":"Carmen"}]},{"data":{"name":"Darnell","nameid":"542acc39-e120-4ab2-90d8-dd7d1dfe33aa","parentname":"Sandra","parentid":"b9f7632e-1cc9-4dea-9356-4ba8a7b51248"},"height":0,"name":"Darnell"}]},{"data":{"name":"Helen","nameid":"8f790c3d-ed1b-44a6-b789-8abee1c314a4","parentname":"Alton","parentid":"1d419315-4873-48c0-96dd-aeb118fdf8fb"},"height":0,"name":"Helen"}]},{"data":{"name":"RJ","nameid":"2e70ba6a-6273-4d20-a255-fb1ca4a06330","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"RJ"},{"data":{"name":"Pearl","nameid":"1197d2a1-5634-4ff8-8808-bb6e37053e39","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Pearl"},{"data":{"name":"Joseph","nameid":"ad29dd11-1bf6-4970-90c3-65eed3f52cb6","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Joseph"},{"data":{"name":"Earline","nameid":"b9aa1a79-7831-405e-8517-36e88714e041","parentname":"Ophelia","parentid":"722176cb-2995-427b-8738-9885f0cb4417"},"height":0,"name":"Earline"}]},{"data":{"name":"Ruby","nameid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":3,"children":null,"name":"Ruby","_children":[{"data":{"name":"WIlliam","nameid":"cf0ac93a-e32c-4a15-adec-b9619c2b0a38","parentname":"Ruby","parentid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa"},"height":0,"name":"WIlliam"},{"data":{"name":"Donald","nameid":"3502545d-bebc-455e-974b-c169b71ca1cb","parentname":"Ruby","parentid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa"},"height":0,"name":"Donald"},{"data":{"name":"Pearl","nameid":"dfc2d0b3-bbe7-4a8d-9236-f933d5cce9db","parentname":"Ruby","parentid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa"},"height":0,"name":"Pearl"},{"data":{"name":"Lorraine","nameid":"34608069-6beb-4efc-a9d4-a4f91148aec9","parentname":"Ruby","parentid":"ffa8584c-e26b-49e8-bae6-3c1f759d9daa"},"height":2,"children":null,"name":"Lorraine","_children":[{"data":{"name":"George","nameid":"41ba1a9f-1987-4562-9020-6a7b43e14322","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":0,"name":"George"},{"data":{"name":"Kent","nameid":"6d259189-976b-451a-a0be-117d350c8516","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":0,"name":"Kent"},{"data":{"name":"Evan","nameid":"04a06ef8-85a5-4d15-9941-9d3607e3a776","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":0,"name":"Evan"},{"data":{"name":"Vance","nameid":"cf4c1651-bf3d-47c1-96fe-e28bf9c5d040","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":1,"children":null,"name":"Vance","_children":[{"data":{"name":"Vance Jr","nameid":"672da473-f66a-46e3-b411-712bb9c65cdb","parentname":"Vance","parentid":"cf4c1651-bf3d-47c1-96fe-e28bf9c5d040"},"height":0,"name":"Vance Jr"},{"data":{"name":"Ashlee","nameid":"8722ecb3-e548-4c5d-876f-09b0dbe434ae","parentname":"Vance","parentid":"cf4c1651-bf3d-47c1-96fe-e28bf9c5d040"},"height":0,"name":"Ashlee"},{"data":{"name":"Tinia","nameid":"34a01da8-8a1b-41f7-9ae9-14b52d002551","parentname":"Vance","parentid":"cf4c1651-bf3d-47c1-96fe-e28bf9c5d040"},"height":0,"name":"Tinia"}]},{"data":{"name":"Charles","nameid":"944d2d9b-deb5-4cc4-b0e2-6920696179cf","parentname":"Lorraine","parentid":"34608069-6beb-4efc-a9d4-a4f91148aec9"},"height":0,"name":"Charles"}]}]},{"data":{"name":"Jerusha","nameid":"813d7e30-3efe-48ed-a7f0-fbc27188aea8","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":0,"name":"Jerusha"},{"data":{"name":"Lillian","nameid":"208bda92-1e60-4906-bef4-815f1bbd08bd","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":0,"name":"Lillian"},{"data":{"name":"Joseph","nameid":"b8d5c3ac-f52b-4daa-adcc-10bd00ba7397","parentname":"Beatrice","parentid":"ac896a6e-a5d0-4a90-b5ba-e44837612929"},"height":0,"name":"Joseph"}]},{"data":{"name":"Lillian","nameid":"fa7a9ba4-2aad-4c62-a384-ecbd1f36b317","parentname":"Thomas","parentid":"1"},"height":0,"name":"Lillian"}],"name":"Thomas ~1842"};
var myrootemergency = {"data":{"name":"Chaney","nameid":1,"parentname":"","parentid":""},"height":7,"parent":null,"children":[{"data":{"name":"Sally","nameid":2,"parentname":"Chaney","parentid":1},"height":0,"name":"Sally"},{"data":{"name":"John","nameid":3,"parentname":"Chaney","parentid":1},"height":0,"name":"John"},{"data":{"name":"Mary","nameid":4,"parentname":"Chaney","parentid":1},"height":0,"name":"Mary"},{"data":{"name":"William","nameid":5,"parentname":"Chaney","parentid":1},"height":6,"name":"William","_children":[{"data":{"name":"John","nameid":7,"parentname":"William","parentid":5},"height":0,"name":"John"},{"data":{"name":"George","nameid":8,"parentname":"William","parentid":5},"height":0,"name":"George"},{"data":{"name":"Mamie","nameid":9,"parentname":"William","parentid":5},"height":0,"name":"Mamie"},{"data":{"name":"Cornnelia","nameid":10,"parentname":"William","parentid":5},"height":0,"name":"Cornnelia"},{"data":{"name":"Bessie","nameid":11,"parentname":"William","parentid":5},"height":0,"name":"Bessie"},{"data":{"name":"James","nameid":12,"parentname":"William","parentid":5},"height":0,"name":"James"},{"data":{"name":"Sallie","nameid":13,"parentname":"William","parentid":5},"height":0,"name":"Sallie"},{"data":{"name":"William","nameid":14,"parentname":"William","parentid":5},"height":0,"name":"William"},{"data":{"name":"Joe Thomas","nameid":15,"parentname":"William","parentid":5},"height":5,"children":null,"name":"Joe Thomas","_children":[{"data":{"name":"Gladys","nameid":17,"parentname":"Joe Thomas","parentid":15},"height":4,"children":null,"name":"Gladys","_children":[{"data":{"name":"Dora","nameid":25,"parentname":"Gladys","parentid":17},"height":3,"children":null,"name":"Dora","_children":[{"data":{"name":"Bruce Jr","nameid":49,"parentname":"Dora","parentid":25},"height":2,"children":null,"name":"Bruce Jr","_children":[{"data":{"name":"Melody","nameid":100,"parentname":"Bruce Jr","parentid":49},"height":1,"children":null,"name":"Melody","_children":[{"data":{"name":"Breasha","nameid":161,"parentname":"Melody","parentid":100},"height":0,"name":"Breasha"}]},{"data":{"name":"Bruce 3rd","nameid":101,"parentname":"Bruce Jr","parentid":49},"height":1,"children":null,"name":"Bruce 3rd","_children":[{"data":{"name":"Bruce 4th","nameid":162,"parentname":"Bruce 3rd","parentid":101},"height":0,"name":"Bruce 4th"}]},{"data":{"name":"Damarcus","nameid":102,"parentname":"Bruce Jr","parentid":49},"height":0,"name":"Damarcus"}]},{"data":{"name":"Cheryl","nameid":50,"parentname":"Dora","parentid":25},"height":0,"name":"Cheryl"},{"data":{"name":"James","nameid":51,"parentname":"Dora","parentid":25},"height":2,"children":null,"name":"James","_children":[{"data":{"name":"Victoria","nameid":103,"parentname":"James","parentid":51},"height":1,"children":null,"name":"Victoria","_children":[{"data":{"name":"Jaiden","nameid":163,"parentname":"Victoria","parentid":103},"height":0,"name":"Jaiden"},{"data":{"name":"Amiwah","nameid":164,"parentname":"Victoria","parentid":103},"height":0,"name":"Amiwah"},{"data":{"name":"Jayce","nameid":165,"parentname":"Victoria","parentid":103},"height":0,"name":"Jayce"}]},{"data":{"name":"Olivia","nameid":104,"parentname":"James","parentid":51},"height":0,"name":"Olivia"}]},{"data":{"name":"Lisa","nameid":52,"parentname":"Dora","parentid":25},"height":1,"children":null,"name":"Lisa","_children":[{"data":{"name":"Brittany","nameid":105,"parentname":"Lisa","parentid":52},"height":0,"name":"Brittany"},{"data":{"name":"Anthony","nameid":106,"parentname":"Lisa","parentid":52},"height":0,"name":"Anthony"},{"data":{"name":"Donte","nameid":107,"parentname":"Lisa","parentid":52},"height":0,"name":"Donte"}]},{"data":{"name":"Tony","nameid":53,"parentname":"Dora","parentid":25},"height":1,"children":null,"name":"Tony","_children":[{"data":{"name":"Brandon","nameid":108,"parentname":"Tony","parentid":53},"height":0,"name":"Brandon"},{"data":{"name":"Marcus","nameid":109,"parentname":"Tony","parentid":53},"height":0,"name":"Marcus"},{"data":{"name":"3rd child","nameid":110,"parentname":"Tony","parentid":53},"height":0,"name":"3rd child"}]}]},{"data":{"name":"Don","nameid":26,"parentname":"Gladys","parentid":17},"height":3,"children":null,"name":"Don","_children":[{"data":{"name":"Donna","nameid":54,"parentname":"Don","parentid":26},"height":1,"children":null,"name":"Donna","_children":[{"data":{"name":"Neaisha","nameid":111,"parentname":"Donna","parentid":54},"height":0,"name":"Neaisha"}]},{"data":{"name":"Debbie","nameid":55,"parentname":"Don","parentid":26},"height":0,"name":"Debbie"},{"data":{"name":"Danita","nameid":56,"parentname":"Don","parentid":26},"height":2,"children":null,"name":"Danita","_children":[{"data":{"name":"Brandon","nameid":112,"parentname":"Danita","parentid":56},"height":1,"children":null,"name":"Brandon","_children":[{"data":{"name":"Heavenly","nameid":166,"parentname":"Brandon","parentid":112},"height":0,"name":"Heavenly"},{"data":{"name":"CamRyn","nameid":167,"parentname":"Brandon","parentid":112},"height":0,"name":"CamRyn"},{"data":{"name":"Elizabeth","nameid":168,"parentname":"Brandon","parentid":112},"height":0,"name":"Elizabeth"},{"data":{"name":"Eliyanni","nameid":178,"parentname":"Brandon","parentid":112},"height":0,"name":"Eliyanni"}]}]}]},{"data":{"name":"Juanita","nameid":27,"parentname":"Gladys","parentid":17},"height":2,"children":null,"name":"Juanita","_children":[{"data":{"name":"Benny","nameid":57,"parentname":"Juanita","parentid":27},"height":1,"children":null,"name":"Benny","_children":[{"data":{"name":"Daniel","nameid":113,"parentname":"Benny","parentid":57},"height":0,"name":"Daniel"},{"data":{"name":"Tyree","nameid":114,"parentname":"Benny","parentid":57},"height":0,"name":"Tyree"}]},{"data":{"name":"James","nameid":58,"parentname":"Juanita","parentid":27},"height":1,"children":null,"name":"James","_children":[{"data":{"name":"Marquis","nameid":115,"parentname":"James","parentid":58},"height":0,"name":"Marquis"}]},{"data":{"name":"Kim","nameid":59,"parentname":"Juanita","parentid":27},"height":1,"children":null,"name":"Kim","_children":[{"data":{"name":"Kayden","nameid":116,"parentname":"Kim","parentid":59},"height":0,"name":"Kayden"},{"data":{"name":"Jayden","nameid":117,"parentname":"Kim","parentid":59},"height":0,"name":"Jayden"}]}]}]},{"data":{"name":"Lillie","nameid":18,"parentname":"Joe Thomas","parentid":15},"height":3,"children":null,"name":"Lillie","_children":[{"data":{"name":"Wyatt","nameid":28,"parentname":"Lillie","parentid":18},"height":2,"children":null,"name":"Wyatt","_children":[{"data":{"name":"Michelle","nameid":60,"parentname":"Wyatt","parentid":28},"height":1,"children":null,"name":"Michelle","_children":[{"data":{"name":"Devon","nameid":118,"parentname":"Michelle","parentid":60},"height":0,"name":"Devon"}]},{"data":{"name":"Sherisse","nameid":61,"parentname":"Wyatt","parentid":28},"height":1,"children":null,"name":"Sherisse","_children":[{"data":{"name":"Achinae","nameid":119,"parentname":"Sherisse","parentid":61},"height":0,"name":"Achinae"},{"data":{"name":"Wayne","nameid":120,"parentname":"Sherisse","parentid":61},"height":0,"name":"Wayne"}]}]},{"data":{"name":"Kay","nameid":29,"parentname":"Lillie","parentid":18},"height":1,"children":null,"name":"Kay","_children":[{"data":{"name":"Antonio","nameid":62,"parentname":"Kay","parentid":29},"height":0,"name":"Antonio"},{"data":{"name":"Thomas","nameid":63,"parentname":"Kay","parentid":29},"height":0,"name":"Thomas"}]},{"data":{"name":"Constance","nameid":30,"parentname":"Lillie","parentid":18},"height":2,"children":null,"name":"Constance","_children":[{"data":{"name":"James Jr","nameid":64,"parentname":"Constance","parentid":30},"height":1,"children":null,"name":"James Jr","_children":[{"data":{"name":"Sheneka","nameid":121,"parentname":"James Jr","parentid":64},"height":0,"name":"Sheneka"},{"data":{"name":"Jamesha","nameid":122,"parentname":"James Jr","parentid":64},"height":0,"name":"Jamesha"}]},{"data":{"name":"Cynthia","nameid":65,"parentname":"Constance","parentid":30},"height":1,"children":null,"name":"Cynthia","_children":[{"data":{"name":"Constance","nameid":123,"parentname":"Cynthia","parentid":65},"height":0,"name":"Constance"}]}]},{"data":{"name":"Angela","nameid":31,"parentname":"Lillie","parentid":18},"height":1,"children":null,"name":"Angela","_children":[{"data":{"name":"April","nameid":66,"parentname":"Angela","parentid":31},"height":0,"name":"April"},{"data":{"name":"Kimmey","nameid":67,"parentname":"Angela","parentid":31},"height":0,"name":"Kimmey"},{"data":{"name":"Carl","nameid":68,"parentname":"Angela","parentid":31},"height":0,"name":"Carl"}]},{"data":{"name":"Sabrina","nameid":32,"parentname":"Lillie","parentid":18},"height":2,"children":null,"name":"Sabrina","_children":[{"data":{"name":"Wayneman","nameid":69,"parentname":"Sabrina","parentid":32},"height":1,"children":null,"name":"Wayneman","_children":[{"data":{"name":"Cameron","nameid":172,"parentname":"Wayneman","parentid":69},"height":0,"name":"Cameron"}]},{"data":{"name":"Richard","nameid":70,"parentname":"Sabrina","parentid":32},"height":1,"children":null,"name":"Richard","_children":[{"data":{"name":"Alexis","nameid":173,"parentname":"Richard","parentid":70},"height":0,"name":"Alexis"},{"data":{"name":"Leila","nameid":174,"parentname":"Richard","parentid":70},"height":0,"name":"Leila"}]},{"data":{"name":"Tameka","nameid":71,"parentname":"Sabrina","parentid":32},"height":0,"name":"Tameka"},{"data":{"name":"Tamara","nameid":72,"parentname":"Sabrina","parentid":32},"height":1,"children":null,"name":"Tamara","_children":[{"data":{"name":"Tyshaun","nameid":175,"parentname":"Tamara","parentid":72},"height":0,"name":"Tyshaun"},{"data":{"name":"Miracle","nameid":176,"parentname":"Tamara","parentid":72},"height":0,"name":"Miracle"},{"data":{"name":"Journey","nameid":177,"parentname":"Tamara","parentid":72},"height":0,"name":"Journey"}]}]},{"data":{"name":"Sheila","nameid":33,"parentname":"Lillie","parentid":18},"height":2,"children":null,"name":"Sheila","_children":[{"data":{"name":"Angel","nameid":73,"parentname":"Sheila","parentid":33},"height":0,"name":"Angel"},{"data":{"name":"Jack","nameid":74,"parentname":"Sheila","parentid":33},"height":0,"name":"Jack"},{"data":{"name":"Benjamin Jr","nameid":75,"parentname":"Sheila","parentid":33},"height":1,"children":null,"name":"Benjamin Jr","_children":[{"data":{"name":"Deja","nameid":124,"parentname":"Benjamin Jr","parentid":75},"height":0,"name":"Deja"},{"data":{"name":"Benjamin 3rd","nameid":125,"parentname":"Benjamin Jr","parentid":75},"height":0,"name":"Benjamin 3rd"}]}]},{"data":{"name":"Richard","nameid":34,"parentname":"Lillie","parentid":18},"height":1,"children":null,"name":"Richard","_children":[{"data":{"name":"Ricardo","nameid":76,"parentname":"Richard","parentid":34},"height":0,"name":"Ricardo"},{"data":{"name":"Kaylyn","nameid":77,"parentname":"Richard","parentid":34},"height":0,"name":"Kaylyn"},{"data":{"name":"Kennedy","nameid":78,"parentname":"Richard","parentid":34},"height":0,"name":"Kennedy"}]}]},{"data":{"name":"Joseph","nameid":19,"parentname":"Joe Thomas","parentid":15},"height":0,"name":"Joseph"},{"data":{"name":"Lucille","nameid":20,"parentname":"Joe Thomas","parentid":15},"height":0,"name":"Lucille"},{"data":{"name":"Ruth","nameid":21,"parentname":"Joe Thomas","parentid":15},"height":3,"children":null,"name":"Ruth","_children":[{"data":{"name":"Thomas Jr","nameid":35,"parentname":"Ruth","parentid":21},"height":2,"children":null,"name":"Thomas Jr","_children":[{"data":{"name":"Thomas 3rd","nameid":79,"parentname":"Thomas Jr","parentid":35},"height":1,"children":null,"name":"Thomas 3rd","_children":[{"data":{"name":"Thomas","nameid":126,"parentname":"Thomas 3rd","parentid":79},"height":0,"name":"Thomas"},{"data":{"name":"Tariq","nameid":127,"parentname":"Thomas 3rd","parentid":79},"height":0,"name":"Tariq"},{"data":{"name":"Taiquon","nameid":128,"parentname":"Thomas 3rd","parentid":79},"height":0,"name":"Taiquon"}]},{"data":{"name":"Shaughn","nameid":80,"parentname":"Thomas Jr","parentid":35},"height":0,"name":"Shaughn"}]},{"data":{"name":"Sheryl","nameid":36,"parentname":"Ruth","parentid":21},"height":2,"children":null,"name":"Sheryl","_children":[{"data":{"name":"Stacy","nameid":81,"parentname":"Sheryl","parentid":36},"height":0,"name":"Stacy"},{"data":{"name":"Monique","nameid":82,"parentname":"Sheryl","parentid":36},"height":1,"children":null,"name":"Monique","_children":[{"data":{"name":"Angela","nameid":129,"parentname":"Monique","parentid":82},"height":0,"name":"Angela"},{"data":{"name":"Brooklyn","nameid":130,"parentname":"Monique","parentid":82},"height":0,"name":"Brooklyn"},{"data":{"name":"Stacy","nameid":131,"parentname":"Monique","parentid":82},"height":0,"name":"Stacy"},{"data":{"name":"Lenox","nameid":132,"parentname":"Monique","parentid":82},"height":0,"name":"Lenox"}]}]},{"data":{"name":"Michael","nameid":37,"parentname":"Ruth","parentid":21},"height":0,"name":"Michael"},{"data":{"name":"David","nameid":38,"parentname":"Ruth","parentid":21},"height":0,"name":"David"}]},{"data":{"name":"James","nameid":22,"parentname":"Joe Thomas","parentid":15},"height":3,"children":null,"name":"James","_children":[{"data":{"name":"Angela","nameid":39,"parentname":"James","parentid":22},"height":0,"name":"Angela"},{"data":{"name":"Anita","nameid":40,"parentname":"James","parentid":22},"height":2,"children":null,"name":"Anita","_children":[{"data":{"name":"Jessica","nameid":83,"parentname":"Anita","parentid":40},"height":1,"children":null,"name":"Jessica","_children":[{"data":{"name":"Michael Jr","nameid":133,"parentname":"Jessica","parentid":83},"height":0,"name":"Michael Jr"}]}]},{"data":{"name":"Michael","nameid":41,"parentname":"James","parentid":22},"height":1,"children":null,"name":"Michael","_children":[{"data":{"name":"Michael Jr","nameid":84,"parentname":"Michael","parentid":41},"height":0,"name":"Michael Jr"},{"data":{"name":"Erica","nameid":85,"parentname":"Michael","parentid":41},"height":0,"name":"Erica"}]}]},{"data":{"name":"Clara","nameid":23,"parentname":"Joe Thomas","parentid":15},"height":2,"children":null,"name":"Clara","_children":[{"data":{"name":"Phylis","nameid":42,"parentname":"Clara","parentid":23},"height":1,"children":null,"name":"Phylis","_children":[{"data":{"name":"Christian","nameid":86,"parentname":"Phylis","parentid":42},"height":0,"name":"Christian"}]},{"data":{"name":"Belinda","nameid":43,"parentname":"Clara","parentid":23},"height":1,"children":null,"name":"Belinda","_children":[{"data":{"name":"Markel","nameid":87,"parentname":"Belinda","parentid":43},"height":0,"name":"Markel"}]}]},{"data":{"name":"John","nameid":24,"parentname":"Joe Thomas","parentid":15},"height":4,"children":null,"name":"John","_children":[{"data":{"name":"Juanda","nameid":44,"parentname":"John","parentid":24},"height":3,"children":null,"name":"Juanda","_children":[{"data":{"name":"Tawanda","nameid":88,"parentname":"Juanda","parentid":44},"height":2,"children":null,"name":"Tawanda","_children":[{"data":{"name":"Cederick","nameid":134,"parentname":"Tawanda","parentid":88},"height":1,"children":null,"name":"Cederick","_children":[{"data":{"name":"Kellan","nameid":169,"parentname":"Cederick","parentid":134},"height":0,"name":"Kellan"},{"data":{"name":"Kayliah","nameid":170,"parentname":"Cederick","parentid":134},"height":0,"name":"Kayliah"}]},{"data":{"name":"Ananda","nameid":135,"parentname":"Tawanda","parentid":88},"height":1,"children":null,"name":"Ananda","_children":[{"data":{"name":"Kynlee","nameid":171,"parentname":"Ananda","parentid":135},"height":0,"name":"Kynlee"},{"data":{"name":"Kiyle","nameid":179,"parentname":"Ananda","parentid":135},"height":0,"name":"Kiyle"}]}]},{"data":{"name":"Kristopher","nameid":89,"parentname":"Juanda","parentid":44},"height":1,"children":null,"name":"Kristopher","_children":[{"data":{"name":"Caleb","nameid":136,"parentname":"Kristopher","parentid":89},"height":0,"name":"Caleb"},{"data":{"name":"Amami","nameid":137,"parentname":"Kristopher","parentid":89},"height":0,"name":"Amami"},{"data":{"name":"Arionna","nameid":138,"parentname":"Kristopher","parentid":89},"height":0,"name":"Arionna"},{"data":{"name":"Kristolyn","nameid":139,"parentname":"Kristopher","parentid":89},"height":0,"name":"Kristolyn"},{"data":{"name":"Chaun","nameid":140,"parentname":"Kristopher","parentid":89},"height":0,"name":"Chaun"},{"data":{"name":"Jayden","nameid":141,"parentname":"Kristopher","parentid":89},"height":0,"name":"Jayden"}]}]},{"data":{"name":"Yolanda","nameid":45,"parentname":"John","parentid":24},"height":0,"name":"Yolanda"},{"data":{"name":"John Jr","nameid":46,"parentname":"John","parentid":24},"height":2,"children":null,"name":"John Jr","_children":[{"data":{"name":"Derrick","nameid":90,"parentname":"John Jr","parentid":46},"height":1,"children":null,"name":"Derrick","_children":[{"data":{"name":"Hannah","nameid":142,"parentname":"Derrick","parentid":90},"height":0,"name":"Hannah"},{"data":{"name":"Jaydon","nameid":143,"parentname":"Derrick","parentid":90},"height":0,"name":"Jaydon"},{"data":{"name":"Aiden","nameid":144,"parentname":"Derrick","parentid":90},"height":0,"name":"Aiden"},{"data":{"name":"Addison","nameid":145,"parentname":"Derrick","parentid":90},"height":0,"name":"Addison"},{"data":{"name":"Alania","nameid":146,"parentname":"Derrick","parentid":90},"height":0,"name":"Alania"},{"data":{"name":"Asher","nameid":147,"parentname":"Derrick","parentid":90},"height":0,"name":"Asher"}]},{"data":{"name":"Brandon","nameid":91,"parentname":"John Jr","parentid":46},"height":1,"children":null,"name":"Brandon","_children":[{"data":{"name":"Jackson","nameid":148,"parentname":"Brandon","parentid":91},"height":0,"name":"Jackson"},{"data":{"name":"Jordan","nameid":149,"parentname":"Brandon","parentid":91},"height":0,"name":"Jordan"}]},{"data":{"name":"Candice","nameid":92,"parentname":"John Jr","parentid":46},"height":0,"name":"Candice"},{"data":{"name":"Joseph","nameid":93,"parentname":"John Jr","parentid":46},"height":1,"children":null,"name":"Joseph","_children":[{"data":{"name":"Joseph","nameid":150,"parentname":"Joseph","parentid":93},"height":0,"name":"Joseph"},{"data":{"name":"Cohen","nameid":151,"parentname":"Joseph","parentid":93},"height":0,"name":"Cohen"},{"data":{"name":"Lillie","nameid":152,"parentname":"Joseph","parentid":93},"height":0,"name":"Lillie"},{"data":{"name":"Gracie","nameid":153,"parentname":"Joseph","parentid":93},"height":0,"name":"Gracie"},{"data":{"name":"Breelyn","nameid":154,"parentname":"Joseph","parentid":93},"height":0,"name":"Breelyn"}]}]},{"data":{"name":"Tony","nameid":47,"parentname":"John","parentid":24},"height":1,"children":null,"name":"Tony","_children":[{"data":{"name":"Teven","nameid":94,"parentname":"Tony","parentid":47},"height":0,"name":"Teven"},{"data":{"name":"Katurah","nameid":95,"parentname":"Tony","parentid":47},"height":0,"name":"Katurah"}]},{"data":{"name":"Elwin","nameid":48,"parentname":"John","parentid":24},"height":2,"children":null,"name":"Elwin","_children":[{"data":{"name":"Latosha","nameid":96,"parentname":"Elwin","parentid":48},"height":1,"children":null,"name":"Latosha","_children":[{"data":{"name":"Kyran","nameid":155,"parentname":"Latosha","parentid":96},"height":0,"name":"Kyran"},{"data":{"name":"Kaiden","nameid":156,"parentname":"Latosha","parentid":96},"height":0,"name":"Kaiden"}]},{"data":{"name":"Elwin Jr","nameid":97,"parentname":"Elwin","parentid":48},"height":1,"children":null,"name":"Elwin Jr","_children":[{"data":{"name":"Teagan Jr","nameid":157,"parentname":"Elwin Jr","parentid":97},"height":0,"name":"Teagan Jr"},{"data":{"name":"Taylor","nameid":158,"parentname":"Elwin Jr","parentid":97},"height":0,"name":"Taylor"},{"data":{"name":"Toryn","nameid":159,"parentname":"Elwin Jr","parentid":97},"height":0,"name":"Toryn"},{"data":{"name":"Chailyn","nameid":160,"parentname":"Elwin Jr","parentid":97},"height":0,"name":"Chailyn"}]},{"data":{"name":"Donte","nameid":98,"parentname":"Elwin","parentid":48},"height":0,"name":"Donte"},{"data":{"name":"Santana","nameid":99,"parentname":"Elwin","parentid":48},"height":0,"name":"Santana"}]}]}]},{"data":{"name":"Daniel","nameid":16,"parentname":"William","parentid":5},"height":0,"name":"Daniel"}]},{"data":{"name":"Lucy","nameid":6,"parentname":"Chaney","parentid":1},"height":0,"name":"Lucy"}],"name":"Chaney"};
localStorage.setItem("myrootemergencystr", JSON.stringify(myrootemergency));
localStorage.setItem("myjsonstr", JSON.stringify(myrootemergency));
treeData = myrootemergency;
}else if (startoptions == "new"){
//ORI createnewtree();
var myrootemergency = [
  {
    "name": "Head Of Tree",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          {
            "name": "Son of A",
            "parent": "Level 2: A"
          },
          {
            "name": "Daughter of A",
            "parent": "Level 2: A"
          }
        ]
      },
      {
        "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  }
];


localStorage.setItem("myrootemergencystr", JSON.stringify(myrootemergency));
localStorage.setItem("myjsonstr", JSON.stringify(myrootemergency));
treeData = myrootemergency;



}






 	var myjsonstr = localStorage.getItem("myjsonstr");
	var myjsonobj = JSON.parse (myjsonstr);
	treeData = myjsonobj;
	
	//opentree() was here
	
	try {
	if (treeData.parent == null && !treeData.children){
	rootonlyyesno = 'yes';
	}
	}catch{
	console.log ("Error");
	}
	
	
	if (treeData == null || treeData == ''){
	emergencystartyesno = "yes";
	}
	
	

	

var tree_root;
var create_node_modal_active = false;
var rename_node_modal_active = false;
var create_node_parent = null;
var node_to_rename = null;

outer_update = null;


// Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;
    // variables for drag/drop
    var selectedNode = null;
    var draggingNode = null;
    // panning variables
    var panSpeed = 200;
    var panBoundary = 20; // Within 20px from edges will pan when dragging.
    // Misc. variables
    var i = 0;
    var duration = 750;
    var root;

    // size of the diagram
    var viewerWidth = $(document).width();
    var viewerHeight = $(document).height();

    var tree = d3.layout.tree()
        .size([viewerHeight, viewerWidth]);


var margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120
},
width = 960 - margin.right - margin.left,
height = 800 - margin.top - margin.bottom;

	 
// assigns the data to a hierarchy using parent-child relationships
 root = d3v6.hierarchy(treeData);

// assign the name to each node
if (rootonlyyesno == 'yes'){
}else{
root.each(function(d) {
d.name = d.data.name;
});
}

var tree = d3.layout.tree().nodeSize([70, 40]);

    var menu = [
            {
                    title: 'Rename node',
                    action: function(elm, d, i) {
                            console.log('Rename node');
                            $("#RenameNodeName").val(d.name);
                            rename_node_modal_active = true;
                            node_to_rename = d
                            $("#RenameNodeName").focus();
                            $('#RenameNodeModal').foundation('reveal', 'open');
                    }
            },
            {
                    title: 'Delete node',
                    action: function(elm, d, i) {
                            console.log('Delete node');
							if (d.parent == null){
							//alert ('You cannot delete ' + d.name);
							//return;
		}
                            delete_node(d);
                    }
            },
            {
                    title: 'Create child node',
                    action: function(elm, d, i) {
                            console.log('Create child node');
                            create_node_parent = d;
                            create_node_modal_active = true;
                            $('#CreateNodeModal').foundation('reveal', 'open');
                            $('#CreateNodeName').focus();
                    }
            }
    ]

	
	
	
	 // Call visit function to establish maxLabelLength
    visit(treeData, function(d) {
        totalNodes++;
		//console.log (d.data.name);
		 // maxLabelLength = Math.max(d.data.name.length, maxLabelLength);
		  maxLabelLength = Math.max(d.name.length, maxLabelLength);
    }, function(d) {
        return d.children && d.children.length > 0 ? d.children : null;
    });

	
	
 // A recursive helper function for performing some setup by walking through all nodes

    function visit(parent, visitFn, childrenFn) {
        if (!parent) return;

        visitFn(parent);

        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn);
            }
        }
    }

   
   


 // sort the tree according to the node names

    function sortTree() {
        tree.sort(function(a, b) {
            return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        });
    }
    // Sort the tree initially incase the JSON isn't in a sorted order.
   // sortTree();

// TODO: Pan function, can be better implemented.

    function pan(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            translateCoords = d3.transform(svgGroup.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            scaleX = translateCoords.scale[0];
            scaleY = translateCoords.scale[1];
            scale = zoomListener.scale();
            svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
            d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
            zoomListener.scale(zoomListener.scale());
            zoomListener.translate([translateX, translateY]);
            panTimer = setTimeout(function() {
                pan(domNode, speed, direction);
            }, 50);
        }
    }



 // Define the zoom function for the zoomable tree

    function zoom() {
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }


    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

    function initiateDrag(d, domNode) {
        draggingNode = d;
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
        d3.select(domNode).attr('class', 'node activeDrag');

        svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
            if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
            else return -1; // a is the hovered element, bring "a" to the front
        });
        // if nodes has children, remove the links and nodes
        if (nodes.length > 1) {
            // remove link paths
            links = tree.links(nodes);
            nodePaths = svgGroup.selectAll("path.link")
                .data(links, function(d) {
                    return d.target.id;
                }).remove();
            // remove child nodes
            nodesExit = svgGroup.selectAll("g.node")
                .data(nodes, function(d) {
                    return d.id;
                }).filter(function(d, i) {
                    if (d.id == draggingNode.id) {
                        return false;
                    }
                    return true;
                }).remove();
        }

        // remove parent link
        parentLink = tree.links(tree.nodes(draggingNode.parent));
        svgGroup.selectAll('path.link').filter(function(d, i) {
            if (d.target.id == draggingNode.id) {
                return true;
            }
            return false;
        }).remove();

        dragStarted = null;
    }

    // define the baseSvg, attaching a class for styling and the zoomListener
    var baseSvg = d3.select("#tree-container").append("svg")
        .attr("width", viewerWidth)
        .attr("height", viewerHeight);
        
    baseSvg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "white")
        
    baseSvg.call(zoomListener);


    // Define the drag listeners for drag/drop behaviour of nodes.
    dragListener = d3.behavior.drag()
        .on("dragstart", function(d) {
            if (d == root) {
                return;
            }
            dragStarted = true;
            nodes = tree.nodes(d);
            d3.event.sourceEvent.stopPropagation();
            // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
        })
        .on("drag", function(d) {
            if (d == root) {
                return;
            }
            if (dragStarted) {
                domNode = this;
                initiateDrag(d, domNode);
            }

            // get coords of mouseEvent relative to svg container to allow for panning
            relCoords = d3.mouse($('svg').get(0));
            if (relCoords[0] < panBoundary) {
                panTimer = true;
                pan(this, 'left');
            } else if (relCoords[0] > ($('svg').width() - panBoundary)) {

                panTimer = true;
                pan(this, 'right');
            } else if (relCoords[1] < panBoundary) {
                panTimer = true;
                pan(this, 'up');
            } else if (relCoords[1] > ($('svg').height() - panBoundary)) {
                panTimer = true;
                pan(this, 'down');
            } else {
                try {
                    clearTimeout(panTimer);
                } catch (e) {

                }
            }

            d.x0 += d3.event.dy;
            d.y0 += d3.event.dx;
            var node = d3.select(this);
            node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
            updateTempConnector();
        }).on("dragend", function(d) {
            if (d == root) {
                return;
            }
            domNode = this;
            if (selectedNode) {
                // now remove the element from the parent, and insert it into the new elements children
                var index = draggingNode.parent.children.indexOf(draggingNode);
                if (index > -1) {
                    draggingNode.parent.children.splice(index, 1);
                }
                if (typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
                    if (typeof selectedNode.children !== 'undefined') {
                        selectedNode.children.push(draggingNode);
                    } else {
                        selectedNode._children.push(draggingNode);
                    }
                } else {
                    selectedNode.children = [];
                    selectedNode.children.push(draggingNode);
                }
                // Make sure that the node being added to is expanded so user 
				//can see added node is correctly moved
                expand(selectedNode);
                sortTree();
                endDrag();
            } else {
                endDrag();
            }
        });

    function endDrag() {
        selectedNode = null;
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
        d3.select(domNode).attr('class', 'node');
        // now restore the mouseover event or we won't be able to drag a 2nd time
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');
        updateTempConnector();
        if (draggingNode !== null) {
            update(root);
            centerNode(draggingNode);
            draggingNode = null;
        }
    }

 // color a node properly
  function colorNodeORI(d) {
        result = "#fff";
        if (d.synthetic == true) {
          result = (d._children || d.children) ? "darkgray" : "lightgray";
        }
        else {
          if (d.type == "USDA") {
            result = (d._children || d.children) ? "orangered" : "orange";
          } else if (d.type == "Produce") {
            result = (d._children || d.children) ? "yellowgreen" : "yellow";
          } else if (d.type == "RecipeIngredient") {
            result = (d._children || d.children) ? "orange" : "orange";
          } else {
            //ORI result = "lightsteelblue"
			result = "orange";
          }
        }
        return result;
    }
	
	
	
	 // color a node properly
  function colorNode(d) {
        result = "#fff";
        if (d.class === "found") {
            result = "#ff4136"; //red
        } else if (d.type == "synthetic") {
            result = (d._children || d.children) ? "darkgray" : "lightgray";
        } else if (d.type == "person") {
            result = (d._children || d.children) ? "royalblue" : "skyblue";
        } else if (d.type == "two") {
            result = (d._children || d.children) ? "orangered" : "orange";
        } else if (d.type == "three") {
            result = (d._children || d.children) ? "yellowgreen" : "yellow";
        } else {
            result = "lightsteelblue"
        }
        return result;
    }


    // Function to update the temporary connector indicating dragging affiliation
    var updateTempConnector = function() {
        var data = [];
        if (draggingNode !== null && selectedNode !== null) {
            // have to flip the source coordinates since we did this for 
			//the existing connectors on the original tree
            data = [{
                source: {
                    x: selectedNode.y0,
                    y: selectedNode.x0
                },
                target: {
                    x: draggingNode.y0,
                    y: draggingNode.x0
                }
            }];
        }
        var link = svgGroup.selectAll(".templink").data(data);

        link.enter().append("path")
            .attr("class", "templink")
            .attr("d", d3.svg.diagonal())
            .attr('pointer-events', 'none');

        link.attr("d", d3.svg.diagonal());

        link.exit().remove();
    };

    // Function to center node when clicked/dropped so node 
	//doesn't get lost when collapsing/moving with large amount of children.

    function centerNode(source) {
        scale = zoomListener.scale();
        x = -source.y0;
        y = -source.x0;
        x = x * scale + viewerWidth / 2;
        y = y * scale + viewerHeight / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }



 function centerNodeMW(source) {
        scale = zoomListener.scale();
        x = -source.y0;
        y = -source.x0;
       // x = x * scale + viewerWidth / 2;
       // y = y * scale + viewerHeight / 2;
	   x = 150;
	   y = 50;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }
	
	

var i = 0,
    duration = 750,
    rectW = 80,
    rectH = 40;


var diagonal = d3.svg.diagonal()
    .projection(function (d) {
    return [d.x + rectW / 2, d.y + rectH / 2];
});

//var svg = d3.select("#body").append("svg").attr("width", 1000).attr("height", 1000)
var svg = d3.select("#body").append("svg").attr("width", 1500).attr("height", 1000)
    .call(zm = d3.behavior.zoom().scaleExtent([1,3]).on("zoom", redraw)).append("g")
    .attr("transform", "translate(" + 350 + "," + 20 + ")");

//necessary so that zoom knows where to zoom and unzoom from
zm.translate([350, 20]);

root.x0 = 0;
root.y0 = height / 2;




function searchTree(d, first_call=false) {
    if (d.children)
        d.children.forEach(searchTree);
    else if (d._children)
        d._children.forEach(searchTree);
    var searchFieldValue = eval(searchField);
    if (searchFieldValue && searchFieldValue.match(searchText)) {
        if (first_call) {
            d.search_target = true;
            console.log("Setting search_target: " + d.name)
        } else {
            d.search_target = false;
        } 
        // Walk parent chain
        var ancestors = [];
        var parent = d;
		
        while (typeof(parent) !== "undefined") {
			try{
            ancestors.push(parent);
           // console.log(parent);
            parent.class = "found";
            parent = parent.parent;
			}catch{
			//console.log (parent);
			break;
			}
        }
        //console.log(ancestors);
    }
}

function clearAll(d) {
    d.class = "";
    if (d.children)
        d.children.forEach(clearAll);
    else if (d._children)
        d._children.forEach(clearAll);
}



function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}


function expandAllSearch(d) {
    if (d._children) {
        d.children = d._children;
        d.children.forEach(expandAllSearch);
        d._children = null;
    } else if (d.children)
        d.children.forEach(expandAllSearch);
}



 function expand(d) {
        if (d._children) {
            d.children = d._children;
            d.children.forEach(expand);
            d._children = null;
        }
    }


if (rootonlyyesno == 'yes'){
}else{
root.children.forEach(collapse);
}
//duplicate update(root);

d3.select("#body").style("height", "800px");


//function update(source) starts here
function update(source) {

    // Compute the new tree layout.
   // var nodes = tree.nodes(root).reverse(), don't need reverse
   var nodes = tree.nodes(root),
        links = tree.links(nodes);
		

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 90;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) {
        return d.id || (d.id = ++i);
    });
	

    // Enter any new nodes at the parent's previous position.
	
    var nodeEnter = node.enter().append("g")
	    .attr("class", "node")
        .attr("transform", function (d) {
        return "translate(" + source.x0 + "," + source.y0 + ")";
    })
        .on("click", click);
		
		
//zzz
    nodeEnter.append("rect")
	.attr('class', 'nodeRect') 
        .attr("width", rectW)
        .attr("height", rectH)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
		.style("fill", function (d) {
        return d.children ? "lightsteelblue" : "#fff";
		//zzz return d._children ? "lightsteelblue" : "#fff";
    })
	//not needed .style("fill", 'orange')
			 .style("stroke", function(d) {
                if (d.class === "found") {
					return "orange"; // 
					       //ORI return "#2E8B57"; // seagreen
					                 }
            })
	if (adminyesno == "yes"){
	nodeEnter.on('contextmenu', d3.contextMenu(menu));
	 }


    nodeEnter.append("text")
        .attr("x", rectW / 2)
        .attr("y", rectH / 2)
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function (d) {
        return d.name;
    })
	if (adminyesno == "yes"){
	nodeEnter.on('contextmenu', d3.contextMenu(menu));
	 }
	
	
	
	
	 // Update the text to reflect whether node has children or not.
        node.select('text')
            .attr("text-anchor", "middle")
            .text(function(d) {
                return d.name;
            });
			
			
			/*Seems to color all nodes. Must review.
			 // Change the circle fill depending on whether it has children and is collapsed
        node.select("rect.nodeRect")
            //.attr("r", 4.5)
            //.attr("r", 8)
            .style("fill", 'orange');
			*/

 
    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });

    nodeUpdate.select("rect")
        .attr("width", rectW)
        .attr("height", rectH)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff";
    });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
        return "translate(" + source.x + "," + source.y + ")";
    })
        .remove();

    nodeExit.select("rect")
        .attr("width", rectW)
        .attr("height", rectH)
    //.attr("width", bbox.getBBox().width)""
    //.attr("height", bbox.getBBox().height)
    .attr("stroke", "black")
        .attr("stroke-width", 1);

    nodeExit.select("text");
	
	

    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function (d) {
        return d.target.id;
    });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("x", rectW / 2)
        .attr("y", rectH / 2)
        .attr("d", function (d) {
        var o = {
            x: source.x0,
            y: source.y0
        };
        return diagonal({
            source: o,
            target: o
        });
    });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal)
		.style("stroke", function(d) {
                    if (d.target.class === "found") {
						return "orange"; 
                        //ORI return "#2E8B57"; // seagreen
                    }
                });

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
        var o = {
            x: source.x,
            y: source.y
        };
        return diagonal({
            source: o,
            target: o
        });
    })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}
//function update(source) ends here


outer_update = update;

outer_centerNode = centerNode;

 // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append("g");

    // Define the root
    root = treeData;
    root.x0 = viewerHeight / 2;
    root.y0 = 0;

    // Layout the tree initially and center on the root node.
    update(root);
    centerNode(root);
	if (searchtreeyesno == 'yes'){
	centerNodeMW(root);
	}
    tree_root = root;
	//Get initial tree obj so I can reload if user does not
	//want to accept changes
	
	rootglobal = root;
	
	
// Toggle children on click.
function click(d) {
if (d3.event.defaultPrevented) return; // click suppressed
           if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}

//Redraw for zoom
function redraw() {
  //console.log("here", d3.event.translate, d3.event.scale);
  svg.attr("transform",
      "translate(" + d3.event.translate + ")"
      + " scale(" + d3.event.scale + ")");
}




function close_modal() {
        $(document).foundation('reveal', 'close');
}

function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};



function create_node() {
        if (create_node_parent && create_node_modal_active) {
                if (create_node_parent._children != null)  {
                        create_node_parent.children = create_node_parent._children;
                        create_node_parent._children = null;
                }
                if (create_node_parent.children == null) {
                        create_node_parent.children = [];
                }
                id = generateUUID(); 
                name = $('#CreateNodeName').val();
                new_node = { 'name': name, 
                             'id' :  id,
                             'depth': create_node_parent.depth + 1,                           
                             'children': [], 
                             '_children':null 
                           };
                console.log('Create Node name: ' + name);
                create_node_parent.children.push(new_node);
                create_node_modal_active = false;
                $('#CreateNodeName').val('');

        }
        close_modal();
        outer_update(create_node_parent);
		//used with flatdata createoption();
		savechanges();
}



	
	function rename_node() {
        if (node_to_rename && rename_node_modal_active) {
                name = $('#RenameNodeName').val();
                console.log('New Node name: ' + name);
                node_to_rename.name = name;
                rename_node_modal_active = false;

        }
        close_modal();
        outer_update(node_to_rename);
		//used with flatdata renameoption();
		savechanges();
}


 function delete_node(node) {
	nodetodelete = node;
	collapse(nodetodelete);
	//used with flatdata deleteoption(nodetodelete);
        visit(treeData, function(d) {
               if (d.children) {
                       for (var child of d.children) {
                               if (child == node) {
                                       d.children = _.without(d.children, child);
                                       update(root);
									   break;
                               }
                       } 
               }
        },
        function(d) {
           return d.children && d.children.length > 0 ? d.children : null;
       });
	   
	   savechanges();
		  }




  //]]>
 

  
    // tell the embed parent frame the height of the content
    if (window.parent && window.parent.parent){
      window.parent.parent.postMessage(["resultsFrame", {
        height: document.body.getBoundingClientRect().height,
        slug: "8bdx4q0e"
      }], "*")
    }

    // always overwrite window.name, in case users try to set it manually
    window.name = "result"
	
	//console.log (root);
	//console.log (tree);
		
 
 function renameoption(){
// console.log (arraychanges);
    var name = node_to_rename.name;
	var nameid = node_to_rename.id;
	//Find index of specific object using findIndex method.    
objIndex = arraychanges.findIndex((obj => obj.nameid == nameid));//var parentname = (d.data.parentname);

//Update object's name property.
arraychanges[objIndex].name = name;
				
localStorage.setItem("arraychangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
 arraychangeststr = localStorage.getItem("arraychangesstr");
// Parse the JSON string back to JS object
 arraychangesstrparsed = JSON.parse(arraychangeststr); //becomes arrayaddchildstrparsed[]
	console.log(arraychangesstrparsed);
}


function createoption(){
var name = new_node.name;
var nameid = new_node.id;
var parentname = create_node_parent.name;
var parentid = create_node_parent.id;

var objaddall = {"name": name, 
"nameid": nameid,
"parentname": parentname,
"parentid": parentid};
                        
			   arraychanges.push(objaddall);
			   
localStorage.setItem("arraychangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
 arraychangeststr = localStorage.getItem("arraychangesstr");
// Parse the JSON string back to JS object
 arraychangesstrparsed = JSON.parse(arraychangeststr); //becomes arrayaddchildstrparsed[]
	console.log(arraychangesstrparsed);

}

var nodetodelete;

function deleteoption(nodetodelete) {

deleterecursive(nodetodelete);

var name = nodetodelete.name;
var nameid = nodetodelete.id;
var parentname = nodetodelete.parent.name;
var parentid = nodetodelete.parent.id;
var objIndex = arraychanges.findIndex((obj => obj.nameid == nameid));//var parentname = (d.data.parentname);
arraychanges.splice(objIndex, 1);

localStorage.setItem("arraychangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
 arraychangesstr = localStorage.getItem("arraychangesstr");
// Parse the JSON string back to JS object
 arraychangesstrparsed = JSON.parse(arraychangesstr); 
	console.log(arraychangesstrparsed);
	
}




function deleterecursive(d) {
    if (d._children) {
      d._children.forEach(function(child){
       var name = child.name;
var nameid = child.id;
var parentname = child.parent.name;
var parentid = child.parent.id;
var objIndex = arraychanges.findIndex((obj => obj.nameid == nameid));
arraychanges.splice(objIndex, 1);

localStorage.setItem("arraychangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
 arraychangesstr = localStorage.getItem("arraychangesstr");
// Parse the JSON string back to JS object
 arraychangesstrparsed = JSON.parse(arraychangesstr); 
	console.log(arraychangesstrparsed);
	
      });      
      d._children = d._children;
      d._children.forEach(deleterecursive);
      d._children = null;
    }
  }



/* 
//used with flatdata
 function savechanges(){
 localStorage.setItem("arraysavechangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
 arraysavechangesstr = localStorage.getItem("arraysavechangesstr");
// Parse the JSON string back to JS object
 arraysavechangesstrparsed = JSON.parse(arraysavechangesstr); 
	console.log(arraysavechangesstrparsed);
  }
*/  
  
 
//20 Apr 2021 Discontinued below. Am now using Admin button
 // document.onmouseup = getXYPositionClick;


      
    // Cursor coordinate functions
var myX, myY, xyOn, myMouseX, myMouseY;
xyOn = true;

function getXYPositionClick(e) {
    myMouseX = (e || event).clientX;
    myMouseY = (e || event).clientY;
    if (document.documentElement.scrollTop > 0) {
        myMouseY = myMouseY + document.documentElement.scrollTop;
    }
    if (xyOn) {
	
	if (myMouseX < 30 && myMouseY < 30){
       // alert("X is " + myMouseX + "\nY is " + myMouseY);
	   adminprompt();
	   emergencyyesno();
	   location.reload();
	   //var modal = document.getElementById("myModal");
	   // modal.style.display = "block";
	  		}else if (myMouseX < 30 && myMouseY >30){
       // alert("X is " + myMouseX + "\nY is " + myMouseY);
	   	  // startoption();
		} 
    }
}



function adminprompt() {
  var txt;
  var adminyesno = prompt("Enter Admin Code");
  if (adminyesno == '1234') {
    adminyesno = 'yes';
	localStorage.setItem("adminyesno", adminyesno);
	var padmin = document.getElementById('padmin');
	padmin.style.display = 'float:left';
	location.reload();
  }else if (adminyesno == null || adminyesno == "") {
    adminyesno = "no";
	localStorage.setItem("adminyesno", adminyesno);
	var padmin = document.getElementById('padmin');
	padmin.style.display = 'none';
	location.reload();
  }else{
  adminyesno = "no";
	localStorage.setItem("adminyesno", adminyesno);
	var padmin = document.getElementById('padmin');
	padmin.style.display = 'none';
	location.reload();
  }
  
 }


function emergencyyesno() {
  var txt;
  var emergencystartyesno = prompt("Start Option: Emergency start yes or no");
  if (emergencystartyesno == null || emergencystartyesno == "") {
    emergencystartyesno = "User cancelled the prompt.";
  } else {
    emergencystartyesno = emergencystartyesno;
	localStorage.setItem("emergencystartyesno", emergencystartyesno);
	//location.reload();
  }
  
 }


function startoption() {
  var txt;
  var startoptions = prompt("Demo Options: Thomas, Wilson");
  startoptions = startoptions.toLowerCase();
  if (startoptions == null || startoptions == "") {
    startoptions = "User cancelled the prompt.";
  } else {
    startoptions = startoptions;
	localStorage.setItem("startoptions", startoptions);
	localStorage.setItem("opentreeyesno", 'no');
	location.reload();
  }
  
 }






/*
Convert json object to array???
var json_data = initialtreestrparsed
var result = [json_data];
console.log(result);*/




//testsaveinitial();

function testsaveinitial(){
expandAll();
iterateall();
collapseAll();
}

function expandzzz(d){   
    var children = (d.children)?d.children:d._children;
    if (d._children) {        
        d.children = d._children;
        d._children = null;       
    }
    if(children)
      children.forEach(expandzzz);
}

function expandAll(){
    expandzzz(root); 
    update(root);
}

function collapseAll(){
    root.children.forEach(collapse);
    collapse(root);
    update(root);
}



function collapseAllNotFound(d) {
    if (d.children) {
        if (d.class !== "found") {
            d._children = d.children;
            d._children.forEach(collapseAllNotFound);
            d.children = null;
        } else {
            d.children.forEach(collapseAllNotFound);
        }
    }
}


function blinkSearchTarget(d) {
     if (d.search_target) {
        outer_centerNode(d);
        console.log("Found search target: " + d.name);
    }
    if (d.children) {
        d.children.forEach(blinkSearchTarget);
    }
	
	
	if (d.search_target) {
                        return "#2E8B57"; // seagreen
                    }
	
   }



function centerSearchTarget(d) {
    if (d.search_target) {
        outer_centerNode(d);
        console.log("Found search target: " + d.name);
    }
    if (d.children) {
        d.children.forEach(centerSearchTarget);
    }
}


function iterateall(){
arrayinitialtree = [];
//console.log ("this is iterateall");
 d3.selectAll('g.node')  //here's how you get all the nodes
    .each(function(d) {
      // console.log (d.data.nameid + " " + d.data.name + " " + d.data.parentid + " " + d.data.parentname);
      //statr populate array
	  var name = d.data.name;
var nameid = d.data.nameid;
var parentname = d.data.parentname;
var parentid = d.data.parentid;

var objinitialtree = {"name": name, 
"nameid": nameid,
"parentname": parentname,
"parentid": parentid};
                        
			   arrayinitialtree.push(objinitialtree);
			   
localStorage.setItem("arrayinitialtreestr", JSON.stringify(arrayinitialtree));
// Retrieve the JSON string
 arrayinitialtreestr = localStorage.getItem("arrayinitialtreestr");
// Parse the JSON string back to JS object
 arrayinitialtreestrparsed = JSON.parse(arrayinitialtreestr); //becomes arrayaddchildstrparsed[]
	//console.log(arrayinitialtreestrparsed);
	  //end populate array
	  
    });
	
	
arrayinitialtreestrparsed.sort(function(a, b) { 
 return a.parentid - b.parentid;
 });
  
  
console.log(arrayinitialtreestrparsed);	
objIndex = arrayinitialtreestrparsed.findIndex((arrayinitialtreestrparsed => arrayinitialtreestrparsed.parentid == ""));//var parentname = (d.data.parentname);

}


	
	
	
	var rootglobal;	
	function savejson(){
			
//https://stackoverflow.com/questions/55212239/how-to-export-save-updated-d3-js-v4-tree-json-data-string

//I propose this solution that is not perfect and which deserves improvements but that works, it will help you get started.

//All the code below is added at the end of the update function in the dndTree.js file.

console.log(rootglobal); //root contains everything you need
    const getCircularReplacer = (deletePorperties) => { //func that allows a circular json to be stringified
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if(deletePorperties){
            delete value.id; //delete all properties you don't want in your json (not very convenient but a good temporary solution)
            delete value.x0;
            delete value.y0;
            delete value.y;
            delete value.x;
            delete value.depth;
            delete value.size; 
          }
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };

    var myRoot = JSON.stringify(rootglobal, getCircularReplacer(false)); //Stringify a first time to clone the root object (it's allow you to delete properties you don't want to save)
    var myvar= JSON.parse(myRoot);
    myvar= JSON.stringify(myvar, getCircularReplacer(true)); //Stringify a second time to delete the propeties you don't need

    console.log(myvar); //You have your json in myvar

//Now that you have your json, you can either :
//Download your new tree.json file :
 function download(content, fileName, contentType) {
	  var a = document.createElement("a");
   var file = new Blob([content], {
     type: contentType
   });
  a.href = URL.createObjectURL(file);
   a.download = fileName;
   a.click();
     }
 download(myvar, 'treechaney.json', 'text/plain'); 
 
/* 
//An example with node.js :
//not working
    var fs = require('fs');
    fs.writeFile("treechaney.json", myvar, function(err) {
      if (err) {
        console.log(err);
      }
    });
		*/
		
	}
	
	
	var myvarjson;
	
	function savechanges(){
			
//https://stackoverflow.com/questions/55212239/how-to-export-save-updated-d3-js-v4-tree-json-data-string

//I propose this solution that is not perfect and which deserves 
//improvements but that works, it will help you get started.

console.log(rootglobal); //root contains everything you need
    const getCircularReplacer = (deletePorperties) => { //func that allows a circular json to be stringified
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if(deletePorperties){
            delete value.id; //delete all properties you don't want in your json (not very convenient but a good temporary solution)
            delete value.x0;
            delete value.y0;
            delete value.y;
            delete value.x;
            delete value.depth;
            delete value.size; 
          }
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };



if (createnewtreeyesno == 'yes'){
 var myRootStr = JSON.stringify(rootglobal, getCircularReplacer(false)); //Stringify a first time to clone the root object (it's allow you to delete properties you don't want to save)
    var myRootObj= JSON.parse(myRootStr);
    myRootStr= JSON.stringify(myRootObj, getCircularReplacer(true)); //Stringify a second time to delete the propeties you don't need
    //console.log(myRootStr); //You have your json in myvar
	localStorage.setItem("myjsonstr"+newtreename, myRootStr);
	var myjsonstr = localStorage.getItem("myjsonstr"+newtreename);
	var myjsonobj = JSON.parse (myjsonstr);
}else{
 var myRootStr = JSON.stringify(rootglobal, getCircularReplacer(false)); //Stringify a first time to clone the root object (it's allow you to delete properties you don't want to save)
    var myRootObj= JSON.parse(myRootStr);
    myRootStr= JSON.stringify(myRootObj, getCircularReplacer(true)); //Stringify a second time to delete the propeties you don't need
    //console.log(myRootStr); //You have your json in myvar
	localStorage.setItem("myjsonstr", myRootStr);
	var myjsonstr = localStorage.getItem("myjsonstr");
	var myjsonobj = JSON.parse (myjsonstr);
	}
}
	

createnewtreeyesno = '';
function createnewtree(){
renameroot(root);
deleteallchildren(root);
} 
 
 newtreename = '';
 function renameroot(d){
 var newtreename = prompt("Enter New Tree Name");
 d.name = newtreename;
 d.data.name = newtreename;
// outer_update(node_to_rename);
 outer_update(d);
 createnewtreeyesno = 'yes';
		savechanges();
		createnewtreeyesno = 'no';
  }
 
 function deleteallchildren(d){
  if (d.children) {
  var i = 0;
      d.children.forEach(function(child){
	 	  // 	console.log (d.children[i].name);
		//var id = d.children[i].id;
		i = i+1;
		 delete_node(child);
	     });      
         }
 
 }	
 
 
 
 	function savetree(){
	var savetreename = prompt("Enter Save Tree Name");	
	savetreename = savetreename.toLowerCase();
//https://stackoverflow.com/questions/55212239/how-to-export-save-updated-d3-js-v4-tree-json-data-string

//I propose this solution that is not perfect and which deserves 
//improvements but that works, it will help you get started.

console.log(rootglobal); //root contains everything you need
    const getCircularReplacer = (deletePorperties) => { //func that allows a circular json to be stringified
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if(deletePorperties){
            delete value.id; //delete all properties you don't want in your json (not very convenient but a good temporary solution)
            delete value.x0;
            delete value.y0;
            delete value.y;
            delete value.x;
            delete value.depth;
            delete value.size; 
          }
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };

 var myRootStr = JSON.stringify(rootglobal, getCircularReplacer(false)); //Stringify a first time to clone the root object (it's allow you to delete properties you don't want to save)
    var myRootObj= JSON.parse(myRootStr);
    myRootStr= JSON.stringify(myRootObj, getCircularReplacer(true)); //Stringify a second time to delete the propeties you don't need
    //console.log(myRootStr); //You have your json in myvar
	localStorage.setItem("myjsonstr"+savetreename, myRootStr);
	var myjsonstr = localStorage.getItem("myjsonstr"+savetreename);
	var myjsonobj = JSON.parse (myjsonstr);
}

 
 
 function allStorage() {
 //popup();
var arraystorageitems = [];
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
	str = keys[i];
	if (str.includes("myjson")){
        values.push( localStorage.getItem(keys[i]) );
		var res = str.substring(9);
		console.log (res);
		if (res == ''){
		}else{
		arraystorageitems.push(res);
		}
		}
    }
console.log (arraystorageitems);
    return values;
}


function openmodal() { 
//HTML DOM insertAdjacentElement() Method
mydia = document.getElementById("mydia");
 var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  mydia.appendChild(x);
  document.getElementById("mydia").showModal(); 
} 

function showDialog() {
  x.show();
}

function closeDialog() {
  x.close();
}



arraystorageitems = [];
function opentree(){
	localStorage.setItem("opentreeyesno", 'yes');
	opentree1(); //put all storage items in arraystorageitems
	opentree2(); //populate mydia with arraystorageitems
		}
	
	function opentree1(){
	// arraystorageitems = [];
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
	str = keys[i];
	if (str.includes("myjson")){
        values.push( localStorage.getItem(keys[i]) );
		var res = str.substring(9);
		console.log (res);
		if (res == ''){
		}else{
			 res = res.toLowerCase();
		arraystorageitems.push(res);
		}
		}
    }
	arraystorageitems.sort();
	arraystorageitems.reverse();
console.log (arraystorageitems);
    return values;
	}
	
	
	function opentree2(){
/*
		var s = document.getElementById("mySpan");
var h = document.getElementById("myH2");
h.insertAdjacentElement("afterend", s);
"afterbegin" - After the beginning of the element (as the first child)
"afterend" - After the element
"beforebegin" - Before the element
"beforeend" - Before the end of the element (as the last child)
*/

document.getElementById("mydia").showModal();  
 mydia = document.getElementById("mydia");
 
 var i = 0;
arraystorageitems.forEach (myarrayfunction);
function myarrayfunction(value){
//radio	
  //<input type="radio" id="male" name="gender" value="male">
  //<label for="male">Male</label><br>
  var labelvar = document.createElement("label");
   labelvar.setAttribute("id", "label"+i);
   labelvar.setAttribute("name", "labelgroup");
   var inputvar = document.createElement("input");
   inputvar.setAttribute("type", "radio");
   inputvar.setAttribute("id", "radio"+i);
   inputvar.setAttribute("name", "radiogroup");
   
  
   mydia.insertAdjacentElement("afterbegin", inputvar);
    inputvar.insertAdjacentElement("afterend", labelvar);
	labelvar.innerHTML = value;
	
		var mybreak = document.createElement('br');
  inputvar.insertAdjacentElement("beforebegin", mybreak);
	
	i=i+1;
	
//checkbox	
/*
 var mylabel = document.createElement("LABEL");
   var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");

  mydia.insertAdjacentElement("afterbegin", x);
   x.insertAdjacentElement("afterend", mylabel);
    mylabel.innerHTML = value;
	
	var mybreak = document.createElement('br');
  x.insertAdjacentElement("beforebegin", mybreak);
  */

}
  
  
 var butcancel = document.createElement('button');
 butcancel.innerHTML = ('Cancel');
  mydia.insertAdjacentElement("beforeend", butcancel);
  
  var butok = document.createElement('button');
  butok.innerHTML = ('OK');
  butcancel.insertAdjacentElement("beforebegin", butok);
  
/* not needed  
    var pdia = document.createElement("p");
mydia.insertAdjacentElement('afterbegin', pdia);
pdia.innerHTML = ('Select Tree To Open');

  var mybreak = document.createElement('br');
  butok.insertAdjacentElement("beforebegin", mybreak);
*/

butok.addEventListener("click", opentreename);
	}
	


		
		function opentreename(){
			/*
			var opentreename = prompt("Enter Open Tree Name");
	 opentreename = opentreename.toLowerCase();
	var myjsonstr = localStorage.getItem("myjsonstr"+opentreename);
	var myjsonobj = JSON.parse (myjsonstr);// load the external data
	localStorage.setItem("myjsonstr", JSON.stringify(myjsonobj));
	treeData = myjsonobj;
	location.reload();
	*/

/*
	https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
	var genderSRadio = document.querySelector("input[name=genderS]:checked");
var genderSValue = genderSRadio ? genderSRadio.value : "";
The code breaks down like this:

Line 1: get a reference to the control that (a) is an <input> type, 
(b) has a name attribute of genderS, and (c) is checked.
Line 2: If there is such a control, return its value. If there isn't, 
return an empty string. The genderSRadio variable is truthy if Line 1 
finds the control and null/falsey if it doesn't.
*/

var mdia = document.getElementById("mydia");


//	var radioname = document.querySelector("input[name=radiogroup]:checked");
//var radioonoff = radioname ? radioname.value : "";


var labels = document.getElementsByName('labelgroup');
var radios = document.getElementsByName('radiogroup');
var ele = document.getElementsByName('radiogroup');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
				              console.log ("Tree Name: "+labels[i].innerText);
							  opentreename = (labels[i].innerText);
				}
							              }
										  
			 // do stuff
			 var myjsonstr = localStorage.getItem("myjsonstr"+opentreename);
	var myjsonobj = JSON.parse (myjsonstr);// load the external data
	localStorage.setItem("myjsonstr", JSON.stringify(myjsonobj));
	treeData = myjsonobj;
	location.reload();
}		


function searchtreeprompt(){
	searchtreeyesno = 'yes';
	var searchname = prompt("Enter family member's first name");
	//searchname = searchname.toLowerCase();
	console.log (searchname);
	                    clearAll(tree_root);
                        expandAllSearch(tree_root);
                        outer_update(tree_root);
						searchField = "d.name";
                        searchText = searchname;
						firstCall = true;
                        searchTree(tree_root, firstCall);
                        tree_root.children.forEach(collapseAllNotFound);
                        outer_update(tree_root);
                        //tree_root.children.forEach(centerSearchTarget);
						//tree_root.children.forEach(blinkSearchTarget);
						colorsearchmatch();
						searchtreeyesno = 'no';					
}



function colorsearchmatch(){
	
//var nodes = tree.nodes(root),
 //       links = tree.links(nodes);
// var node = svg.selectAll("g.node")
svg.selectAll('nodeRect') 
		//.style("fill", 'orange')
		.style("fill", function(d) {
                if (d.class === "found") {
					return "orange"; // 
					       //ORI return "#2E8B57"; // seagreen
					                 }
            });
	
}


  
  