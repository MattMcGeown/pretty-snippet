const { generateTemplateFiles } = require('generate-template-files')

generateTemplateFiles([
  {
    option: 'Component As Feature',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component'
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/__name__(pascalCase)'
    },
  }
])