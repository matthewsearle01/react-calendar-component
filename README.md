# Calendar Task

This app is my solution to the Butternut Box Calendar Task test assignment.

Functionality:

- [x] Initial state shows a button that opens a modal with a background overlay graying out the background.
- [x] Delivery date can be adjusted to another 'deliverable' date.
- [x] Dates that are 'undeliverable' (Tuesdays, Fridays and Saturdays) are not be selectable by the user and do not get set as an initial delivery date.
- [x] Clicking on the 'change date' button closes the modal after saving the user option
- [x] Clicking on the 'cancel, don't change' button, closes the modal and sets the date to the last selected date or the next deliverable date from today if none selected previously.
- [x] The dates listed show the current month.
- [x] Calendar correctly dynamically handles the start date and end date of the month being any day of the week.
- [x] The Modal is only rendered on the page (added to the DOM) when open.
- [x] User can only select one date at a time in the calendar.
- [x] The Date in the calendar icon in the closed state is dynamic and reflects the selected date.

Bonus Functionality

- [x] User cannot select a date in the past, if they try to it will default to the next deliverable date from today.

If I had more time I would have liked to try and match the given design styling more closely, and also animate the opening and closing of the modal. I would also have liked to make everything fully responsive, however I chose to focus on the app's functionality as a priority within the time allocated.

Local Deployment:

You will need to have the following set-up on your machine:

- Node >= v14.17.0
- Yarn >= v1.22

Clone this repository, then:

- Install the required dependencies with npm install
- Start the development server by running npm start
- Once the server starts successfully, you should be able to view the app on http://localhost:3000/
