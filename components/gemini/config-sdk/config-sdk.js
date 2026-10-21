import { createComponent } from "../../../js/component-generator.js";

const tagName = 'component-gemini-config-sdk';
const htmlFilename = 'config-sdk.html';

const baseUrl = import.meta.url.substring(0, import.meta.url.lastIndexOf('/') + 1);
createComponent(tagName, baseUrl + htmlFilename);
