export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h2>${entry.concept}</h2>
            <p>${entry.entry}</p>
            <h3>${entry.date} | ${entry.mood}</h3>
        </section>
    `
};