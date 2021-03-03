import styles from '../styles/components/HistoryTable.module.css'

export function HistoryTable(props) {
    return (
        <div>
            <header>
                <span>NOME</span>
                <span>VALOR</span>
                <span>DATA</span>
            </header>
                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16.546 36.649">
                            <path id="Icon_weather-lightning" data-name="Icon weather-lightning" d="M57.381,43.741h.806L73.779,20.832a.68.68,0,0,0,.119-.6c-.06-.149-.239-.209-.508-.209H67.118L73.629,7.988q.538-.9-.538-.9H64.908a.963.963,0,0,0-.9.568L57.8,24.028a.644.644,0,0,0,.03.627.665.665,0,0,0,.568.209H64.49Z" transform="translate(-57.381 -7.092)" fill="#4b4e5c"/>
                        </svg>
                    </div>
                    <span>Luz</span>
                    <span>R$ 1500,00</span>
                    <span>12/02/2021</span>
                    <div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="25.688" height="25.688" viewBox="0 0 25.688 25.688">
                            <g id="Icon_ionic-ios-close-circle-outline" data-name="Icon ionic-ios-close-circle-outline" transform="translate(-3.375 -3.375)">
                            <path id="Caminho_15" data-name="Caminho 15" d="M21.963,20.567l-3.254-3.254,3.254-3.254a.987.987,0,0,0-1.4-1.4l-3.254,3.254-3.254-3.254a.987.987,0,0,0-1.4,1.4l3.254,3.254-3.254,3.254a.954.954,0,0,0,0,1.4.98.98,0,0,0,1.4,0l3.254-3.254,3.254,3.254a.991.991,0,0,0,1.4,0A.98.98,0,0,0,21.963,20.567Z" transform="translate(-1.094 -1.093)" fill="#fff"/>
                            <path id="Caminho_16" data-name="Caminho 16" d="M16.219,5.1A11.111,11.111,0,1,1,8.358,8.358,11.042,11.042,0,0,1,16.219,5.1m0-1.729A12.844,12.844,0,1,0,29.063,16.219,12.842,12.842,0,0,0,16.219,3.375Z" transform="translate(0 0)" fill="#fff"/>
                            </g>
                        </svg>
                    </div>
                </div>               
            </div>
    )
}