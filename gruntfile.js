module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 3007,
                    base: 'dist',
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    'dist/app.js': ['src/app/root.module.js'],
                }
            },
            options: {
                transform: [["babelify", { "presets": ["es2015"] }]],
                browserifyOptions: {
                    debug: true
                },
            }
        },
        watch: {
            js: {
                files: ['src/app/**/*.js'],
                tasks: ['browserify', 'ngAnnotate']
            },
            html: {
                files: ['src/*.html','src/**/*.html'],
                tasks: ['copy']
            },
            less: {
                files: ['src/styles/*.less', 'src/styles/**/*.less'],
                tasks: ['less']
            }
        },
        copy: {
            html: {
                files : [
                    {
                        expand : true,
                        dest   : 'dist/templates',
                        cwd    : 'src/app',
                        flatten: true,
                        src    : [
                          '**/*.html'
                        ]
                    },
                    {
                        expand : true,
                        dest   : 'dist',
                        cwd    : 'src',
                        src    : [
                            'index.html'
                        ]
                    }
                ]
            }
        },
        less: {
            build: {
                options: {
                    style: 'expanded',
                    loadPath: 'node_modules/bootstrap/less'
                },
                files: {
                  'dist/css/app.css': 'src/styles/*.less'
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            dist: {
                files: {
                    'dist/app.js': ['dist/app.js']
                },
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.registerTask('default', ['connect', 'browserify', 'ngAnnotate', 'copy', 'less', 'watch']);
};
