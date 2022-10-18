import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { details } from "./Global"
import { useRecoilValue, useRecoilState } from "recoil"
import { useParams } from "react-router-dom"
import axios from "axios"
import {iData} from "./Interface"


const Details = () =>
{
    const [mydata, setMyData] = useRecoilState(details)
    const viewData = useRecoilValue(details)
    const { id } = useParams()
    
    const viewDetail = async () =>
    {
        const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const newData = data.data as iData
        setMyData(newData)
        console.log(newData)
    }
    
    React.useEffect(() =>
    {
        viewDetail()
    },[])

    
  return (
   
      <Container>
         <CardHolder>
              <ProImage src={viewData.image} />
              <Title>{viewData.title }</Title>
              <Decs>{viewData.description }</Decs>
          <Price>₦{viewData.price }</Price>
          <ButtonDid>
              <ViewDeails>Add To Cart</ViewDeails>
          </ButtonDid>
          
    </CardHolder>
      
    </Container>
  )
}

export default Details

const Decs = styled.div`
height:50px;
width:100%;
display:flex;
font-size:15px;
 word-wrap: break-word;

`

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
   height:380px;
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