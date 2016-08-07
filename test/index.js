import { expect } from 'chai';
import task from '../src';

describe('Task', () => {
  describe('#name', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });

    it('should be named `sass-lint`', () => {
      expect(task.name).to.equal('sass-lint');
    });
  });

  describe('#description', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });
  });

  describe('#config', () => {
    it('should be an object', () => {
      expect(task.config).to.be.a('object');
    });

    it('should have default configuration', () => {
      expect(task.config).to.eql({
        src: './client/app/**/*.scss',
        failOnError: true,
        options: {
          formatter: 'stylish',
          'merge-default-rules': true,
        },
        rules: {},
        ignore: null,
        configFile: null,
        deps: [],
      });
    });
  });

  describe('#help', () => {
    it('should be an object', () => {
      expect(task.help).to.be.a('object');
    });
  });

  describe('#fn', () => {
    it('should be a function', () => {
      expect(task.fn).to.be.a('function');
    });
  });
});
