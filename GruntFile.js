module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: 'scss/*.scss',
                tasks: ['sass', 'concat', 'cssmin']
            },
            jsdoc: {
                files: ['app/*.js', 'app/**/*.js', 'app/**/**/*.js', 'libs/*.js'],
                tasks: ['jsdoc'],
                options: {
                    debounceDelay: 250
                }
            },
            build: {
                files: ['*.html', 'GruntFile.js','app/*.js', 'app/**/*.js'],
                tasks: ['clean:contents', 'concat', 'cssmin', 'ngtemplates', 'ngAnnotate', 'uglify', 'processhtml', 'copy', 'clean:folder']
            }
        },
        sass: {
            dev: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'app/*.html',
                        'app/**/*.html',
                        'app/**/**/*.html',
                        'app/*.js',
                        'app/**/*.js',
                        'app/**/**/*.js',
                        'libs/*.js',
                        'doc/*.html',
                        'GruntFile.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        jsdoc: {
            dist: {
                src: ['app/*.js', 'app/**/*.js', 'app/**/**/*.js', 'libs/*.js'],
                options: {
                    destination: 'doc',
                    //configure : "jsdoc.conf.json"
                    configure: 'node_modules/angular-jsdoc/common/conf.json',
                    template: 'node_modules/angular-jsdoc/angular-template',
                    tutorial: 'tutorials',
                    readme: './README.md'
                }
            }
        },
        clean: {
            contents: ['pre-build/*', 'build/*'],
            folder: ['pre-build']
        },
        concat: {
            dist: {
                options: {
                    separator: '\n ;'
                },
                src: [
                    'app/app.module.js',
                    'app/app.widget.js',
                    'app/app.config.js',
                    'app/app.constant.js',
                    'app/app.factory.js',
                    'app/app.service.js',
                    'app/app.prod.constant.js',
                    'app/directives/invest-widget.directive.js',
                    'app/directives/risk_meter/risk-meter.directive.js',
                    'app/layout/core-shell.js',
                    'app/home/home.component.js',
                    'app/login/login.component.js',
                    'app/dashboard/dashboard.component.js',
                    'app/invest/invest.component.js',
                    'app/auto_invest/auto-invest.component.js',
                    'app/borrower_info/borrower-info.component.js',
                    'app/payment/payment.component.js',
                    'app/components/pool_component/portfolio-pool.component.js',
                    'app/components/tab_pane_component/tab.component.js',
                    'app/components/tab_pane_component/pane.component.js',
                    'app/set_password/set-password.component.js',
                    'app/borrower_amount_invest/borrower-amount-invest.component.js',
                    'app/dashboard/dashboard_EMI/dashboard-emi.component.js',
                    'app/components/faq.component.js',
                    'app/components/privacy-policy.component.js',
                    'app/components/terms-conditions.component.js',
                    'app/components/about-us.component.js',
                    'app/components/contact-us.component.js',
                    'app/components/how-it-works.component.js'
                ],
                dest: 'pre-build/app-combined-full.js'
            },
            css: {
                options: {
                    separator: '\n'
                },
                src: ['libs/assests/font-awesome/css/font-awesome.min.css', 'css/bootstrap.min.css', 'css/introjs.css', 'css/rzslider.min.css', 'css/graph/graph.css', 'css/data_tables/datatables.min.css', 'css/data_tables/angular-datatables.min.css', 'css/data_tables/dataTables.responsive.css', 'css/main.css'],
                dest: 'css/main.combined-full.css'
            },
            libDist: {
                options: {
                    separator: '\n ;'
                },
                src: [
                    'libs/angular/angular-sanitize.min.js',
                    'libs/angular/angular-messages.min.js',
                    'libs/angular/angular-validation-match.min.js',
                    'libs/angular/angular-animate.min.js',
                    'libs/angularjs-slider/rzslider.min.js',
                    'libs/angularjs-file-upload/ng-file-upload.min.js',
                    'libs/angularjs-file-upload/ng-file-upload-shim.min.js',
                    'libs/dynamic-number/custom-dynamic-number.js',
                    'libs/bootstrap/bootstrap.min.js',
                    'libs/bootstrap/ui-bootstrap-tpls-1.3.3.min.js',
                    'libs/intro.js',
                    'libs/data_tables/angular-datatables.min.js',
                    'libs/data_tables/angular-datatables.scroller.min.js',
                    'libs/data_tables/dataTables.responsive.js',
                    'libs/main.js'
                ],
                 dest: 'pre-build/combined-libaries.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: 'main.combined-full.css',
                    dest: 'pre-build/css',
                    ext: '.min.css'
                }]
            }
        },
        ngtemplates: {
            /* 
                lsLenderApp is module name to use to create the $templatecache module 
            */
            lsLenderApp: {
                cwd: 'app',
                src: ['**/**.html', '**/**/**.html'],
                dest: 'build/app.templates.js',
                options: {
                    // usemin: '.js' // <~~ This came from the <!-- build:js --> block 
                    url: function(url) {
                        console.log(url);
                        return 'app/' + url;
                    }
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app1: {
                files: [{
                    expand: true,
                    src: ['pre-build/app-combined-full.js'],
                    ext: '.annotated.js', //Dest filepaths will have this extension.
                    extDot: 'last', //Ext in filenames begin after the last dot
                    //dest: 'app/annotate'
                }]
            },
            app2: {
                files: [{
                    expand: true,
                    src: ['pre-build/combined-libaries.js'],
                    ext: '.annotated.js', //Dest filepaths will have this extension.
                    extDot: 'last', //Ext in filenames begin after the last dot
                    //dest: 'app/annotate'
                }]
            }
        },
        uglify: {
            options: {
                mangle: true,
                separator: ';'
            },
            build: {
                src: 'pre-build/app-combined-full.annotated.js',
                dest: 'build/app.min.js'
            },
            build2: {
                src: 'pre-build/combined-libaries.annotated.js',
                dest: 'build/app.libs.min.js'
            }
        },
        processhtml: {
            options: {},
            dist: {
                files: [
                    { 'build/index.html': ['index.html'] }
                ]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: 'img/**',
                    dest: 'build/',
                }, 
                {
                    expand: true,
                    src: [
                        'libs/modernizr-2.8.3.min.js',
                        'libs/jQuery/jquery-1.12.0.min.js',
                        'libs/data_tables/jquery.dataTables.min.js',
                        'libs/angular/angular.min.js',
                        'libs/angular/angular-route-component.js',
                        'libs/angular/angular-route.min.js', 
                        'libs/dynamic-number/custom-dynamic-number.js'
                    ],
                    dest: 'build/',
                }, 
                {
                    expand: true,
                    cwd: 'css/data_tables/DataTables-1.10.12/images',
                    src: '**',
                    dest: 'build/css/DataTables-1.10.12/images/',
                }, 
                {
                    expand: true,
                    cwd: 'pre-build/css',
                    src: '**',
                    dest: 'build/css/',
                    flattern: true, // flattens results to a single level 
                    filter: 'isFile'
                }, 
                {
                    expand: true,
                    src: 'fonts/**',
                    dest: 'build/',
                }]

            },
        }

    });

    //Load NPM task
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-angular-templates');


    //define default task
    grunt.registerTask('default', ['browserSync', 'watch:sass']);
    grunt.registerTask('servedoc', ['watch:jsdoc']);
    grunt.registerTask('build', ['watch:build']);
};
