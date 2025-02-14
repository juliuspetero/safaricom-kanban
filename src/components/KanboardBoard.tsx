// Code for KanboardBoard component
'use client';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Box, Card, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Menu,MenuItem} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import GraphQueries from '@/graphql/client/__queries__';
import { Column, Task } from '@/types/KanbanTypes';
import KanbanHeader from './KanbanHeader';

const KanboardBoard = () => {

  const [newCardTitle, setNewCardTitle] = useState('');
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);

  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [isColumnDialogOpen, setIsColumnDialogOpen] = useState(false);

  // States related to columns  
  const [columnMenuAnchorEl, setColumnMenuAnchorEl] = useState<null | SVGSVGElement>(null);
  const [updateColumnId, setUpdateColumnId] = useState<string | null>(null);
  const [updateColumnTitle, setUpdateColumnTitle] = useState<string | null>(null);
  const [isUpdateColumnDialogOpen, setIsUpdateColumnDialogOpen] = useState(false);

  // States related to tasks
  const [taskMenuAnchorEl, setTaskMenuAnchorEl] = useState<null | SVGSVGElement>(null);
  const [updateTaskId, setUpdateTaskId] = useState<string | null>(null);
  const [updateTaskTitle, setUpdateTaskTitle] = useState<string | null>(null);
  const [isUpdateTaskDialogOpen, setIsUpdateTaskDialogOpen] = useState(false);
  

  const { loading, error, data } = useQuery(GraphQueries.GET_COLUMNS_QUERY);
  const [addTask] = useMutation(GraphQueries.ADD_TASK_MUTATION);
  const [deleteTask] = useMutation(GraphQueries.DELETE_TASK_MUTATION);
  const [updateTask] = useMutation(GraphQueries.UPDATE_TASK_MUTATION);

  const [addColumn] = useMutation(GraphQueries.ADD_COLUMN_MUTATION);
  const [deleteColumn] = useMutation(GraphQueries.DELETE_COLUMN_MUTATION);
  const [updateColumn] = useMutation(GraphQueries.UPDATE_COLUMN_MUTATION);

  const [moveTask] = useMutation(GraphQueries.MOVE_TASK_MUTATION);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  


  const handleDragEnd = async (result: DropResult) => {
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

  // Handle column related operations
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

  const handleColumnMenuOpen = (event: React.MouseEvent<SVGSVGElement>, columnId: string, columnTitle: string) => {
    setColumnMenuAnchorEl(event.currentTarget);
    setUpdateColumnId(columnId);
    setUpdateColumnTitle(columnTitle);
  };

  const handleColumnMenuClose = () => {
    setColumnMenuAnchorEl(null);
    setUpdateColumnId('');
  };

  const handleUpdateColumn = () => {
    setIsUpdateColumnDialogOpen(true);
  };

  const handleDeleteColumn = async () => {
    if (!updateColumnId) return;
    await deleteColumn({
      variables: {
        id: updateColumnId
      },
      refetchQueries: [{ query: GraphQueries.GET_COLUMNS_QUERY }]
    });
    handleColumnMenuClose();
  };

  const handleUpdateColumnSubmit = async () => {
    if (!updateColumnTitle || !updateColumnId) return;
    await updateColumn({
      variables: {
        id: updateColumnId,
        title: updateColumnTitle
      },
      refetchQueries: [{ query: GraphQueries.GET_COLUMNS_QUERY }]
    });
    setUpdateColumnTitle('');
    setUpdateColumnId('');
    setIsUpdateColumnDialogOpen(false);
    setColumnMenuAnchorEl(null);
  };

  // Handle task related operations
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

  const handleTaskMenuOpen = (event: React.MouseEvent<SVGSVGElement>, taskId: string, taskTitle: string) => {
    setTaskMenuAnchorEl(event.currentTarget);
    setUpdateTaskId(taskId);
    setUpdateTaskTitle(taskTitle);
  };

  // Make apollo request to update task
  const handleUpdateTaskSubmit = async () => {
    if (!updateTaskTitle || !updateTaskId) return;
    await updateTask({
      variables: {
        id: updateTaskId,
        title: updateTaskTitle
      },
      refetchQueries: [{ query: GraphQueries.GET_COLUMNS_QUERY }]
    });
    setUpdateTaskTitle('');
    setUpdateTaskId('');
    setIsUpdateTaskDialogOpen(false);
    setTaskMenuAnchorEl(null);
  };


  // Make apollo request to delete task
  const handleDeleteTask = async () => {
    if (!updateTaskId) return;
    await deleteTask({
      variables: {
        id: updateTaskId
      },
      refetchQueries: [{ query: GraphQueries.GET_COLUMNS_QUERY }]
    });
    setTaskMenuAnchorEl(null);
    setUpdateTaskId(null);
  }


  return (
      <Box sx={{ p: 3 }}>
          <KanbanHeader />
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', minHeight: '600px' }}>
              <DragDropContext onDragEnd={handleDragEnd}>
                {data.columns.map((column : Column) => (
                  <Box key={column.id} sx={{ width: 300, bgcolor: '#f5f5f5', borderRadius: 1,p: 2 }}>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="h6">{column.title}</Typography>
                      <MoreHorizIcon onClick={(event) => handleColumnMenuOpen(event, column.id, column.title)} />
                    </Box>
                    
                    <Droppable droppableId={column.id}>
                      {(provided) => (
                        <Box ref={provided.innerRef} {...provided.droppableProps} sx={{ minHeight: 100 }}>
                          {column.tasks.map((task: Task, index: number) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                              {(provided) => (
                                <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} sx={{ mb: 1, p: 2, display: 'flex', justifyContent: 'space-between' }}>
                                  <Typography>{task.title}</Typography>
                                  <MoreVertIcon sx={{ mr: 1 }} onClick={(event ) => handleTaskMenuOpen(event, task.id, task.title)}/>
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
              { data.columns.length < 5  &&
                (<Box sx={{ width: 300, bgcolor: '#f5f5f5', borderRadius: 1,p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Button startIcon={<AddIcon />} onClick={() => { setIsColumnDialogOpen(true); }} sx={{ mt: 2 }}>
                      Add Column
                    </Button>
                  </Box>
                </Box>
                )
              }

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

            {/* Update Column Dialog Box */}
            <Dialog open={isUpdateColumnDialogOpen} onClose={() => setIsUpdateColumnDialogOpen(false)}>
                <DialogTitle>Rename Column</DialogTitle>
                <DialogContent>
                  <TextField autoFocus margin="dense" label="Column Title" fullWidth value={updateColumnTitle} onChange={(e) => setUpdateColumnTitle(e.target.value)} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => {setIsUpdateColumnDialogOpen(false); setColumnMenuAnchorEl(null)}}>Cancel</Button>
                  <Button onClick={handleUpdateColumnSubmit} variant="contained">Rename</Button>
                </DialogActions>
              </Dialog>

                {/* Column Menu */}
              <Menu anchorEl={columnMenuAnchorEl} open={Boolean(columnMenuAnchorEl)} onClose={handleColumnMenuClose}>
                <MenuItem onClick={handleUpdateColumn}>Rename</MenuItem>
                <MenuItem onClick={handleDeleteColumn}>Delete</MenuItem>
              </Menu>

              {/* Task Menu */}
              <Menu anchorEl={taskMenuAnchorEl} open={Boolean(taskMenuAnchorEl)} onClose={() => setTaskMenuAnchorEl(null)}>
                <MenuItem onClick={() => setIsUpdateTaskDialogOpen(true)}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </Menu>

              {/* Edit Task Dialog Box */}
              <Dialog open={isUpdateTaskDialogOpen} onClose={() => setIsUpdateTaskDialogOpen(false)}>
                <DialogTitle>Edit Task</DialogTitle>
                <DialogContent>
                  <TextField autoFocus margin="dense" label="Task Title" fullWidth value={updateTaskTitle} onChange={(e) => setUpdateTaskTitle(e.target.value)} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => {setIsUpdateTaskDialogOpen(false); setTaskMenuAnchorEl(null)}}>Cancel</Button>
                  <Button onClick={handleUpdateTaskSubmit} variant="contained">Edit</Button>
                </DialogActions>
              </Dialog>
          </Box>
      </Box>
  );
}

export default KanboardBoard;