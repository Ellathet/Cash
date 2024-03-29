import styles from '../styles/pages/Home.module.css';
import { GetServerSideProps } from "next";

import Head from 'next/head'
import React from 'react';
import { Profile } from '../components/Profile';
import { Badges } from '../components/Badges';
import {GoalsProfile } from '../components/GoalsProfile';
import { TransactionsHistory } from '../components/TransactionsHistory';
import { Layout } from '../components/Layout';
import { SettingsProvider } from '../contexts/SettingsContext';
import { AddTransactionProvider } from '../contexts/TransactionContext';
import { BadgesProvider } from '../contexts/BadgesContext'

export default function Home (props) {
  return (
    <>
      <AddTransactionProvider
        transactions={props.transactions}
      >
          <BadgesProvider
          storageTransactionsTotal={props.storageTransactionsTotal}
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
          <Badges/>
          <GoalsProfile/>
        </div>
        <div>
          <TransactionsHistory/>
        </div>
      </div>
    </main>
      </Layout>
      </SettingsProvider>
      </BadgesProvider>
      </AddTransactionProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
    const { transactions, storageTransactionsTotal } = ctx.req.cookies;

    const transactionsArr = transactions === undefined ? [] : JSON.parse(transactions)
    const storageTransactionsTotalArr = storageTransactionsTotal === undefined ? 0 : Number(storageTransactionsTotal)

    return {
      props: {
        transactions: transactionsArr,
        storageTransactionsTotal: storageTransactionsTotalArr
      }
    }
  }