import Head from 'next/head'
import styled from 'styled-components'

import data from './data.json'
import Person from '../components/ProposedPerson'

const Style = styled.div`
  padding: 0 1em;
`

const PersonsList = styled.ul`
  padding: 0;
`

const PersonsListItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export default function Home() {
  return (
    <Style>
      <Head>
        <title>Proposed Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PersonsList>
        {data.map(person => (
          <PersonsListItem>
            <Person person={person} />
          </PersonsListItem>
        ))}
      </PersonsList>
    </Style>
  )
}
