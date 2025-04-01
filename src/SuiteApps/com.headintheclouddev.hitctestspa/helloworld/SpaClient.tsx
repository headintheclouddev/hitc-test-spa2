import HelloWorld from './HelloWorld';
import {JSX} from '@uif-js/core';

export function run(context: { baseUrl: string, setLayout(name: string): void, setContent(app: JSX.Element): void }) {
  console.log('SpaClient - run context', context);
  context.setLayout('application'); // Make the application fill the entire viewport
  context.setContent(<HelloWorld />);
}
