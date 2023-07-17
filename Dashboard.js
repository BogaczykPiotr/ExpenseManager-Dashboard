let links = document.querySelectorAll('.link')
for (let i = 0; i < links.length; i++) {
	if (links[i].href === window.location.href) {
		links[i].classList.add('actual-page')
	}
}
