import React, { useEffect, useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const DatePicker = (props) => {
  const [today, setToday] = useState();
  const [selectedDay, setSelectedDay] = useState();

  const DateChangeHandler = (day) => {
    setSelectedDay(day);
  };

  // Checks if today's date is a valid delivery date, if not, it selects the next available date
  const checkTodaysDateIsValid = (today) => {
    // if today is a Tues or Sat it sets the date to the next available delivery day (+1)
    if (new Date().getDay() === 2 || new Date().getDay() === 6) {
      let dateString = new Date().toDateString() + 1;
      dateString = dateString.slice(0, 10);
      props.setInput({
        ...props.input,
        Day: new Date().getDate() + 1,
        DateString: dateString,
      });
      // if today is a Fri it sets the date to the next available delivery day (+2)
    } else if (new Date().getDay() === 5) {
      let thisDay = new Date();
      let nextDay = new Date();
      nextDay.setDate(thisDay.getDate() + 2);
      let dateString = nextDay.toDateString();
      dateString = dateString.slice(0, 10);
      props.setInput({
        ...props.input,
        Day: new Date().getDate() + 2,
        DateString: dateString,
      });
      // if today is a valid delivery day - sets the selected date to today
    } else {
      let dateString = new Date().toDateString();
      dateString = dateString.slice(0, 10);
      props.setInput({
        ...props.input,
        Day: new Date().getDate(),
        DateString: dateString,
      });
    }
    return;
  };

  // useEffect sets selected date on calendar to current day, or next available delivery day, on page render
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setToday(new Date());
      checkTodaysDateIsValid(today);
    }
    return () => (mounted = false);
  }, []);

  if (!props.displayModal) {
    return null;
  }

  // Cancel button handler - closes the modal and does not change the selected date
  const cancel = (e) => {
    props.onClose();
  };

  // Change button handler - closes the modal and updates the selected date
  const submit = (e) => {
    // if selected day is Tues, Fri, Sat, or in the past, this stops the selected date from being updated
    if (
      selectedDay.getDate() < new Date().getDate() ||
      selectedDay.getDay() === 2 ||
      selectedDay.getDay() === 6 ||
      selectedDay.getDay() === 5
    ) {
      checkTodaysDateIsValid(today);
    } else {
      let dateString = selectedDay.toDateString();
      dateString = dateString.slice(0, 10);
      props.setInput({
        ...props.input,
        Day: selectedDay.getDate(),
        DateString: dateString,
      });
    }
    props.onClose();
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-body">
            <DayPicker
              required={true}
              selectedDays={selectedDay}
              fromMonth={today}
              onDayClick={DateChangeHandler}
              canChangeMonth={false}
              firstDayOfWeek={1}
              disabledDays={[{ daysOfWeek: [2, 5, 6] }, { before: today }]}
            />
            <div className="modal-buttons">
              <button onClick={cancel} className="cancel-button">
                CANCEL, DON'T CHANGE
              </button>
              <button onClick={submit} className="change-date-button">
                CHANGE DATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
