const days = [1, 1, 2, 2, 3, 3, 4, 4];
const nights = [4, 4, 1, 1, 2, 2, 3, 3];

const shifts = [null, "one", "two", "three", "four"];

const firstOrSecond = i => (i % 2 == 0 ? "first" : "second");

const today = new Date();
today.setHours(0, 0, 0, 0);

const referenceDate = new Date(2018, 0, 2);
referenceDate.setHours(0, 0, 0, 0);

const difference = today - referenceDate;

const offset = Math.ceil(difference / 8.64e7) % 8;

const day = document.createElement("div");
day.className = `${shifts[days[offset]]} shift`;
day.innerHTML = `${shifts[days[offset]]} shift<br>${firstOrSecond(offset)} day`;

const night = document.createElement("div");
night.className = `${shifts[nights[offset]]} shift`;
night.innerHTML = `${shifts[nights[offset]]} shift<br>${firstOrSecond(
  offset
)} night`;

document.addEventListener("DOMContentLoaded", function(event) {
  document.body.appendChild(day);
  document.body.appendChild(night);
});
