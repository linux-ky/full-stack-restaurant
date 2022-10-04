import { useEffect } from "react";
import { context } from '../components/context';
import Router from 'next/router'
import Loading from '../components/loading';
import AccountCard from "../components/accountcard";

export default function Account() {
  const { user } = context();

  useEffect(() => {
    if (!user) Router.push('/');
  }, []);

  if (!user) {
    return (
      <main className='main'>
        <Loading></Loading>
      </main>
    );
  }
  
  return (
    <main className='main'>
      <h1 className="title">Account</h1>
      <AccountCard user={user} />
    </main>
  );
}