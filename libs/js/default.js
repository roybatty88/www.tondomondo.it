console.log('ciao ciao');

$(function () {
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 0, 4 - 1, 7);
	console.log(austDay);


$('#glowingLayout').countdown({
	until: austDay, 
	compact: true, 
    layout: '<span class="image{d10}"></span><span class="image{d1}"></span>' + 
        '<span class="imageDay"></span><span class="imageSpace"></span>' + 
        '<span class="image{h10}"></span><span class="image{h1}"></span>' + 
        '<span class="imageSep"></span>' + 
        '<span class="image{m10}"></span><span class="image{m1}"></span>' + 
        '<span class="imageSep"></span>' + 
        '<span class="image{s10}"></span><span class="image{s1}"></span>'});
});