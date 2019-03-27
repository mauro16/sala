var data = document.getElementsByClassName('fc-row')

for (i = 0; i < data.length; i++) {
    data[i].addEventListener("click", act);
}

$(function () {

    var cal = $('#calendar').calendario({
        onDayClick: function ($el, $contentEl, dateProperties) {

            for (var key in dateProperties) {
                console.log(key + ' = ' + dateProperties[key]);
            }

        },
        caldata: codropsEvents
    }),
        $month = $('#custom-month').html(cal.getMonthName()),
        $year = $('#custom-year').html(cal.getYear());

    $('#custom-next').on('click', function () {
        cal.gotoNextMonth(updateMonthYear);
    });
    $('#custom-prev').on('click', function () {
        cal.gotoPreviousMonth(updateMonthYear);
    });
    $('#custom-current').on('click', function () {
        cal.gotoNow(updateMonthYear);
    });

    function updateMonthYear() {
        $month.html(cal.getMonthName());
        $year.html(cal.getYear());
    }
});
