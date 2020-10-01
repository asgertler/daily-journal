import { editEntry, getEntries, saveEntry } from './JournalDataProvider.js'

const eventHub = document.querySelector("body")

const dispatchStateChangeEvent = () => {
    const journalStateChangedEvent = new CustomEvent('articleStateChanged')

    eventHub.dispatchEvent(journalStateChangedEvent)
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        const title = document.getElementById("entryTitle")
        const body = document.getElementById("entryBody")
        const mood = document.getElementById("entryMood")
        const id = document.getElementById('entryId')

        if (id.value) {
            const editedEntry = {
                title: title.value,
                entry: body.value,
                mood: mood.value,
                id: parseInt(id.value)
            }

            editEntry(editedEntry)
                .then(dispatchStateChangeEvent)

        } else if (entryTitle.value !== '' && entryBody !== '' && entryMood.value !== '') {
            const newEntry = {
                title: entryTitle.value,
                date: Date.now(),
                entry: entryBody.value,
                mood: entryMood.value
            }

            saveEntry(newEntry)
                .then(dispatchStateChangeEvent())
        }
    }
})

/*
eventHub.addEventListener("customEvent", articleStateChanged => {
    const entryMood = document.getElementById("entryMood")
    contentTarget = document.querySelector('.entryMood')
})
*/

const render = () => {
    const contentTarget = document.querySelector("#entryForm")

    contentTarget.innerHTML = `
    <button type="button" id="formBtn" class="btn btn-info" data-toggle="modal" data-target="#modal">Post</button>
    
    <section class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div id="formHeader" class="modal-header">
                    <h5 class="modal-title" id="modalLabel">So what's shakin'?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div id="formBody" class="modal-body">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="entryTitle" placeholder="Title" required>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" id="entryBody" rows="3" placeholder="Talk about what you learned..." required></textarea>
                        </div>

                        <div class="form-group">
                            <select class="form-control" id="entryMood" required>
                                <option value="">Choose a mood...</option>
                                <option value="happy">Happy</option>
                                <option value="fine">Fine</option>
                                <option value="stressed">Stressed</option>
                            </select>
                        </div>

                        <button type="submit" id="saveEntry" class="btn btn-info">Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <input type="hidden" name="entryId" id="entryId">
    </section>
    `
}

export const JournalForm = () => {
    getEntries()
        .then(render)
}