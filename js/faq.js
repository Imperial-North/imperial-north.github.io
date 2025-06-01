const faq = [
    {
        header: "Who is the greatest of them all?",
        description: "Ivan"
    },
    {
        header: "Who is the greatest of them all?",
        description: "Ivan"
    },
    {
        header: "Who is the greatest of them all?",
        description: "Ivan"
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