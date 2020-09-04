const journal = []

export const getEntries = () => {
    return fetch('http://localhost:8088/entries') // Fetch from the API
        .then(response => response.json())
        .then(parsedEntries => {
            journal = parsedEntries
        })
}

export const useEntries = () => {
    return journal.slice()
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}