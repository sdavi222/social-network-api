// formats date to MM/DD/YYYY and time to h:mm AM/PM

const dayjs = require('dayjs');

module.exports = {
    format_date: (date) => {
        const formatDate = dayjs(date);
        const formatDateTime = formatDate.format('MM/DD/YYYY h:mm A')

        return formatDateTime;
    }
}