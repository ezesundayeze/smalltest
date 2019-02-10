import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    file: 'index.browser.js',
    format: 'esm',
    name: 'smalltest'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),

    commonjs({
      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false,  // Default: true
    })
  ]
}
