import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

export default defineConfig({
  basePath: '/studio',
  name: 'GANZO_Content_Studio',
  title: 'GANZO_Content_Studio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});