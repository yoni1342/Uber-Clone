import {useEffect, useState} from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
const accessToken = 'pk.eyJ1IjoieW9uaWJhYmkiLCJhIjoiY2toa20xdXg4MWNsbTJ6cDk0d25iM2drZCJ9.4LLM8wFPWi0vRWH6cWb0GA'

function Cars({imgUrl, service, multiplier,pickUpCord,dropOffCord}) {
    const [rideDuration, setRideDuration] = useState();
    // console.log(pickUpCord, dropOffCord)
    useEffect(()=>{
        //get ride duration from map box api 
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCord[0]},${pickUpCord[1]};${dropOffCord[0]},${dropOffCord[1]}?access_token=${accessToken}`)
        .then(res=>res.json())
        .then((data)=>{
            setRideDuration(data.routes[0].duration/100)
        })
    },[pickUpCord, dropOffCord])
  
  return (
      <Wrapper>
            <CarImg src = {imgUrl}/>
            <CarInfo>
                <CarName>
                    {service}
                </CarName>
                <CarTime>
                    5 min away
                </CarTime>
            </CarInfo>
            <Price>
                {(rideDuration*multiplier).toFixed(2)} birr
            </Price>
      </Wrapper>
  )
}

export default Cars;

const Wrapper = tw.div`
flex  items-center w-50 my-3 justify-center
`
const CarImg = tw.img`
    w-20 mr-5
`
const CarInfo = tw.div`
    mr-60
`
const CarName = tw.div`
    font-bold text-lg
`
const CarTime = tw.div`
    text-blue-600 text-sm
`
const Price = tw.div`

`