
allTopics = [
        {
            Social_Influence : [
                {
                    Conformity_Types_and_Explanations: [
                        {tempID:"one",question: "question one?",answer: "answer one",images: null,link: "https://nolink.com"},
                        {tempID:"two",question: "question two?",answer: "answer two",images: null,link: "https://nolink.com"},
                        {question: "question three?",answer: "answer three",images: null,link: "https://nolink.com"}
                    ],
                    Conformity_Aschapostrophes_Research: [
                        {question: "question four?",answer: "answer four",images: null,link: "https://nolink.com"}
                    ],
                    Conformity_Aschapostrophes_Variations: [
                        {question: "question five?",answer: "answer five",images: null,link: "https://nolink.com"}
                    ]
                }
            ],
            Memory: [
                {
                    Types_of_long_term_memory: [
                        {question: "question six?",answer: "answer six",images: null,link: "https://nolink.com"}
                    ],
                    Types_of_short_term_memory: [
                        {question: "question seven?",answer: "answer seven",images: null,link: "https://nolink.com"}
                    ]
                }
            ]
        }
]

// key2 provides the name of the topic
// key3 provides spread names 
// value3.question, value3.answer, value3.images, value3.link

for (const value of allTopics){

    for (let [key2, value2] of Object.entries(value)) {

        for (let [key3, value3] of Object.entries(value2[0])) {
            
            for (var i in value3) {
                    
                const tempID = value3[i].question.replace(' ', '_');

                var spreadNames = key3.replaceAll('_', ' ').replaceAll('apostrophe', '\'')

                // gets glossary, creates section for topics inside glossary
                glossary = document.getElementById("glossary");
                section = document.createElement("DIV");
                glossary.appendChild(section);
                section.setAttribute("class", "child");
                section.setAttribute("id", key3);

                // creates section for question inside glossary
                button = document.createElement("BUTTON");
                glossary.appendChild(button);
                button.setAttribute("class", "child");
                button.setAttribute("onClick", "reply_click(this.id)");
                button.setAttribute("id", tempID);


                // put two different spans inside button
                span = document.createElement("SPAN");
                button.appendChild(span);
                span.setAttribute("class", "visible");
                span.innerHTML = value3[i].question;

                span = document.createElement("SPAN");
                button.appendChild(span);
                span.setAttribute("class", "hidden");
                span.innerHTML = value3[i].answer;

                function reply_click(clicked_id)
                {
                    
                }
            }
        }
    }
}
