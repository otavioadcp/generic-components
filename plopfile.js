export default function (plop) {
  // create your generators here
  plop.setGenerator("generic-component", {
    description: "This is an example to automate react components generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Generic component name, please? (Pascal Case)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/GenericComponent.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.styles.ts",
        templateFile: "plop-templates/GenericComponentStyle.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.test.js",
        templateFile: "plop-templates/GenericComponentTest.js.hbs",
      },
      {
        type: "modify",
        path: "src/ExampleModify.ts",
        pattern:
          /(\/\/ Plop will auto-import all generic components created here. Don't remove!)/g,
        template: "import './components/{{name}}/{{name}}';\n$1",
      },
    ], // array of actions
  });

  plop.setHelper("dash-case", (text) => {
    return text.replace(/[A-Z]/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : `-${letter.toLowerCase()}`;
    });
  });
}
