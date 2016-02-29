/*
To install dependencies, run:

sudo -s

Then enter your root user password. Once logged in at the root user, you can 
determine which directory you’re in by running:

ls

...for a list of the current directory’s contents. Navigate to the project’s root directory 
in Terminal and run:

npm install <module> --save-dev

...for each package you want to run in your project. For example, you’re definitely 
going to run:

npm install grunt --save-dev

...as your first package. Other probable must-haves are:

npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-compass --save-dev
npm install grunt-contrib-jade --save-dev
npm install grunt-svgstore --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-notify --save-dev

Additional packages can be found here: http://npmjs.org/

When you’re done installing, it’s a good idea to log out of root user. Do so by running:

exit
*/

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*
		grunt-contrib-jshint: Reports on JavaScript errors in the Terminal for easy debugging
		Documentation: http://npmjs.org/package/grunt-contrib-jshint
		*/
		jshint: {
			// Paths to the files to debug
			files: [
				'Gruntfile.js',
				'assets/Moneris/js/custom/**/*.js'// ,
				// 'js/libraries/**/*.js',
				// 'js/plugins/**/*.js'
			],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				},
				// Do not debug the following files:
				ignores: [
					// '<%= concat.dist.dest %>',
					'assets/Moneris/js/libraries/**/*.js',
					'assets/Moneris/js/plugins/**/*.js',
					'assets/Moneris/js/min/**/*.js'
				]
			}
		},
		/*
		grunt-contrib-compass: Runs Compass to compile Sass into CSS
		Documentation: http://npmjs.org/package/grunt-contrib-compass
		*/
		compass: {
			dist: {
				options: {
					config: 'config.rb'/*,
					sassDir: 'src/html/css/scss',
					cssDir: 'src/html/css'*/
				}
			}
		},
		/*
		grunt-contrib-jade: Compiles .jade files into HTML
		Documentation: http://npmjs.org/package/grunt-contrib-jade
		*/
		jade: {
			compile: {
				options: {
					pretty: true/*,
					data: {
						environment: '<%= environment %>',
						data: '<%= pageData %>',
						jsReference: '<%= jsReference %>',
						pageVars: '<%= pageVars %>'
					}*/
				},
				files: {
					'list.html': [
						'assets/Moneris/tools/jade/pages/list.jade'
					],
					'svgs.html': [
						'assets/Moneris/tools/jade/pages/svgs.jade'
					],/*
					'template-no-columns.html': [
						'assets/Moneris/tools/jade/pages/template_no_columns.jade'
					],
					'template-left-sidebar.html': [
						'assets/Moneris/tools/jade/pages/template_left_sidebar.jade'
					],
					'template-two-columns.html': [
						'assets/Moneris/tools/jade/pages/template_two_columns.jade'
					],
					'template-three-columns.html': [
						'assets/Moneris/tools/jade/pages/template_three_columns.jade'
					],*/
					'index.html': [
						'assets/Moneris/tools/jade/pages/homepage_visit_1_english.jade'
					],
					'homepage_visit_2_en.html': [
						'assets/Moneris/tools/jade/pages/homepage_visit_2_english.jade'
					],
					'homepage_visit_3_en.html': [
						'assets/Moneris/tools/jade/pages/homepage_visit_3_english.jade'
					],
					'homepage_visit_4_en.html': [
						'assets/Moneris/tools/jade/pages/homepage_visit_4_english.jade'
					]/*,
					'index_fr.html': [
						'assets/Moneris/tools/jade/pages/homepage_french.jade'
					],
					'category_page.html': [
						'assets/Moneris/tools/jade/pages/category_page.jade'
					],
					'article_page.html': [
						'assets/Moneris/tools/jade/pages/article_page.jade'
					],
					'product_tabbed_page.html': [
						'assets/Moneris/tools/jade/pages/product_tabbed_page.jade'
					],
					'apply_now_form.html': [
						'assets/Moneris/tools/jade/pages/apply_now_form.jade'
					],
					'contact_moneris_security_form.html': [
						'assets/Moneris/tools/jade/pages/contact_moneris_security_form.jade'
					],
					'customer_relations_request_form.html': [
						'assets/Moneris/tools/jade/pages/customer_relations_request_form.jade'
					],
					'office_of_ceo_form.html': [
						'assets/Moneris/tools/jade/pages/office_of_ceo_form.jade'
					],
					'pos_software_partners_request_form.html': [
						'assets/Moneris/tools/jade/pages/pos_software_partners_request_form.jade'
					],
					'do_not_call_form.html': [
						'assets/Moneris/tools/jade/pages/do_not_call_form.jade'
					],
					'ecommerce_express_step_1_form.html': [
						'assets/Moneris/tools/jade/pages/ecommerce_express_step_1_form.jade'
					],
					'subscribe_form.html': [
						'assets/Moneris/tools/jade/pages/subscribe_form.jade'
					],
					'unsubscribe_form.html': [
						'assets/Moneris/tools/jade/pages/unsubscribe_form.jade'
					],
					'gateway_services_subscription_form.html': [
						'assets/Moneris/tools/jade/pages/gateway_services_subscription_form.jade'
					],
					'form_confirmation.html': [
						'assets/Moneris/tools/jade/pages/form_confirmation.jade'
					],
					'air_miles_form_english.html': [
						'assets/Moneris/tools/jade/pages/air_miles_form_english.jade'
					],
					'air_miles_form_thank_you_english.html': [
						'assets/Moneris/tools/jade/pages/air_miles_form_thank_you_english.jade'
					],
					'air_miles_form_french.html': [
						'assets/Moneris/tools/jade/pages/air_miles_form_french.jade'
					],
					'air_miles_form_thank_you_french.html': [
						'assets/Moneris/tools/jade/pages/air_miles_form_thank_you_french.jade'
					],
					'be_payment_ready_form_english.html': [
						'assets/Moneris/tools/jade/pages/be_payment_ready_form_english.jade'
					],
					'be_payment_ready_form_french.html': [
						'assets/Moneris/tools/jade/pages/be_payment_ready_form_french.jade'
					],
					'be_payment_ready_form_thank_you_english.html': [
						'assets/Moneris/tools/jade/pages/be_payment_ready_form_thank_you_english.jade'
					],
					'be_payment_ready_form_thank_you_french.html': [
						'assets/Moneris/tools/jade/pages/be_payment_ready_form_thank_you_french.jade'
					],
					'search_results_page.html': [
						'assets/Moneris/tools/jade/pages/search_results_page.jade'
					],
					'search_results_no_results_page.html': [
						'assets/Moneris/tools/jade/pages/search_results_no_results_page.jade'
					],
					'error_page.html': [
						'assets/Moneris/tools/jade/pages/error_page.jade'
					],
					'mobile_solutions.html': [
						'assets/Moneris/tools/jade/pages/mobile_solutions_english.jade'
					],
					'mobile_solutions_fr.html': [
						'assets/Moneris/tools/jade/pages/mobile_solutions_french.jade'
					]*/
				}
			}
		},

		svgstore: {
			options: {
				prefix : 'icon-', // This will prefix each ID
				cleanup: false,
				svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
					xmlns: 'http://www.w3.org/2000/svg',
					style: 'display: none;'
				}
			},
			default: {
				options: {
					formatting: {
						indent_size: 2
					}
				},
				files: {
					'assets/Moneris/tools/jade/includes/components/svg_definitions.svg': [
						'assets/Moneris/svg/*.svg'
					]
				}
			}
		},

		/*
		grunt-notify: Automatic desktop notifications for Grunt errors and warnings using 
		Mavericks Notification Center
		Documentation: http://npmjs.org/package/grunt-notify
		*/
		notify: {
			jshint: {
				options: {
					title: 'JSHint Ran Successfully',
					message: 'JavaScript is error-free. Refresh your browser to see your results.'
				}
			},
			compass: {
				options: {
					title: 'Compass Complete',
					message: 'New CSS has been generated. Refresh your browser to see your results.'
				}
			},
			jade: {
				options: {
					title: 'Jade Complete',
					message: 'New HTML has been generated. Refresh your browser to see your results.'
				}
			},
			svg: {
				options: {
					title: 'SVG and Jade Complete',
					message: 'New .svg include and all HTML has been generated. Refresh your browser to see your results.'
				}
			}
		},
		/*
		grunt-contrib-watch: Run predefined tasks whenever watched file patterns are added, 
		changed or deleted
		Documentation: http://npmjs.org/package/grunt-contrib-watch
		*/
		watch: {
			/*
			Each object at this level is for a series of tasks to be run if a file in one of the 
			specified files paths are altered in any way. The “files” arrays are the paths to 
			the files to be watched and the “tasks” arrays are the tasks to be run if one of 
			the files are saved.
			*/
			'assets/Moneris/svg': {
				files: [
					'assets/Moneris/svg/*.svg'
				],
				tasks: [
					'svgstore',
					'jade',
					'notify:svg'
				],
				options: {
					livereload: false
				}
			},
			'assets/Moneris/tools/jade': {
				files: [
					'assets/Moneris/tools/jade/**/*.jade'
				],
				tasks: [
					'jade',
					'notify:jade'
				],
				options: {
					livereload: false
				}
			},
			'assets/Moneris/tools/scss': {
				files: [
					'assets/Moneris/tools/scss/**/*.scss'
				],
				tasks: [
					'compass',
					'notify:compass'
				],
				options: {
					livereload: false
				}
			},
			js: {
				files: [
					'<%= jshint.files %>'
				],
				tasks: [
					'jshint',
					'notify:jshint'
				],
				options: {
					livereload: false
				}
			}
		}
	});

	// Load the plugins you want to run...
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-svgstore');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Tasks:

	// The default task can be run just by returning “grunt” on the command line
	grunt.registerTask('default', [
		'jshint',
		// 'concat',
		// 'uglify',
		'compass',
		'jade',
		'svgstore'
	]);

	/*
	In order to run the watch task, it will need to be activated by returning “grunt watch” 
	on the command line. To stop running watch, close the Terminal window in which 
	its running.
	*/

	// Custom tasks:

	/*
	The gen task will generate the compiled templates from the includes, and then the 
	static .html files from the compiled templates (in that order)
	This would be run by returning “grunt gen” on the command line
	*/
	grunt.registerTask('gen', [
		'jade'
	]);
	
	/*
	This would be run by returning “grunt test” on the command line
	*/
	/*
	grunt.registerTask('test', [
		// 'test'
	]);
	*/

};