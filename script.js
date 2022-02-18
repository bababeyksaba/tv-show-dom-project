const url = "https://api.tvmaze.com/shows/82/episodes"

const select = document.querySelector("#select-option")
const showcase = document.querySelector("#showcase")
const search = document.getElementById("search")
const allEpisodes = document.getElementById("allepisodes")
fetch(url).then( (response) => response.json()).then( (data) => {
    // console.log(data)
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
        const div = document.createElement("div")
        
        // div.style.alignItems="center";
        div.classList.add("div-style")
        const img = document.createElement("img")
        img.src = element.image.medium
        const h3 = document.createElement("h3")
        

        if( element.number <10){
           h3.textContent = element.name + " S" +element.season + " E" +"0" +element.number;

        }
        else{

            h3.textContent = element.name + " S" + element.season + " E" +element.number;
        }

        const option = document.createElement("option")
        option.textContent = element.name
        option.value = option.textContent 
        div.append(img,h3)
        showcase.append(div)
        select.append(option)
        
    
    }
};


