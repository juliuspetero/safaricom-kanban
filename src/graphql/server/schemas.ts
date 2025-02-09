export const typeDefs = `#graphql
    type Task {
        id: ID!
        title: String!
        columnId: ID!
    }
    
    type Column {
        id: ID!
        title: String!
        tasks: [Task!]!
    }

    type Query {
        columns: [Column!]!
    }

    type Mutation {
        addTask(title: String!, columnID: ID!): Task!
        deleteTask(id: ID!): Task!
        updateTask(id: ID!, title: String!): Task!
        addColumn(title: String!): Column!
        deleteColumn(id: ID!): Column!
        updateColumn(id: ID!, title: String!): Column!
        moveTask(id: ID!, sourceColumnId: ID!, destinationColumnId: ID!): Task!
    }
`;