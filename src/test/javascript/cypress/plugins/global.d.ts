// workaround missing typings https://github.com/cypress-io/code-coverage/issues/257
declare module '@cypress/code-coverage/task' {
  export default function codecov(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): void;
}
