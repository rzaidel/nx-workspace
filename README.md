

# SolaraWorkspace

This project was generated using [Nx](https://nx.dev).
Worksapce is built with next technologies: 

- [Angular](https://angular.io)
- [NestJS](https://nestjs.com)
- [Bootstrap](https://getbootstrap.com/)

## 🔎  Important for developing!!!

Workspace has shared data. It saved in `libs` folder.

Folder includes all shared data (styles, ui-elements, intefaces, model) that can be shared beetwen
front-end and back-end.
 - Also, there is `slr-ui` folder that includes main styles (ui elements) for project
 - If project will need to use [Angular material](https://material.angular.io/), `theming` or `custom-theme`
 should be defined in `slr-ui` library!
   
## All data that can be used in 2 front-end apps, in front-end and back-end (such an interface, or some enum, or global styles) should be stored in `libs`!

# Setup Solara Workspace
Download application 

1. Run `npm install` to install dependencies.

2. Run `npm run client` to run web for "client" version.
3. Run `npm run server` to run application api.

## API debug
API is built with NestJS framework which is build on TypeScript.
So if you are using WebStorm you should to add new debug configuration.

![plot](./common/ws-api-debug-config.png)

## Build project

Run `ng build client` to build the "client" project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Add new `npm` pacakge
To add new package to project (worksapce) use next:
- `npm install <package-name>`
After it u can use package in every nested project/
If package support front-end and back-end u can use in both, if only front-end (ui-element) there is no reason to use it in back-end.

## Quick Start & Documentation for Nx(@nrwl) Workspace

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an new application (admin panel, etc)

Run `ng g @nrwl/angular:app admin` to generate an application.

`admin` is a name of new application.
 
> You can use any of the plugins above to generate applications as well.


## Generate a shared data library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@solara-workspace/mylib`.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
