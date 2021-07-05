import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import { updatePage, removePreviousPage } from '../../../actions/actions.js'
import './Pages.css';
import './PagesMobile.css';

import { createArrayFromNumber } from '../../../utils/arrayFunctions.js'
import { URLParameters } from '../../../utils/stringFunctions'

function Pages( { parameters } ) {

    const url = new URLParameters()
    url.addParameters(parameters)

    const pages = useSelector(state => state.pages)
    const [pagesArray, setPagesArray] = useState([]);

    const dispatch = useDispatch()

    useEffect(
    () => {
        const newPagesArray = createArrayFromNumber(pages.numerOfPages)
        setPagesArray(newPagesArray)
    },
    [pages.numerOfPages],
    );

    const handleClick = (number) => {
        dispatch(removePreviousPage())
        setTimeout(() => dispatch(updatePage({page: number})), 10);
        
    }

    return(
        <div id='pagesContainer'>
             {
            pagesArray.length > 0
            ? 
            pagesArray.map(page => 
                <Link to={`/home/page:${page}_${url.createURL(url.parameters, 'page')}`}>
                    <button id={page === pages.page ? 'PageSelectedButton' : undefined} className='PageButton' onClick={() => handleClick(page)}>{page}</button>
                </Link>
            ) 
            : 
            <div></div>
            }
        </div>
    )
}

  
  export default Pages

