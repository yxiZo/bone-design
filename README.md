learning how to develop components 

### 需求记录

1. 数字金额输入框

正数, 无负数, 避免小数点(保留有效数字), 千分位展示


2. 枚举值

异步的搜索
表格枚举值的展示
多个组件 接口 batch 请求

3. 百分比字符串 转换数字

`parseInt` 和 `parseFloat` 
js 在语言层面没有区分浮点数 和 整数 不像 java
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

```javascript
const string = "0.00%"
const string1 = "0.1"
const string2 = "1"
const string3 = "好"

console.log(parseFloat(string), Boolean(parseFloat(string)))
console.log(parseFloat(string1), Boolean(parseFloat(string1)))
console.log(parseFloat(string2), Boolean(parseFloat(string2)))
console.log(parseFloat(string3), Boolean(parseFloat(string3)))

```

4. 防止隐式类型转换

特别注意  数字 0  字符串 0 在 三元表达式下  的 隐式类型转换 false 的 情况


5. Utils 库搭建,  参考lodash Radash
   以及添加自己认为的好用的方法
6. 




