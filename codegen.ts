import {CodegenConfig} from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: './context#DataSourceContext',
        mappers: {
            Tracks: "./src/types#TrackModel",
            Author: "./src/types#AuthorModel",
            Film: "./src/types#FilmModel",
            People: "./src/types#PeopleModel"
        }
      }
    }
  }
}
 
export default config