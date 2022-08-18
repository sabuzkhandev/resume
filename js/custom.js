// navbar change js
var nav = document.querySelector('.nav')
window.addEventListener('scroll',fixNav)

function fixNav(){
	if(window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active_change')
	}else {
		nav.classList.remove('active_change')
	}
}
// end navbar change js