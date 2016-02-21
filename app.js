var obj = G$('Prajith','PA');
console.log(obj);
obj.fnGreet().fnGreet(this).fnsetLang('es').fnGreet().fnGreet(this).fnLogger();
//obj.fnFormalGreetings();

jQuery('#btnClick').click(function() {
	var lan = jQuery('#selLan').val();
	var obj1 = G$('Prajith','PA',lan);
	obj1.fngreetHTML(jQuery('#disVal'),true);
	
})