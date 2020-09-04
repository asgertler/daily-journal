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

/*
import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

const entryLog = document.querySelector("#entryLog");

export const EntryListComponent = () => {
    const entries = useJournalEntries()

    for (const entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry)
    }
};
*/