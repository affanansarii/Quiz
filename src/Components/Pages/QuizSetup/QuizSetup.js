import React, { useState } from 'react'
import './QuizSetup.css';
import {Button, MenuItem, TextField} from '@mui/material'
import Categories from '../../Data/Categories';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
// import AxiosQuiz from '../../../hooks/AxiosQuiz';

const QuizSetup = ({name, setName, fetchQuestions}) => {

    // const {response, error, loading} = AxiosQuiz({url: '/api_category.php'})
    // console.log(response);

    // if (loading) {
    //     return <div>Loading...</div>
    // }

    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true)
            return
        } else {
            setError(false)
            fetchQuestions(category, difficulty)
            navigate('/quiz')
        }
    }

  return (
    <div className='content'>
        <div className="settings">

            <div className="settings_select">

                {error && <ErrorMessage>Please Fill All the Fields</ErrorMessage>}

                <TextField style={{marginBottom: 25}} label='Enter Your Name' variant='outlined' onChange={(e) => setName(e.target.value)}/>

                <TextField select label='Select Category' variant='outlined' style={{marginBottom: 30}} value={category} onChange={(e) => setCategory(e.target.value)}>
                        {
                        Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
                        ))
                        }
                </TextField>

                <TextField select label="Select Difficulty" variant='outlined' style={{marginBottom: 30}} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>

                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Difficult" value="difficult">Difficult</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>

                </TextField>

                <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>Start Quiz</Button>

            </div>

        </div>
    </div>
  )
}

export default QuizSetup