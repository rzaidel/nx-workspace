

# SolaraWorkspace

This project was generated using [Nx](https://nx.dev).
Worksapce is built with next technologies: 

- [Angular](https://angular.io)
- [Nest](https://nestjs.com)
- [Bootstrap](https://getbootstrap.com/)

Workspace has shared data. It saved in `libs` folder.
Folder includes all shared data (styles, ui-elements, intefaces, model) that can be shared beetwen
front-end and back-end.
 - Also there is `slr-ui` folder that includes main styles (ui elements) for project
 - If project will need to use [Angular material](https://material.angular.io/), `theming` or `custom-theme`
 should be defined in `slr-ui` library!
   
# Setup Solara Workspace
Download application 

Run `npm install` to install dependencies.

Run `npm run client` to run web for "client" version.
Run `npm run server` to run application api.

🔎 **Smart, Extensible Build Framework**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an new application (admin panel, etc)

Run `ng g @nrwl/angular:app admin` to generate an application.

`admin` is a name of new application.
 
> You can use any of the plugins above to generate applications as well.


## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@solara-workspace/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

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
