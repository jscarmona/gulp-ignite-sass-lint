import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'sass-lint',

  /**
   * Task description
   * @type {String}
   */
  description: 'Lint sass files with sass-lint',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
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
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {},

  /**
   * Task function
   * @param {object} config
   */
  fn(config) {
    const stream = gulp.src(config.src)
      .pipe(sassLint({
        options: config.options,
        files: { ignore: config.ignore },
        rules: config.rules,
        config: config.configFile,
      }))
      .pipe(sassLint.format());

    if (config.failOnError) {
      return stream.pipe(sassLint.failOnError());
    }

    return stream;
  },
};
