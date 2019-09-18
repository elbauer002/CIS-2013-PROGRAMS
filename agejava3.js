    var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
        floatAge = parseFloat(prompt("Enter your age"));
        floatDays = parseFloat(floatAge*365.25);
        floatMonths = parseFloat(floatAge/12);
        intWeeks = parseInt(floatDays/7);
        intFortnights = parseInt(floatDays/14);
        alert("Current Age"+ floatAge);
        alert("Current Age in Months"+ floatMonths);
        alert("Current Age in Days"+ floatDays);
        alert("Current Age in Weeks"+ intWeeks);
        alert("Current Age in Fortnights"+ intFortnights);
        