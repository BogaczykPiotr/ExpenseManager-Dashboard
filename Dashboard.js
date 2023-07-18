let links = document.querySelectorAll('.link')
for (let i = 0; i < links.length; i++) {
	if (links[i].href === window.location.href) {
		links[i].classList.add('actual-page')
		links[i].classList.remove('link')
	}
}

let canvas = document.querySelector('.dashboard-chart')
let data = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
	datasets: [
		{
			data: [12, 19, 3, 5, 2, 3, 12, 3, 14, 5, 6, 120],
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			borderColor: 'rgba(266, 255, 255, 1)',
			borderWidth: 2,
		},
	],
}

let options = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
}

let chart = new Chart(canvas, {
	type: 'line',
	data: data,
	options: options,
})
