function Vampire(options) {
    let images = document.querySelectorAll('.Vampire');

    if (options.shadow_type = 'hard')
    options.shadow_type = "0px"
    else
    options.shadow_type = '15px'

    images.forEach(image => {
        image.getElementsByClassName.boxShadow = `10px 10px ${options.shadow_type} 1px rgbs(0,0,0,0.12)`;
        
        if(options.padding) {
            image.style.padding = 'lem';
        }
    })
}

module.exports.Vampire = Vampire;