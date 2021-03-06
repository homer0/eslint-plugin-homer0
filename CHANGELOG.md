## [5.0.3](https://github.com/homer0/eslint-plugin-homer0/compare/5.0.2...5.0.3) (2021-04-11)


### Bug Fixes

* add deprecation notice ([d80e843](https://github.com/homer0/eslint-plugin-homer0/commit/d80e8438d98c281c08ca9b2e70876e4ff9dcf4fd))

## [5.0.2](https://github.com/homer0/eslint-plugin-homer0/compare/5.0.1...5.0.2) (2020-08-10)


### Bug Fixes

* update dependencies ([73be095](https://github.com/homer0/eslint-plugin-homer0/commit/73be095484748600643e78bc11457ac5b06276ec))

## [5.0.1](https://github.com/homer0/eslint-plugin-homer0/compare/5.0.0...5.0.1) (2020-07-22)


### Bug Fixes

* update dependencies ([6611bcb](https://github.com/homer0/eslint-plugin-homer0/commit/6611bcb61ec3d4045501db79b41a5a17b0a8a770)), closes [#15](https://github.com/homer0/eslint-plugin-homer0/issues/15)
* update dependencies ([48d664e](https://github.com/homer0/eslint-plugin-homer0/commit/48d664e9eda47106c371509ff064602d51fa5379))

# [5.0.0](https://github.com/homer0/eslint-plugin-homer0/compare/4.0.0...5.0.0) (2020-07-11)


### Bug Fixes

* only run release on master ([76dcb40](https://github.com/homer0/eslint-plugin-homer0/commit/76dcb40127cdee6281faf1dfa0c25fd4e51e79ce))
* remove the overwrite for comma-dangle ([6c4a98e](https://github.com/homer0/eslint-plugin-homer0/commit/6c4a98e07aaf3533ce4d0627db264f6f8fbf818b))
* remove the overwrite for max-classes-per-file ([2ef5130](https://github.com/homer0/eslint-plugin-homer0/commit/2ef5130a6c6f8136f8e9c699abdaf266b2d9c030))
* remove the overwrite for prefer-object-spread ([f1df7c9](https://github.com/homer0/eslint-plugin-homer0/commit/f1df7c9a1dbff4594db11ddb5b19b5ea34d5cdb3))
* set the preferred type to Object ([e71ae90](https://github.com/homer0/eslint-plugin-homer0/commit/e71ae90ba2413d1b00656726a3d0fb986740e9ea))
* use github plugin instead of git ([27c9beb](https://github.com/homer0/eslint-plugin-homer0/commit/27c9bebe0e6d370a71254c5e39fc056cf128badd))


### Features

* add JSDoc and sort-class-members ([340a540](https://github.com/homer0/eslint-plugin-homer0/commit/340a5406623c97bd49871d679bf3e57f88fde447))
* add jsdoc configuration ([8caf8c3](https://github.com/homer0/eslint-plugin-homer0/commit/8caf8c3f65ea9ec3a382b13a31a365c59253ad3b))
* add the sort-class-members plugin ([07354ce](https://github.com/homer0/eslint-plugin-homer0/commit/07354ceab3109b4ea13b81ee8e41abfe8f676962))
* allow the use of the tag parent ([4d79c60](https://github.com/homer0/eslint-plugin-homer0/commit/4d79c6005832c2033b805b75c4cbfd97907bf4ea))
* exclude 60 from no-magic-numbers ([58d9c8e](https://github.com/homer0/eslint-plugin-homer0/commit/58d9c8eaecba8653bf91f50026e8012f18540150))


### BREAKING CHANGES

* All class members will now have to follow the order set by the plugin configuration
* You'll need to stop using Object.assign for most of the basic cases
* You now need to add a trailing comma to function parameters
* You can't have more than one class per file now
