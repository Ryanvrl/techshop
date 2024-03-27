import iphone15ProCard from '../assets/iphone15promax-card.webp'
import iphone14 from '../assets/iphone14-card.webp'
import applewatch from '../assets/applewatchS3.png'
import sansumgS24 from '../assets/sansumgS24-card.jpg'
import miBand from '../assets/mi-band-card.png'
import playstation from '../assets/PS5-card.png'
import xbox from '../assets/xboxX-card.png'
import iphone13 from '../assets/iphone13-card.webp'
import iphone15 from '../assets/iphone15-card.webp'
import ps5Eafc from '../assets/ps5eafc24.webp'
import applewatchultra from '../assets/apple-watch-ultra-card.webp'
import dellinspiron from '../assets/notebook-deel-15.png'
import samsungBook from '../assets/samsung-book.png'
import macbookAir13 from '../assets/macbookAir13.png'
import notebookAsus from '../assets/notebook-asus.png'
import notebookLenovo from '../assets/notebook-lenovo.png'
import headsetRazer from '../assets/headsetRazer.png'
import headsetAstro from '../assets/headsetAstro.png'
import roboEletrolux from '../assets/roboaspiradorEletrolux.png'
import tecladoRedragon from '../assets/tecladoRedragon.png'
import { productsProps } from '../types/productsTypes'



const products: productsProps[] = [
    {
        id: 0,
        name: 'Notebook ASUS',
        description: ' Vivobook 15, AMD Ryzen 5, 8GB, 256GB, Windows 11 Home',
        color: 'Cinza',
        img: notebookAsus,
        price: 3799.99,
        quantity: 0
    },   
    {
        id: 1,
        name: 'Iphone 14',
        description: 'Apple iPhone 14 (256GB) — Titânio natural',
        color: 'Cinza',
        img: iphone14,
        price: 4399.99,
        quantity: 0
    },
    {
        id: 2,
        name: 'Apple Watch',
        description: 'SmartWatch Series 3',
        color: 'Branco',
        img: applewatch,
        price: 3699.99,
        quantity: 0
    },
    {
        id: 3,
        name: 'Samsung S24',
        description: 'Smartphone Samsung Galaxy S24, Galaxy AI, Selfie de 12MP, Tela de 6.7" 1-120Hz, 12GB RAM, 256GB',
        color: 'Preto',
        img: sansumgS24,
        price: 3899.99,
        quantity: 0
    },
    {
        id: 4,
        name: 'MacBook Air 13',
        description: 'MacBook Air de 13 polegadas: Chip M2 com CPU de oito núcleos e GPU de oito núcleos, de 256 GB SSD',
        color: 'Preto',
        img: macbookAir13,
        price: 8399.99,
        quantity: 0
    },
    {
        id: 5,
        name: 'MI Band 3',
        description: 'SmartWatch',
        color: 'Preto ',
        img: miBand,
        price: 249.99,
        quantity: 0
    },
    {
        id: 6,
        name: 'Iphone 15 Pro',
        description: 'Apple iPhone 15 Pro (256GB) — Titânio natural',
        color: 'Cinza',
        img: iphone15ProCard,
        price: 6999.99,
        quantity: 0
    },
    {
        id: 7,
        name: 'PlayStation 5',
        description: 'Console, 1Tb',
        color: 'Branco',
        img: playstation,
        price: 3999.99,
        quantity: 0
    },
    {
        id: 8,
        name: 'Samsung Book',
        description: 'Samsung Book Core i5-1135G7, 8G, 512GB SSD, Iris Xe, 15.6"FHD, W11',
        color: 'Preto',
        img: samsungBook,
        price: 3199.99,
        quantity: 0
    },
    {
        id: 9,
        name: 'Xbox Series X',
        description: 'Console, 1Tb',
        color: 'Preto',
        img: xbox,
        price: 3599.99,
        quantity: 0
    },
    {
        id: 10,
        name: 'Iphone 13',
        description: 'Apple iPhone 13 (128GB)',
        color: 'Branco',
        img: iphone13,
        price: 3299.99,
        quantity: 0
    },
    {
        id: 11,
        name: 'Iphone 15',
        description: 'Apple iPhone 15 (128GB)',
        color: 'Preto',
        img: iphone15,
        price: 5299.99,
        quantity: 0
    },
    {
        id: 12,
        name: 'Notebook Lenovo',
        description: 'Notebook Lenovo V14 G3 (14 AMD) Ryzen 5 16GB 256GB SSD Win PRO, 1 Ano Premier Support',
        color: 'Preto',
        img: notebookLenovo,
        price: 2999.99,
        quantity: 0
    },
    {
        id: 13,
        name: 'Playstation 5',
        description: 'Console, com EAFC 24, 1Tb',
        color: 'Branco',
        img: ps5Eafc,
        price: 4099.99,
        quantity: 0
    },
    {
        id: 14,
        name: 'Apple Watch Ultra',
        description: 'SmartWatch Ultra 2 GPS',
        color: 'Laranja',
        img: applewatchultra,
        price: 8699.99,
        quantity: 0
    },
    {
        id: 15,
        name: 'Notebook Dell',
        description: 'Inspiron 15 i5 16GB 512G Windows 11',
        color: 'Preto',
        img: dellinspiron,
        price: 3699.99,
        quantity: 0
    },
    {
        id: 16,
        name: 'Headset Razer',
        description: 'Fone de ouvido para jogos BlackShark V2 X: Som surround 7.1 - Drivers de 50 mm Razer',
        color: 'Preto',
        img: headsetRazer,
        price: 279.99,
        quantity: 0
    },
    {
        id: 17,
        name: 'Robô aspirador',
        description: 'Aspirador de po robo Electrolux 2h20min de bateria, varre, aspira e passa pano.sensor antiqueda',
        color: 'Preto',
        img: roboEletrolux,
        price: 1479.99,
        quantity: 0
    },
    {
        id: 18,
        name: 'Headset Astro',
        description: 'Headset ASTRO Gaming A40 TR para PS5, PS4, Xbox Series, Xbox One, PC e Mac - Preto/Azul - 939-001788',
        color: 'Preto',
        img: headsetAstro,
        price: 679.99,
        quantity: 0
    },
    {
        id: 19,
        name: 'Teclado Redragon',
        description: 'Teclado Mecânico Gamer Redragon Lakshmi Lunar White, Rainbow, Switch Blue',
        color: 'Branco',
        img: tecladoRedragon,
        price: 179.99,
        quantity: 0
    },
   
  
    
    
]

export { products }