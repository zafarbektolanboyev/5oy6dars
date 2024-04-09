// document.querySelector("#title-1").textContent = "h1 - textContent";
// document.querySelector("#title-2").innerText = "h2 - innerText";
// document.querySelector("#title-3").innerHTML = "<span class='span' style='color:red;'>SPAN</span>";
let arr = [
    {
        name: "Смартфон Xiaomi Redmi A3 4/128 ГБ, c IPS дисплеем 6.78, 90 Гц экран",
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5r3nNp2Flcf0YTuRqImrK64cD28iFDj1XGmQTWB9N4Q&s',
        price:1200,
        color:"black",
    },
    {
        name: "Смартфон Xiaomi Redmi 13C 4 ГБ + 128 ГБ / 8 ГБ+256 ГБ, 6.74 90 Гц, 5000 mAh, Dual SIM,LTE",
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdANzKW_HhTFp2OEH0xzVsE8apddEIebSnC55uKamqYw&s',
        price:700,
        color:"blue",
    },
    {
        name:"Смартфон Xiaomi Redmi Note 13, 6/128 ГБ, 8/128 ГБ, 8/256 ГБ, 108 МП",
        imgSrc:'https://mini-io-api.texnomart.uz/catalog/product/3566/356681/195049/907d0764-1e89-4c7a-86ee-8a80dc3f96ef.webp',
        price:800,
        color:"black",
    },
    {
        name: "Smartfon Xiaomi Poco C65 6/128 GB 50 Mp, 90 Hz, 5000 mA/soat, 6.74, Type-c 18 Vt",
        imgSrc:'https://univershop.uz/wp-content/uploads/2024/01/1-26.jpg',
        price:200,
        color:"silver",
    },
    {
        name: "Смартфон Xiaomi Redmi Note 13 Pro+ 5G с изогнутым дисплеем 12GB/512GB 200MP, 120 Hz AMOLED",
        imgSrc:'https://mini-io-api.texnomart.uz/catalog/product/3566/356681/195049/907d0764-1e89-4c7a-86ee-8a80dc3f96ef.webp',
        price:800,
        color:"black",
    },
];

let productsList = document.querySelector("#productsList");
// let htmlProducts = "";
arr.forEach(({name, price, imgSrc, color}) => {
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML += `<li class="list-item">
    <img src=${imgSrc} alt="" width='200' height='200'>
    <h2>${name}</h2>
    <p>${price}</p>
    <span style='background:${color};' class="color"></span>
</li>`;

productsList.append(li);
})
productsList.innerHTML = ProductsList;
