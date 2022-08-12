
let typed = "";
let engine = "google"

isEngineSet = false

engineInnerHtml = {
    google: 'Google<image class="engine-logo" src="images/google.png"></image>',
    youtube: 'Youtube<image class="engine-logo" src="images/youtube.png"></image>',
    github: 'Github<image class="engine-logo" src="images/github.png"></image>',
    docs: 'Google Docs<image class="engine-logo" src="images/docs.png"></image>',
    slides: 'Google Slides<image class="engine-logo" src="images/slides.png"></image>',
    sheets: 'Google Sheets<image class="engine-logo" src="images/sheets.png"></image>',
}

engineQuery = {
    google: 'https://www.google.com/search?q=',
    youtube: 'https://www.youtube.com/results?search_query=',
    github: 'https://github.com/search?q=',
    docs: 'https://docs.google.com/document/u/0/?tgif=d&q=',
    slides: 'https://docs.google.com/presentation/u/0/?tgif=d&q=',
    sheets: 'https://docs.google.com/spreadsheets/u/0/?tgif=d&q='
}

$(".search").on("submit",(event)=>{
    event.preventDefault();
    $('.searchbar').value = "";
    submitEventHandler();
})

$(".searchimg").click((event)=>{
    $('.searchbar').value = "";
    submitEventHandler();
})

$(".searchbar").on("input",(event)=>{
    typed = event.target.value;
    console.log(typed)
    if(typed === ""){
        isEngineSet = false
        setEngine('google')
        dispEngine();
    }
    else if(typed === "google"){
        setEngine('google')
        isEngineSet = true
        dispEngine();
    }
    else if(typed === "youtube"){
        setEngine('youtube');
        isEngineSet = true
        dispEngine();
    }
    else if(typed === "github"){
        setEngine('github');
        isEngineSet = true
        dispEngine();
    }
    else if(typed === "docs"){
        setEngine('docs');
        isEngineSet = true
        dispEngine();
    }
    else if(typed === "slides"){
        setEngine('slides');
        isEngineSet = true
        dispEngine();
    }
    else if(typed === "sheets"){
        setEngine('sheets');
        isEngineSet = true
        dispEngine();
    }
})

const setEngine = (engineName) => {
    engine = engineName;
}

const dispEngine = () => {
    if(engine === "google"){
        $('.enginename').html(engineInnerHtml.google)
    }
    else if(engine === "youtube"){
        $('.enginename').html(engineInnerHtml.youtube)
    }
    else if(engine === "github"){
        $('.enginename').html(engineInnerHtml.github)
    }
    else if(engine === "docs"){
        $('.enginename').html(engineInnerHtml.docs)
    }
    else if(engine === "slides"){
        $('.enginename').html(engineInnerHtml.slides)
    }
    else if(engine === "sheets"){
        $('.enginename').html(engineInnerHtml.sheets)
    }
}

const submitEventHandler = () => {
    let searchQuery = '';
    if(isEngineSet){
        typed = typed.split(' ').slice(1).join(' ');
    }

    if(engine === "google"){
        searchQuery = engineQuery.google + typed;
        window.location.href = searchQuery
    }
    else if(engine === "youtube"){
        searchQuery = engineQuery.youtube + typed;
        window.location.href = searchQuery
    }
    else if(engine === "github"){
        searchQuery = engineQuery.github + typed;
        window.location.href = searchQuery
    }
    else if(engine === "docs"){
        searchQuery = engineQuery.docs + typed;
        window.location.href = searchQuery
    }
    else if(engine === "slides"){
        searchQuery = engineQuery.slides + typed;
        window.location.href = searchQuery
    }
    else if(engine === "sheets"){
        searchQuery = engineQuery.sheets + typed;
        window.location.href = searchQuery
    }
}