import { Validator } from "@kyvejs/protocol";

import Bitcoin from "./runtime";

const runtime = new Bitcoin();
// test block
new Validator(runtime).bootstrap();
