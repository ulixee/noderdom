import * as Fs from 'fs';
import { dbPath } from '../index';

try { Fs.unlinkSync(dbPath) } catch (err) {} // tslint:disable-line
