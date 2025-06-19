import React, { createContext, useContext, useState } from "react";

let UserContext = createContext()

const Component1 = () => {
    const [user, setUser] = useState('Kumar')

    return (
        <UserContext.Provider value={user}>
        <h3>Component 1</h3>
        <h1>{`Hello From Component 1 ${user}`}</h1>
        <Component2/>
        </UserContext.Provider>
    )
}

const Component2 = () => {


    return (
        <>
        <h3>Component 2</h3>
        <Component3/>
        </>
    )
}

const Component3 = () => {

    return (
        <>
        <h3>Component 3</h3>
        <Component4/>
        </>
    )
}

const Component4 = () => {

    return (
        <>
        <h3>Component 4</h3>
        <Component5/>
        </>
    )
}

const Component5 = () => {
    let user = useContext(UserContext)
    return (
        <>
        <h3>Component 5</h3>
        <h1>{`Hello from component 5 ${user}`}</h1>
        </>
    )
}

export default Component1