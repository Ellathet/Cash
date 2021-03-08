import styles from '../styles/pages/Home.module.css';

import Head from 'next/head'
import React from 'react';
import { Profile } from '../components/Profile';
import { CompletedGoals } from '../components/CompletedGoals';
import {GoalsProfile } from '../components/GoalsProfile';
import { TransactionsHistory } from '../components/TransactionsHistory';
import { Layout } from '../components/Layout';

export default function Home () {
  return (
    <>
        <Head>
          <title>Início | Cash</title>
        </Head>
      <Layout>
      <main className={styles.MainContainer}>
      <div>
        <div>
          <Profile/>
          <CompletedGoals/>
          <GoalsProfile/>
        </div>
        <div>
          <TransactionsHistory/>
        </div>
      </div>
    </main>
      </Layout>
    </>
  )
}

