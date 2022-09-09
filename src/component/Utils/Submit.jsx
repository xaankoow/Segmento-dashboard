import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function SubmitForm({ children, submitFun, dispatchOption , formClass }) {

    const dispatch = useDispatch();

    const onSubmitForm = (element, fun, dispatchOption) => {

        element.preventDefault();
        if (dispatchOption!=undefined) {
            dispatch(fun())
        } else {
            fun();
        }
    }

    return (

        <form onSubmit={(e) => onSubmitForm(e, submitFun, dispatchOption)} className={formClass}>
            {children}
        </form>
    )
}