import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const StationMap = ({ apiKey }) => {

  const [searchTerm, setSearchTerm] = useState('')
  const [stations, setStations] = useState([])

  useEffect(() => {

    const fetchStations = async() => {

      const response = await axios.get(`https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json`,
      {
        params: {
          fuel_type: 'ELEC',
          location: 'New York',
          limit: 20,
          radius: 500,
          api_key: 'fqb8YRvMdckZX9TbB9qsbWD9MAJxF7ZVs9KJ2PDx'
        }
      })

      setStations(response.data.fuel_stations)
    }

    fetchStations();

  }, [])

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await axios.get(`https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json`,
      {
        params: {
          fuel_type: 'ELEC',
          location: searchTerm,
          limit: 20,
          radius: 500,
          api_key: 'fqb8YRvMdckZX9TbB9qsbWD9MAJxF7ZVs9KJ2PDx'
        }
      })
      console.log(response.data)

      setStations(response.data.fuel_stations)
  }

  return (
    <div>

      <form onSubmit={(e) => handleSearch(e)}>
        <input type='text' placeholder='Enter your city' onChange={(e) => setSearchTerm(e.target.value)} />
        <button type='submit'>Search</button>
      </form>

      {stations && stations.map((station, i) => (
        <div key={i} className='card'>
          <p>Facility Type: <strong>{station.facility_type}</strong></p>
          <p>Fuel Type: <strong>{station.fuel_type_code}</strong></p>
          <p>Latitude: <strong>{station.latitude}</strong></p>
          <p>Longitude: <strong>{station.longitude}</strong></p>

          <p>Name: <strong>{station.station_name}</strong></p>
        </div>
      ))}
    </div>
  )
}

export default StationMap
