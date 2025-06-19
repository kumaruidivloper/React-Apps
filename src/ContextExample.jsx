import React, { useState } from "react";

const Component1 = () => {
    const [user, setUser] = useState('Kumar')

    return (
        <>
        <h3>Component 1</h3>
        <h1>{`Hello From Component 1 ${user}`}</h1>
        <Component2 user={user}/>
        </>
    )
}

const Component2 = ({user}) => {


    return (
        <>
        <h3>Component 2</h3>
        <Component3 user={user}/>
        </>
    )
}

const Component3 = ({user}) => {

    return (
        <>
        <h3>Component 3</h3>
        <Component4 user={user}/>
        </>
    )
}

const Component4 = ({user}) => {

    return (
        <>
        <h3>Component 4</h3>
        <Component5 user={user}/>
        </>
    )
}

const Component5 = ({user}) => {

    return (
        <>
        <h3>Component 5</h3>
        <h1>{`Hello from component 5 ${user}`}</h1>
        </>
    )
}

export default Component1