const journal = [
    {
        id: 1,
        date: "07.24.2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07.25.2025",
        concept: "Github",
        entry: "Started backing our projects up to Github to prepare for a group project.",
        mood: "Ok"
    },
    {
        id: 3,
        date: "07.26.2025",
        concept: "JavaScript",
        entry: "Started digging into JS and importing content into HTML files.",
        mood: "Ok"
    }
];

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
};