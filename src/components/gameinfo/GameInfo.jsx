import styles from './GameInfo.module.css'

import Icon from '../Icon/Icon'
import Button from '../button/Button'

function GameInfo ({ currentPlayer, winner, onReset }) {

    const enableButton = () => {
        if(winner !== 0) return true
    }

    return (
        <div className={styles.proximoAjogar}>
            {
                winner === 0 &&
                  <>
                    <h4>Próximo a jogar:</h4>
                    {
                        currentPlayer === 1 && <Icon iconName="circle" />
                    }
                    {
                        currentPlayer === -1 && <Icon iconName="x" />
                    }
                  </>
            }
            {
                winner !== 0 &&
                  <>
                    <h4>Fim de jogo! Campeão:</h4>
                    {
                        winner === 1 && <Icon iconName="circle" />
                    }
                    {
                        winner === -1 && <Icon iconName="x" />
                    }
                  </>
            }
            <Button
               onClick={onReset}
               disabled={!enableButton()}
            >
                Reniciar
            </Button>
        </div>
    )
}

export default GameInfo