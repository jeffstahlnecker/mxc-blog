import React from 'react'
import styled from 'styled-components'
import {FaChevronRight} from 'react-icons/fa'
import Section from './Section'
import Title from './Title'
import {Link} from 'gatsby'
import {setRem, setColor, setTransition} from '../../styles'

const Category = ({children, category, url}) => {
    return (
        <Section>
            <Cat>
            <Title title={category}/>
            
            <More>
            <Link to={url} className="button">
                <p>See more in {category}</p>
                <FaChevronRight className="icon"/>
                </Link>
            </More>
            
            </Cat>
            {children}
            
        </Section>
    )
}

export const Cat = styled.div `
display: flex;Box
flex-direction: row;
justify-content: space-between;
margin-top: ${setRem(30)};
`
export const More = styled.div`
.button {
    display: flex;
    flex-direction: row;
    color: ${setColor.mainBlack};
}
.button:hover {
    color: ${setColor.secondaryColor};
    ${setTransition}
}
.icon {
    padding-left: ${setRem(10)}; 
}

`

export default Category
