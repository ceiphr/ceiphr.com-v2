# Ceiphr.com Gatsby

[![Netlify Status](https://api.netlify.com/api/v1/badges/1cbc5535-77bf-4896-b288-221005a33821/deploy-status)](https://app.netlify.com/sites/ceiphr/deploys)

A rewrite of [www.ceiphr.com](https://www.ceiphr.com/) using reactjs, gatsby, and bulma. Hosted on Netlify.

<!-- &nbsp;

![gatsby-starter-ghost](https://user-images.githubusercontent.com/120485/50913567-8ab8e380-142c-11e9-9e78-de02ded12fc6.jpg) -->

&nbsp;

## Installing

```bash
# With Gatsby CLI
gatsby new ceiphr.com-gatsby https://github.com/ceiphr/ceiphr.com-gatsby.git
```

```bash
# From Source
git clone https://github.com/ceiphr/ceiphr.com-gatsby.git
cd ceiphr.com-gatsby
```

Then install dependencies

```bash
yarn
```

&nbsp;

## Running

Start the development server. You now have a Gatsby site pulling content from https://ghost.ceiphr.io.

```bash
gatsby develop
```

To change Ghost sources, change the `apiUrl` and `contentApiKey` in `.ghost.json` to target your server:

### Ghost >=2.10.0 <3.0.0

```json
{
  "development": {
    "apiUrl": "https://ghost.ceiphr.io",
    "contentApiKey": "d1210c1b85ba7b255530751d99"
  },
  "production": {
    "apiUrl": "https://ghost.ceiphr.io",
    "contentApiKey": "d1210c1b85ba7b255530751d99"
  }
}
```

&nbsp;

## Deploying with Netlify

The starter contains three config files specifically for deploying with Netlify. A `netlify.toml` file for build settings, a `/static/_headers` file with default security headers set for all routes, and `/static/_redirects` to set Netlify custom domain redirects.

To deploy to your Netlify account, hit the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ceiphr/ceiphr.com-gatsby.git)

Once deployed, you can set up a [Ghost + Netlify Integration](https://docs.ghost.org/integrations/netlify/) to use deploy hooks from Ghost to trigger Netlify rebuilds. That way, any time data changes in Ghost, your site will rebuild on Netlify.

&nbsp;

## Extra options

```bash
# Run a production build, locally
gatsby build

# Serve a production build, locally
gatsby serve
```

Gatsby `develop` uses the `development` config in `.ghost.json` - while Gatsby `build` uses the `production` config.

&nbsp;

## Credit

This repository was originally based off of the Ghost Foundation's [gatsby-starter-ghost](https://github.com/TryGhost/gatsby-starter-ghost) starter
template project which is licensed under the [MIT license](https://github.com/TryGhost/gatsby-starter-ghost/blob/master/LICENSE).

## Copyright & License

Copyright (c) 2016-2019 Ari Birnbaum (Ceiphr) - Released under the [GNU GENERAL PUBLIC LICENSE](LICENSE).
