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
      path: './src/components/feature/__name__(pascalCase)'
    },
  },
  {
    option: 'Component As UI',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component'
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/ui/__name__(pascalCase)'
    },
  }
])