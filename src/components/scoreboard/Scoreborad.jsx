import styles from './scoreboard.module.css'

import Icon from '../Icon/Icon'

function Scoreboard () {
    return (
        <>
         <h4>Placar</h4>
         <div className={styles.score}>
            <div className={styles.scoreContent}>
                <Icon iconName="circle" />
                <h4>0</h4>
            </div>
            <div className={styles.scoreContent}>
                <Icon iconName="x" /><h4>0</h4>
            </div>
         </div>
        </>
    )
}

export default Scoreboard