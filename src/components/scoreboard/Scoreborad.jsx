import styles from './scoreboard.module.css'

import Icon from '../Icon/Icon'

function Scoreboard ({ scoreCircle, scoreX }) {
    return (
        <>
         <h4>Placar</h4>
         <div className={styles.score}>
            <div className={styles.scoreContent}>
                <Icon iconName="circle" />
                <h4>{scoreCircle}</h4>
            </div>
            <div className={styles.scoreContent}>
                <Icon iconName="x" />
                <h4>{scoreX}</h4>
            </div>
         </div>
        </>
    )
}

export default Scoreboard