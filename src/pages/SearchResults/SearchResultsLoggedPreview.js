import React from 'react'
import {FullNavLogged} from "../../components/Common/FullNavLogged"
import { FilterResultForm } from '../../components/SearchResults/FilterResultForm'
import {Footer} from "../../components/Common/Footer"
import { ResultsContainer } from '../../components/SearchResults/ResultsContainer'
import {PagesList} from "../../components/Common/PagesList"


export function SearchResultsLoggedPreview(){
    return(
        <>
        <FullNavLogged />
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