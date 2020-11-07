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


const blankBook = {
    hero:'',
    profession:'',
    prince:false,
    princess:false,
    pname:'',
    villain:''
}



function Main(){

    const [story, setStory] = useState(blankBook)
    const [book, setBook] = useState({})

    const onSubmit = (event) => {
        event.preventDefault()

        const newStory = {
            hero:story.hero,
            profession:story.profession,
            prince:story.prince,
            princess:story.princess,
            pname:story.pname,
            villain:story.villain
        }
        setBook(newStory)
    }

    const onChange = (event) => {
        const value = event.target.value
        setStory({...story, [event.target.name]: value})
    }

    const checkboxChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        setStory({...story, [event.target.name]:event.target.value})
    }


    return(
        <Div>
            <h2>Let's Make Your Fairy Tale!</h2>

            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <h3>What is your Hero's name?</h3>
                        <input
                        type="text"
                        name="hero"
                        value={story.hero}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <h3>What is your Hero's profession?</h3>
                        <input
                        type="text"
                        name="profession"
                        value={story.profession}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <h3>Does your Hero meet a Prince or Princess?</h3>
                        <label>Prince
                        <input
                        type="radio"
                        name="prince"
                        onChange={onChange}
                        value={story.prince === true}
                        />
                        </label>
                        <label>Princess
                        <input
                        type="radio"
                        name="prince"
                        onChange={onChange}
                        value={story.princess === true}
                        />
                        </label>
                    </div>
                    <div>
                        <h3>What is their name?</h3>
                        <input
                        type="text"
                        name="pname"
                        value={story.pname}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <h3>What type of villain is in the story?</h3>
                        <input
                        type="text"
                        name="villain"
                        value={story.villain}
                        onChange={onChange}
                        />
                    </div>
                </form>
            </div>

            <div>
                <Link to="/book">Let's Read Your Fairy Tale!</Link>
            </div>
           
           <div>{book.hero}</div>
        </Div>
    )
}

export default Main;