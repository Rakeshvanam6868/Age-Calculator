document.addEventListener("DOMContentLoaded", function () {
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    let dayError = document.getElementById("dayError");
    let monthError = document.getElementById("monthError");
    let yearError = document.getElementById("yearError");

    let dh = document.getElementById("day-head");
    let mh = document.getElementById("month-head");
    let yh = document.getElementById("year-head");

    const lineRemove = document.getElementById("lineRemove");

    function checkScreenWidth() {
        if (window.innerWidth >=  431) {
            lineRemove.style.display = 'none';
        } else {
            lineRemove.style.display = 'block';
        }
    }

    window.addEventListener('resize', checkScreenWidth);
    checkScreenWidth();

    const btn = document.querySelector(".button");

    function resetStyles() {
        dayError.classList.add("hidden");
        monthError.classList.add("hidden");
        yearError.classList.add("hidden");

        dh.style.color = "";
        mh.style.color = "";
        yh.style.color = "";

        day.style.border = "";
        month.style.border = "";
        year.style.border = "";
    }

    btn.addEventListener("click", () => {
        resetStyles(); // Reset styles before validation

        var today = new Date();
        let dv = parseInt(day.value);
        let mv = parseInt(month.value);
        let yv = parseInt(year.value);

        let isValid = true;

        if (!dv) {
            dayError.innerHTML = "This field is required";
            dayError.style.color = "red";
            dh.style.color = "red";
            day.style.border = "1px solid red";
            mh.style.color = "red";
            month.style.border = "1px solid red";
            yh.style.color = "red";
            year.style.border = "1px solid red";
            dayError.classList.remove("hidden");
            isValid = false;
        } else if (dv < 1 || dv > 31) {
            dayError.innerHTML = "Must be a valid day";
            dayError.style.color = "red";
            dh.style.color = "red";
            day.style.border = "1px solid red";
            mh.style.color = "red";
            month.style.border = "1px solid red";
            yh.style.color = "red";
            year.style.border = "1px solid red";
            dayError.classList.remove("hidden");
            isValid = false;
        }

        if (!mv) {
            monthError.innerHTML = "This field is required";
            monthError.style.color = "red";
            dh.style.color = "red";
            day.style.border = "1px solid red";
            mh.style.color = "red";
            month.style.border = "1px solid red";
            yh.style.color = "red";
            year.style.border = "1px solid red";
            monthError.classList.remove("hidden");
            isValid = false;
        } else if (mv < 1 || mv > 12) {
            monthError.innerHTML = "Must be a valid month";
            monthError.style.color = "red";
            dh.style.color = "red";
            day.style.border = "1px solid red";
            mh.style.color = "red";
            month.style.border = "1px solid red";
            yh.style.color = "red";
            year.style.border = "1px solid red";
            monthError.classList.remove("hidden");
            isValid = false;
        }

        if (!yv) {
            yearError.innerHTML = "This field is required";
            yearError.style.color = "red";
            dh.style.color = "red";
            day.style.border = "1px solid red";
            mh.style.color = "red";
            month.style.border = "1px solid red";
            yh.style.color = "red";
            year.style.border = "1px solid red";
            yearError.classList.remove("hidden");
            isValid = false;
        }
        else if (yv > today.getFullYear()) {
            yearError.innerHTML = "Must be in the past";
            yearError.style.color = "red";
            dh.style.color = "red";
            day.style.border = "1px solid red";
            mh.style.color = "red";
            month.style.border = "1px solid red";
            yh.style.color = "red";
            year.style.border = "1px solid red";
            yearError.classList.remove("hidden");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Validate the day based on the month and year
        const daysInMonth = new Date(yv, mv, 0).getDate();
        if (dv > daysInMonth) {
            dayError.innerHTML = "Must be a valid day.";
            dayError.style.color = "red";
            dh.style.color = "red";
            day.style.border = "1px solid red";
            dayError.classList.remove("hidden");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        let presentDay = today.getDate();
        let presentMonth = today.getMonth() + 1;
        let presentYear = today.getFullYear();
        let age = presentYear - yv;
        let m = presentMonth - mv;

        if (m < 0 || (m === 0 && presentDay < dv)) {
            age--;
            m += 12;
        }

        let d = presentDay - dv;
        if (d < 0) {
            const daysInPreviousMonth = new Date(presentYear, presentMonth - 1, 0).getDate();
            m--;
            d += daysInPreviousMonth;
        }

        document.getElementById("y").innerHTML = age;
        document.getElementById("m").innerHTML = m;
        document.getElementById("d").innerHTML = d;
    });
});
