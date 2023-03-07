// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);


const { Todo } = initSchema(schema);

export {
  Todo
};
