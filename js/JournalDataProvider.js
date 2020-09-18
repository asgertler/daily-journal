let journal = []

const eventHub = document.querySelector("#eventHub")

const dispatchStateChangeEvent = () => {
    const journalStateChangedEvent = new CustomEvent("journalStateChanged")

    eventHub.dispatchEvent(journalStateChangedEvent)
}

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

export const saveEntry = entryObj => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
        .then(() => {
            return getEntries()
        })
        .then(dispatchStateChangeEvent)
}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}