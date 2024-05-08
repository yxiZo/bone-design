# Typography 排版

文本的基本格式。支持RTL(LTR), 

方案一: 基于direction  html 

方案二: translateX(-1)


## 基础用法

```tsx

import { Typography } from '@bone-deign/components-react'

export default () => {


    return <>
        
        {/* 自定义样式 */}
        <Typography className="bg-red text-green"/> 
        ...
    </>
}

```