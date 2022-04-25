import React from 'react'
import Banner from './Banner'
import sorov from './baza/sorov'
import Films from './Films'
import Navbar from './Navbar'

function Main({ user }) {

  return (
    <div className='main'>
      <Navbar user={user} />
      <Banner />
      <Films isLargeRow title={"NETFLIX ORIGINALS"} 
              movie_request={sorov.fetchNetflixOriginals} />

      <Films title={"Trending now"} movie_request={sorov.fetchTrending}/>
    </div>
  )
}

export default Main