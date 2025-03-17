import { defineConfig } from "orval";

export default defineConfig({
    eventGoAPI:{
        input:'./eventgo.yml',
        output:{
            target:'./src/openapi/index.ts',
            mock: true,
            prettier: true,
            client: 'react-query',
            mode:'tags',
            workspace: 'src/openapi',
            override:{
                mutator: './fetcher.ts',
                name: 'fetcher'
            }
        }
    }
})