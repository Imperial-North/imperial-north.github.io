const faq = [
    {
        header: "What towns or regions can I live in?",
        description: "We have multiple towns across Canada and Greenland. Depending on your playstyle and role, we’ll help place you in a town that suits you — whether you want a PvP front, a peaceful builder’s haven, or an economic hub."
    },
    {
        header: "What are the benefits of joining?",
        description: "Joining the Canadian-Greenlandic Empire gives you protection from a powerful nation, access to shared infrastructure, a supportive community, and the opportunity to participate in wars, events, and rise through the ranks."
    },
    {
        header: "Can I start my own town within the empire?",
        description: "Yes! If you're committed and able to maintain it, we support member-led towns."
    },
    {
        header: "Is the empire involved in PvP/wars?",
        description: "Yes — heavily. We're a frontline force in the Imperial Alliance, often engaged in defense and conquest. PvPers are always welcome, but we also value logistics, movecrafters, builders, and support roles."
    },
    {
        header: "What is the diplomatic stance of the empire?",
        description: "We’re part of the Imperial Alliance, an alliance with Rome, Siberium and Ironwood. We oppose coalition nations like Thracia, Quintessence Syndicate and Floritania."
    },
    {
        header: "How do I rank up or earn a leadership position?",
        description: "Be active, helpful, and loyal. Contributing during wars, helping new players, and showing initiative can lead to promotions within town or empire-wide leadership."
    }
]

const faqContainer = document.querySelector("#faq-container");

for (const item of faq) {
    const div = document.createElement("div");
    div.classList.add("accordion-item");

    const header = document.createElement("div");
    header.classList.add("accordion-item-header");
    header.textContent = item.header;

    const descriptionDiv = document.createElement("div");
    const description = document.createElement("div");

    descriptionDiv.classList.add("accordion-item-body");
    description.classList.add("accordion-item-body-content");
    description.textContent = item.description;
    descriptionDiv.appendChild(description);

    div.appendChild(header);
    div.appendChild(descriptionDiv)

    faqContainer.appendChild(div);
}


/*FAQs*/
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", () => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if(accordionItemHeader.classList.contains("active")) accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        else accordionItemBody.style.maxHeight = "0px";
    });
});