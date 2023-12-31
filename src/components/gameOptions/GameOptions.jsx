import classNames from 'classnames';

import styles from "./GameOptions.module.css"
import Icon from "../Icon/Icon"

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px" />

function GameOption({ status, onClick, isWinner, isDraw }) {
    return(
        <div className={
            classNames(styles.option, {
                [styles.winner]: isWinner,
                [styles.draw]: isDraw
            })
            }
             onClick={onClick}
             >
            {
                status === 1 && <GameIcon iconName="circle" />
            }
            {
                status === -1 && <GameIcon iconName="x" />
            }
        </div>
    )
}

export default GameOption