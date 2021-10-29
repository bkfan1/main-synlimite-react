import React from 'react'

import BTCLogo from "../../../static/img/btc-logo.png"
import ETHLogo from "../../../static/img/eth-logo.png"
import USDTLogo from "../../../static/img/usdt-logo.png"
import BNBLogo from "../../../static/img/bnb.png"
import DOGELogo from "../../../static/img/doge-logo.png"
import CARDLogo from "../../../static/img/cardano-logo.png"
import XPRLogo from "../../../static/img/xpr-logo.png"
import AXSLogo from "../../../static/img/axs.png"



export function CoinsImagesSection(){
    return(
        <>
        <section className="coin-section dp-flex flex-dir-col width-100per pad-50px bg-color-white">    
            <h1 className="reasons-home-title mar-bottom-20px align-self-center text-align-center">Aceptamos criptoactivos</h1>
            <ul className="home-coin-list dp-flex justify-cnt-se mar-top-20px">
                <li><img src={BTCLogo} className="coin-home-img" alt="Bitcoin Logo" /></li>
                <li><img src={ETHLogo} className="coin-home-img" alt="Ethereum Logo" /></li>
                <li><img src={USDTLogo} className="coin-home-img" alt="USDT Logo" /></li>
                <li><img src={BNBLogo} className="coin-home-img" alt="BNB Logo" /></li>
            </ul>

            <ul className="home-coin-list dp-flex justify-cnt-se mar-top-20px">
                <li><img src={DOGELogo} className="coin-home-img" alt="Dogecoin Logo" /></li>
                <li><img src={CARDLogo} className="coin-home-img" alt="Cardano Logo" /></li>
                <li><img src={XPRLogo} className="coin-home-img" alt="XPR logo" /></li>
                <li><img src={AXSLogo} className="coin-home-img" alt="AXS logo" /></li>
            </ul>

        </section>
        
        </>
    )
}