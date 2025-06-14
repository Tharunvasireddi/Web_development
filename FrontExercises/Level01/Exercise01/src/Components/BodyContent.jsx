import React from 'react'
import { componentData } from '../data'
import CardComponent from './CardComponent'

const BodyContent = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
      {
        componentData.map((component,index)=>(
          <CardComponent title={component.title} description={component.description} logo={component.logo} link={component.link} />
        ))
      }
    </div>
  )
}

export default BodyContent