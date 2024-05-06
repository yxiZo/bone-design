/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    title: 'bone-design',
    description: 'Vite & Vue powered static site generator.',
    // srcDir: 'components',
    // rewrites: {
    //     '/components/:page': ':page',
    // },
    themeConfig: {
        // logo: '/logo.svg',
        nav: [
            { text: '组件', link: '/components/' },
            { text: 'Utils', link: '/utils/' },
            { text: 'template', link: '/template/' },
            { text: 'Changelog', link: 'https://github.com/...' }
        ],
        sidebar: {
            '/components/': [
                {
                    text: '起步',
                    items: [
                        { text: '快速上手', link: '/components/Intro/introduction' },
                        { text: '国际化', link: '/components/i18n/introduction' },
                    ]
                },
                {
                    text: '通用',
                    items: [
                        { text: 'Button 按钮', link: '/components/componentDoc/basic/button.md' },
                        { text: 'List 列表', link: '/components/componentDoc/basic/list.md' },
                        { text: 'Icon 图标', link: '/components/componentDoc/basic/icon.md' },
                    ]
                },
                {
                    text: '布局',
                    items: [
                        { text: 'Layout 布局', link: '/components/componentDoc/layout/layout.md' },
                    ]
                },
                {
                    text: '业务组件',
                    items: [
                        // { text: 'Coupon 优惠券', link: '/components/businessComponentDoc/index.md' },
                        { text: 'Card 商品卡片', link: '/components/businessComponentDoc/card.md' },
                        { text: 'SubmitBar 提交订单栏', link: '/components/businessComponentDoc/submitBar.md' },
                    ]
                }
            ],
            '/utils/': [
                {
                    text: '函数式编程',
                    items: [
                        { text: 'pipe', link: '/utils/fp/pipe.md' },
                    ]
                },
                {
                    text: '数据结构',
                    items: [
                        { text: 'Queue 队列', link: '/utils/dataStructure/queue.md' },
                    ]
                }
            ],
            '/template/': [
                {
                    text: '起步',
                    items: [
                        { text: '模板1', link: '/template/template1.md' },
                    ]
                },
            ]
        },
    },
    markdown: {
        code: {
            lineNumbers: true,
        },
    },

    // vite: {
    //     resolve: {
    //         alias: {
    //             '@foo': '/foo',

    //         },
    //     },


}
export default config