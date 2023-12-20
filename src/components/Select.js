import React from 'react'

const Select = ({animal, handelAnimalTypeChange}) => {
  return (
    <select onChange={handelAnimalTypeChange}>
    <option value=''>Animal Type</option>
    <option value='bird'>bird</option>
    <option value='cat'>cat</option>
    <option value='lion'>lion</option>
    <option value='dog'>dog</option>
    <option value='fish'>fish</option>
</select>
  )
}

export default Select