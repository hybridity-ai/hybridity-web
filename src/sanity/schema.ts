import { type SchemaTypeDefinition } from 'sanity'
import * as schemaTypes from './schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: Object.values(schemaTypes),
}
