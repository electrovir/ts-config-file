# ts-config-file

Easily load config files for your package that are written in TypeScript; retrieves and imports all exports from a `.ts` file.

# installation

```bash
npm i ts-config-file
```

# usage

<!-- example-link: src/readme-examples/basic.example.ts -->

```TypeScript
import {importTsConfigFile} from 'ts-config-file';

export async function loadMyConfig() {
    return await importTsConfigFile('path/to/my/ts/file.ts');
}
```
