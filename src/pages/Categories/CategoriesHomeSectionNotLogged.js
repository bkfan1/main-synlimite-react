import React from 'react'
import { FullNavNotLogged } from '../../components/Common/FullNavNotLogged'
import { CategoriesSection } from '../../components/Common/CategoriesSection'
import { Footer } from '../../components/Common/Footer'

export function CategoriesHomeSectionNotLogged(){
    return(
        <>
        <FullNavNotLogged />
        <CategoriesSection/>
        <Footer />
        </>
    )
}