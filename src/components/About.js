import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
`

function About(){
    return(
        <Div>
            About Me
        </Div>
    )
}

export default About;