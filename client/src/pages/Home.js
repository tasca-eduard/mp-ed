import { useState, useEffect, useRef } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({});
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const getUsers = async (e) => {
        e.preventDefault();

        let data = await fetch('/users/getUsers', {
            method: "get"
        })

        data = await data.json();
        
        setUsers([...data]);
    }

    useEffect(() => {
        console.log(users)
    }, [users, newUser])

    const renderUser = () => {
        return (
            <ul>
                {users.map(user => (<li key={user._id}>{user._id} ({user.username})</li>))}
            </ul>
        )
    }

    const addUser = async (e) => {
        e.preventDefault();
        
        const postData = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        let data = await fetch('users/addUser', {
            method: "post",
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
              },
        })

        data = await data.json();

        setNewUser({...data})
    }

    // username: req.body.username,
    // email: req.body.email,
    // password: req.body.password

    return (
        <>
            <div>
                <form onSubmit={ getUsers }>
                    <input type="submit"/>
                </form>
            </div>

            { users.length > 0 && renderUser() }

            <div>
                <form onSubmit={ addUser }>
                    <input type="text" placeholder="username" ref={usernameRef}/>
                    <input type="email" placeholder="email" ref={emailRef}/>
                    <input type="password" placeholder="password" ref={passwordRef}/>
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}

export default Home
