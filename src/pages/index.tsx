import styles from '../styles/pages/Home.module.css';
import { GetServerSideProps } from "next";

import Head from 'next/head'
import React from 'react';
import { Profile } from '../components/Profile';
import { CompletedGoals } from '../components/CompletedGoals';
import {GoalsProfile } from '../components/GoalsProfile';
import { TransactionsHistory } from '../components/TransactionsHistory';
import { Layout } from '../components/Layout';
import { SettingsProvider } from '../contexts/SettingsContext';
import { AddTransactionProvider } from '../contexts/TransactionContext';

export default function Home (props) {
  return (
    <>
      <AddTransactionProvider
        transactions={props.transactions}
      >
        <Head>
          <title>Início | Cash</title>
        </Head>
      <SettingsProvider>
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
      </SettingsProvider>
      </AddTransactionProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
    const { transactions } = ctx.req.cookies;

    const transactionsArr = transactions === undefined ? [] : JSON.parse(transactions)

    return {
      props: {
        transactions: transactionsArr
      }
    }
  }