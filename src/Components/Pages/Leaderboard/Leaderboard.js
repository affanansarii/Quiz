import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Leaderboard.css';

const Leaderboard = ({name, score}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name, navigate])

  return (
    <div className='result'>
      <span className='title'>Final Score: {score}</span>
      <Button
      variant='contained'
      color='secondary'
      size='large'
      style={{alignSelf: "center", marginTop: 20}}
      href='/'
      >
        Go To Homepage
      </Button>
    </div>
  )
}

export default Leaderboard