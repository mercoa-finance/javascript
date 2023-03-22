# Mercoa Node API Library

[![npm shield](https://img.shields.io/npm/v/@mercoa/javascript)](https://www.npmjs.com/package/@mercoa/javascript)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Mercoa Node.js library provides convenient access to the Mercoa API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.mercoa.com/api-reference/).

## Installation

```
npm install --save @mercoa/javascript
# or
yarn add @mercoa/javascript
```

## Usage

```typescript
import { MercoaApi, MercoaApiClient } from "@mercoa/javascript"

const mercoa = new MercoaApiClient({
  token: 'YOUR_API_KEY',
});

const entity = await mercoa.entity.get('YOUR_ENTITY_ID');

```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/FlatFilers/flatfile-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
