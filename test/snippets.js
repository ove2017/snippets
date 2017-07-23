'use strict';

const assert = require('assert');
const html = require('../html.json');
const css = require('../css.json');
const xsl = require('../xsl.json');
const parse = require('@emmetio/abbreviation');

// simple check that every abbreviation can be expanded
describe('Snippets', () => {
    it('html', () => {
        Object.keys(html).forEach(name => {
            assert(parse(html[name]));
        });
    });

    it('xsl', () => {
        Object.keys(xsl).forEach(name => {
            assert(parse(xsl[name]));
        });
    });
});
