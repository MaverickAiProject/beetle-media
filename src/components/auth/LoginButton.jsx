"use client"
import { SessionProvider } from 'next-auth/react'
// components/auth/loginButton.jsx
import React from 'react'
import LoginMenu from './LoginMenu'

function LoginButton() {

    return (
        <SessionProvider>
            <LoginMenu />
        </SessionProvider>
    )
}

export default LoginButton