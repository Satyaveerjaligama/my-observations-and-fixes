'use client';
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from '../../styles/amazon.module.css';

/* 
I have seen the inconsistent placement of the "Add to Cart" button, leading to blank spaces after the button for certain products.
This happens because product-to-product the content that has to be shown to the user differs.

I have addressed this issue with flex properties 
display: flex
flex-direction: column
justify-content: space-between

My approach involves dividing the product card into two parts: 
1. Image and Product info
2. Button

Now, for all the products (irrespective of product info) the button will be placed at the bottom
*/

const Amazon = () => {
    const products = [
        {
            name: 'Product 1',
            price: '300',
            rating: '',
            colors: '',
            image: '/react.png'
        },
        {
            name: 'Product 2',
            price: '200',
            rating: '',
            colors: '',
            image: '/react.png'
        },
        {
            name: 'Product 3',
            price: '450',
            rating: '',
            colors: '',
            image: '/react.png',
            extraInfo1: 'Extra info 1',
            extraInfo2: 'Extra info 2'
        },
        {
            name: 'Product 4',
            price: '399',
            rating: '',
            colors: '',
            image: '/react.png',
            extraInfo1: 'Extra info 1',
            extraInfo2: 'Extra info 2'
        }
    ]
    return (
        <>
        <Grid container columnSpacing={1} rowSpacing={3}>
            {products.map((singleProduct, index) =>
                <Grid item md={2} sm={6} xs={12} key={singleProduct.name+index}>
                <Card className={styles.productCard} sx={{height: '100%', p:1}}>
                    <CardContent sx={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', p:0}}>
                        <div>
                            <Image src={singleProduct.image} alt="next image" width='100' height='100'/>
                            <Typography className={styles.productTitle}>{singleProduct.name}</Typography>
                            <Typography className={styles.extraInfo}>{singleProduct?.extraInfo1}</Typography>
                            <Typography>{"<rating section>"}</Typography>
                            <Typography className={styles.extraInfo}>{singleProduct?.extraInfo2}</Typography>
                            <Typography className={styles.productPrice}><span>₹</span> {singleProduct.price}</Typography>
                            
                        </div>
                        <Button variant="contained" className={styles.button}>Add to cart</Button>
                    </CardContent>
                </Card>
            </Grid>
            )}
        </Grid>
      </>      
    )
};

export default Amazon