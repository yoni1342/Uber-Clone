import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Map from './components/Map';
import Cars from './components/Cars';
import {carList} from './data/carList'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Confirm() {
    const router = useRouter()

    const {pickup, dropoff} = router.query

    const [pickUpCord, setPickUpCord] = useState([0,0])
    const [dropOffCord, setDropOffCord] = useState([0,0])
    const getPickUpCord = (Pickup)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${Pickup}.json?`+
            new URLSearchParams({
                access_token : "pk.eyJ1IjoieW9uaWJhYmkiLCJhIjoiY2toa20xdXg4MWNsbTJ6cDk0d25iM2drZCJ9.4LLM8wFPWi0vRWH6cWb0GA",
                limit: 1
            })
        )
        .then(res => res.json())
        .then(data=>{
            const cord = data.features[0].geometry.coordinates
            setPickUpCord(cord)
        })
    }
    const getDropOffCord = (dropoff)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
            new URLSearchParams({
                access_token : "pk.eyJ1IjoieW9uaWJhYmkiLCJhIjoiY2toa20xdXg4MWNsbTJ6cDk0d25iM2drZCJ9.4LLM8wFPWi0vRWH6cWb0GA",
                limit: 1
            })
        )
        .then(res => res.json())
        .then(data=>{
            const cord = data.features[0].geometry.coordinates
            setDropOffCord(cord)
        })
    }

    useEffect(()=>{
        getPickUpCord(pickup);
        getDropOffCord(dropoff);
        
    },[pickup, dropoff])

  return (
  <Wrapper>
      <Link href = '/search' >
      <BackIcon src ='https://img.icons8.com/ios-filled/50/000000/left.png'/>
      </Link>
      <Map pickUpCord = {pickUpCord} dropOffCord = {dropOffCord}/>
      <Ride>
        <Top>
            Choose a ride, or swipe up for more
        </Top>
        <CarList>
            {carList.map((car)=>(
                <Cars 
                    imgUrl = {car.imgUrl} 
                    service = {car.service} 
                    multiplier = {car.multiplier}
                    pickUpCord = {pickUpCord}
                    dropOffCord = {dropOffCord}
                />
            ))}
        </CarList>
      <ConfirmUber>
          <Btn>
            Confirm UberX
          </Btn>
      </ConfirmUber>
      </Ride> 
  </Wrapper>
    )
}

export default Confirm;


const Wrapper = tw.div`
flex flex-col h-screen 
`
const Ride = tw.div`
flex-1 bg-white w-200 h-1/2 flex flex-col
`
const Top = tw.div`
border-b-2 border-black-400 text-center  text-gray-600 py-1 position-fixed
`
const CarList = tw.div`
overflow-y-scroll
`
const ConfirmUber = tw.div`
p-3 border-t-2
`
const Btn = tw.div`
bg-black text-white text-2xl text-center p-5  cursor-pointer

`
const BackIcon  = tw.img`
absolute w-8 m-4 z-10 bg-white rounded-full cursor-pointer
`