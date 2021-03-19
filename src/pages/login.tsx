import styles from "../styles/pages/login.module.scss"
import { signIn, signOut, useSession } from "next-auth/client"


export default function Auto() {

    const [ session, loading ] = useSession()

    return (
        <>
        <div className={styles.main}>
            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1800" viewBox="0 0 1122 2156.5" className={styles.backgroundText}>
                <g id="Componente_10_1" data-name="Componente 10 – 1" transform="translate(2 2)">
                <text id="Cash_Logo" data-name="Cash Logo" transform="translate(222 1901.5)" fill="none" stroke="#fff" strokeWidth="2" fontSize="1000" fontFamily="SegoeUI-BoldItalic, Segoe UI" fontWeight="700" fontStyle="italic" letterSpacing="-0.228em"><tspan x="0" y="0">$</tspan></text>
                <text id="Cash_Logo-2" data-name="Cash Logo" transform="translate(541 1079)" fill="none" stroke="#fff" strokeWidth="2" fontSize="1000" fontFamily="SegoeUI-BoldItalic, Segoe UI" fontWeight="700" fontStyle="italic" letterSpacing="-0.228em"><tspan x="0" y="0">$</tspan></text>
                <text id="Cash_Logo-3" data-name="Cash Logo" transform="translate(0 1185)" fill="none" stroke="#fff" strokeWidth="2" fontSize="1000" fontFamily="SegoeUI-BoldItalic, Segoe UI" fontWeight="700" fontStyle="italic" letterSpacing="-0.228em"><tspan x="0" y="0">$</tspan></text>
                </g>
            </svg>
        </div>
        <div className={styles.loginSection}>
        <svg xmlns="http://www.w3.org/2000/svg" width="388.5" height="217" viewBox="0 0 388.5 217" className={styles.logo}>
            <g id="Logo_Write" data-name="Logo Write" transform="translate(17 730.81)">
            <text id="cash" transform="translate(-17 -554.81)" fill="#fff" fontSize="163" fontFamily="SegoeUI-BoldItalic, Segoe UI" fontWeight="700" fontStyle="italic"><tspan x="0" y="0">cash</tspan></text>
            <text id="Cash_Logo" data-name="Cash Logo" transform="translate(326 -632.81)" fill="none" stroke="#fff" strokeWidth="0.5" fontSize="77" fontFamily="SegoeUI-BoldItalic, Segoe UI" fontWeight="700" fontStyle="italic" letterSpacing="-0.228em"><tspan x="0" y="0">$</tspan></text>
            </g>
        </svg>
        <span>
            <h2>Bem Vindo!</h2>
            <p>Entre com algum dos serviços abaixo 
            <br/>para começar.</p>
        </span>

        {!session &&
        <div className={styles.buttons}>
        <div className={styles.button} onClick={() => signIn()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 46.789 47.556">
                <path id="Icon_awesome-google" data-name="Icon awesome-google" d="M46.789,24.9c0,13.567-9.291,23.222-23.011,23.222a23.778,23.778,0,0,1,0-47.556A22.867,22.867,0,0,1,39.723,6.785l-6.472,6.223c-8.466-8.169-24.21-2.033-24.21,11.333A14.9,14.9,0,0,0,23.778,39.355c9.415,0,12.944-6.75,13.5-10.25h-13.5V20.927H46.415A20.845,20.845,0,0,1,46.789,24.9Z" transform="translate(0 -0.563)" fill="#ffffff"/>
            </svg>
        </div>
        <div className={styles.button}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 46.789 47.556">
                <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M45.422,13.628c.032.45.032.9.032,1.349,0,13.716-10.44,29.521-29.521,29.521A29.321,29.321,0,0,1,0,39.841a21.464,21.464,0,0,0,2.506.128,20.78,20.78,0,0,0,12.881-4.433,10.394,10.394,0,0,1-9.7-7.2,13.085,13.085,0,0,0,1.96.161,10.974,10.974,0,0,0,2.73-.353,10.377,10.377,0,0,1-8.32-10.183v-.128a10.449,10.449,0,0,0,4.69,1.317A10.391,10.391,0,0,1,3.533,5.276,29.493,29.493,0,0,0,24.927,16.134a11.713,11.713,0,0,1-.257-2.377,10.386,10.386,0,0,1,17.957-7.1,20.428,20.428,0,0,0,6.585-2.506A10.348,10.348,0,0,1,44.651,9.87a20.8,20.8,0,0,0,5.975-1.606,22.3,22.3,0,0,1-5.2,5.364Z" transform="translate(0 -3.381)" fill="#fff"/>
            </svg>
        </div>
        <div className={styles.button}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 46.789 47.556">
                <path id="Icon_awesome-discord" data-name="Icon awesome-discord" d="M29.339,24.007A2.587,2.587,0,1,1,26.761,21.2,2.692,2.692,0,0,1,29.339,24.007ZM17.538,21.2a2.815,2.815,0,0,0,0,5.61,2.692,2.692,0,0,0,2.578-2.805A2.676,2.676,0,0,0,17.538,21.2Zm26.685-16V50.541C37.857,44.915,39.893,46.777,32.5,39.9l1.339,4.675H5.18A5.193,5.193,0,0,1,0,39.371V5.206A5.193,5.193,0,0,1,5.18,0H39.043A5.193,5.193,0,0,1,44.223,5.206Zm-7.2,23.956a33.841,33.841,0,0,0-3.639-14.733,12.5,12.5,0,0,0-7.1-2.653l-.354.4A16.818,16.818,0,0,1,32.22,15.39a21.472,21.472,0,0,0-18.877-.733c-.935.43-1.491.733-1.491.733a17.048,17.048,0,0,1,6.646-3.31l-.253-.3a12.5,12.5,0,0,0-7.1,2.653A33.841,33.841,0,0,0,7.505,29.162S9.628,32.826,15.213,33c0,0,.935-1.137,1.693-2.1a7.859,7.859,0,0,1-4.422-2.982c.372.26.985.6,1.036.632a18.421,18.421,0,0,0,15.769.884,14.461,14.461,0,0,0,2.906-1.491,7.974,7.974,0,0,1-4.574,3.007c.758.96,1.668,2.047,1.668,2.047C34.873,32.826,37.021,29.162,37.021,29.162Z" fill="#fff"/>
            </svg>
        </div>
        <div className={styles.button}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 46.789 47.556">
                <path id="Icon_awesome-github" data-name="Icon awesome-github" d="M15.21,36.263c0,.183-.211.33-.477.33-.3.028-.513-.119-.513-.33,0-.183.211-.33.477-.33C14.971,35.905,15.21,36.052,15.21,36.263Zm-2.851-.413c-.064.183.119.394.394.449a.43.43,0,0,0,.568-.183c.055-.183-.119-.394-.394-.477A.471.471,0,0,0,12.358,35.85Zm4.052-.156c-.266.064-.449.238-.422.449.028.183.266.3.541.238s.449-.238.422-.422S16.677,35.667,16.411,35.694ZM22.443.563A21.984,21.984,0,0,0,0,22.932a22.985,22.985,0,0,0,15.54,21.93c1.173.211,1.586-.513,1.586-1.109,0-.568-.028-3.7-.028-5.629,0,0-6.418,1.375-7.765-2.732,0,0-1.045-2.668-2.549-3.355,0,0-2.1-1.439.147-1.412A4.839,4.839,0,0,1,10.47,32.99c2.008,3.539,5.372,2.521,6.683,1.916a5.1,5.1,0,0,1,1.467-3.09c-5.125-.568-10.3-1.311-10.3-10.131a6.948,6.948,0,0,1,2.164-5.4,8.662,8.662,0,0,1,.238-6.225c1.916-.6,6.326,2.475,6.326,2.475a21.658,21.658,0,0,1,11.515,0s4.41-3.08,6.326-2.475a8.658,8.658,0,0,1,.238,6.225c1.467,1.623,2.365,2.888,2.365,5.4,0,8.847-5.4,9.553-10.525,10.131a5.422,5.422,0,0,1,1.559,4.254c0,3.09-.028,6.913-.028,7.664,0,.6.422,1.32,1.586,1.109A22.773,22.773,0,0,0,45.473,22.932C45.473,10.216,35.159.563,22.443.563ZM8.911,32.183c-.119.092-.092.3.064.477.147.147.358.211.477.092.119-.092.092-.3-.064-.477C9.241,32.128,9.03,32.064,8.911,32.183Zm-.99-.743c-.064.119.028.266.211.358a.273.273,0,0,0,.394-.064c.064-.119-.028-.266-.211-.358C8.132,31.321,7.985,31.349,7.921,31.44Zm2.97,3.264c-.147.119-.092.394.119.568.211.211.477.238.6.092.119-.119.064-.394-.119-.568C11.286,34.585,11.011,34.557,10.892,34.7ZM9.846,33.356c-.147.092-.147.33,0,.541s.394.3.513.211a.418.418,0,0,0,0-.568C10.231,33.329,9.993,33.237,9.846,33.356Z" transform="translate(0 -0.563)" fill="#fff"/>
            </svg>
        </div>
        </div>
        }
        {session && 
            <div className={styles.buttons}>
                <h2>
                    Você já está registrado! 
                </h2>
            </div>
        }
        
    </div>
    </>
    )
  }
  