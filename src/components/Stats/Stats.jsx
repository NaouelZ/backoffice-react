import css from './Stats.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatsChart from '../StatsChart/StatsChart'
import {HiClipboardList} from 'react-icons/hi';
import IconText from '../IconText';


const Stats = () => {
    return (
        <div className={`${css.container}`}>
            <div className={css.chartContainer}>
                <IconText text="Overview" order/>
                <StatsChart />
            </div>
        </div>
    )
}

export default Stats