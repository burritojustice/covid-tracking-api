const _ = require('lodash/fp')

const statesInfo = {
  AL: ['01', 'Alabama'],
  AK: ['02', 'Alaska'],
  AS: ['60', 'American Samoa'],
  AZ: ['04', 'Arizona'],
  AR: ['05', 'Arkansas'],
  CA: ['06', 'California'],
  CO: ['08', 'Colorado'],
  CT: ['09', 'Connecticut'],
  DE: ['10', 'Delaware'],
  DC: ['11', 'District Of Columbia'],
  FM: ['FM', 'Federated States Of Micronesia'],
  FL: ['12', 'Florida'],
  GA: ['13', 'Georgia'],
  GU: ['66', 'Guam'],
  HI: ['15', 'Hawaii'],
  ID: ['16', 'Idaho'],
  IL: ['17', 'Illinois'],
  IN: ['18', 'Indiana'],
  IA: ['19', 'Iowa'],
  KS: ['20', 'Kansas'],
  KY: ['21', 'Kentucky'],
  LA: ['22', 'Louisiana'],
  ME: ['23', 'Maine'],
  MH: ['RM', 'Marshall Islands'],
  MD: ['24', 'Maryland'],
  MA: ['25', 'Massachusetts'],
  MI: ['26', 'Michigan'],
  MN: ['27', 'Minnesota'],
  MS: ['28', 'Mississippi'],
  MO: ['29', 'Missouri'],
  MT: ['30', 'Montana'],
  NE: ['31', 'Nebraska'],
  NV: ['32', 'Nevada'],
  NH: ['33', 'New Hampshire'],
  NJ: ['34', 'New Jersey'],
  NM: ['35', 'New Mexico'],
  NY: ['36', 'New York'],
  NC: ['37', 'North Carolina'],
  ND: ['38', 'North Dakota'],
  MP: ['CQ', 'Northern Mariana Islands'],
  OH: ['39', 'Ohio'],
  OK: ['40', 'Oklahoma'],
  OR: ['41', 'Oregon'],
  PW: ['SL', 'Palau'],
  PA: ['42', 'Pennsylvania'],
  PR: ['72', 'Puerto Rico'],
  RI: ['44', 'Rhode Island'],
  SC: ['45', 'South Carolina'],
  SD: ['46', 'South Dakota'],
  TN: ['47', 'Tennessee'],
  TX: ['48', 'Texas'],
  UT: ['49', 'Utah'],
  VT: ['50', 'Vermont'],
  USVI: ['78', 'US Virgin Islands'],
  VI: ['78', 'US Virgin Islands'],
  VA: ['51', 'Virginia'],
  WA: ['53', 'Washington'],
  WV: ['54', 'West Virginia'],
  WI: ['55', 'Wisconsin'],
  WY: ['56', 'Wyoming'],
}
const states = _.mapValues(_.nth(1), statesInfo)
const fips = _.mapValues(_.nth(0), statesInfo)
const stateNames = {
  'Washington DC': 'DC',
  'Commonwealth of the Northern Mariana Islands': 'MP',
}
module.exports = {
  nameByCode: _.propertyOf(states),
  fipsByCode: _.propertyOf(fips),
  codeByName: _.propertyOf({ ...stateNames, ..._.invert(states) }),
}
