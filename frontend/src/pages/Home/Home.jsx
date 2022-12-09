import React from 'react'

import './Home.css'

export default function Home({ fullName }) {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed fullName = { fullName }/>
        <Rightbar />
      </div>
    </>
  );
}
