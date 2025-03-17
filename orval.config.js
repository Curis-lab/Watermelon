 module.exports = {
    "editor-api":{
        input:{
            target: "http://localhost:3000/api",
        },
        output:{
            mode: 'single',
            target: './src/__generated__/api.ts',
            schema: './src/__generated__/types',
            client: 'react-query',

        },
        hook:{
            afterAllFilesWrite: 'eslint'
        }
    }
 }