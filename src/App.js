import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Box, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  const [items, setItems] = useState(['Random text 1', 'Random text 2', 'Random text 3']);
  const [inputValue, setInputValue] = useState('');

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleAdd = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        <Typography variant="h4">Shrikant Poojari</Typography>
        <Typography variant="h6">MAID ID: shrikantpoojari29@gmail.com</Typography>
        <Typography variant="h6">Phone: 7022466330</Typography>
      </Box>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          label="New Item"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAdd}
          sx={{ mt: 2 }}
        >
          Add Item
        </Button>
      </Paper>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} component={Paper} sx={{ mb: 1 }}>
            <ListItemText primary={item} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
