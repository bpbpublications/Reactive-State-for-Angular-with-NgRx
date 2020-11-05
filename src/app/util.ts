import * as moment from 'moment';

export function isToday(created) {
    return moment(created).isSame(moment().startOf('day'), 'd');
}

export function isYesterday(created) {
    return moment(created).isSame(moment().subtract(1, 'days').startOf('day'), 'd');
}
