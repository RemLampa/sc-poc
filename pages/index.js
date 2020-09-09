import Head from 'next/head'
import styled from 'styled-components'

import data from './data.json'
import Person from '../components/Person'

const Style = styled.div`
  padding: 0 1em;

  .persons {
    padding: 0;

    > li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }
`

export default function Home() {
  return (
    <Style>
      <Head>
        <title>Current Way</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul className="persons">
        {data.map(person => <li><Person person={person} /></li>)}
      </ul>
    </Style>
  )
}
