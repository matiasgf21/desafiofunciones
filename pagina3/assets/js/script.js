 colores = document.querySelector('div1')


 document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    colores.style.backgroundcolor="pink"
    } else if (event.key === 's') {
        colores.style.backgroundcolor ="orange"
    }else if (event.key ==='d'){
        colores.style.backgroundcolor ="light blue"
    }
    });
    

    //por alguna razón entrega el error : Cannot read properties of null (reading 'style') al presionar una tecla//