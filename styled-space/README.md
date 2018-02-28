
# styled-space

React component for applying responsive margin and padding to child elements without a wrapping HTML container.
Built with [styled-components][sc] and [styled-system][sys]

```sh
npm i styled-space
```

```js
import React from 'react'
import Space from 'styled-space'

// Apply margin to child components without a wrapping <div>
const App = props => (
  <Space mx={3} my={[ 2, 3 ]}>
    <h1>Hello</h1>
    <h2>Hi</h2>
    <button>Beep</button>
  </Space>
)
```

## Props

The Space component uses [styled-system's][sys] `space` utility to add margin and padding props.

Prop | Description | Type
---|---|---
`m` | margin | number, string, or array
`mt` | margin-top | number, string, or array
`mr` | margin-right | number, string, or array
`mb` | margin-bottom | number, string, or array
`ml` | margin-left | number, string, or array
`mx` | margin x-axis (left and right) | number, string, or array
`my` | margin y-axis (top and bottom) | number, string, or array
`p` | padding | number, string, or array
`pt` | padding-top | number, string, or array
`pr` | padding-right | number, string, or array
`pb` | padding-bottom | number, string, or array
`pl` | padding-left | number, string, or array
`px` | padding x-axis (left and right) | number, string, or array
`py` | padding y-axis (top and bottom) | number, string, or array

MIT License

[sc]: https://github.com/styled-components/styled-components
[sys]: https://github.com/jxnblk/styled-system
