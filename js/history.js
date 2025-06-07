const historySection = document.querySelector("#history");

const config = {
    "1": [
        {
            tag: "canada",
            date: "4 February 2024",
            title: "Founding of the Canadian Dominion",
            description: "In mid-January 2024, greymesa, a longtime member of Imperial Japan and a real-life Canadian, set out to " +
                "recreate a Canadian nation on CCNet.After claiming the fallen town of St_Lawrence in Quebec, he was " +
                "preemptively sieged by LeDuxBerrie of Columbia, who suspected it was a Japanese outpost.After losing the " +
                "town, greymesa relocated to the current site of Nova Prospekt, near allied fort Ravenrock.\n\n" +
                "He teamed up with OGHunt4Life(mayor of Grand Torontonia) and TerryTheThird(mayor of Halifax) to form the " +
                "Canadian Dominion.Despite early harassment from enemies like TheRiseOfKiller and DanBaoRen, greymesa " +
                "persisted—laying the foundation for Nova Prospekt, which would become the primary fort of the new Canadian " +
                "nation."
        }
    ],
    "2": [
        {
            tag: "canada",
            date: "22 Mar 2024",
            title: "The First Siege of Nova Prospekt",
            description: "Tensions escalated when Floritânia, led by Fake4, began consistently camping Canadian towns, targeting them " +
                "for their lack of PvPers. Claiming Canada’s Coalition alignment as justification, Floritânia launched a siege " +
                "on Nova Prospekt, which was still under construction and vulnerable. " +
                "Recognizing the situation, Canada strategically placed the white banner, avoiding further losses while " +
                "focusing on completing the fort. A revolt was planned for after its fortifications were ready. "
        },
        {
            tag: "greenland",
            date: "March 9th - March 29th 2024",
            title: "Founding of the Kingdom of Greenland",
            description: "On March 9th, OnlyIvanix and Kuzifix1210 joined CCNet and founded Lunegrad on Greenland’s western coast. " +
                "Starting as a small port-town, Lunegrad rapidly grew, attracting players like 3VSL and Criss_cloudy, and " +
                "reaching 20 residents in just a week. " +
                "Inspired to form a nation, Kuzifix founded Windguard at Greenland’s center, soon joined by Criss_cloudy, who " +
                "established Fort_Era, the main stronghold. With Ivan crowned king and the Kingdom of Greenland officially " +
                "formed, the capital Windguard quickly grew past 100 residents. The early Greenlandic towns—Betegard " +
                "(Bulbagrad), Old Town, Nordligmakt, and Inuit—laid the foundation for one of the north’s most resilient " +
                "empires."
        }
    ],
    "3": [
        {
            tag: "canada",
            date: "April 2024",
            title: "The Betrayal of the Coalition",
            description: "After weeks of occupation, news broke that Floritânia and ETM had switched allegiances—joining the Coalition from the Alliance. Canada, now technically aligned with its occupiers, assumed peace would follow. However, Fake4, leader of Floritânia, refused to release Canada, claiming the nation served him better financially as an occupied state. " +
                "Tensions rose as greymesa, a two- year Coalition veteran, clashed with Fake4, a recent defector.With mounting pressure from Canadian citizens and passive responses from Coalition leadership, greymesa issued an ultimatum: release Canada or face revolt.Fake4 ignored the warning. " +
                "One day later, Canada revolted—ending its occupation and setting the stage for renewed independence. " 
        }
    ],
    "4": [
        {
            tag: "canada",
            date: "May 2024",
            title: "The First Prospekt Revolt",
            description: "With their fort fully constructed and ready for battle, Canada issued a call for aid. Answering the call, both the Alliance and the Phoenix Federation rallied to their side. Their combined forces were so overwhelming that the Floritânians chose not to engage, and Canada regained its freedom without a fight."
        }
    ]
}

for (const key of Object.keys(config)) {
    const data = config[key];

    const div = document.createElement("div");
    div.classList.add("timeline");

    for (const e of data) {
        const item = document.createElement("div");
        item.classList.add("timeline-box", e.tag);

        const date = document.createElement('p');
        date.textContent = e.date;

        const title = document.createElement("h3");
        title.textContent = e.title;

        const description = document.createElement("p");
        description.textContent = e.description;

        item.appendChild(date);
        item.appendChild(title);
        item.appendChild(description);
        div.appendChild(item);
    }

    historySection.appendChild(div);
}