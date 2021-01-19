import React from 'react'
import { Redirect } from 'react-router-dom'
import { userStore } from '../stores/user-store'

const ProtectedRoute = (props: any) =>
    userStore?.isAuthenticated ?
        <props.component /> : <Redirect to={{ pathname: '/login' }} />

export default ProtectedRoute