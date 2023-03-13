import { useState } from 'react'
import Header from './components/Header'
import { Navigation } from './components/Navigation'
import { Catalog } from './components/Catalog'
import { Footer } from './components/Footer'
import { ModalDelivery } from './components/ModalDelivery'

const App = () => {


  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
        <Footer />
        <ModalDelivery />
      </main>
    </>

  )
}

export default App
