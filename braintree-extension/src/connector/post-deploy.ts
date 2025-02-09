import * as dotenv from 'dotenv';

dotenv.config();

import { assertError } from '../utils/assert.utils';


async function postDeploy(_properties: any): Promise<void> {

}

async function run(): Promise<void> {
  try {
    const properties = new Map(Object.entries(process.env));
    await postDeploy(properties);
  } catch (error) {
    assertError(error);
    process.stderr.write(`Post-deploy failed: ${error.message}`);
    process.exitCode = 1;
  }
}

run();
