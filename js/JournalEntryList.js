import { getEntries, useEntries } from './JournalDataProvider.js'
import { JournalHTMLConverter } from './JournalEntry.js'

const eventHub = document.querySelector("#eventHub")
const contentTarget = document.querySelector("#entryLog")

const render = (entryArr) => {
    contentTarget.innerHTML = entryArr.map((entryObj) => {
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