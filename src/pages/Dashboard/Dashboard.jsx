import Stats from '../../components/Stats/Stats';
import Orders from '../../components/Orders/Orders';
import { cardsData, groupNumber } from '../../data';
import css from './Dashboard.module.css';
import {HiCalculator} from 'react-icons/hi';
import IconText from '../../components/IconText';

const Dashboard = () => {
  return <div className={css.container}>

    {/* left side */}
    <div className={css.dashboard}>
      
      <div className={`${css.dashboardHead}`}>
        <div className={css.head}>
          <IconText text="Result"/>
        </div>
          <div className={css.cards}>
            {
              cardsData.map((card)=> (
                <div className={css.card} style={{backgroundColor: card.color}}>
                    <div className={css.cardLeft}>
                        <img src={card.image} alt="" />
                    </div>
                    <div className={css.cardRight}>
                        <div className={css.cardHead}>
                            <span>{card.title}</span>
                        </div>

                        <div className={css.cardAmount}>
                            <span>$</span>
                            <span>{groupNumber(card.amount)}</span>
                            <span>{card.change < 0 ? "↓" : "↑"} {card.change}%</span>
                        </div>
                    </div>
                </div>
              ))
            }
          </div>
      </div>
      <Stats />
    </div>
     <Orders/> 
  </div>
}

export default Dashboard