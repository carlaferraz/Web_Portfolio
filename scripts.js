function setImageSrc(src) {
    document.getElementById('expandedImage').src = src;
}


const images = [

    'midia/dipietra/1.png',
    'midia/dipietra/2.png',
    'midia/dipietra/3.png',
    'midia/dipietra/4.png',
    'midia/dipietra/5.png',
    'midia/dipietra/6.png',
    'midia/dipietra/7.png',
    'midia/dipietra/8.png',
    'midia/dipietra/9.png',

    'midia/catcatch/animacao-personagens.png',
    'midia/catcatch/movimentacao-gato.png',
    'midia/catcatch/aleatoriedade.png',
    'midia/catcatch/colisao-gato-rato.png',
    'midia/catcatch/score-rato.png',
    'midia/catcatch/gato-pocao.png',
    'midia/catcatch/screenshotcatcatchmenu.png',
    'midia/catcatch/screenshotcatcatch1.png',
    'midia/catcatch/screenshotcatcatch2.png',
    'midia/catcatch/screenshotcatcatchgameover.png',

    'midia/casadoescritorio/win32.png',
    'midia/casadoescritorio/tkinter.png',
    'midia/casadoescritorio/anexos.png',
    'midia/casadoescritorio/erro.png',
    'midia/casadoescritorio/preview.png',
    'midia/casadoescritorio/email-enviado.png',
    'midia/casadoescritorio/falha-box.png',
    'midia/casadoescritorio/email-enviado-box.png',

    'midia/btksolutions/excel1.png',
    'midia/btksolutions/excel2.png',
    'midia/btksolutions/excel3.png',
    'midia/btksolutions/excel4.png',
    'midia/btksolutions/excel5.png',

    'midia/btksolutions/cabeçalho.png',
    'midia/btksolutions/infos.png',
    'midia/btksolutions/tabela.png',
    'midia/btksolutions/totais.png',
    'midia/btksolutions/totais.png',

    'midia/btksolutions/selecaoexce.png',
    'midia/btksolutions/gerarpdf.png',

    'midia/btksolutions/preview.png',
    'midia/btksolutions/salvar-como.png',
    'midia/btksolutions/sucesso.png',
    'midia/btksolutions/falha.png',

    'midia/btksolutions/pdf1.png',
    'midia/btksolutions/pdf1.png'
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