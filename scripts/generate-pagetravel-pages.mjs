import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const workspaceRoot = path.resolve(__dirname, '..', '..')
const sourceDir = path.join(workspaceRoot, 'pagetravel')
const outputDir = path.join(workspaceRoot, 'vite-project', 'src', 'pages')

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])

const BOOLEAN_ATTRIBUTES = new Set([
  'allowFullScreen',
  'async',
  'autoFocus',
  'autoPlay',
  'controls',
  'defaultChecked',
  'disabled',
  'hidden',
  'loop',
  'multiple',
  'muted',
  'noValidate',
  'open',
  'playsInline',
  'readOnly',
  'required',
  'reversed',
  'scoped',
  'selected',
])

function toComponentName(fileName) {
  const baseName = fileName.replace(/\.html$/i, '')
  const tokens = baseName
    .replace(/&/g, ' And ')
    .match(/[A-Za-z0-9]+/g)

  const safeName = (tokens ?? ['Page'])
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join('')

  return /^\d/.test(safeName) ? `Page${safeName}` : safeName
}

function toDisplayName(fileName) {
  return fileName
    .replace(/\.html$/i, '')
    .replace(/[()]/g, '')
    .replace(/&/g, ' & ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
}

function toRouteSlug(fileName) {
  return toDisplayName(fileName)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function decodeEntities(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function hyphenToCamelCase(value) {
  if (value.startsWith('--')) {
    return value
  }

  return value.replace(/-([a-z])/g, (_, character) => character.toUpperCase())
}

function escapeTemplateString(value) {
  return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

function stripComments(value) {
  return value.replace(/<!--[\s\S]*?-->/g, '')
}

function normalizeClosingTags(value) {
  return value.replace(/<\/([A-Za-z][\w:-]*)\s*>/g, '</$1>')
}

function parseStyleObject(styleValue) {
  const normalizedStyleValue = decodeEntities(styleValue)

  const declarations = normalizedStyleValue
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)

  if (!declarations.length) {
    return null
  }

  const properties = declarations
    .map((declaration) => {
      const separatorIndex = declaration.indexOf(':')

      if (separatorIndex === -1) {
        return null
      }

      const property = declaration.slice(0, separatorIndex).trim()
      const value = decodeEntities(declaration.slice(separatorIndex + 1).trim())

      if (!property || !value) {
        return null
      }

      const propertyKey = JSON.stringify(hyphenToCamelCase(property))
      const propertyValue = JSON.stringify(value)

      return `${propertyKey}: ${propertyValue}`
    })
    .filter(Boolean)

  if (!properties.length) {
    return null
  }

  return `{{ ${properties.join(', ')} }}`
}

function parseAttributes(attributeString) {
  const attributes = []
  const attributePattern =
    /([^\s=<>"'`/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g

  for (const match of attributeString.matchAll(attributePattern)) {
    const [, rawName, doubleQuoted, singleQuoted, bareValue] = match
    const rawValue =
      doubleQuoted ?? singleQuoted ?? bareValue ?? null

    attributes.push({ rawName, rawValue })
  }

  return attributes
}

function renameAttribute(attributeName, tagName) {
  const lowerName = attributeName.toLowerCase()

  if (lowerName === 'class') {
    return 'className'
  }

  if (lowerName === 'for') {
    return 'htmlFor'
  }

  if (lowerName === 'tabindex') {
    return 'tabIndex'
  }

  if (lowerName === 'readonly') {
    return 'readOnly'
  }

  if (lowerName === 'maxlength') {
    return 'maxLength'
  }

  if (lowerName === 'minlength') {
    return 'minLength'
  }

  if (lowerName === 'autocomplete') {
    return 'autoComplete'
  }

  if (lowerName === 'autofocus') {
    return 'autoFocus'
  }

  if (lowerName === 'crossorigin') {
    return 'crossOrigin'
  }

  if (lowerName === 'srcset') {
    return 'srcSet'
  }

  if (lowerName === 'referrerpolicy') {
    return 'referrerPolicy'
  }

  if (lowerName === 'viewbox') {
    return 'viewBox'
  }

  if (lowerName === 'fill-rule') {
    return 'fillRule'
  }

  if (lowerName === 'clip-rule') {
    return 'clipRule'
  }

  if (lowerName === 'stroke-width') {
    return 'strokeWidth'
  }

  if (lowerName === 'stroke-linecap') {
    return 'strokeLinecap'
  }

  if (lowerName === 'stroke-linejoin') {
    return 'strokeLinejoin'
  }

  if (lowerName === 'colspan') {
    return 'colSpan'
  }

  if (lowerName === 'rowspan') {
    return 'rowSpan'
  }

  if (lowerName === 'novalidate') {
    return 'noValidate'
  }

  if (lowerName === 'playsinline') {
    return 'playsInline'
  }

  if (lowerName === 'allowfullscreen') {
    return 'allowFullScreen'
  }

  if (lowerName === 'checked') {
    return tagName === 'input' ? 'defaultChecked' : 'checked'
  }

  if (lowerName === 'value' && ['input', 'select', 'textarea'].includes(tagName)) {
    return 'defaultValue'
  }

  return attributeName
}

function isBooleanAttribute(attributeName, rawValue) {
  return (
    BOOLEAN_ATTRIBUTES.has(attributeName) &&
    (rawValue === null ||
      rawValue === '' ||
      rawValue.toLowerCase() === 'true' ||
      rawValue.toLowerCase() === attributeName.toLowerCase())
  )
}

function convertAttributes(attributeString, tagName) {
  const parsedAttributes = parseAttributes(attributeString)
  const result = []

  for (const { rawName, rawValue } of parsedAttributes) {
    if (rawName.startsWith('/')) {
      continue
    }

    const attributeName = renameAttribute(rawName, tagName)

    if (attributeName === 'selected') {
      continue
    }

    if (attributeName === 'style') {
      const styleObject = rawValue ? parseStyleObject(rawValue) : null

      if (styleObject) {
        result.push(`style=${styleObject}`)
      }

      continue
    }

    if (isBooleanAttribute(attributeName, rawValue)) {
      result.push(attributeName)
      continue
    }

    if (rawValue === null) {
      result.push(`${attributeName}={true}`)
      continue
    }

    result.push(`${attributeName}=${JSON.stringify(decodeEntities(rawValue))}`)
  }

  return result.length ? ` ${result.join(' ')}` : ''
}

function convertSelectedOptions(markup) {
  return markup.replace(/<select\b([^>]*)>([\s\S]*?)<\/select>/gi, (match, rawAttributes, innerMarkup) => {
    let selectedValue = null

    const nextInnerMarkup = innerMarkup.replace(
      /<option\b([^>]*)\sselected(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?([^>]*)>([\s\S]*?)<\/option>/i,
      (optionMatch, beforeSelected, afterSelected, optionLabel) => {
        selectedValue = decodeEntities(optionLabel.replace(/<[^>]+>/g, '').trim())
        return `<option${beforeSelected}${afterSelected}>${optionLabel}</option>`
      },
    )

    if (!selectedValue) {
      return `<select${rawAttributes}>${nextInnerMarkup}</select>`
    }

    return `<select${rawAttributes} defaultValue=${JSON.stringify(selectedValue)}>${nextInnerMarkup}</select>`
  })
}

function convertTextareas(markup) {
  return markup.replace(/<textarea\b([^>]*)>([\s\S]*?)<\/textarea>/gi, (match, rawAttributes, content) => {
    const cleanedContent = decodeEntities(content.trim())
    const nextAttributes = cleanedContent
      ? `${rawAttributes} defaultValue=${JSON.stringify(cleanedContent)}`
      : rawAttributes

    return `<textarea${nextAttributes} />`
  })
}

function convertMarkup(markup) {
  let nextMarkup = normalizeClosingTags(stripComments(markup))
  nextMarkup = convertSelectedOptions(nextMarkup)
  nextMarkup = convertTextareas(nextMarkup)

  return nextMarkup.replace(/<([A-Za-z][\w:-]*)([^<>]*?)(\/?)>/g, (match, rawTagName, rawAttributes, explicitSelfClosing) => {
    const tagName = rawTagName
    const lowerTagName = rawTagName.toLowerCase()

    if (match.startsWith('</')) {
      return match
    }

    const attributes = convertAttributes(rawAttributes, lowerTagName)
    const selfClosing = explicitSelfClosing === '/' || VOID_TAGS.has(lowerTagName) || lowerTagName === 'textarea'

    return `<${tagName}${attributes}${selfClosing ? ' />' : '>'}`
  })
}

function extractBody(html) {
  const match = html.match(/<body([^>]*)>([\s\S]*?)<\/body>/i)

  if (!match) {
    throw new Error('Could not find <body> in source HTML')
  }

  return {
    attributes: match[1] ?? '',
    content: match[2] ?? '',
  }
}

function extractTitle(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i)
  return match ? decodeEntities(match[1].trim()) : null
}

function extractStyles(html) {
  return [...html.matchAll(/<style>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[1].trim())
    .filter(Boolean)
    .join('\n\n')
}

function createBodyWrapperOpenTag(bodyAttributes) {
  const convertedOpenTag = convertMarkup(`<div${bodyAttributes}>`)
  return convertedOpenTag.replace(/>\s*$/, '>')
}

function createComponentSource({ componentName, title, styles, bodyAttributes, bodyContent }) {
  const pageTitle = title || componentName
  const styleProp = styles ? `\n      styles={\`${escapeTemplateString(styles)}\`}` : ''
  const wrapperOpenTag = createBodyWrapperOpenTag(bodyAttributes)
  const convertedContent = convertMarkup(bodyContent).trim()

  return `import { PageShell } from './PageShell'

export default function ${componentName}() {
  return (
    <PageShell
      title=${JSON.stringify(pageTitle)}${styleProp}
    >
      ${wrapperOpenTag}
${convertedContent
  .split('\n')
  .map((line) => `        ${line}`)
  .join('\n')}
      </div>
    </PageShell>
  )
}
`
}

async function main() {
  const directoryEntries = await fs.readdir(sourceDir, { withFileTypes: true })
  const htmlFiles = directoryEntries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.html'))
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right))

  await fs.mkdir(outputDir, { recursive: true })

  const pageEntries = []

  for (const fileName of htmlFiles) {
    const sourcePath = path.join(sourceDir, fileName)
    const sourceHtml = await fs.readFile(sourcePath, 'utf8')
    const componentName = toComponentName(fileName)
    const { attributes: bodyAttributes, content: bodyContent } = extractBody(sourceHtml)
    const componentSource = createComponentSource({
      componentName,
      title: extractTitle(sourceHtml),
      styles: extractStyles(sourceHtml),
      bodyAttributes,
      bodyContent,
    })

    const outputPath = path.join(outputDir, `${componentName}.jsx`)
    await fs.writeFile(outputPath, componentSource, 'utf8')

    pageEntries.push({
      componentName,
      displayName: toDisplayName(fileName),
      slug: toRouteSlug(fileName),
    })
  }

  const indexSource = `${pageEntries
    .map(({ componentName }) => `import ${componentName} from './${componentName}.jsx'`)
    .join('\n')}

export {
${pageEntries.map(({ componentName }) => `  ${componentName},`).join('\n')}
}

export const PAGE_COMPONENTS = {
${pageEntries.map(({ componentName }) => `  ${JSON.stringify(componentName)}: ${componentName},`).join('\n')}
}

export const PAGE_ROUTES = [
${pageEntries
  .map(
    ({ componentName, displayName, slug }) =>
      `  { id: ${JSON.stringify(componentName)}, label: ${JSON.stringify(displayName)}, path: ${JSON.stringify(`/pages/${slug}`)}, Component: ${componentName} },`,
  )
  .join('\n')}
]

export const PAGE_OPTIONS = [
${pageEntries
  .map(
    ({ componentName, displayName, slug }) =>
      `  { id: ${JSON.stringify(componentName)}, label: ${JSON.stringify(displayName)}, path: ${JSON.stringify(`/pages/${slug}`)} },`,
  )
  .join('\n')}
]
`

  await fs.writeFile(path.join(outputDir, 'index.js'), indexSource, 'utf8')

  console.log(`Generated ${pageEntries.length} pages in ${outputDir}`)
}

await main()
