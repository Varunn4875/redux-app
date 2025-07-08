import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {Box, FormControl, InputLabel, MenuItem, Select, TextField,Button} from "@mui/material"
import type { AppDispatch } from "./store/store";
import { addHabit } from "./store/habit-slice";


const AddHabitForm: React.FC =()=>{

    const [name,setName]=useState<string>("")
    const [frequency,setfrequency]=useState<"daily" | "weekly">("daily") 
    
    const dispatch=useDispatch<AppDispatch>()


     const handleSubmit=(e:React.FormEvent)=>{   
        e.preventDefault()
        if(name.trim()) {
            dispatch(
                addHabit({
                    name,
                    frequency,
                })
            );
            setName("")

        }
     }

    return(
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display:'flex',
                flexDirection:"column",
                gap:2,
            }}
            >
                <TextField
                label="Habit Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Habit Name"
                fullWidth
                />

                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                       value={frequency}
                       onChange={(e)=> setfrequency(e.target.value as "daily" | "weekly")}
                    >
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' variant="contained" color="primary">
                    AddHabit
                </Button>
            
            </Box>
        </form>
    )

}
export default AddHabitForm;