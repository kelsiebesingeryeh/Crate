// Helpers

// Render element or component by provided condition
export function renderIf(condition, renderFn) {
  return condition ? renderFn() : null
}

// Substring with ...
export function subString(string, length = 0) {
  return string.length > length ? `${ string.substr(0, length) }...` : string
}

// Duplicate object
export function duplicate(object) {
  return Object.assign({}, object)
}

// Return empty string if value is null
export function nullToEmptyString(value) {
  return value === null ? '' : value
}

// Return zero if value is null
export function nullToZero(value) {
  return value === null ? 0 : value
}

// Add (s) to any string by count
export function plural(value) {
  return value === 1 ? '' : 's'
}

// Check if object is empty
export function isEmpty(obj) {
  let name;
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  if (obj.constructor !== Object) {
    return false;
  }
  return true;
}

// Slug
export function slug(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    //.replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')            // Trim - from end of text
}

//Format surveyModal
export function formatSurvey(products) {
  const surveyProducts = products.reduce((acc, listObj, i) => {
    acc[i + 1] = listObj.products.map(product => {
      product.selected = false
      return product
    })
    return acc
  }, {})

  return surveyProducts
}

//convert style to string
export function styleToString(style) {
  const key = {
    1: 'Casual',
    2: 'Classy',
    3: 'Edgy'
  }

  return key[style]
}
