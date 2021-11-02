import Amplify, {​​​​​​​​ Auth, Hub }​​​​​​​​ from 'aws-amplify';
import React, {​​​​​​​​ useEffect }​​​​​​​​ from 'react';
import awsconfig from './aws-exports';
import useMergeState from '../../../utils/hooks/useMergeState';
import {​​​​​​​​ updatedAwsConfig }​​​​​​​​ from './handler';
import './styles.scss';
console.log('awsconfig', updatedAwsConfig(awsconfig));
Amplify.configure(updatedAwsConfig(awsconfig));
function Login(props) {​​​​​​​​
 const [state, setState] = useMergeState({​​​​​​​​
 user: null,
 customState: null,
 }​​​​​​​​);
 const getUser = () => {​​​​​​​​
 Auth.currentAuthenticatedUser()
 .then(user => setState({​​​​​​​​ user }​​​​​​​​))
 .catch(() => console.log('Not signed in'));
 }​​​​​​​​;
 useEffect(() => {​​​​​​​​
 // get data if user logined
 getUser();
 // listen callback from social login
 Hub.listen('auth', ({​​​​​​​​ payload: {​​​​​​​​ event, data }​​​​​​​​ }​​​​​​​​) => {​​​​​​​​
 console.log('event, data', event, data);
 switch (event) {​​​​​​​​
 case 'signIn':
 setState({​​​​​​​​ user: data }​​​​​​​​);
 break;
 case 'signOut':
 setState({​​​​​​​​ user: null }​​​​​​​​);
 break;
 case 'customOAuthState':
 setState({​​​​​​​​ customState: data }​​​​​​​​);
 break;
 default:
 console.log('event', event);
 }​​​​​​​​
 }​​​​​​​​);
 }​​​​​​​​, []);
 return (
 <div className="login-page flex flex-column items-center">
 <button onClick={​​​​​​​​() => Auth.federatedSignIn({​​​​​​​​ provider: 'Facebook' }​​​​​​​​)}​​​​​​​​>Open Facebook</button>
 <button onClick={​​​​​​​​() => Auth.federatedSignIn({​​​​​​​​ provider: 'Google' }​​​​​​​​)}​​​​​​​​>Open Google</button>
 <button onClick={​​​​​​​​() => Auth.federatedSignIn({​​​​​​​​ provider: 'Bioflux' }​​​​​​​​)}​​​​​​​​>Open Bioflux</button>
 <button onClick={​​​​​​​​() => Auth.federatedSignIn()}​​​​​​​​>Open Hosted UI</button>
 {​​​​​​​​
 state.user && (
 <button onClick={​​​​​​​​() => Auth.signOut(true)}​​​​​​​​>
 Sign Out
 {​​​​​​​​' '}​​​​​​​​
 {​​​​​​​​state.user.getUsername()}​​​​​​​​
 </button>
 )
 }​​​​​​​​
 </div>
 );
}​​​​​​​​
export default Login;


