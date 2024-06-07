import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export const RQSuperHeroes = () => {
  const {isLoading, data} =useQuery('super-heroes', () => {
    return axios.get('http://localhost:4000/superheroes')   
  })

  if (isLoading) {
    <h2>Loading</h2>
  }

  return (
    <>
    <h2>RQ Super Heroes</h2>
    {data?.data.map((hero) => {
      return <div key={hero.name}>{hero.name}</div>
    })}
    </>
  )
}
