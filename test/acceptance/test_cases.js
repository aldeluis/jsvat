'use strict'

var jsvat = require('../../dist/jsvat.js')
var utils = require('../utils.js')

var countries = {}
countries.austria = require('./countries_vat_lists/austria.vat.js')
countries.belgium = require('./countries_vat_lists/belgium.vat.js')
countries.bulgaria = require('./countries_vat_lists/bulgaria.vat.js')
countries.croatia = require('./countries_vat_lists/croatia.vat.js')
countries.cyprus = require('./countries_vat_lists/cyprus.vat.js')
countries.czech_republic = require('./countries_vat_lists/czech_republic.vat.js')
countries.denmark = require('./countries_vat_lists/denmark.vat.js')
countries.estonia = require('./countries_vat_lists/estonia.vat.js')
countries.europe = require('./countries_vat_lists/europe.vat.js')
countries.finland = require('./countries_vat_lists/finland.vat.js')
countries.france = require('./countries_vat_lists/france.vat.js')
countries.germany = require('./countries_vat_lists/germany.vat.js')
countries.greece = require('./countries_vat_lists/greece.vat.js')
countries.hungary = require('./countries_vat_lists/hungary.vat.js')
countries.ireland = require('./countries_vat_lists/ireland.vat.js')
countries.italy = require('./countries_vat_lists/italy.vat.js')
countries.latvia = require('./countries_vat_lists/latvia.vat.js')
countries.lithuania = require('./countries_vat_lists/lithuania.vat.js')
countries.luxembourg = require('./countries_vat_lists/luxembourg.vat.js')
countries.malta = require('./countries_vat_lists/malta.vat.js')
countries.netherlands = require('./countries_vat_lists/netherlands.vat.js')
countries.norway = require('./countries_vat_lists/norway.vat.js')
countries.poland = require('./countries_vat_lists/poland.vat.js')
countries.portugal = require('./countries_vat_lists/portugal.vat.js')
countries.romania = require('./countries_vat_lists/romania.vat.js')
countries.russia = require('./countries_vat_lists/russia.vat.js')
countries.serbia = require('./countries_vat_lists/serbia.vat.js')
countries.slovakia_republic = require('./countries_vat_lists/slovakia.vat.js')
countries.slovenia = require('./countries_vat_lists/slovenia.vat.js')
countries.spain = require('./countries_vat_lists/spain.vat.js')
countries.sweden = require('./countries_vat_lists/sweden.vat.js')
countries.switzerland = require('./countries_vat_lists/switzerland.vat.js')
countries.united_kingdom = require('./countries_vat_lists/united_kingdom.vat.js')

for (const k in countries) {
  const country = countries[k]
  if (countries.hasOwnProperty(k)) {
    const vatList = countries[k]
    makeTests(vatList, country)
  }
}

function makeTests(vatList, country) {
  describe(country.name + ' VAT.', () => {
    describe('Common checks.', () => {
      describe('Valid VAT.', () => {

        describe('Simple checks.', () => {
          describe('Regular valid VAT.', () => {
            utils.check(vatList.valid, 'Is VAT valid', true, country)
          })

          describe('Valid VAT with \'-\' character.', () => {
            utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', true, country)
          })

          describe('Valid VAT with space character.', () => {
            utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', true, country)
          })
        })
      })

      // describe('Invalid VAT.', () => {
      //
      //   describe('Simple checks.', () => {
      //
      //     describe('Regular valid VAT.', () => {
      //       utils.check(vatList.invalid, 'Is VAT valid', false, country)
      //     })
      //
      //     describe('Valid VAT with \'-\' character.', () => {
      //       utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
      //     })
      //
      //     describe('Valid VAT with space character.', () => {
      //       utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
      //     })
      //
      //   })
      // })

    })

    // describe('Isolated VAT checks.', () => {
    //
    //   describe('Config include current country.', () => {
    //
    //     before(() => {
    //       jsvat.config = []// TODO (S.Panfilov)
    //       jsvat.config.push(country)
    //     })
    //
    //     describe('Valid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.valid, 'Is VAT valid', true, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', true, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', true, country)
    //         })
    //
    //       })
    //     })
    //
    //     describe('Invalid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.invalid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     after(() => {
    //       jsvat.config = []
    //     })
    //
    //   })
    //
    //   describe('Config exclude current country.', () => {
    //
    //     before(() => {
    //       jsvat.config = []
    //       jsvat.config.push(country)// TODO (S.Panfilov)
    //     })
    //
    //     describe('Valid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.valid, 'Is VAT valid', true, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', true, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', true, country)
    //         })
    //
    //       })
    //     })
    //
    //     describe('Invalid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.invalid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     after(() => {
    //       jsvat.config = []
    //     })
    //
    //   })
    //
    //   describe('Config include other country.', () => {
    //
    //     before(() => {
    //       var otherCountry = 'sweden'
    //       jsvat.config = []
    //       if (country.name === 'sweden') {// TODO (S.Panfilov)
    //         otherCountry = 'austria'
    //       }
    //
    //       jsvat.config.push(otherCountry)
    //     })
    //
    //     describe('Valid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.valid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     describe('Invalid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.invalid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     after(() => {
    //       jsvat.config = []
    //     })
    //   })
    //
    //   describe('Config include multiple countries VAT checks.', () => {
    //
    //     before(() => {
    //       var otherCountries = ['sweden', 'russia', 'united_kingdom']
    //
    //       jsvat.config = []
    //
    //       if (country.name === 'sweden') otherCountries[0] = 'austria'
    //       if (country.name === 'russia') otherCountries[1] = 'austria'
    //       if (country.name === 'united_kingdom') otherCountries[2] = 'austria'
    //
    //       jsvat.config.push(otherCountries[0])
    //       jsvat.config.push(otherCountries[1])
    //       jsvat.config.push(otherCountries[2])
    //     })
    //
    //     describe('Valid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.valid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.valid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     describe('Invalid VAT.', () => {
    //
    //       describe('Simple checks.', () => {
    //
    //         describe('Regular valid VAT.', () => {
    //           utils.check(vatList.invalid, 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with \'-\' character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, '-'), 'Is VAT valid', false, country)
    //         })
    //
    //         describe('Valid VAT with space character.', () => {
    //           utils.check(utils.addCharsToVals(vatList.invalid, ' '), 'Is VAT valid', false, country)
    //         })
    //
    //       })
    //     })
    //
    //     after(() => {
    //       jsvat.config = []
    //     })
    //   })
    //
    // })

  })
}
