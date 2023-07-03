import styles from "./GameOptions.module.css"
import Icon from "../Icon/Icon"

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px" />

function GameOption({ status }) {
    return(
        <div className={styles.option}>
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