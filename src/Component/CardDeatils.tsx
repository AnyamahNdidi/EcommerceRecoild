import React from 'react'
import styled from 'styled-components'

const CardDeatils = () => {
  return (
      <CardHolder>
          <ProImage />
          <Title>Bags</Title>
          <Price>₦4500</Price>
          <ButtonDid>
              
              <ViewDeails>Add To Cart</ViewDeails>
          </ButtonDid>
          
    </CardHolder>
  )
}

export default CardDeatils

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

`