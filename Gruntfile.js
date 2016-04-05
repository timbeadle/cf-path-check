/*
 * cfpathcheck
 * https://github.com/timbeadle/cfpathcheck
 *
 * Copyright (c) 2015 Tim Beadle
 * Licensed under the MIT license.
 */

/*global module, require */

module.exports = function (grunt) {

	'use strict';

	// load all npm grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		eslint: {
			options: {
				configFile: '.eslintrc.json'
			},
			src: ['lib/*.js']
		},
		'release-it': {
			options: {
				pkgFiles: ['package.json'],
				commitMessage: 'Release %s',
				tagName: '%s',
				tagAnnotation: 'Release %s',
				buildCommand: false
			}
		}
	});

	grunt.registerTask('test', ['eslint']);

};
