import { Validator } from '@kyvejs/protocol';
import Cosmos from './runtime';
// test block
const runtime = new Cosmos();

new Validator(runtime).bootstrap();
