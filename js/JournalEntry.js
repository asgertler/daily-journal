const eventHub = document.querySelector("#eventHub")

export const JournalHTMLConverter = (journalObj) => {
    return `
        <div class="entry">
            <div class="entry--title"><h2>${journalObj.title}</h2></div>
            <div class="entry--date"><h3>${new Date(journalObj.date).toLocaleDateString('en-US')}</h3></div>
            <div class="entry--body">${journalObj.entry}</div>
            <div class="entry--mood">Mood: ${journalObj.mood}</div>
        </div>
    `
}