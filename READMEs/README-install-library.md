# Versions

@gpeel/my-validators@12.0.0 is the first version migrated for Angular 12.

Here is the addtional steps used to install the library into this project.

# multi CLI Projects

https://angular.io/guide/file-structure
https://angular.io/guide/creating-libraries

            ng generate library @gpeel/spring-ts
            ng build @gpeel/spring-ts


For multiple project

- https://angular.io/guide/file-structure#multiple-projects

        ng generate application my-first-app

https://angular.io/guide/creating-libraries#managing-assets-in-a-library
Managing assets in a library Starting with version 9.x of the ng-packagr tool, you can configure the tool to
automatically copy assets into your library package as part of the build process. You can use this feature when your
library needs to publish optional theming files, Sass mixins, or documentation (like a changelog). Learn how to copy
assets into your library as part of the build. Learn more about how to use the tool to embed assets in CSS.

## tsconfig

When you import something from a library in an Angular app, Angular looks for a mapping between the library name and a
location on disk. When you install a library package, the mapping is in the node_modules folder. When you build your own
library, it has to find the mapping in your tsconfig paths.

Generating a library with the Angular CLI automatically adds its path to the tsconfig file. The Angular CLI uses the
tsconfig paths to tell the build system where to find the library.

````json
 {
  "compilerOptions": {
    "paths": {
      "@gpeel/my-validators": [
        "dist/gpeel/my-validators"
      ]
    }
  }
}
````

By default, CLI generate the link to the ./dist folder => So you HAVE TO BUILD the lib to test it.

If you Don'T want to build, but have you lib as simple sources, now you can change that to src with :

* MODIFED by Gauthier

````
    "paths": {
      "@gpeel/my-validators": [
        "projects/gpeel/my-validators/src/public-api.ts"
      ]
    },
````

## npm login

You should do it ONCE on your machine:

    $npm login
    Username: gpeel
    Password:
    Email: (this IS public) your.email@hhh.ccc
    Logged in as gpeel on https://registry.npmjs.org/.

This creates a .npmrc file in your c/users/gauthier with the credit to log in https://www.npmjs.com/

## my logging lib

      npm i @gpeel/plog@17  @gpeel/perftools@17
## bump

    "bump-cli": "^1.1.3",
    npm i  cpx@1.5.0 bump-cli@1.1.3
