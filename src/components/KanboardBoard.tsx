'use client';
import { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { 
  Box, 
  Card, 
  Typography, 
  Button, 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import GraphQueries from '@/graphql/client/__queries__';
import { Column } from '@/types/KanbanTypes';

const KanboardBoard = () => {
  const [newCardTitle, setNewCardTitle] = useState('');
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);

  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [isColumnDialogOpen, setIsColumnDialogOpen] = useState(false);

  const { loading, error, data } = useQuery(GraphQueries.GET_COLUMNS_QUERY);
  const [addTask] = useMutation(GraphQueries.ADD_TASK_MUTATION);
  const [moveTask] = useMutation(GraphQueries.MOVE_TASK_MUTATION);
  const [addColumn] = useMutation(GraphQueries.ADD_COLUMN_MUTATION);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleDragEnd = async (result: { destination: any; draggableId?: any; }) => {
    if (!result.destination) return;
    
    const { draggableId, destination } = result;
    await moveTask({
      variables: {
        taskId: draggableId,
        columnId: destination.droppableId
      },
      refetchQueries: [{ query: GraphQueries.GET_COLUMNS_QUERY }]
    });
  };

  const handleAddCard = async () => {
    if (!newCardTitle.trim() || !selectedColumn) return;
    await addTask({
      variables: {
        columnId: selectedColumn,
        title: newCardTitle
      },
      refetchQueries: [{ query: GraphQueries.GET_COLUMNS_QUERY }]
    });
    setNewCardTitle('');
    setIsTaskDialogOpen(false);
  };

  
  const handleAddColumn = async () => {
    if (!newColumnTitle.trim()) return;
    await addColumn({
      variables: {
        title: newColumnTitle
      },
      refetchQueries: [{ query: GraphQueries.GET_COLUMNS_QUERY }]
    });
    setNewColumnTitle('');
    setIsColumnDialogOpen(false);
  };

  return (
    <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', minHeight: '600px' }}>
            <DragDropContext onDragEnd={handleDragEnd}>
              {data.columns.map((column : Column) => (
                <Box key={column.id} sx={{ width: 300, bgcolor: '#f5f5f5', borderRadius: 1,p: 2 }}>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6">{column.title}</Typography>
                    <MoreVertIcon />
                  </Box>
                  
                  <Droppable droppableId={column.id}>
                    {(provided) => (
                      <Box ref={provided.innerRef} {...provided.droppableProps} sx={{ minHeight: 100 }}>
                        {column.tasks.map((task: {id:string, title:string}, index: number) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided) => (
                              <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} sx={{ mb: 1, p: 2 }}>
                                <Typography>{task.title}</Typography>
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Box>
                    )}
                  </Droppable>
                  
                  <Button startIcon={<AddIcon />} onClick={() => { setSelectedColumn(column.id); setIsTaskDialogOpen(true); }} sx={{ mt: 2 }}>
                    Add Card
                  </Button>
                </Box>
              ))}
            </DragDropContext>
            

            {/* Non drag-drop context for empty column */}
            <Box sx={{ width: 300, bgcolor: '#f5f5f5', borderRadius: 1,p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Button startIcon={<AddIcon />} onClick={() => { setIsColumnDialogOpen(true); }} sx={{ mt: 2 }}>
                    Add Column
                  </Button>
                </Box>
            </Box>

          {/* Add New Task Dialog Box   */}
          <Dialog open={isTaskDialogOpen} onClose={() => setIsTaskDialogOpen(false)}>
            <DialogTitle>Add New Card</DialogTitle>
            <DialogContent>
              <TextField autoFocus margin="dense" label="Card Title" fullWidth value={newCardTitle} onChange={(e) => setNewCardTitle(e.target.value)}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsTaskDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddCard} variant="contained">Add</Button>
            </DialogActions>
          </Dialog>

          
          {/* Add New Column Dialog Box   */}
          <Dialog open={isColumnDialogOpen} onClose={() => setIsColumnDialogOpen(false)}>
            <DialogTitle>Add New Column</DialogTitle>
            <DialogContent>
              <TextField autoFocus margin="dense" label="Card Title" fullWidth value={newColumnTitle} onChange={(e) => setNewColumnTitle(e.target.value)}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsColumnDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddColumn} variant="contained">Add</Button>
            </DialogActions>
          </Dialog>
        </Box>
    </Box>
  );
}

export default KanboardBoard;