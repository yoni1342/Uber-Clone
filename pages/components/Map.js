import React from 'react';
import tw from "tailwind-styled-components"
import { useEffect } from "react"
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = 'pk.eyJ1IjoieW9uaWJhYmkiLCJhIjoiY2toa20xdXg4MWNsbTJ6cDk0d25iM2drZCJ9.4LLM8wFPWi0vRWH6cWb0GA'

const Map = (props) => {
  useEffect(()=>{

    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph', 
      center: [38.668815974295356,8.977469576443665],
      zoom:3
    })  
    if(props.pickUpCord){
      addToMap(map, props.pickUpCord)
    }
    if(props.dropOffCord){
      addToMap(map, props.dropOffCord)
    }

    if(props.pickUpCord && props.dropOffCord){
      map.fitBounds([
        props.pickUpCord,
        props.dropOffCord
      ],{
        padding: 60
      })
    }
  }, [props.pickUpCord, props.dropOffCord])  

  const addToMap = (map, cordd)=>{
    const marker1 = new mapboxgl.Marker()
    .setLngLat(cordd)
    .addTo(map)
  }
  return <Wrapper id = 'map'></Wrapper>
};


export default Map;

const Wrapper = tw.div`
flex-1
`