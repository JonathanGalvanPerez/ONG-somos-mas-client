import React, {useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const imageStyle = {
    height:'35vh',
    width:'100vw'
  };
  
  
export default function Carousel() {

    const [items, setItems] = useState(
        {
            data:[
                {
                    imageUrl: 'https://www.latercera.com/resizer/mI8vn88DUIOFUemIM9TSEyr0FDo=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/6OCZCBLAE5AEXADOCEPV4D5HG4.jpg',
                    text: 'image one'
                },
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqUuLekYoxIRK4lcfXqxbHeTqXOgZkZIeZQ&usqp=CAU',
                    text: 'image one'
                },
                {
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYVnb5eydDWpCbtM-YyDje_7MjAbrcSZ5XYlfy1UF056HyILE2g9QjPrv7k4IQaKKubg&usqp=CAU',
                    text: 'image one'
                }
            ],
            imageSelected: 0,
            responsive:{
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
                }
        }
    )


    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} nav responsive={items.responsive}>
               {
                   items.data.map(({imageUrl, text})=>{
                       return (
                           <img src={imageUrl} alt={text} style={imageStyle}/>
                       )
                })
               }
            </OwlCarousel>;
        </div>
    )
}
