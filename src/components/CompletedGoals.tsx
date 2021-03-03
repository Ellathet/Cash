import styles from '../styles/components/CompletedGoals.module.css';

export function CompletedGoals(){

    return (
        <div className={styles.completedGoalsContainer}>
            <span>
                <img src="/icons/star.svg" alt="Metas Completas"/>
                <span>Metas Completas</span>
            </span>
            <span>2</span>
        </div>
    )
}