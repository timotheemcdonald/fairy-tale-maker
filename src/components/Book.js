import React, {useState} from 'react'
import styled from 'styled-components'

function Book(props) {
    const [display, setDisplay] = useState(props)

    return(
        <div>
            <div><span class="capital">O</span>nce upon a time..</div>
            <div>In a far away land, there lived a young {display.profession}</div>
            <div class="capital">The End</div>
        </div>
    )
}

export default Book;