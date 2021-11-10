import React from 'react'
import { FilterResultCategoryForm } from '../SearchResults/FilterResultCategoryForm'
import { FilterPriceForm } from '../SearchResults/FilterPriceForm'
import { FilterResultUbicationForm } from '../SearchResults/FilterResultUbicationForm'

export function FilterResultForm(){
    return(
        <form className="pad-10px">
            <h1 className="font-size-20px pad-top-10px pad-left-10px">Filtrar resultados por:</h1>
            <FilterResultCategoryForm />
            <FilterResultUbicationForm />
            <FilterPriceForm />
        </form>
    )
}