const first_day = '2022-08-13T04:24:00'; // Adjust the date format to include time zone
const indiaOffset = 5.5; // India Standard Time (IST) offset

function parse(date, timezoneOffset) {
  const now = new Date();
  const sum = now - new Date(date);

  const seconds = Math.floor((sum / 1000) % 60),
    minutes = Math.floor((sum / 1000 / 60) % 60),
    hours = Math.floor((sum / (1000 * 60 * 60)) % 24),
    daysTotal = Math.floor(sum / (1000 * 60 * 60 * 24));

  const years = Math.floor(daysTotal / 365.25); // Consider leap years
  const months = Math.floor(((daysTotal % 365.25) / 30.436875)); // Average days per month
  const days = Math.floor(daysTotal - (years * 365.25) - (months * 30.436875));

  return [years, months, days, hours, minutes, seconds];
}

function run(date) {
  const doms = document.getElementsByClassName('time');

  function tick() {
    const timezoneOffset = indiaOffset; // Use the Indian timezone offset
    const t = parse(date, timezoneOffset);

    for (let i = 0; i < doms.length; i++) {
      doms[i].innerText = ('0' + t[i]).slice(-2);
    }
  }

  function updateTimeOnClick() {
    tick(); // Update the time when any time element is clicked
  }

  for (let i = 0; i < doms.length; i++) {
    doms[i].addEventListener('click', updateTimeOnClick);
  }

  tick(); // Call the tick function initially
  setInterval(tick, 1000); // Update the time every second
}

run(first_day);
