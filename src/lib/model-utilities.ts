import { PUBLIC_APIURL } from '$env/static/public';
import { marked } from 'marked';
import sanitize from 'sanitize-html';
import { isoTimestamp, nullable, pipe, string, transform } from 'valibot';

// valibot transform for compiling md and cleaning html
export const compileMarkdown = transform((input: string) => marked.parse(input, {async: false}));
export const cleanHtml = transform((input: string) => sanitize(input));

// valibot transform for asset URLs
export const assetURL = transform((input: string) => `${PUBLIC_APIURL}/assets/${input}`)

// validation shortcuts for dates (created and updated), note that dateUpdateds can be null
export const validateDateCreated = pipe(string(), isoTimestamp());
export const validateDateUpdated = nullable(pipe(string(), isoTimestamp()));
