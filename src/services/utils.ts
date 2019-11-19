import urlParse from 'url-parse';
/**
 * 将日期转成字符串
 * @param time
 * @param formart
 */
function DateFormart(time: Date, formart = 'yyyy-MM-dd hh:mm:ss') {
    formart = formart.replace('yyyy', time.getFullYear() + '');
    formart = formart.replace('MM', (time.getMonth() + 1 + '').padStart(2, '0'));
    formart = formart.replace('dd', (time.getDate() + '').padStart(2, '0'));
    formart = formart.replace('hh', (time.getHours() + '').padStart(2, '0'));
    formart = formart.replace('mm', (time.getMinutes() + '').padStart(2, '0'));
    formart = formart.replace('ss', (time.getSeconds() + '').padStart(2, '0'));
    return formart;
}

export default {
    DateFormart,
    DateFormartNumber: (ts: number, formart = 'yyyy-MM-dd hh:mm:ss') => {
        if (!ts || isNaN(ts)) return '';
        const time = new Date(ts);
        return DateFormart(time, formart);
    },
    DateFormartString: (ts: string, formart = 'yyyy-MM-dd hh:mm:ss') => {
        const time = new Date(ts);
        return DateFormart(time, formart);
    },
    parseParams(url: string) {
        return urlParse(url, true);
    }
};
