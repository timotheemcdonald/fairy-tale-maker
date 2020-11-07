import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
`

function Home(){
    const history = useHistory()

    return(
        <Div>
            Welcome to Fairy Tale Maker!
        </Div>
    )
}

export default Home;