import { getEntries, saveEntry } from './JournalDataProvider.js'

const eventHub = document.querySelector("body")

const dispatchStateChangeEvent = () => {
    const journalStateChangedEvent = new CustomEvent('articleStateChanged')

    eventHub.dispatchEvent(journalStateChangedEvent)
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {

        const entryTitle = document.getElementById("entryTitle")
        const entryBody = document.getElementById("entryBody")
        const entryMood = document.getElementById("entryMood")

        if (entryMood.value !== "0") {
            const newEntry = {
                title: entryTitle.value,
                date: Date.now(),
                entry: entryBody.value,
                mood: entryMood.value
            }

            saveEntry(newEntry)
                .then(dispatchStateChangeEvent())

        } else {
            window.alert("Choose a mood!")
        }

    }
})

const render = () => {
    const contentTarget = document.querySelector("#entryForm")

    contentTarget.innerHTML = `
    <button type="button" id="formBtn" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Post a New Entry</button><div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    
    <section class="modal-dialog" role="document">
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
                        <input type="text" class="form-control" id="entryTitle" placeholder="Title" required>
                    </div>

                    <div class="form-group">
                        <textarea class="form-control" id="entryBody" rows="3" placeholder="Talk about what you learned..." required></textarea>
                    </div>

                    <div class="form-group">
                        <select class="form-control" id="entryMood">
                            <option value="0">Please choose a mood...</option>
                            <option value="happy">Happy</option>
                            <option value="fine">Fine</option>
                            <option value="stressed">Stressed</option>
                        </select>
                    </div>

                    <button type="reset" id="saveEntry" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
    `
}

export const JournalForm = () => {
    getEntries()
        .then(render)
}