$(document).ready(
    function () {
        //add all event listener (clicks, etc.)
        $("form").submit(showSchedule);

        //any other functions (calculate trip, roll die, etc.)
        function showSchedule(event)
        {
            event.preventDefault();
            var daySelected ="";
            var selectedDay = $("input[name=day]:checked");
            selectedDay.each(function () {
                daySelected = $(this).val();
            });
            switch(daySelected)
            {
                case "monday":
                    $("#eventNameOutput").text("Work");
                    $("#eventTimeOutput").text("Noon-8pm");
                    break;
                case "tuesday":
                    $("#eventNameOutput").text("Class");
                    $("#eventTimeOutput").text("Noon-4pm");
                    $("#event2NameOutput").text("Homework");
                    $("#event2TimeOutput").text("4pm-8pm");
                    break;
                case "wednesday":
                    $("#eventNameOutput").text("Class");
                    $("#eventTimeOutput").text("Noon-4pm");
                    $("#event2NameOutput").text("Hang with friends");
                    $("#event2TimeOutput").text("6pm-11pm");
                    break;
                case "thursday":
                    $("#eventNameOutput").text("Class");
                    $("#eventTimeOutput").text("Noon-4pm");
                    $("#event2NameOutput").text("Homework");
                    $("#event2TimeOutput").text("4pm-8pm");
                    break;
                case "friday":
                    $("#eventNameOutput").text("Homework");
                    $("#eventTimeOutput").text("10am-2pm");
                    $("#event2NameOutput").text("Free Time");
                    $("#event2TimeOutput").text("3pm-6pm");
                    break;
                case "saturday":
                    $("#eventNameOutput").text("Homework");
                    $("#eventTimeOutput").text("10am-12pm");
                    $("#event2NameOutput").text("Hang with friends");
                    $("#event2TimeOutput").text("1pm-10pm");
                    break;
                case "sunday":
                    $("#eventNameOutput").text("Hang with friends");
                    $("#eventTimeOutput").text("8am-2pm");
                    $("#event2NameOutput").text("Homework");
                    $("#event2TimeOutput").text("4pm-7pm");
                    break;
            }

        }
    }
);