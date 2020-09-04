import { useJournalEntries, getEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

const entryLog = document.querySelector("#entryLog");

export const EntryListComponent = () => {
    const entries = useJournalEntries()

    for (const entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry)
    }
};