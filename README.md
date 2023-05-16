# hermit-package-version

Github Action to get the version of Hermit managed package.

## How to use

See [action.yml](action.yml) for the ground truth.

```yaml
steps:
  - uses: actions/checkout@v3
  - uses: cashapp/hermit-package-version@v1
    id: hermit-version
    with:
      package: hermit
  - run: echo "Hermit version ${{ steps.hermit-version.outputs.version }}
```

# License

Copyright © 2023 Block, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
