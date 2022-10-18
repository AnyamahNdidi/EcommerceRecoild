import React from 'react'
import styled from 'styled-components'
import { iData } from "./Interface"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { cart,dispatchercode } from "./Global"
import {useRecoilState, useRecoilValue } from "recoil"

const Card: React.FC<iData> = ({ title, price, image,id, description,category, rating, qty }) =>
{
    const [setcart, setMyCart] = useRecoilState(cart)
    const [setdi, setMydi] = useRecoilState(dispatchercode)
    const [dis, setdis] =   React.useState("")
    const viewAllCart = useRecoilValue(cart)
    const viewdis = useRecoilValue(dispatchercode)
    console.log(viewAllCart)
    const navigate  = useNavigate()

    const addToCart = (product:iData) =>
    {

        let randomKey = "";
        let characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
       for (var i = 0; i < 5; i++) {
      randomKey += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
        }
        console.log("this is rndom key", randomKey)
        console.log("thicode key", dis)
        setdis("gkjdgkj")
        setMydi(dis)
   
        setMyCart((el:any) =>
        {
            const check = el.find((props:any) => props.id === product.id)
            if (check)
            {
                return el.map((item:any) =>
          item.id === product.id ? { ...product, qty: item.qty! + 1,code:randomKey  } : item
        );
            } else
            {
                return [...el, {...product, qty:1,code:randomKey }]
            }
        })
    }
  return (
      <CardHolder>
          <ProImage src={image} />
          <Title>{title }</Title>
          <Price>₦{ price}</Price>
          <ButtonDid>
              <ViewDeails1 to={`details/${id}`} >view Details</ViewDeails1>
              <ViewDeails
                  onClick={() =>
                  {
                      addToCart({
                          id: id, price: price, description: description, title: title, image: image,
                          category: category, qty: qty, rating: rating
                      })
                  }}
              >Add To Cart</ViewDeails>
          </ButtonDid>
          
    </CardHolder>
  )
}

export default Card

const Title = styled.div`
height:50px;
width:100%;
display:flex;
font-size:15px;
font-weight:600;

`
const Price = styled.div`
height:50px;
width:100%;
display:flex;
font-size:15px;
font-weight:600;
justify-content: center;
align-items: center;

`
const ButtonDid = styled.div`
width:100%;
height:50px;
display:flex;
justify-content: space-around;

align-items: center;
`
const ViewDeails1 = styled(Link)`
width:100px;
height:100%;
display:flex;
justify-content: center;
align-items: center;
background-color:grey;
color:white;
cursor:pointer;
border-radius:10px;
`
const ViewDeails = styled.span`
width:100px;
height:100%;
display:flex;
justify-content: center;
align-items: center;
background-color:grey;
color:white;
cursor:pointer;
border-radius:10px;
`


const CardHolder = styled.div`
   height:350px;
   width:290px;
   background-color:white;
   margin:15px;
   border-radius:10px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   display:flex;
   flex-direction:column;
   
`

const ProImage = styled.img`
 height:180px;
 width:100%;
 background-color:grey;
 border-radius:10px 10px 0px 0px;
 object-fit:cover;

`