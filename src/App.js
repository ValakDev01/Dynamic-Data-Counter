import { useState } from "react";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<Counter />
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	const date = new Date();

	// This line of code is responsible for calculating the date based on the current date (date.getDate())
	// and the value of count, which represents the number of days to add or subtract from the current date.
	// Let's break it down:

	// date.getDate(): This part returns the day of the month (from 1 to 31) for the current date stored in the date variable.

	// count: This variable holds the number of days to add or subtract from the current date. It can be positive (to add days)
	// or negative (to subtract days).

	// date.setDate(date.getDate() + count): This expression calculates the new date by adding the value of count to the current
	// day of the month (date.getDate()). The setDate() method sets the day of the month for the date object to the calculated value.

	// For example:

	// If count is 3 and the current date is April 28th, 2024, date.getDate() + count evaluates to 28 + 3 = 31, so the new date becomes
	// May 1st, 2024.

	// If count is -5 and the current date is April 28th, 2024, date.getDate() + count evaluates to 28 - 5 = 23, so the new date becomes
	// April 23rd, 2024.

	date.setDate(date.getDate() + count);

	// The first <div> contains controls to adjust the step value (step state).
	// The second <div> contains controls to adjust the count value (count state).

	// A <p> tag contains a span that dynamically displays text based on the value of count:
	// 1. If count is 0, it displays "Today is:".
	// 2. If count is greater than 0, it displays the number of days from today.
	// 3. If count is less than 0, it displays the number of days ago.

	// The actual date calculated based on the count value is displayed in another span using date.toDateString().

	return (
		<div>
			<div>
				<button onClick={() => setStep((c) => c - 1)}>-</button>
				<span>Step: {step}</span>
				<button onClick={() => setStep((c) => c + 1)}>+</button>
			</div>
			<br />
			<div>
				<button onClick={() => setCount((c) => c - step)}>-</button>
				<span>Count: {count}</span>
				<button onClick={() => setCount((c) => c + step)}>+</button>
			</div>
			<p>
				<span>
					{count === 0
						? "Today is:"
						: count > 0
						? `${count} days from today is `
						: `${Math.abs(count)} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>
		</div>
	);
}
