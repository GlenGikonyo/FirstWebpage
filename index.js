const hello = () => {

    if(document.querySelector(".header").classList.contains(".header")){
        document.querySelector(".header").classList.remove(".header")
        document.querySelector(".header").classList.add("header2")
    }else{

        document.querySelector(".header").classList.add(".header")
        document.querySelector(".header").classList.remove("header2")
    }
}