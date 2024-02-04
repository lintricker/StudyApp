import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Typography, createTheme } from '@mui/material';
import '../style/typography.css'

export default function Header() {
  return (
    <div>
        <h1 className='typography'>Укажите город:</h1>
    </div>
  );
}