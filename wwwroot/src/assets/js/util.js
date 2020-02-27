export function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function isOneDay(a,b) {
    if (a.getDate() != b.getDate()) return false;
    if (a.getMonth() != b.getMonth()) return false;
    if (a.getFullYear() != b.getFullYear()) return false;
    return true;
}

export function getWeek(d) {
    
        // Copy date so don't modify original
        let tmp = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        tmp.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((tmp - yearStart) / 86400000) + 1) / 7);
        // Return array of year and week number
        return [d.getUTCFullYear(), weekNo];


}

export function getVietnameseDateForm(d) {
    let tmp = new Date(d);
    let a = tmp.getDate();
    a = a < 10 ? '0' + a : a;
    let b = tmp.getMonth();
    b = b < 10 ? '0' + b : b; 
    return a + '/' + b + '/' + tmp.getFullYear();
}