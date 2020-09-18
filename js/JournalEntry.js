export const JournalHTMLConverter = (journalObj) => {
    return `
        <div class="entry" id="entry--${journalObj.id}">
            <div class="entry--title"><h2>${journalObj.title}</h2></div>
            <div class="entry--date"><h3>${new Date(journalObj.date).toLocaleDateString('en-US')}</h3></div>
            <div class="entry--body">${journalObj.entry}</div>
            <div class="entry--bottom">
                <div class="entry--mood">Mood: ${journalObj.mood}</div>
                <button id="deleteNote--${journalObj.id}">Delete</button>
            </div>
        </div>
    `
}

export const JournalMood = (journalObj) => {
    if (journalObj.mood === "happy") {
        document.querySelector('.entry--mood').style.backgroundColor = "green"
    } else if (journalObj.mood === "fine") {
        document.querySelector('.entry--mood').style.backgroundColor = "yellow"
    } else if (journalObj.mood === "stressed") {
        document.querySelector('.entry--mood').style.backgroundColor = "red"
    }
}