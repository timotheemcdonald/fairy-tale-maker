import React, {useState} from 'react'
import styled from 'styled-components'

const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
`

const Chapter = styled.div`
margin: auto;
padding:1rem;
`

function Book(props) {

    return(
        <Div>
            <Chapter><span class="capital">O</span>nce upon a time..</Chapter>
            <Chapter>In a far away land, there lived a young {props.props.profession} named {props.props.hero}</Chapter>
            <Chapter class="capital"><span class="capital">T</span>he <span class="capital">E</span>nd</Chapter>
        </Div>
    )
}

export default Book;