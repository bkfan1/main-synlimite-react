import React from 'react'
import { MainNavNotLogged } from '../../MainNavNotLogged'
import { Slider } from '../../Slider'
import { CategoriesSection } from '../Sections/CategoriesSection'
import { CoinsImagesSection } from '../Sections/CoinImagesSection'
import { ReasonsSection } from '../Sections/ReasonsSection'
import { Footer } from '../../Footer'

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