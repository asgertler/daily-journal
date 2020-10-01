// converts journal objects from database into html

const eventHub = document.querySelector('body')

export const JournalHTMLConverter = (journalObj) => {
    return `
        <section class="entry" id="entry--${journalObj.id}">
            <div class="entryH">
                <div class="entryTitle"><h2>${journalObj.title}</h2></div>
                <div class="entryDate"><h3>${new Date(journalObj.date).toLocaleDateString('en-US')}</h3></div>
            </div>
            <div class="entryBody">${journalObj.entry}</div>
            <div class="entryBottom">
                <div class="entryMood">Mood: ${journalObj.mood}</div>
                <button id="deleteEntry--${journalObj.id}" class="deleteBtn">Delete</button>
            </div>
        </section>
    `
}

/*
eventHub.addEventListener("customEvent", articleStateChanged => {
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
*/