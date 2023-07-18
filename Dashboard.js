let links = document.querySelectorAll('.link')
for (let i = 0; i < links.length; i++) {
	if (links[i].href === window.location.href) {
		links[i].classList.add('actual-page')
		links[i].classList.remove('link')
	}
}
let canvas = document.querySelector('.dashboard-chart')
let chartSelector = document.querySelector('.chart-selector')
let timeSelector = document.querySelector('.time-selector')

let totalAmountChart = document.querySelector('.total-amount-chart')
let spentChart = document.querySelector('.spent-chart')
let leftChart = document.querySelector('.left-chart')
let savingGoalChart = document.querySelector('.saving-goal-chart')
let oneDay = document.querySelector('.one-day')
let oneWeek = document.querySelector('.one-week')
let oneMont = document.querySelector('.one-month')
let oneYear = document.querySelector('.one-year')

let data = {
	labels: ['0', '4', '8', '12', '16', '20', '24'],
	datasets: [
		{
			data: [12, 19, 3, 5, 2, 3, 12, 3, 14, 5, 6, 12],
			borderColor: 'rgba(255, 140, 0, 1)',
			borderWidth: 3,
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

chartSelector.addEventListener('change', function () {
	if (chartSelector.value === 'Total Amount') {
		data.datasets[0].data = [12, 19, 3, 5, 2, 3, 12, 3, 14, 5, 6, 12]
	} else if (chartSelector.value === 'Spent') {
		data.datasets[0].data = [5, 8, 2, 10, 6, 4, 3, 1, 9, 5, 4, 6]
	} else if (chartSelector.value === 'Left') {
		data.datasets[0].data = [9, 5, 14, 7, 2, 6, 13, 3, 8, 10, 4, 9]
	} else if (chartSelector.value === 'Saving Goal') {
		data.datasets[0].data = [12, 3, 5, 9, 7, 4, 13, 6, 8, 2, 10, 9]
	}
	chart.update()
})

timeSelector.addEventListener('change', function () {
	if (timeSelector.value === '1 day') {
		data.labels = ['0', '4', '8', '12', '16', '20', '24']
	} else if (timeSelector.value === '1 week') {
		data.labels = ['1', '2', '3', '4', '5', '6', '7']
	} else if (timeSelector.value === '1 month') {
		data.labels = [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
			'24',
			'25',
			'26',
			'27',
			'28',
			'29',
			'30',
			'31',
		]
	} else if (timeSelector.value === '1 year') {
		data.labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
	}

	if (data.labels.length > data.datasets[0].data.length) {
		let dataLabelsLength = data.labels.length
		let dataLength = data.datasets[0].data.length
		for (let i = dataLength; i < dataLabelsLength; i++) {
			data.datasets[0].data.push(0)
		}
	}
	chart.update()
})
