import { getEntries, useEntries, saveEntry } from './JournalDataProvider.js'

const eventHub = document.querySelector("body")
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
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Post a New Entry</button><div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">So what's shakin'?</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="entryTitle" placeholder="Title">
                    </div>

                    

                    <input type="text" id="entry--title" placeholder="What concepts did you work on?"></input>

                    <textarea id="entry--body" placeholder="Talk about what you learned..." rows="5" cols="50"></textarea>
                    
                    <select class="dropdown" id="entry--mood">
                        <option value="0">Please choose a mood...</option>
                        <option value="happy">Happy</option>
                        <option value="fine">Fine</option>
                        <option value="stressed">Stressed</option>
                    </select>
                </form>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="saveEntry" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
    `
}

export const JournalForm = () => {
    getEntries()
        .then(render)
}