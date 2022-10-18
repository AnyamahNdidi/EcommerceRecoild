import React from 'react' 
import styled from 'styled-components'
import { disptch } from "./Global"
import { useRecoilState, useRecoilValue } from "recoil"
import {iData} from "./Interface"

const Dispatcher = () =>
{
    const mydisptcher = useRecoilValue(disptch)
    const [mycrt, setmycrt,] = useRecoilState(disptch)
    const [mycode, setmycode] = React.useState("")
    console.log("this is dispcther", mydisptcher)
    const changeststus = (product:iData) =>
    {
        setmycrt((el:any) =>
        {
            const check = el.find((props: any) => props.id === product.id)
            if (check)
            {
                return el.map((item: any) =>
                    item.id === product.id ? {...product, deliveried:true} : item
                )
            } else
            {
               return [...el, {...product, qty:1}]
            }
        })
    }

    const statusinput = (product:iData, dmycode:iData["code"]) =>
    {
        const token = '123456abcdef';

    if ((dmycode === mycode)){
        alert(" correct token")
        changeststus(product)
      

    } else {
        //bad combination
        alert('wrong token');
    }

    }

//     const keyRandomizer = () => {
//     let randomKey = "";
//     let characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (var i = 0; i < 5; i++) {
//       randomKey += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//         }
//         console.log("this is rndom key",randomKey)
   
//   };
  return (
    <Container>
      <br />

      <CardHolder>
        <Div>Dispatcher's View</Div>
      </CardHolder>

          <Wrap>
            
              <View>
                    {
                  mydisptcher.map((props) => (
                       
            <Card >
              <Top>
                <Icon />
                <Line />
              </Top>
              <Out>
                              <Day>
                                 
                  {/* {props.date} {props.month} {props.year} - {props.time} */}
                              </Day>
                              <Title>delevery code {props.code}</Title>   
                <Hold>           
                <NewLine />
                               
                 <Title>{props.title}</Title>
                </Hold>
                  <Desc>{props.description}</Desc>
                  <input
              placeholder='deliver code'
              
              onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> setmycode(e.target.value) }

          />

                {
                props.deliveried ? (<Button1>Delivered</Button1>)
                                      : (<Button
                                          onClick={() =>
                                          {
                                              statusinput(props, props.code)
                                              
                                      }}
                                      >
                    check code
                  </Button>)
                 
                } 
               
                 
               
              </Out>
            </Card>
                  ))
              }
         
         
        </View>
      </Wrap>
    </Container>
  )
}

export default Dispatcher

const Button1 = styled.div`
  color: white;
  font-weight: 300;
  font-size: 15px;
  transition: all 350ms;
  text-transform: capitalize;
  background: green;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  :hover {
    cursor: pointer;
    transform: scale(0.96);
  }
`;
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

const View = styled.div`
  /* background: yellow; */
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  flex-wrap: nowrap;
`;
const Wrap = styled.div`
  width: 90%;
  justify-content: center;
  display: flex;
  border-radius: 5px;
  border: 1px solid silver;
`;

const Desc = styled.div`
  font-weight: 500;
  line-height: 1.5;
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 60px;
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  line-height: 1;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 1;
  }
`;

const NewLine = styled.div`
  width: 30px;
  height: 7px;
  background: darkorange;
  margin-right: 10px;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Out = styled.div`
  margin-left: 30px;
`;

const Day = styled.div`
  font-size: 12px;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const DateCall = styled.div``;

const Line = styled.div`
  width: 170px;
  height: 7px;
  background: darkorange;
  position: absolute;
  bottom: 0;
`;

const Icon = styled.div`
  font-size: 50px;
  margin-left: 30px;
  margin-top: 30px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
`;

const Div = styled.div`
  margin-bottom: 30px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 40px;
  color: white;
  background: darkorange;
  border-radius: 20px;
  text-align: center;
  line-height: 1.2;
`;

const Card = styled.div`
  margin: 10px;
  min-width: 300px;
  min-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 600px) {
    min-width: 260px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CardHolder = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Date = styled.div`
  padding: 7px 30px;
  border-radius: 20px;
  background: darkorange;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 20px 10px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
    background: rgba(255, 140, 0, 0.2);
  }
`;

const DateHolder = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  overscroll-behavior-inline: contain;
`;

const Dater = styled.div`
  width: 90%;
  min-height: 150px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  padding-top: 150px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
