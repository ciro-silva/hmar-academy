
//fx na rolagem da página ---------------------
const nav = document.getElementById('nav')
window.addEventListener('scroll', ()=> {
    if(window.scrollY >= 100){
        nav.classList.add('nav-fx')
    } else {
        nav.classList.remove('nav-fx')
    }
})
//---------------------------------------------


//ThumbNavigate to Galery
function navToGalery (){
    window.location = "./video_player.html"
}