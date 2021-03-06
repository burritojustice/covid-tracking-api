const _ = require('lodash/fp')
/* globals fetch */

const fetchJson = (url) => fetch(
  url,
  { cf: { cacheEverything: true, cacheTtl: 120 } },
).then((res) => res.json())

const fetchXml = (url) => fetch(
  url,
  { cf: { cacheEverything: true, cacheTtl: 300 }, headers: { Accept: 'text/xml' } },
).then((response) => response.text())

const fetchYaml = (url) => fetch(
  url,
  {
    cf: { cacheEverything: true, cacheTtl: 120 },
    headers: { Accept: 'application/x-yaml, text/yaml, text/html' },
  },
).then((response) => response.text())

function rejectError(x) {
  return x.error ? Promise.reject(x) : x
}

function processResult(fixItems) {
  if (!_.isFunction(fixItems)) return _.identity
  return fixItems
}

function postJson(url, data) {
  return fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  ).then((response) => response.json())
}

function log(item) {
  const query = `mutation log($item: log_insert_input! ){
    insert_log(objects: [$item]) {
      affected_rows
    }
  }`
  return postJson(
    'https://covid-tracking.herokuapp.com/v1/graphql',
    { query, variables: { item } },
  )
}

module.exports = {
  fetchJson,
  fetchXml,
  fetchYaml,
  log,
  postJson,
  processResult,
  rejectError,
}
