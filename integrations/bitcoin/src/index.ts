import { Validator } from "@kyvejs/protocol";

import Bitcoin from "./runtime";

const runtime = new Bitcoin();
//test
new Validator(runtime).bootstrap();
