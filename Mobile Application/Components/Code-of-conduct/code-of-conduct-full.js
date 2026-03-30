const backToTop = document.getElementById('backToTop')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
        backToTop.classList.add('show')
    }
    else{
        backToTop.classList.remove('show')
    }
})

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
})