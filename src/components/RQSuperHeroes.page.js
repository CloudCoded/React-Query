import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}
 
export const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log("data fetching successfully", data)
  }

  const onError = () => {
    console.log("data fetching failed")
  }
  const {isLoading, data, isError, error, isFetching, refetch} =useQuery('super-heroes', fetchSuperHeroes, {onSuccess, onError}, { enabled: false})
  console.log(isLoading, isFetching)

  if (isLoading) {
    <h2>Loading</h2>
  }

  {isError && <h2>{error.message}</h2>}

  return (
    <>
    <h2>RQ Super Heroes</h2>
    <button onClick={refetch}>Fetch Heroes</button>
    {data?.data.map((hero) => {
      return <div key={hero.name}>{hero.name}</div>
    })}
    </>
  )
}
