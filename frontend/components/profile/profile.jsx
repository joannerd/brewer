import React, { useEffect } from 'react';

const Profile = ({ match, user, userGuides, fetchUser }) => {
  useEffect(() => {
    fetchUser(match.params.userId);
  }, [match.params.userId])

  return (
    <div className="profile">
      <div>
        <h1>{user.username}</h1>
        <div>Picture</div>
      </div>

      <div>
        <div>
          <h2>Guides</h2>
          {userGuides.map((guide, i) => (
            <li key={i}>
              <h3>{guide.title}</h3>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile;