import React from 'react'

import { MainNavNotLogged } from '../Common/MainNavNotLogged'
import { SecondNavNotLogged } from '../Common/SecondNavNotLogged'

export function FullNavNotLogged(){
    return(
        <>
        <MainNavNotLogged />
        <SecondNavNotLogged />
        </>
    )
}