import { getEntries, useEntries, saveEntry } from './JournalDataProvider.js'

const eventHub = document.querySelector("#eventHub")
const contentTarget = document.querySelector("#entryForm")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {

        const entryTitle = document.querySelector("#entry--title")
        const entryBody = document.querySelector("#entry--body")
        const entryMood = document.querySelector("#entry--mood")

        if (entryMood.value !== "0") {
            const newEntry = {
                title: entryTitle.value,
                date: Date.now(),
                entry: entryBody.value,
                mood: entryMood.value
            }

            saveEntry(newEntry)

        } else {
            window.alert("Choose a mood!")
        }

    }
})

const render = () => {
    contentTarget.innerHTML = `
            <input type="text" id="entry--title" placeholder="What concepts did you work on?"></input>

            <textarea id="entry--body" placeholder="Talk about what you learned..." rows="5" cols="50"></textarea>
            
            <select class="dropdown" id="entry--mood">
                <option value="0">Please choose a mood...</option>
                <option value="happy">Happy</option>
                <option value="fine">Fine</option>
                <option value="stressed">Stressed</option>
            </select>

            <button id="saveEntry">Save Entry</button>
    `
}

export const JournalForm = () => {
    getEntries()
        .then(render)
}