const startDateUnary = +new Date(data.startDate);	// insert start and end dates with string type
const endDateUnary = +new Date(data.endDate);

let diffMs = (endDateUnary - startDateUnary);
let diffDays = Math.floor(diffMs / 86400000);
let diffHrs = Math.floor((diffMs % 86400000) / 3600000);
let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

console.log(this.determineDuration(diffDays, diffHrs, diffMins) + " between " + data.startDate + " and " + data.endDate);

determineDuration(diffDays, diffHrs, diffMins) {
        /* 3!, or 27, possible strings */
        if (diffDays === 0 && diffHrs > 1 && diffMins === 0) {
            return diffHrs.toString() + " hours";
        }
        if (diffDays === 0 && diffHrs > 1 && diffMins === 1) {
            return diffHrs.toString() + " hours and " + diffMins.toString() + " minute";
        }
        if (diffDays === 0 && diffHrs > 1 && diffMins > 1) {
            return diffHrs.toString() + " hours and " + diffMins.toString() + " minutes";
        }
        if (diffDays === 0 && diffHrs === 0 && diffMins === 0) {
            return "No time in between";
        }
        if (diffDays === 0 && diffHrs === 0 && diffMins === 1) {
            return diffMins.toString() + " minute";
        }
        if (diffDays === 0 && diffHrs === 0 && diffMins > 1) {
            return diffMins.toString() + " minutes";
        }
        if (diffDays === 0 && diffHrs === 1 && diffMins === 0) {
            return diffHrs.toString() + " hour";
        }
        if (diffDays === 0 && diffHrs === 1 && diffMins === 1) {
            return diffHrs.toString() + " hour and " + diffMins.toString + " minute";
        }
        if (diffDays === 0 && diffHrs === 1 && diffMins > 1) {
            return diffHrs.toString() + " hour and " + diffMins.toString() + " minutes";
        }
        if (diffDays === 1 && diffHrs > 1 && diffMins === 0) {
            return diffDays.toString() + " day and " + diffHrs.toString() + " hours";
        }
        if (diffDays === 1 && diffHrs > 1 && diffMins === 1) {
            return diffDays.toString() + " day, " + diffHrs.toString() + " hours, and " + diffMins.toString() + " minute";
        }
        if (diffDays === 1 && diffHrs > 1 && diffMins > 1) {
            return diffDays.toString() + " day, " + diffHrs.toString() + " hours, and " + diffMins.toString() + " minutes";
        }
        if (diffDays === 1 && diffHrs === 0 && diffMins === 0) {
            return diffDays.toString() + " day";
        }
        if (diffDays === 1 && diffHrs === 0 && diffMins === 1) {
            return diffDays.toString() + " day and " + diffMins.toString() + " minute";
        }
        if (diffDays === 1 && diffHrs === 0 && diffMins > 1) {
            return diffDays.toString() + " day and " + diffMins.toString() + " minutes";
        }
        if (diffDays === 1 && diffHrs === 1 && diffMins === 0) {
            return diffDays.toString() + " day and " + diffHrs.toString() + " hour";
        }
        if (diffDays === 1 && diffHrs === 1 && diffMins === 1) {
            return diffDays.toString() + " day, " + diffHrs.toString() + " hour, and " + diffMins.toString() + " minute";
        }
        if (diffDays === 1 && diffHrs === 1 && diffMins > 1) {
            return diffDays.toString() + " day, " + diffHrs.toString() + " hour, and " + diffMins.toString() + " minutes";
        }
        if (diffDays > 1 && diffHrs > 1 && diffMins === 0) {
            return diffDays.toString() + " days and " + diffHrs.toString() + " hours";
        }
        if (diffDays > 1 && diffHrs > 1 && diffMins === 1) {
            return diffDays.toString() + " days, " + diffHrs.toString() + " hours, and " + diffMins.toString() + " minute";
        }
        if (diffDays > 1 && diffHrs > 1 && diffMins > 1) {
            return diffDays.toString() + " days, " + diffHrs.toString() + " hours, and " + diffMins.toString() + " minutes";
        }
        if (diffDays > 1 && diffHrs === 0 && diffMins === 0) {
            return diffDays.toString() + " days";
        }
        if (diffDays > 1 && diffHrs === 0 && diffMins === 1) {
            return diffDays.toString() + " days and " + diffMins.toString() + " minute";
        }
        if (diffDays > 1 && diffHrs === 0 && diffMins > 1) {
            return diffDays.toString() + " days and " + diffMins.toString() + " minutes";
        }
        if (diffDays > 1 && diffHrs === 1 && diffMins === 0) {
            return diffDays.toString() + " days and " + diffHrs.toString() + " hour";
        }
        if (diffDays > 1 && diffHrs === 1 && diffMins === 1) {
            return diffDays.toString() + " days, " + diffHrs.toString() + " hour, and " + diffMins.toString() + " minute";
        }
        if (diffDays > 1 && diffHrs === 1 && diffMins > 1) {
            return diffDays.toString() + " days, " + diffHrs.toString() + " hour, and " + diffMins.toString() + " minutes";
        }
}
