import { gql } from "@apollo/client"

const GraphQueries= {
        GET_COLUMNS_QUERY: gql`
        query ColumnsQuery {
            columns {
                id
                title
                tasks {
                    id
                    title
                }
            }
        }`,
        ADD_COLUMN_MUTATION: gql`
        mutation AddColumnMutation($title: String!) {
            addColumn(title: $title) {
                id
                title
            }
        }`,
        DELETE_COLUMN_MUTATION: gql`
        mutation DeleteColumnMutation($id: ID!) {
            deleteColumn(id: $id) {
                id
                title
            }
        }`,
        UPDATE_COLUMN_MUTATION: gql`
        mutation UpdateColumnMutation($id: ID!, $title: String!) {
            updateColumn(id: $id, title: $title) {
                id
                title
            }
        }`,
        ADD_TASK_MUTATION: gql`
        mutation AddTaskMutation($title: String!, $columnId: ID!) {
            addTask(title: $title, columnId: $columnId) {
                id
                title
                columnId
            }
        }`,
        DELETE_TASK_MUTATION: gql`
        mutation DeleteTaskMutation($id: ID!) {
            deleteTask(id: $id) {
                id
                title
                columnId
            }
        }`,
        UPDATE_TASK_MUTATION: gql`
        mutation UpdateTaskMutation($id: ID!, $title: String!) {
            updateTask(id: $id, title: $title) {
                id
                title
                columnId
            }
        }`,
        MOVE_TASK_MUTATION: gql`
        mutation MoveTaskMutation($id: ID!, $sourceColumnId: ID!, $destinationColumnId: ID!) {
            moveTask(id: $id, sourceColumnId: $sourceColumnId, destinationColumnId: $destinationColumnId) {
                id
                title
                columnId
            }
        }`
}

export default GraphQueries;