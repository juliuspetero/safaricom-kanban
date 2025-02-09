import datasets from './__datasets__';

export const resolvers = {
    Query: {
        columns: () => datasets.columns
    },
    Column: {
        tasks: (column: { id: string; }) => datasets.tasks.filter(task => task.columnId === column.id),
    },
    Mutation: {
        addTask: (_ : any, args: { title: string; columnId: string; }) => { 
            const newTask = {id: String(datasets.tasks.length + 1), ...args};
            datasets.tasks.push(newTask);
            return newTask;
        },    
        addColumn: (_ : any, args: { title: string; }) => {
            const newColumn = {id: String(datasets.columns.length + 1), title: args.title};
            datasets.columns.push(newColumn);
            return newColumn;
        },
        deleteTask: (_ : any, args: { id: string; }) => {
            const task = datasets.tasks.find(task => task.id === args.id);
            datasets.tasks = datasets.tasks.filter(task => task.id !== args.id);
            return task;
        },
        deleteColumn: (_ : any, args: { id: string; }) => {
            const column = datasets.columns.find(column => column.id === args.id);
            datasets.columns = datasets.columns.filter(column => column.id !== args.id);
            return column;
        },
        updateTask: (_ : any, args: { id: string; title: string; }) => {
            const task = datasets.tasks.find(task => task.id === args.id);
            datasets.tasks.map(task => task.id === args.id ? Object.assign(task, {title: args.title}) : task);
            return task;
        },
        updateColumn: (_ : any, args: { id: string; title: string; }) => {
            const column = datasets.columns.find(column => column.id === args.id);
            datasets.columns.map(column => column.id === args.id ? Object.assign(column, {title: args.title}) : column);
            return column;
        },
        moveTask: (_ : any, args: { id: string; sourceColumnId: string; destinationColumnId: string; }) => {
            const task = datasets.tasks.find(task => task.id === args.id);
            datasets.tasks.map(task => task.id === args.id ? Object.assign(task, {columnId: args.destinationColumnId}) : task);
            return task;
        }
    }
    
};
