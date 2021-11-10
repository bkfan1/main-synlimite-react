import React from 'react'
import {FullNavNotLogged} from "../../components/Common/FullNavNotLogged"
import { FilterResultForm } from '../../components/SearchResults/FilterResultForm'
import {Footer} from "../../components/Common/Footer"
import { ResultsContainer } from '../../components/SearchResults/ResultsContainer'
import {PagesList} from "../../components/Common/PagesList"


export function SearchResultsNotLoggedPreview(){
    return(
        <>
        <FullNavNotLogged />
        <main className="dp-flex flex-dir-row min-height-100vh bg-color-maingray">
            <FilterResultForm />
            <section className="dp-flex flex-dir-col align-items-fs width-100per height-100per pad-20px bg-color-maingray">
                <ResultsContainer />
                <PagesList />
            </section>
        </main>
        <Footer />
        </>
    )
}