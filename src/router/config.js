import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({ children, isLogin, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    isLogin & restricted ? (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: location }
                            }}
                        />
                    ) : (
                        children
                    )
                )}
        />
    )
}

export const PrivateRoute = ({ children, isLogin, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    isLogin ? (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    ) : (
                        children
                    )
                )}
        />
    )
}