import React from 'react'
import { FullNavNotLogged } from '../../FullNavNotLogged'
import { CategoriesSection } from './CategoriesSection'
import { Footer } from '../../Footer'

export function CategoriesHomeSectionNotLogged(){
    return(
        <>
        <FullNavNotLogged />
        <CategoriesSection/>
        <Footer />
        </>
    )
}