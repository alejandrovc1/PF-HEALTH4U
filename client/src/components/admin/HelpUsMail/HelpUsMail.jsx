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

    console.log(messages)

    // let comments = messages?.map( M => {
        
    // })

    return (
        
        <div className={st.Container}>
            <h1 className={st.title}> HelpUsMail </h1>

            <div className={st.listContainer}>
                <ul className={st.listMessages}>
                    { messages && messages.map( msg => {
                        return (
                            <div className={st.listItem}>
                                <li className={st.MSG}>
                                    Name: {msg.name}
                                </li>
                                <li className={st.MSG}>
                                    Email: {msg.email}
                                </li>
                                <li className={st.MSG}>
                                    Message: {msg.message}
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
