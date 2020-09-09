import styled from 'styled-components'

const Style = styled.div`
  margin: 1.5em 0;

  ul {
    padding: 1em 0;
    box-shadow: 3px 3px 10px 1px #888888;
    border-radius: 3px;

    li {
      list-style-type: none;
      margin: 1em 1em;
      padding: 0;

      h2 {
        margin: 0;
        color: #333333;
        
        .last-name {
          color: ${props => props.color};
        }
      }
    }

    .gender {
      color: ${props => props.gender === "Female" ? "#FFC0CB": "blue"};
    }
  }
`

const Person = ({ person }) => (
  <Style color={person.profile_color} gender={person.gender}>
    <ul className="person">
      <li className="name">
        <h2>
          <span className="last-name">{person.last_name}</span>,{' '}
          {person.first_name}
        </h2>
      </li>
      <li className="email">
        {person.email}
      </li>
      <li className="gender">
        {person.gender}
      </li>
      <li className="ip-address">
        {person.ip_address}
      </li>
    </ul>
  </Style>  
)

export default Person
