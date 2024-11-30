let sidebar = document.querySelector('.sidebar')
let side_titles = document.querySelectorAll('.side_titles')
let side_elements = document.querySelectorAll('.side_elements')
let dashboard = document.getElementById('dashboard')
let dash_title = document.getElementById('dash_title')
let container = document.querySelector('.container')
let search = document.getElementById('search')
let notif = document.getElementById('notif')
let profile = document.querySelector('.profile')
let theme = document.querySelector('.theme')
let theme_icon = document.getElementById('theme_icon')
let header = document.querySelector('.header')
let projects = document.querySelector('.projects')
let projects_icons = document.querySelectorAll('.projects_icons')
let friend_section = document.querySelector('.friends')
let footer = document.querySelector('.footer')
let side_state = true;
let search_state = false
let backup = []

function change_size_onhover(element){
    element.addEventListener('mouseenter', function(){
        element.style.transform = `scale(1.2)`
        element.style.transition = 'ease-in .2s'
    })
    element.addEventListener('mouseout', function(){
        element.style.transform = `scale(1.0)`
        element.style.transition = 'ease-in .2s'
    })
}

function change_background_color(element,color,transition){
    element.style.cssText = `background-color:${color};transition: ease-in ${transition}`
}

function redirect(){
    window.open('redirect.html','_blank')
}

function switch_color(element,color,transition){
    if(color == 'white'){
        element.style.cssText = 'filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(273deg) brightness(103%) contrast(103%)'
    }

    else {
        element.style.cssText = 'filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(219deg) brightness(99%) contrast(101%)'
    }

    if(transition == 'true') element.style.transition = '.1s'
}


side_elements.forEach(el => {
   el.addEventListener('mouseover', function(){
    el.childNodes.forEach(child => {
        child.style.transform = `scale(1.2)`
        child.style.transition = 'ease-in .2s'
    })
    el.style.cssText= 'background-color:rgba(255, 255, 255,10);box-shadow:3px 3px 10px rgba(0,0,0,.2);transition:.2s'
    })

    el.addEventListener('click', redirect)

    el.addEventListener('mouseout', function(){
    change_background_color(el,'#9FE2BF','.2s')
    el.childNodes.forEach(child => {
        child.style.transform = `scale(1.0)`
        child.style.transition = 'ease-in .2s'
    })
   })
})

side_titles.forEach(el => {
    backup.push(el.innerHTML)
})

dashboard.addEventListener('click', function(){
    if(side_state == true){
        side_titles.forEach(element => {
            element.textContent = '';
        })
        dash_title.innerHTML = '';
        sidebar.style.cssText = 'width:50px;transition:.3s';
        side_state = false
    }
    else {
        setTimeout(() => {
            dash_title.innerHTML = 'Dashboard'
            let i = 0
            side_titles.forEach(el => {
                el.innerHTML = backup[i]
                i++
            })
        }, 120);
        sidebar.style.cssText = 'width:250px; transition: .3s'
        side_state = true
    }
})

search.addEventListener('reset', function(){
    search.style.cssText = 'width:50px;border:0;transition:.3s'
    search.firstChild.style.cssText = 'opacity:1;transition:.3s'
    search.removeChild(this.lastChild)
    search_state = false
})

change_size_onhover(notif)

notif.addEventListener('click', redirect)

let theme_state = true

theme.addEventListener('click', function(){
    if(theme_state == true){
        theme_state = false
        theme_icon.src = 'css/images/moon.svg'
        switch_color(theme_icon,'white')
        change_background_color(container,'black', '.2s')
        change_background_color(search,'black','.1s')
        change_background_color(friend_section,'#24292F','.2s')
        header.style.cssText = 'background-color:black;transition:ease-in .2s;box-shadow:0 2px 2px rgba(255,255,255,.2);'
        document.querySelectorAll('.friends_icon').forEach(el => {
            change_background_color(el,'white','.2s')
        })
        document.querySelector('.name').style.cssText = 'color:white;transition:ease-in .2s'
        document.querySelector('.friends > div:first-child').style.cssText = 'color:white;border-color:white;transition:ease-in .2s'
        document.querySelectorAll('.friends_info > div').forEach(element => {
            element.style.cssText = 'color:white;transition:ease-in .2s'
        })
        footer.firstElementChild.style.cssText = 'color:white;transition:ease-in .2s'
        switch_color(document.querySelector('#link'),'white','true')
        switch_color(search.firstElementChild,'white','true')
        switch_color(notif,'white')
    }
    else {
        theme_icon.src = 'css/images/sun.svg'
        theme_state = true
        change_background_color(container,'#E2E8F0','.2s')
        change_background_color(header,'white','.2s')
        change_background_color(search,'white','.2s')
        change_background_color(friend_section,'white','.2s')
        document.querySelector('.friends > div:first-child').style.cssText = 'color:black;border-color:black;transition:ease-in .2s'
        document.querySelector('.name').style.cssText = 'color:black;transition:ease-in .2s'
        document.querySelectorAll('.friends_icon').forEach(el => {
            change_background_color(el,'#E2E8F0','.2s')
        })
        document.querySelectorAll('.friends_info > div').forEach(element => {
            element.style.cssText = 'color:black;transition:ease-in .2s'
        })
        footer.firstElementChild.style.cssText = 'color:black;transition:ease-in .2s'
        switch_color(document.querySelector('#link'),'black','true')
        switch_color(notif,'black')
        switch_color(search.firstElementChild,'black','true')
        switch_color(theme_icon,'black')
    }
})

search.firstChild.addEventListener('click', function(){
    if(search_state == false){
        let search_field = document.createElement('input')
        search.style.cssText = 'background-color:white; width:300px;border:3px solid black;transition:ease-in all .15s'
        search.firstChild.style.cssText = 'opacity:0;'
        search_field.style.cssText = 'margin-left:20px;grid-column:1/3;grid-row:1/2;width:calc(100% - 20px);font-family:quicksand'
        search_field.maxLength = '15'
        search_field.placeholder = 'Search'
        search_state = true
        search.appendChild(search_field)
        search.addEventListener('keydown', function(e){
            let keydown = e.key
            if(keydown == 'Enter') redirect()
        })  
    }  
})

document.addEventListener('click', e => {
    if(search_state == true){
        const click_detect = search.contains(e.target)
    if(!click_detect) {
        search.style.cssText = 'width:40px;transition:ease-in all .15s'
        if(theme_state == true){
           setTimeout(() => {
                search.style.backgroundColor = 'white'
                search.firstChild.style.cssText = 'transition:.15s;opacity:1'
           }, 100);
        }
        else {
            setTimeout(() => {
                search.style.backgroundColor = 'black'
                search.firstChild.style.cssText = 'transition:.15s;opacity:1'
                switch_color(search.firstElementChild,'white','true')
            }, 100);
        }
        search.removeChild(search.lastChild)
        search_state = false
    }
    }
})

projects_icons.forEach(el => {

    el.childNodes.forEach(child => {
        change_size_onhover(child)
    })

    el.lastElementChild.addEventListener('click', function(){
        window.open('https://github.com/The-Chosen-Goose','_blank')
    })

    el.children[1].addEventListener('click', redirect)

})

change_size_onhover(footer.firstElementChild)
change_size_onhover(theme_icon)