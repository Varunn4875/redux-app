import React from "react";
import type { AppDispatch, RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button,Paper, Typography} from "@mui/material";
import Grid  from "@mui/material/Grid"
import  CheckCircleIcon  from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete"
import { toggleHabit, type Habit } from "./store/habit-slice";

const HabitList:React.FC =() =>{
 const{ habits} = useSelector((state: RootState)=> state.habits);
           const dispatch=useDispatch<AppDispatch>()
     const today= new Date().toISOString().split("T")[0];

     const getStreak =(habit:Habit)=>{
          let streak=0
          const currentDate=new Date()
          while(true){
            const dateString=currentDate.toISOString().split("T")[0]
            if(habit.completedDates.includes(dateString)){
                streak++;
                currentDate.setDate(currentDate.getDate() - 1)
            } else{
                break;
            }
          }
        return streak;  
     }
 
    return (<Box sx={{ display:"flex", flexDirection: "column", gap:2, mt:4}}>
    {habits.map((habit)=>{
        return (
        <Paper key={habit.id} elevation={2} sx={{p:2}}>
            
            <Grid container alignItems="center">
                <Grid>
                    <Typography variant="h6">{habit.name}</Typography>
                    <Typography variant="body2" 
                    color="text.secondary"
                     textTransform={"capitalize"}>
                    {habit.frequency}
                    </Typography>
                </Grid>
                <Grid>
                    <Box sx={{display:"flex",justifyContent:"flex-end",gap:1}}>
                        <Button variant="outlined"
                        color={
                            habit.completedDates.includes(today)
                            ? "success"
                            : "primary"
                        }startIcon={<CheckCircleIcon/>}
                           onClick={()=> dispatch(toggleHabit({id:habit.id, date:today}))}
                        >
                        {habit.completedDates.includes(today)
                           ? "Completed"
                           : "Mark Complete"
                        
                        }
                        </Button>
                        <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon/>}>
                            REMOVE

                        </Button>
                        
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{mt:2}}>
                <Typography variant="body2">
                    Current Streak:{getStreak(habit)} days
                </Typography>
            </Box>

        </Paper>
        )
    })}
    </Box>
    )
};
export default HabitList;