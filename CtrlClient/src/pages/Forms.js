import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'

import { Button } from '@windmill/react-ui'
function Forms() {
  return (
    <>
      <PageTitle>Освещение</PageTitle>

      <SectionTitle>Розетка 1</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button size="large" onClick={() => toggleRelay("relay1","on")}>Включить</Button>
        </div>

        <div>
          <Button size="large" onClick={() => toggleRelay("relay1","off")}>Выключить</Button>
        </div>
      </div>
      <SectionTitle>Розетка 2</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button size="large" onClick={() => toggleRelay("relay2","on")}>Включить</Button>
        </div>

        <div>
          <Button size="large" onClick={() => toggleRelay("relay2","off")}>Выключить</Button>
        </div>
      </div>
      <SectionTitle>Розетка 3</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button disabled size="large">Включить</Button>
        </div>

        <div>
          <Button disabled size="large">Выключить</Button>
        </div>
      </div>
      
    </>
  )
}

export default Forms

function toggleRelay(relayNumber,action) {
  fetch(`/toggleRelay?relayNumber=${relayNumber}&action=${action}`)
    .then(response => response.text())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}