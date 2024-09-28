function setImageSrc(src) {
    document.getElementById('expandedImage').src = src;
}


const images = [

    'midia/design/ponto-de-luz/2.png',
    'midia/design/ponto-de-luz/1.png',
    'midia/design/ponto-de-luz/4.png',
    'midia/design/ponto-de-luz/5.png',
    'midia/design/ponto-de-luz/6.png',
    'midia/design/ponto-de-luz/7.png',
    'midia/design/ponto-de-luz/8.png',
    'midia/design/ponto-de-luz/9.png',
    'midia/design/ponto-de-luz/maq1.png',
    'midia/design/ponto-de-luz/maq2.png',
    'midia/design/ponto-de-luz/maq3.png',
    'midia/design/ponto-de-luz/maq4.png',

    'midia/design/meandros/me1.png',
    'midia/design/meandros/me2.png',
    'midia/design/meandros/me3.png',
    'midia/design/meandros/me4.png',
    'midia/design/meandros/me5.png',
    'midia/design/meandros/me6.png',
    'midia/design/meandros/me7.png',
    'midia/design/meandros/me8.png',
    'midia/design/meandros/me9.png',
    'midia/design/meandros/me10.png',
    'midia/design/meandros/me11.png',
    'midia/design/meandros/maqme1.png',
    'midia/design/meandros/maqme2.png',

    'midia/design/croqui/croqui1.png',
    'midia/design/croqui/croqui2.png',
    'midia/design/croqui/croqui3.png',
    'midia/design/croqui/croqui4.png',

    'midia/design/maquetes/maqmaq1.png',
    'midia/design/maquetes/maqmaq2.png',
    'midia/design/maquetes/maqmaq3.png',
    'midia/design/maquetes/maqmaq4.png',
    'midia/design/maquetes/maqmaq5.png',
    'midia/design/maquetes/maqmaq6.png',
    'midia/design/maquetes/maqmaq7.png',

    'midia/design/render/render1.png',
    'midia/design/render/render2.png',
    'midia/design/render/render3.png',
    'midia/design/render/render4.png',

    'midia/design/pessoais/des1.png',
    'midia/design/pessoais/des2.png',
    'midia/design/pessoais/des3.png',
    'midia/design/pessoais/des4.png',
    'midia/design/pessoais/des5.png',
    'midia/design/pessoais/des6.png',
    'midia/design/pessoais/des7.png',
    'midia/design/pessoais/des8.png',
    'midia/design/pessoais/des9.png',
    'midia/design/pessoais/des10.png'



    
];


let currentIndex = 0;

function openModal(imageSrc) {
    currentIndex = images.indexOf(imageSrc);
    document.getElementById('expandedImage').src = imageSrc;
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Volta para a última imagem
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Volta para a primeira imagem
    }
    document.getElementById('expandedImage').src = images[currentIndex];
}