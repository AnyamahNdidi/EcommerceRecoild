import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { product } from "./Global"
import {useRecoilValue} from "recoil"

const Product = () =>
{
   const viewPro = useRecoilValue(product)
   console.log(viewPro)
  return (
      
    <Container>
      {
        viewPro.map(({ title, price, description, category,
          image,rating,id,qty

        }) =>
        (
          <Card
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
            id={id}
            qty={qty}
    
          />
        ))
      }
     

    </Container>
  )
}

export default Product

const Container = styled.div`
 width: 100%;
 height: 100%;
 min-height:100vh;
 background: grey;
 justify-content: center;
 display: flex;
 flex-wrap: wrap;

 
`
const Wrapper = styled.div``
const Holder = styled.div``