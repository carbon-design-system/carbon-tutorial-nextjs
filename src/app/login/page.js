'use client';
import styles from './_login-page.scss';
import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  TextInput,
  Tile,
  Column,
  TileGroup,
  Theme,
} from '@carbon/react';
import { UserAvatar } from '@carbon/icons-react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    // try {
    //   //api with data from email and password
    // } catch (error) {
    //   console.log(error)
    // }
    event.preventDefault();
    router.push('/');
  };

  return (
    <Theme theme="g100">
      <div className="login-container">
        <UserAvatar size={50} style={{ margin: '1rem auto' }} />
        <h2 style={{ textAlign: 'center', margin: '1rem 0' }}>Login</h2>
        <TileGroup style={{ width: '600px' }}>
          <Tile className="login-tile">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <TextInput
                  id="email"
                  labelText="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <TextInput
                  id="password"
                  labelText="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <Button
                  type="submit"
                  kind="primary"
                  className="login-btn"
                  tabIndex={0}
                >
                  Login
                </Button>
              </div>
            </Form>
          </Tile>
        </TileGroup>
        <TileGroup style={{ width: '600px' }}>
          <Tile className="sign-up-container">
            <p>
              New to this ?{'  '}
              <span style={{ cursor: 'pointer', color: 'blue' }}>
                &nbsp;Create an account
              </span>
            </p>
          </Tile>
        </TileGroup>
      </div>
    </Theme>
  );
};

export default LoginPage;
