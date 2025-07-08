import './App.css'
import store from './store/store.ts'
import { Provider } from 'react-redux'
import { Container, Typography } from '@mui/material'
import AddHabitForm from './add-habit-form.tsx'
import HabitList from './habit-list.tsx'
import HabitStats from './habits-stats.tsx'

function App() {
 

  return (
    <Provider store={store}>
      <Container maxWidth='md'>
        <Typography component='h1' variant='h2' align='center'>
          Habit Tracker
        </Typography>
        <AddHabitForm/>
        <HabitList/>
        <HabitStats/>
      </Container>
    </Provider>
      
       
    
  )
}

export default App
