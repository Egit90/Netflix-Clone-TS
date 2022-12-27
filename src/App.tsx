import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as StaticRoutes from './constants/routes'
import { Home, SignUp, Browse, Signin } from './pages'
import ProtectedRoute, { IfLoggedInGoToBrowse } from './helpers/ProtectedRoute'
function App() {
    return (
        <Routes>
            <Route path={StaticRoutes.HOME} element={<Home />}></Route>
            <Route
                path={StaticRoutes.SIGN_UP}
                element={
                    <IfLoggedInGoToBrowse>
                        <SignUp />
                    </IfLoggedInGoToBrowse>
                }
            ></Route>
            <Route
                path={StaticRoutes.SIGN_IN}
                element={
                    <IfLoggedInGoToBrowse>
                        <Signin />
                    </IfLoggedInGoToBrowse>
                }
            ></Route>
            <Route
                path={StaticRoutes.BROWSE}
                element={
                    <ProtectedRoute>
                        <Browse />
                    </ProtectedRoute>
                }
            ></Route>
        </Routes>
    )
}

export default App
