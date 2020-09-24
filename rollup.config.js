import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import svgr from '@svgr/rollup'

export default {
  input: 'temp/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  // All the used libs needs to be here
  external: [
    'react',
    'react-proptypes'
  ],
  plugins: [
    resolve(),
    babel({}),
    svgr({ svgo: false }),
  ]
}
