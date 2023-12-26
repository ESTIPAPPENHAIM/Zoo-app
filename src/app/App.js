import React from 'react'
import Form from '../components/Form'
import Table from '../components/Table'
import '../global.css'
import AnimalProvider from '../context/AnimalContext'


const App = () => {

  return (
    <AnimalProvider>
    <div className='app-container'>
    <Form />
    <Table/>
    </div>
    </AnimalProvider>
  )
}

export default App