import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import st from './HelpUsMail.module.css'
import {getMessages} from '../../../actions/index'


export default function HelpUsMail() {

    const messages = useSelector( state => state.messages)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getMessages());
    }, [dispatch, getMessages]);

    // let comments = messages?.map( M => {
        
    // })

    return (
        <span> HelpUsMail </span>
    )
}
