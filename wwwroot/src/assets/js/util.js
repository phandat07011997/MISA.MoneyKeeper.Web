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