// This work is licensed under a Creative Commons Attribution 4.0 License
// http://download.geonames.org/export/dump/

const porperties = [
  'id',
  'name',
  'asciiname',
  'alternativeNames',
  'lat',
  'lon',
  'featureClass',
  'featureCode',
  'country',
  'altCountry',
  'adminCode',
  'countrySubdivision',
  'municipality',
  'municipalitySubdivision',
  'population',
  'elevation',
  'dem',
  'tz',
  'lastModified',
];

const files = {
  ctest: { name: 'citiesTest', file: __dirname + '/citiesTest.txt' },
  c1000: { name: 'cities1000', file: __dirname + '/cities1000.txt' },
  c5000: { name: 'cities5000', file: __dirname + '/cities5000.txt' },
  c15000: { name: 'cities15000', file: __dirname + '/cities15000.txt' },
};

const def = 'c5000';

/**
 * Options to export are:
 * @option [ctest | c1000 | c5000 | c15000]
 * @default c5000 - cities with 5000 inhabitants
 */
module.exports = {
  porperties,
  cities: {
    file: function (opt) {
      return files[opt || def].file;
    },
    name: function (opt) {
      return files[opt || def].name;
    },
  },
};
