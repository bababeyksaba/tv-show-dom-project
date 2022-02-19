const url = "https://api.tvmaze.com/shows/82/episodes"

const select = document.querySelector("#select-option")
const showcase = document.querySelector("#showcase")
const search = document.getElementById("search")
const allEpisodes = document.getElementById("allepisodes")
fetch(url).then( (response) => response.json()).then( (data) => {
    console.log(data)
    //summary
    const summary = data.filter((e) => {
        console.log(e.summary)
    })
    //url
    const url = data.filter((e) => {
        console.log(e.url)
    })

    showImage(data)
    select.addEventListener("change", () =>{

        if(select.value === allEpisodes.value){
            clear()
            showImage(data)
        }
        else{
            
            const selectMovie = data.filter( (element) =>
                element.name === select.value
    
            )
            clear()
           showImage(selectMovie)
        }
        });
    search.addEventListener("search" , ()  => {
            const data1 = data.filter((element) => element.name.includes(search.value));
            clear();
            showImage(data1);

        });
    
}


);
const clear = () => {
     showcase.innerHTML= ""
}
const showImage = (data) => {

    for( const element of data){
        const div = document.createElement("div");
        div.classList.add("div-style");
        const img = document.createElement("img");
        img.classList.add("img-style");
        img.src = element.image.medium;
        const h4 = document.createElement("h4")
        h4.classList.add("h4-style")
        const span = document.createElement("span")
        span.innerHTML='<i class="bi bi-file-play"></i>';
        if( element.number <10){
           h4.textContent = element.name + " S" +element.season + " E" +"0" +element.number;
        }else{
            h4.textContent = element.name + " S" + element.season + " E" +element.number;
        }
        const option = document.createElement("option")
        option.textContent = element.name;
        option.value = option.textContent ;
        const rate = document.createElement("p");
        rate.textContent = element.rating.average;
        rate.style.fontSize="25px"
        div.append(img,h4,span,rate);
        showcase.append(div);
        select.append(option);
        
    
    }
};


