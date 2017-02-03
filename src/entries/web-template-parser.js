import { compile } from 'compiler/index'
import { parse as baseParse } from 'compiler/parser/index'
import { optimize as baseOptimize } from 'compiler/optimizer'
import { generate as baseGenerate } from 'compiler/codegen/index'
import { extend } from 'shared/util'
import { baseOptions } from 'web/compiler/index'

function getOptions (options) {
  return options
    ? extend(extend({}, baseOptions), options)
    : baseOptions
}
export { compile }
export function parse (template, options) {
  return baseParse(template, getOptions(options))
}
export function optimize (ast, options) {
  return baseOptimize(ast, getOptions(options))
}
export function generate (ast, options) {
  return baseGenerate(ast, getOptions(options))
}
