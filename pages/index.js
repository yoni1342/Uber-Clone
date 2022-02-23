import tw from "tailwind-styled-components"
import { useEffect } from "react"
import Map from "./components/Map"
// import { Avatar } from "@material-ui/core"
import Link from 'next/link'
export default function Home() {
  return (
    
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
            <UberLogo src ="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"></UberLogo>
            <Profile>
              <Name>Yonatan Tesfaye</Name>
              {/* <Avatar src = 'https://scontent.fbjr1-1.fna.fbcdn.net/v/t1.6435-9/118733962_1223946604629574_7173147978018928635_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CsWUK2GNGm0AX9LI0T1&tn=EJt1wO_FmRePhdEp&_nc_ht=scontent.fbjr1-1.fna&oh=00_AT9wqGgWJwHYRB7d2z8VEYLk3GZ3t_HOU5Z-aqkeTxHCtA&oe=62130079' /> */}
            </Profile>
        </Header>
        {/* ActionButtons */}

        <ActionButtons>
              <Link href = '/search'>
            <ActionButton>
              <ActionButtonImage src = 'https://i.ibb.co/YDYMKny/uberx.png' />
              Ride
            </ActionButton>
            </Link>
            <ActionButton>
            <ActionButtonImage src = 'https://i.ibb.co/n776JLm/bike.png' />
              2-Wheels
            </ActionButton>
            <ActionButton>
            <ActionButtonImage src = 'https://i.ibb.co/5RjchBg/uberschedule.png' />
              Reserve
            </ActionButton>
        </ActionButtons>

        {/* InputButton */}
        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div `
flex flex-col h-screen 
`
const ActionItems = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-28 
`
const Profile = tw.div`
flex items-center 
`
const Name = tw.div`
pr-5 w-40
`
const ActionButtons = tw.div`
flex 
`

const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-32 flex items-center flex-col justify-center rounded-lg
hover:scale-105 hover:bg-green-200 transition text-xl
`
const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
  bg-gray-200 h-20 flex items-center text-2xl mt-8 mx-2 m p-3
`