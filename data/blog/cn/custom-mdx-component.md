要在MDX帖子中添加自定义MDX组件并创建一个来自Chart.js的甜甜圈图表的示例，请按照以下步骤操作。首先，在`components`文件夹中创建一个名为`DonutChart.tsx`的新组件：

```tsx
'use client'

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const DonutChart = ({ data }) => {
  return <Doughnut data={data} />
}

export default DonutChart
```

由于底层的`Doughnut`组件使用了React钩子（hooks），我们添加了`'use client'`指令来指定它是一个客户端组件。另外，存在一个问题阻止了命名组件的使用，因此我们需要将组件作为默认导出。

接下来，在`MDXComponents.tsx`中添加这个组件：

```diff
...
+ import DonutChart from './DonutChart'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
+  DonutChart,
  BlogNewsletterForm,
}
```

现在，你可以在`.mdx`文件中使用这个组件了：

```mdx
## 示例甜甜圈图表

export const data = {
  labels: ['红色', '蓝色', '黄色'],
  datasets: [
    {
      label: '投票数',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
    },
  ],
}

<DonutChart data={data} />
```

通过这种方式，你可以在MDX帖子中灵活地嵌入自定义组件，丰富内容的展示形式。