import React from 'react'
import { Redirect } from 'react-router-dom'
import store from '../stores/store'

const ProtectedRoute = (props: any) =>
    store.userStore?.isAuthenticated ?
        <props.component /> : <Redirect to={{ pathname: '/login' }} />

export default ProtectedRoute