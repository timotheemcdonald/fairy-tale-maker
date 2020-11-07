import React, {useState} from 'react'
import styled from 'styled-components'

const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
`

function Book(props) {
    const [display, setDisplay] = useState(props)

    return(
        <Div>
            <div><span class="capital">O</span>nce upon a time..</div>
            <div>In a far away land, there lived a young {display.profession}</div>
            <div class="capital">The End</div>
        </Div>
    )
}

export default Book;