# Button 按钮

按钮用于触发一个操作，如提交表单。


## 按钮类型 type

```tsx

import { Button } from '@bone-deign/components-react'

export default () => {


    return <>
        <Button type="primary" className="bg-red text-green"/>
        <Button type="danger" className="bg-red text-green"/>
        <Button type="success" className="bg-red text-green"/>
        <Button type="plain" className="bg-red text-green"/>

        {/* 自定义样式 */}
        <Button className="bg-red text-green"/> 
        ...
    </>
}

```

## 加载状态 loading

loading态下 不可点击 , 事件不可触发

```tsx
import { Button } from '@bone-deign/components-react'

export default () => {


    return <>
        <Button loading type="primary" className="bg-red text-green"/>
        <Button type="danger" className="bg-red text-green"/>
        <Button type="success" className="bg-red text-green"/>
        <Button type="plain" className="bg-red text-green"/>
        
        {/* 自定义样式 */}
        <Button className="bg-red text-green"/> 
        ...
    </>
}


```


## 禁用状态 disabled

loading态下 不可点击 , 事件不可触发

```tsx
import { Button } from '@bone-deign/components-react'

export default () => {


    return <>
        <Button disabled type="primary" className="bg-red text-green"/>
        <Button type="danger" className="bg-red text-green"/>
        <Button type="success" className="bg-red text-green"/>
        <Button type="plain" className="bg-red text-green"/>
        
        {/* 自定义样式 */}
        <Button className="bg-red text-green"/> 
        ...
    </>
}


```

## 防抖按钮 debounce

用于提交表单时, 防止重复提交

loading态下 不可点击 , 事件不可触发

```tsx
import { Button } from '@bone-deign/components-react'

export default () => {

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 1000)
    })

    return <>        
        {/* 自定义样式 */}
        <Button onSubmit={promise} className="bg-red text-green"/> 
        ...
    </>
}


```

## 自定义样式

```tsx
import { Button } from '@bone-deign/components-react'

export default () => {


    return <>
        
        {/* 自定义样式 */}
        <Button className="bg-red text-green"/> 
        ...
    </>
}


```

