import moment from 'moment'

const utils = {
    shortDate: (dateStr: string) => {
        return moment.utc(dateStr).format('YYYY-MM-DD')
    }
}
export default utils