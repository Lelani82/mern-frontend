import React, { useReducer } from "react";
import { styles } from "../styles";
import { Heading, Columns, Section } from 'react-bulma-components';


const UserLogin = (props) => {
    const { handleLogin, loginError } = props

    return (
        <Section>
            <Heading size={1}>Log in</Heading>
			<Heading subtitle size={5}>Welcome back</Heading>
            <Columns>
                <Columns.Column>
                    <form onSubmit={(event) => handleLogin(event, props)}>
                        { loginError && <p className="has-text-danger">{ loginError }</p> }
                        <label className="label" style={styles.padding}>Username</label>
                        <input type="text" className="input" name="username" placeholder="Username" required></input>
                        <label className="label" style={styles.padding}>Password</label>
                        <input type="password" className="input" name="password" placeholder="Password" required></input>
                        <input type="submit" value="Login" className="button is-info" style={styles.padding}></input>
                    </form>
                </Columns.Column>
                <Columns.Column>
					<img alt="A group of happy people" src="stockimage_happypeople.jpg" style={styles.photo}></img>
				</Columns.Column>
            </Columns>
        </Section>
    )
}

export default UserLogin