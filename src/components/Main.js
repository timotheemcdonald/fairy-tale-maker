import React, {useState} from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import styled from 'styled-components'

import Book from '../components/Book'

const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
`


function Main(props){
    console.log('props in main', props)

    return(
        <Div>
            <h2>Let's Make Your Fairy Tale!</h2>

            <div>
                <form onSubmit={props.onSubmit}>
                    <div>
                        <h3>What is your Hero's name?</h3>
                        <input
                        type="text"
                        name="hero"
                        value={props.story.hero}
                        onChange={props.onChange}
                        />
                    </div>
                    <div>
                        <h3>What is your Hero's profession?</h3>
                        <input
                        type="text"
                        name="profession"
                        value={props.story.profession}
                        onChange={props.onChange}
                        />
                    </div>
                    <div>
                        <h3>Does your Hero meet a Prince or Princess?</h3>
                        <label>Prince
                        <input
                        type="radio"
                        name="prince"
                        onChange={props.onChange}
                        value={props.story.prince === true}
                        />
                        </label>
                        <label>Princess
                        <input
                        type="radio"
                        name="prince"
                        onChange={props.onChange}
                        value={props.story.princess === true}
                        />
                        </label>
                    </div>
                    <div>
                        <h3>What is their name?</h3>
                        <input
                        type="text"
                        name="pname"
                        value={props.story.pname}
                        onChange={props.onChange}
                        />
                    </div>
                    <div>
                        <h3>What type of villain is in the story?</h3>
                        <input
                        type="text"
                        name="villain"
                        value={props.story.villain}
                        onChange={props.onChange}
                        />
                    </div>
                </form>
            </div>

            <div>
                <Link to="/book">Let's Read Your Fairy Tale!</Link>
            </div>
         
        </Div>
    )
}

export default Main;