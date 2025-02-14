// Code for the resolvers of the GraphQL server
import { Column, Datasets } from '@/types/KanbanTypes';
import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'public', '__datasets__.json');

const readJsonFile = (filePath: string): Datasets => {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const jsonData: Datasets = JSON.parse(data);
      return jsonData;
    } catch (error) {
      console.error('Error reading JSON file:', error);
      throw error;
    }
};

const updateJsonFile = (filePath: string, updateFn: (data: Datasets) => Datasets) => {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const jsonData: Datasets = JSON.parse(data);
      const updatedData = updateFn(jsonData);
      fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');
      console.log('JSON file has been updated successfully.');
    } catch (error) {
      console.error('Error updating JSON file:', error);
    }
  };
export const resolvers = {
    Query: {
        columns: () => readJsonFile(filePath).columns,
    },
    Column: {
        tasks: (column: { id: string; }) => readJsonFile(filePath).tasks.filter(task => task.columnId === column.id),
    },
    Mutation: {
        addTask: (_ : unknown, args: { title: string; columnId: string; }) => { 
            const datasets = readJsonFile(filePath);
            const newTask = {id: String(datasets.tasks.length + 1), ...args};
            datasets.tasks.push(newTask);
            updateJsonFile(filePath, () => datasets);
            return newTask;
        },    
        addColumn: (_ : unknown, args: { title: string; }) => {
            const datasets = readJsonFile(filePath);
            const newColumn : Column = {id: String(datasets.columns.length + 1), title: args.title};
            datasets.columns.push(newColumn);
            updateJsonFile(filePath, () => datasets);
            return newColumn;
        },
        deleteTask: (_ : unknown, args: { id: string; }) => {
            const datasets = readJsonFile(filePath);
            const task = datasets.tasks.find(task => task.id === args.id);
            datasets.tasks = datasets.tasks.filter(task => task.id !== args.id);
            updateJsonFile(filePath, () => datasets);
            return task;
        },
        deleteColumn: (_ : unknown, args: { id: string; }) => {
            const datasets = readJsonFile(filePath);
            const column = datasets.columns.find(column => column.id === args.id);
            datasets.columns = datasets.columns.filter(column => column.id !== args.id);
            datasets.tasks = datasets.tasks.filter(task => task.columnId !== args.id);
            updateJsonFile(filePath, () => datasets);
            return column;
        },
        updateTask: (_ : unknown, args: { id: string; title: string; }) => {
            const datasets = readJsonFile(filePath);
            const task = datasets.tasks.find(task => task.id === args.id);
            datasets.tasks.map(task => task.id === args.id ? Object.assign(task, {title: args.title}) : task);
            updateJsonFile(filePath, () => datasets);
            return task;
        },
        updateColumn: (_ : unknown, args: { id: string; title: string; }) => {
            const datasets = readJsonFile(filePath);
            const column = datasets.columns.find(column => column.id === args.id);
            datasets.columns.map(column => column.id === args.id ? Object.assign(column, {title: args.title}) : column);
            updateJsonFile(filePath, () => datasets);
            return column;
        },
        moveTask: (_ : unknown, args: { taskId: string; columnId: string }) => {
            const datasets = readJsonFile(filePath);
            const task = datasets.tasks.find(task => task.id === args.taskId);
            datasets.tasks.map(task => task.id === args.taskId ? Object.assign(task, {columnId: args.columnId}) : task);
            updateJsonFile(filePath, () => datasets);
            return task;
        }
    }
    
};
