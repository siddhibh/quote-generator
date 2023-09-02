const quoteText = document.querySelector(".quote");
quoteBtn = document.querySelector("button");
authorName = document.querySelector(".author .name")
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");


//random quote function
function randomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    // fetching random quotes from api and parsing it into javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading")
    });
}

soundBtn.addEventListener("click",()=>{
    // SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener("click",()=>{
    // copying the quote text on copybtn click
    // writetext() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
})


quoteBtn.addEventListener("click", randomQuote);

