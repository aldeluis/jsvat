var expect = require('chai').expect;
var VatChecker = require('../dist/jsvat.js');

describe("France 4 VAT", function () {
    it("Valid VAT", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with spaces", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });

    it("Valid VAT with '-'", function () {
        expect(VatChecker.checkVatNum('QQQQQQQ')).to.be.true;
    });
});