import styled from 'styled-components'

const Style = styled.div`
  margin: 1.5em 0;
`

const PersonInfo = styled.ul`
  padding: 1em 0;
  box-shadow: 3px 3px 10px 1px #888888;
  border-radius: 3px;
`

const PersonInfoListItem = styled.li`
  list-style-type: none;
  margin: 1em 1em;
  padding: 0;
`

const PersonGender = styled(PersonInfoListItem)`
  color: ${props => props.$gender === "Female" ? "#FFC0CB": "blue"};
`

const PersonNameHeader = styled.h2`
  margin: 0;
  color: #333333;
`

const PersonLastName = styled.span`
  color: ${props => props.$color};
`

const Person = ({ person }) => (
  <Style color={person.profile_color} gender={person.gender}>
    <PersonInfo>
      <PersonInfoListItem>
        <PersonNameHeader>
          <PersonLastName $color={person.profile_color}>{person.last_name}</PersonLastName>,{' '}
          {person.first_name}
        </PersonNameHeader>
      </PersonInfoListItem>
      <PersonInfoListItem>
        {person.email}
      </PersonInfoListItem>
      <PersonGender $gender={person.gender}>
        {person.gender}
      </PersonGender>
      <PersonInfoListItem>
        {person.ip_address}
      </PersonInfoListItem>
    </PersonInfo>
  </Style>  
)

export default Person
