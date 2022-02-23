import React, { useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Link from 'next/link'
function Search() {
    const [pickup, setPickUp] = useState()
    const [dropoff, setDropOff] = useState()

    console.log(pickup);
  return( 
  <Wrapper>
    {/* BackIcon */}
    <BackIcon>
        <Link href = '/'>
            <ArrowBackIcon src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
        </Link>
    </BackIcon>
    {/* InputStaff */}

    <InputStaff>
        <StartEnd>
            <CircleImage src = 'https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'/>
            <Line src ='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'/>
            <Square src = 'https://img.icons8.com/windows/50/000000/square-full.png'/>
        </StartEnd>
        <Inputs>
            <Input placeholder = 'Enter pickup location'
            value = {pickup}
            onChange = {(e)=>setPickUp(e.target.value)}
            />
            <Input placeholder = 'Where to?'
            value = {dropoff}
            onChange = {(e)=>setDropOff(e.target.value)}
            />
        </Inputs>
        <Add>
            <PlusIcon src = 'https://img.icons8.com/ios/50/000000/plus-math.png'/>
        </Add>
    </InputStaff>

    {/* SavePlace */}
    <SavePlace>
        <StarIcon src ='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png'/>
        Saved Places
    </SavePlace>
    {/* ConfirmButton */}
    <Link href = {{
        pathname: '/confirm',
        query: {
            pickup: pickup,
            dropoff: dropoff
        }
    }}>
    <ConfirmButton>
        Confirm Locations
    </ConfirmButton>
    </Link>
  </Wrapper>
  )
}

export default Search;


const Wrapper = tw.div`
bg-gray-200 h-screen
`
const BackIcon = tw.div`
text-3xl font-extrabold bg-white px-4 flex items-center 
`
const ArrowBackIcon = tw.img`
h-12
`
const InputStaff = tw.div`
flex bg-white items-center px-4 mb-2
`
const StartEnd = tw.div`
w-10 flex flex-col mr-2 items-center
`
const Add = tw.div`
`
const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
const CircleImage = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const Square =  tw.img`
h-3
`
const Inputs = tw.div`
flex flex-col flex-1
`
const Input = tw.input `
h-10 bg-gray-200 m-2 flex-1 rounded-2  p-2 
outline-none border-none
`
const SavePlace = tw.div`
flex items-center bg-white px-4 py-2
`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmButton = tw.div`
bg-black text-white p-3 flex justify-center text-3xl my-5 mx-3
cursor-pointer
`
