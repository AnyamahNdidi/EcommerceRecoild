import React from 'react'
import styled from 'styled-components'
import { cart, disptch } from "./Global"

import {iData } from "./Interface"
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil"
import { usePaystackPayment } from "react-paystack";

const CartPage = () =>
{
  const [mycrt, setmycrt] = useRecoilState(cart)
  const [dispatche, setdispatcher ] = useRecoilState(disptch)
  const crtview = useRecoilValue(cart)
  const remove = (product:iData) =>
  {
    setmycrt((el:any) =>
    {return el.filter((props:any) => props.id !== product.id);
     
    })
  }

  const gettotal = (product: iData[]) =>
    product.reduce((a: number, b) => a + b.qty! * b.price, 0)
 
  const getqty = (product: iData[]) =>
    product.reduce((a:number, b)=> a + b.qty!, 0)  
    
  
  const removeOne = (product:iData) =>
  {
    setmycrt((el:any) => {
      const check = el.find((props: any) => props.id === product.id)
      if (check)
      {
        return el.map((item: any) =>
          item.id === product.id ? { ...product, qty: item.qty - 1} : item
        )
      } else
      {
        return [...el, {...product, qty:1 }]
      }
    })
  }

    const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: Math.ceil(gettotal(crtview)),
    publicKey: "pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18",
  };

   const onSuccess = () => {
    const reference = new Date().getTime().toString();
    setdispatcher(crtview)
    setmycrt([]);
    console.log("Success", reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  const addone = (product:iData) =>
  {
    setmycrt((el: any) =>
    {
       const check = el.find((props: any) => props.id === product.id)
      if (check)
      {
       return el.map((item:any) =>
        
          item.id === product.id ? {...product, qty:item.qty + 1} : item
        )
      } else
      {
        return [...el, {...product, qty:1 }]
      }
      
    })
    
  }
  return (
      <Container>
          <PriceHold>
              <Hold>
          <Cost>Total Price: ₦{Math.ceil(gettotal(crtview)) }</Cost>
          <Cost>Total QTY:{getqty(crtview) }</Cost>
          </Hold>
          <Button
           onClick={() => {
              initializePayment(onSuccess, onClose);
              console.log("Pay...");
            }}
          >
            Pay With Paystack
          </Button>
          </PriceHold>
      <Wrapper>
        {
          crtview.map((props) => (
            <CardHolder>
              <ProImage src={props.image } />
              <Title>{props.title}</Title>
              <Decs></Decs>
              <Price>₦{props.price}</Price>
              <Holdboth>
                <Button11
                  onClick={() =>
                  {
                    removeOne(props)
                }}
                >-</Button11>
                <Qcon>{props.qty }</Qcon>
                <Button22 onClick={() =>
                {
                  addone(props)
                }}>+</Button22>
              </Holdboth>
          <ButtonDid>
                <ViewDeails onClick={() =>
                {
                  remove(props)
              }}>remove from Cart</ViewDeails>
          </ButtonDid>
          
    </CardHolder>
          ))
        }
               
              
          </Wrapper>
    </Container>
  )
}

export default CartPage
const Qcon = styled.div``
const Button22 = styled.div`
  color: white;
  font-weight: 500;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background: gray;
  padding: 10px 20px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`
const Button11 = styled.div`  color: white;
  font-weight: 500;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background: gray;
  padding: 10px 20px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`
const Holdboth = styled.div`
display: flex;
height:auto;
justify-content: space-around;
align-items: center;

`

const Decs = styled.div`
height:50px;
width:100%;
display:flex;
font-size:15px;
 word-wrap: break-word;

`
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
const ViewDeails = styled.span`
width:130px;
height:100%;
display:flex;
justify-content: center;
align-items: center;
background-color:red;
color:white;
cursor:pointer;
border-radius:10px;
`


const CardHolder = styled.div`
   height:400px;
   width:290px;
   background-color:white;
   margin:15px;
   border-radius:10px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   display:flex;
   flex-direction:column;
   paddding-buttom:10px;
   
`

const ProImage = styled.img`
 height:180px;
 width:100%;
 background-color:grey;
 border-radius:10px 10px 0px 0px;
 object-fit:cover;

`

const Container = styled.div`
 padding-top: 100px;
  width: 100%;
  min-height: calc(100vh - 80px);
  height: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PriceHold = styled.div`
 display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  padding: 30px;
  border: 1px solid gray;
  /* margin-top: 50px; */
  border-radius: 10px;
`
const Hold = styled.div`
  display: flex;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`
const Button = styled.div`
  color: white;
  font-weight: 300;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background: red;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;

const Cost = styled.div`
  font-weight: 900;
  font-size: 700;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;
const Wrapper = styled.div`
 width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
`