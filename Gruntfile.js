module.exports = function(grunt) {


    grunt.initConfig({
        uglify: {
            options: {
                mangle: true
            },
            dist: {
                files: {
                    'print_bookmarklet.min.js': ['print_bookmarklet.js']
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.task.registerTask(
        'buildReadme',
        'Builds the readme from the template',
        function() {
            var bookmarklet = grunt.file.read('print_bookmarklet.min.js'),
                readme = grunt.file.read('README.tmpl');

            readme = readme.replace('{{ bookmarklet }}', bookmarklet);
            grunt.file.write('README.md', readme);

            grunt.log.writeln('Readme built from template');
        }
    );
    grunt.registerTask('default', ['uglify', 'buildReadme']);

};