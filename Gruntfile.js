module.exports = function( grunt ) {

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		pot: {
			options: {
				encoding: 'UTF-8',
				keywords: [
					'gettext',
					'__',
					'_e',
					'_n:1,2',
					'_x:1,2c',
					'_ex:1,2c',
					'_nx:4c,1,2',
					'esc_attr__',
					'esc_attr_e',
					'esc_attr_x:1,2c',
					'esc_html__',
					'esc_html_e',
					'esc_html_x:1,2c',
					'_n_noop:1,2',
					'_nx_noop:3c,1,2',
					'__ngettext_noop:1,2'
				],
				package_version: '',
				msgid_bugs_address: 'nom@deliciousbrains.com',
				comment_tag: 'translators:'
			},
			glotpress: {
				options: {
					text_domain: 'glotpress',
					dest: 'languages/glotpress-en.pot',
					package_name: 'glotpress'
				},
				files: [
					{
						expand: true,
						src: [ '**/*.php' ]
					}
				]
			}
		},
	} );

	require( 'load-grunt-tasks' )( grunt );

	grunt.registerTask( 'default', [ 'pot' ] );
};
