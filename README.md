# Digital Clock

A simple **Digital Clock Web Application** built using **HTML, CSS, and JavaScript**.
It displays the **current time, day, and date** in real time and allows users to switch between **12-hour and 24-hour time formats**.

---

## Live Demo

View the project here:

**https://AishwaryaTS-cloud.github.io/digital-clock-js/**

---

## Features

* Real-time clock updated every second
* Displays current **hours, minutes, and seconds**
* Shows **current day and full date**
* Toggle button for **12-hour / 24-hour format**
* Clean centered layout
* Gradient background UI
* Built using **pure JavaScript (no frameworks)**

---

## Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

---

## Project Structure

```
digital-clock-js
│
├── index.html
├── style.css
├── script.js
└── clock.ico
```

---

## How It Works

The application uses JavaScript's **Date object** to retrieve the current system time.

The clock updates every second using:

```
setInterval(updateClock, 1000);
```

The **Date object** provides methods like:

* `getHours()`
* `getMinutes()`
* `getSeconds()`
* `getDay()`
* `getMonth()`
* `getFullYear()`

These values are formatted and displayed in the UI.

---

## Author

**Aishwarya TS**

---
