import {join} from 'path';
import {assertExpectedOutput} from 'test-established-expectations';
import type * as PackageIndex from './';
import {testFilesDirPath} from './file-paths.test-helper';

describe('compiled js', () => {
    it('should work in compiled js form', async () => {
        const importedFile: typeof PackageIndex = await import(
            /**
             * Ignore this error because this package itself will only be installed in node_module
             * during tests.
             */
            // @ts-ignore-error
            'ts-config-file'
        );

        await assertExpectedOutput(
            async () =>
                await importedFile.importTsConfigFile(
                    join(testFilesDirPath, 'example-cjs-config.ts'),
                ),
            {
                key: {
                    topKey: 'compiled js output',
                    subKey: 'cjs',
                },
            },
        );
        await assertExpectedOutput(
            async () =>
                await importedFile.importTsConfigFile(
                    join(testFilesDirPath, 'example-esm-config.ts'),
                ),
            {
                key: {
                    topKey: 'compiled js output',
                    subKey: 'esm',
                },
            },
        );
    });
});
