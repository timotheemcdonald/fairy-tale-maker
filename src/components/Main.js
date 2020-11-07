import React, {useState} from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import styled from 'styled-components'

import Book from '../components/Book'

const blankBook = {
    profession:'',

}

function Main(){

    const [story, setStory] = useState(blankBook)



    return(
        <div>
            Let's Make Your Fairy Tale!

            <div>
                <Link to="/book">Let's Read Your Fairy Tale!</Link>
            </div>
           
        </div>
    )
}

export default Main;