import * as pd from './puppeteer-declarations';
import { E2EElement } from './puppeteer-element';
import * as puppeteer from 'puppeteer';
export declare function find(page: pd.E2EPageInternal, rootHandle: puppeteer.ElementHandle, selector: pd.FindSelector): Promise<E2EElement>;
export declare function findAll(page: pd.E2EPageInternal, rootHandle: puppeteer.ElementHandle, selector: pd.FindSelector): Promise<E2EElement[]>;
