# 快速上手
跟随以下的步骤，快速上手组件库的使用。

## 安装

```bash
# 使用 npm
npm i @douyinfe/semi-ui

# 使用 yarn
yarn add @douyinfe/semi-ui

# 使用 pnpm
pnpm add @douyinfe/semi-ui
```

## 基础使用

```jsx

import React, { Component } from 'react';
import { Button, Toast } from '@douyinfe/semi-ui';

class Demo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <Button onClick={() => Toast.warning({ content: 'welcome' })}>Hello Semi</Button>;
    }
}
```