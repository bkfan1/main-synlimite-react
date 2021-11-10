import React from 'react'
import { MainNavNotLogged } from '../../components/Common/MainNavNotLogged'
import { Slider } from '../../components/Common/Slider'
import { CategoriesSection } from '../../components/Common/CategoriesSection'
import { CoinsImagesSection } from '../../components/Common/CoinImagesSection'
import { ReasonsSection } from '../../components/Common/ReasonsSection'
import { Footer } from '../../components/Common/Footer'

export function HomeNotLogged(){
    return(
        <>
        <MainNavNotLogged />
        <Slider/>
        <CategoriesSection />
        <ReasonsSection />
        <CoinsImagesSection />
        <Footer />
        </>
    )
}