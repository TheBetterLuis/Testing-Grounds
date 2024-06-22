/*  Ejercicio para realizar en casa:
    
    Crear un array de objetos que contenga los datos de 20 productos, donde cada producto tenga
    un id, nombre, precio, descripcion y foto(URL).

    Crear una promesa que se resuelva cuando se presione un boton, que diga "Mostrar Productos",
    La promesa se recuelve despues de 2.5s y se rechaza si el array de productos tiene mas de 20 productos.

    Crear una funcion asincrona (buscarProductos) que espere a que la promesa se resuelva, en caso de que se resuelva
    imprimir una cuadricula con los datos de los productos, en caso contrario imprimir un mensaje de error.

    Crear un boton que al ser presionado ejecute la funcion asincrona buscarProductos.

    Extra: desactiva el boton despues de que se presione para que no vuelva a buscar los productos.
*/

const button = document.getElementById('showProductos');
button.addEventListener('click', showProducts);
const loader = document.getElementById('loader');
const loadingMsg = document.getElementById('loadingMsg');


const productos = [
    {
        id: 1,
        nombre: "Camiseta roja",
        precio: 25.99,
        descripcion: "Camiseta de algodón 100% roja, perfecta para un look casual.",
        foto: "https://i5.walmartimages.com/seo/Gildan-B02060704-Softstyle-Women-Midweight-T-Shirt-Red-Medium_bea847bb-2b19-4e49-8f11-903a1b9267aa.f430e098b3072789b08fe3b61f09b654.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
        id: 2,
        nombre: "Jeans azules",
        precio: 49.99,
        descripcion: "Jeans ajustados de mezclilla azul, ideales para cualquier ocasión.",
        foto: "https://generation.com.mm/web/image/product.template/32342/image_256/CPJ2728%20Slim%20Fit%20Jean%20Pant%20Man%20?unique=b91eca0"
    },
    {
        id: 3,
        nombre: "Zapatillas blancas",
        precio: 65.99,
        descripcion: "Zapatillas deportivas blancas clásicas, cómodas y versátiles.",
        foto: "https://m.media-amazon.com/images/I/71I2QrobMRS._AC_UY1000_.jpg"
    },
    {
        id: 4,
        nombre: "Mochila negra",
        precio: 39.99,
        descripcion: "Mochila negra multifuncional, perfecta para la escuela, el trabajo o viajes.",
        foto: "https://img.fruugo.com/product/3/65/691311653_max.jpg"
    },
    {
        id: 5,
        nombre: "Reloj inteligente",
        precio: 199.99,
        descripcion: "Reloj inteligente con pantalla táctil, monitoreo de actividad física y notificaciones.",
        foto: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5W3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR_GEO_IN?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ZDBuKzI4V2k1SE9UL3g2MjNDZ3JseEZPYUtzeTRQVVJ5RG0wcnpadi96L1VYSXRUN1VQK3Nhb1hTK1VFYms2a0IzMDBvaSthcUJDc2lUMklaVFdPN1lxMHdmWUhUbHhWZXRCWndOTDlaS2xXQkk0RzkwMjlwcytnSllWZENtT0hkK0FiVXJOTmlPU21KWjREMEt1bUNTbmJVazJMS2NZeDNpd3p6WnVuWUthMkxNZkh4MDB4dUpVaFAyTU5LMk1GbW9kVWxVMFJ4OGc5Z1paZGRsWGlndz09"
    },
    {
        id: 6,
        nombre: "Libro de cocina",
        precio: 29.99,
        descripcion: "Libro de cocina con recetas deliciosas y fáciles de preparar.",
        foto: "https://books.disney.com/content/uploads/2022/05/9781368074964-1.jpg"
    },
    {
        id: 7,
        nombre: "Audífonos inalámbricos",
        precio: 79.99,
        descripcion: "Audífonos inalámbricos con sonido de alta calidad y cancelación de ruido.",
        foto: "https://helios-i.mashable.com/imagery/articles/06efyGVjSH6yuLnik0go8IR/images-1.fill.size_256x256.v1708008433.png"
    },
    {
        id: 8,
        nombre: "Cafetera eléctrica",
        precio: 45.99,
        descripcion: "Cafetera eléctrica para preparar café delicioso en minutos.",
        foto: "https://m.media-amazon.com/images/I/71LlWRsTGnL._UC256,256_CACC,256,256_.jpg"
    },
    {
        id: 9,
        nombre: "Smart TV",
        precio: 499.99,
        descripcion: "Smart TV con pantalla LED de alta definición y aplicaciones integradas.",
        foto: "https://img-prd-pim.poorvika.com/prodvarval/Samsung-4k-ultra-hd-led-smart-tv-du7700-50-inch-Front-View-Thumbnail.png"
    },
    {
        id: 10,
        nombre: "Consola de videojuegos",
        precio: 349.99,
        descripcion: "Consola de videojuegos con los últimos juegos y gráficos de alta definición.",
        foto: "https://www.gamestore.com.kw/web/image/product.template/28089/image_256"
    },
    {
        id: 11,
        nombre: "Aspiradora robot",
        precio: 249.99,
        descripcion: "Aspiradora robot inteligente que limpia tu hogar automáticamente.",
        foto: "https://pipl.eu/uploads/product_galleries/4d/f9/w256_fjdpun0vp_e97f167a.png"
    },
    {
        id: 12,
        nombre: "Cámara fotográfica",
        precio: 399.99,
        descripcion: "Cámara fotográfica digital con lente intercambiable para capturar tus mejores momentos.",
        foto: "https://public.blenderkit.com/thumbnails/assets/5326041dbc7b4298bb798084c743da48/files/thumbnail_c944f432-3c94-4d13-80d2-62c677553a37.jpg.256x256_q85_crop-%2C.jpg.webp?webp_generated=1672005968"
    },
    {
        id: 13,
        nombre: "Bicicleta de montaña",
        precio: 599.99,
        descripcion: "Bicicleta de montaña",
        foto: "https://roko.bike/public/images/products/10/thumbs/6426f9479a1ad_roko-bike-20s-black2.jpg"
    },
    {
        id: 14,
        nombre: "Película Blu-ray",
        precio: 19.99,
        descripcion: "Película Blu-ray con alta definición y contenido adicional.",
        foto: "https://m.media-amazon.com/images/I/81HbgXx9qrL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 15,
        nombre: "Auriculares con cable",
        precio: 29.99,
        descripcion: "Auriculares con cable para una experiencia de audio clásica.",
        foto: "https://qph.cf2.quoracdn.net/main-qimg-616ba7ed52c995b6248422377de76072-lq"
    },
    {
        id: 16,
        nombre: "Smartwatch",
        precio: 149.99,
        descripcion: "Smartwatch con notificaciones, monitoreo de actividad física y seguimiento del sueño.",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4S2BRRYe99okfMiJLQhcS9w14-nptt0KfMw&s"
    },
    {
        id: 17,
        nombre: "Impresora multifunción",
        precio: 99.99,
        descripcion: "Impresora multifunción para imprimir, escanear y copiar documentos.",
        foto: "https://d3e54emdgoy1fq.cloudfront.net/uploads/new_category/image/17369/medium_2a95b-MX710de.jpg"
    },
    {
        id: 18,
        nombre: "Mochila portabebé",
        precio: 79.99,
        descripcion: "Mochila portabebé cómoda y segura para transportar a tu bebé.",
        foto: "https://m.media-amazon.com/images/I/71m-0T4CTRL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 19,
        nombre: "Set de cubiertos",
        precio: 39.99,
        descripcion: "Set de cubiertos de alta calidad para 12 personas.",
        foto: "https://m.media-amazon.com/images/I/71owv+Dh+QL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 20,
        nombre: "Cafetera portátil",
        precio: 34.99,
        descripcion: "Cafetera portátil para disfrutar de un café caliente en cualquier lugar.",
        foto: "https://i.ebayimg.com/images/g/HrUAAOSwP~phl9PV/s-l1600.jpg"
    }

];


async function obtainProducts() {
    const newArray = [];
    button.removeEventListener('click', showProducts);
    button.classList.add('hidden');
    return new Promise((res, rej) => {
        if (productos.length > 20) {
            rej('Rejected promise, reason = array contains more than 20 products');
            console.log('Promise rejected');
        } else {
            loader.classList.remove('hidden');
            loadingMsg.classList.remove('hidden');
            setTimeout(() => {
                productos.forEach((producto) => {
                    newArray.push({
                        id: producto.id,
                        nombre: producto.nombre,
                        precio: producto.precio,
                        descripcion: producto.descripcion,
                        foto: producto.foto
                    });
                    res(newArray);
                })
                console.log('Promise completed');

            }, 1500);

        }
    })
};



async function showProducts() {
    const products = await obtainProducts();

    if (products) {
        loader.classList.add('hidden');
        loadingMsg.classList.add('hidden');
        const cuadricula = document.getElementById("productos");
        products.forEach(product => {
            cuadricula.innerHTML += `
                <div class="border border-solid rounded-lg border-black hover:shadow-lg flex flex-col gap-2 items-center p-2">
               <h3>${product.id}</h3>
                    <h3>${product.nombre}</h3>
                    <h3>${product.precio}</h3>
                    <h3>${product.descripcion}</h3>
                    <img class="w-64 rounded-lg" src="${product.foto}" alt="Foto de ${product.nombre}">
                </div>
            `;
        });
    } else {
        console.log('error fetching data');
    }
}
