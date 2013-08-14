module.exports = function(grunt) {


    grunt.initConfig({
        uglify: {
            options: {
                mangle: true
            },
            dist: {
                files: {
                    'src/print_bookmarklet.min.js': ['src/print_bookmarklet.js']
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.task.registerTask(
        'buildReadme',
        'Builds the readme from the template',
        function() {
            var bookmarklet = grunt.file.read('src/print_bookmarklet.min.js'),
                readme = grunt.file.read('src/README.tmpl');

            readme = readme.replace(/\{\{ bookmarklet \}\}/g, bookmarklet);
            grunt.file.write('README.md', readme);

            grunt.log.writeln('Readme built from template');
        }
    );
    grunt.registerTask('default', ['uglify', 'buildReadme']);

};