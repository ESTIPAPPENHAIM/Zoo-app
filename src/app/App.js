import React from 'react'
import Form from '../components/Form'
import Table from '../components/Table'
import '../global.css'
import ZooProvider from '../context/zooContext'


const App = () => {

  return (
    <ZooProvider>
    <div className='app-container'>
    <Form />
    <Table/>
    </div>
    </ZooProvider>
  )
}

export default App