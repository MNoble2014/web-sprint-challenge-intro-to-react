// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StarStyle = styled.div`
display: flex;
justify-content: center;
margin: 10% 15% 0;
background-color: coral;
border: solid black 5px;
border-radius: 10%10%;
padding: 5%
`

const Character = props => {
    const {info} = props
    return (
        <StarStyle>
            <p>{info.name} was born in {info.birth_year}.<b>
            They are {info.height} km tall.</b></p>
        </StarStyle>
    )
}
export default Character;