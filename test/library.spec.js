import chai from 'chai';
import Filch from '../lib/Filch.js';

chai.expect();

const expect = chai.expect;

var lib;

describe('Given an instance of my Filch', function () {
  before(function () {
    lib = new Filch();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('filch');
    });
  });
});