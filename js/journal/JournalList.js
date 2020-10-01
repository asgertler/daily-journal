// renders journal entries to DOM and allows edit and delete

import { getEntries, useEntries, deleteEntry } from './JournalDataProvider.js'
import { JournalHTMLConverter } from './Journal.js'

const eventHub = document.querySelector("body")

const render = (entryArr) => {
    const contentTarget = document.querySelector("#entryLog")

    const revEntryArr = entryArr.reverse()

    contentTarget.innerHTML = revEntryArr.map((entryObj) => {
        return JournalHTMLConverter(entryObj)
    }).join("")
}

export const JournaList = () => {
    getEntries()
        .then(useEntries)
        .then(render)
}

eventHub.addEventListener("journalStateChanged", () => {
    const newEntries = useEntries()
    render(newEntries)
})

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = event.target.id.split("--")

        deleteEntry(id).then(
            () => {
                const updatedEntries = useEntries()
                render(updatedEntries)
            }
        )
    }
})