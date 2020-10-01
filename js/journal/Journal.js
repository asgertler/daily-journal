// converts journal objects from database into html

export const JournalHTMLConverter = (journalObj) => {
    return `
        <section class="entry" id="entry--${journalObj.id}">
            <div class="entry--title"><h2>${journalObj.title}</h2></div>
            <div class="entry--date"><h3>${new Date(journalObj.date).toLocaleDateString('en-US')}</h3></div>
            <div class="entry--body">${journalObj.entry}</div>
            <div class="entry--bottom">
                <div class="entry--mood">Mood: ${journalObj.mood}</div>
                <button id="deleteEntry--${journalObj.id}">Delete</button>
            </div>
        </section>
    `
}

/*
export const JournalMood = (journalObj) => {
    if (journalObj.mood === "happy") {
        document.querySelector('.entry--mood').style.backgroundColor = "green"
    } else if (journalObj.mood === "fine") {
        document.querySelector('.entry--mood').style.backgroundColor = "yellow"
    } else if (journalObj.mood === "stressed") {
        document.querySelector('.entry--mood').style.backgroundColor = "red"
    }
}
*/