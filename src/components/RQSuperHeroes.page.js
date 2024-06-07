import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroes = () => {
  const {isLoading, data} =useQuery('super-heroes', fetchSuperHeroes)

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
