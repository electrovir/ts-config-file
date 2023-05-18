import {join} from 'path';
import {itSnapshots} from 'test-established-expectations';
import {testFilesDirPath} from './file-paths.test-helper';
import {importTsConfigFile} from './import-ts-config-file';

describe(importTsConfigFile.name, () => {
    itSnapshots(importTsConfigFile, [
        {
            it: 'loads a simple esm config file',
            input: join(testFilesDirPath, 'example-esm-config.ts'),
        },
        {
            it: 'loads a simple cjs config file',
            input: join(testFilesDirPath, 'example-cjs-config.ts'),
        },
    ]);
});
