let start1 = document.querySelector('.clock');
let hoursText = document.querySelector('.hour');
let minText = document.querySelector('.min');
let secText = document.querySelector('.sec');
function start()
{
startInterval = setInterval(function()
{
	let dataGG = new Date();
	const hours = dataGG.getHours();
	const min	= dataGG.getMinutes();
	const sec 	= dataGG.getSeconds();
	minText.textContent = min;
	secText.textContent = sec;
	hoursText.textContent = hours;
	console.log(hours);
	console.log(min);
	console.log(sec);
	},1000);
};
function stop()
{
	minText.textContent = '00';
	secText.textContent = '00';
	hoursText.textContent = '00';
	clearInterval(startInterval);
	intervalId = null;
}

