import React from 'react';
import NavBar from '../../organisms/NavBar'
import { Container } from 'semantic-ui-react'

const Template = ({children,...props}) => {
  return(
    <div {...props}>
      <NavBar/>
      <Container className="main">
        {children}
      </Container>
    </div>
  )
}

export default Template