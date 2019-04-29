import * as React from 'react'
import { MemberEntity } from '../model/member';
import { getMembersCollection } from '../api/memberApi';

const useMemberCollection = () => {
  const [memberCollection, setMemberCollection] = React.useState<MemberEntity[]>([])
  
  const loadMemberCollection = () => {
    getMembersCollection().then(memberCollection => {
      setMemberCollection(memberCollection)
    })
  }
  return {memberCollection, loadMemberCollection}
}

export const MemberTableComponent = () => {
  const {memberCollection, loadMemberCollection} = useMemberCollection()
  React.useEffect(() => {
    loadMemberCollection()
  }, [])

  return (
    <>
    {memberCollection.map(member => (
      <h1 key={member.id}>{member.login}</h1>
    ))}
    </>
  )
}