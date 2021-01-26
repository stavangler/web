import moment from 'moment'
import { useMediaQuery } from 'react-responsive'

const utils = {
    shortDate: (dateStr: string) => {
        return moment.utc(dateStr).format('YYYY-MM-DD')
    },
    isDevice: () => {
        return useMediaQuery({ query: '(max-width: 1024px)' })
    }
}
export default utils