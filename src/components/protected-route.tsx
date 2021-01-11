import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
//import { useStores } from '../stores/store'

const ProtectedRoute = (props: any) => {

    //const { authStore } = useStores()
    const authStore:any = {} //.........

    // useEffect(() => {
    // }, [])

    const Component = props.component

    return authStore.session?.isAuthenticated ? (
        <Component />
    ) : (
            <Redirect to={{ pathname: '/login' }} />
        )

}
export default ProtectedRoute