function getDayName(dateString) {
    return [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ][(new Date(dateString)).getDay()];
}
