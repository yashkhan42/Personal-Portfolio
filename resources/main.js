const hl = document.getElementsByClassName('hl');
const logo = document.getElementsByClassName('logo');



function turnLightBlue(event){
    event.target.style.color = 'rgb(100, 214, 206)';
}

for(let i = 0; i < hl.length; i++){
    hl[i].addEventListener('mouseover', turnLightBlue);
    hl[i].addEventListener('mouseout', function(event){
        event.target.style.color = '';
    });
}

for(let i = 0; i < logo.length; i++){
    logo[i].addEventListener('mouseover', function(event){
        event.target.style.opacity = '1';
    });
    logo[i].addEventListener('mouseout', function(event){
        event.target.style.opacity = '0.5';
    });
};







