import moment from 'moment'
import { useMediaQuery } from 'react-responsive'
import { knowitColors } from './theme'

const utils = {
    shortDate: (dateStr: string) => {
        return moment.utc(dateStr).format('YYYY-MM-DD')
    },
    isDevice: () => {
        return useMediaQuery({ query: '(max-width: 1024px)' })
    },
    filterColors: (): string[] => {
        return [
            knowitColors.clay,
            knowitColors.flamingo,
            knowitColors.pear,
            knowitColors.mint
        ]
    }
}
export default utils