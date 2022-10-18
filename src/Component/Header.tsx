import React from 'react'
import styled from "styled-components"
import { cart } from "./Global"
import {Link} from "react-router-dom"
import {useRecoilValue} from "recoil"
const Header = () =>
{
  const usecart = useRecoilValue(cart)
  return (
      
    <Container>
      <Wrapper>
        <LogoCon>

        </LogoCon>
        <NavHolder>
          <Nav to="/"> Product</Nav>
          <Nav to="/disptch">disptch</Nav>
          <Nav to="/cart"> Cart : {usecart.length }</Nav>
         

        </NavHolder>
      </Wrapper>
          
    </Container>
  )
}

export default Header

const Container = styled.div`
 height:60px;
 background-color: #36454F;
 width:100%;
 display:flex;
 justify-content:center;
 align-items:center;

  
`
const Wrapper = styled.div`
display:flex;
height:100%;
width:90%;
align-items:center;
`
const LogoCon = styled.img`
 width:50px;
height:50px;

`
const NavHolder = styled.div`
  width:180px;
  height:50px;
  display:flex;
  align-items: center;
  justify-content:space-around;
`

const Nav = styled(Link)`
 color: white;
 font-weight: bold;
 cursor: pointer;
 transition: all  350ms;
 
 
 
 :hover {
  color:grey;
  transform: scale(1.0)
 }
`