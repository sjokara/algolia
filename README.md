<div align="center">
<img src="https://blog.vuestorefront.io/wp-content/uploads/2020/01/1QU9F6hQlFyHsJIbsdmt6FA.png" height="80px"/>  
</div>

# Vue Storefront 2 Algolia Integration

------

## Workflows


### 1. Symlink 
- Inside of you integration run `yarn build` to build your integration. 
- After that run `yarn link` to create local package.
- When the local package is created, position inside of vsf2 project and run `yarn link @vue-storefront/algolia-api`, so it can be registered as node module.
- Configure your integration in vsf2 (nuxt.config && middleware.config).

### 2. Github Dependecy
- Add in integration package.json `"scripts": { "prepare": "yarn build" }`, so integration gets built as dependency 
- In package.json of vsf2 project add `"dependencies": { "GitRepo": "git+https://<token-from-github>:x-oauth-basic@github.com/<user>/<GitRepo>.git" }`
- After running `yarn` in vsf2, integration should be registered as node module.
- Configure your integration in vsf2 (nuxt.config && middleware.config).

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
- [Algolia integration Documentation](https://docs.vuestorefront.io/algolia)
- [Community Chat](https://discord.vuestorefront.io)
