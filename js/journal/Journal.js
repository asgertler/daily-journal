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
                <div id="entryMood--${journalObj.id}" class="entryMood">Mood: ${journalObj.mood}</div>
                <button id="editEntry--${journalObj.id}" class="btn btn-warning editBtn" data-toggle="modal" data-target="#modal">✏️</button>
                <button id="deleteEntry--${journalObj.id}" class="btn btn-danger deleteBtn">🗑️</button>
            </div>
        </section>
    `
}