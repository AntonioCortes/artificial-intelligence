import { createComponent } from "../../../js/component-generator.js";

const tagName = 'component-gemini-menciones-arroba';
const htmlFilename = 'menciones-arroba.html';

const baseUrl = import.meta.url.substring(0, import.meta.url.lastIndexOf('/') + 1);
createComponent(tagName, baseUrl + htmlFilename);
