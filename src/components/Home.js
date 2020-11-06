import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

function Home(){
    const history = useHistory()

    return(
        <div>
            Welcome to Fairy Tale Maker!
        </div>
    )
}

export default Home;