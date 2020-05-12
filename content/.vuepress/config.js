module.exports = {
    title: 'Hello VuePress',// 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'Just playing around', // meta 中的描述文字，用于SEO
    //github仓库名称
    base: '/Blog/',
    themeConfig: {
        //导航栏的logo
        logo: '/logo.png',
        //禁止导航栏
        //navbar: false,
        //导航栏链接
        nav: [
            { text: 'vuepress', link: '/vuepress/' },
            { text: '微信小程序', link: '/weispace/' },
            { text: 'Google', link: 'https://google.com' },
            {
                text: '链接下拉',
                ariaLabel: '链接列表',
                items: [
                    { text: '百度', link: 'https://baidu.com' },
                    { text: 'Google', link: 'https://google.com' },
                    {
                        text: '分组', items: [
                            { text: '百度', link: 'https://baidu.com' },
                            { text: 'Google', link: 'https://google.com' },
                        ]
                    }
                ]
            }
        ],


        //侧边栏配置
        //想要使 侧边栏（Sidebar）生效，需要配置 themeConfig.sidebar，基本的配置，需要一个包含了多个链接的数组
        //首页是不显示侧边栏的
        sidebar: {
            '/vuepress/': [{
                title: 'Help',
                collapsable: false,
                children: [
                  '',
                  'vuepress_install'
                ]
              }],
              '/weispace/': [{
                title: '微信小程序',
                collapsable: false,
                children: [
                  '',
                  'vuepress_install'
                ]
              }],
            '/': [
                '',        /* / */
              ]
        },
        //侧边栏标题级联深度，默认2，提起H1 H2的标题
        sidebarDepth: 2
    },

    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link',
            { rel: 'icon', href: '/logo.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
    ],

    markdown: {

        //代码块显示行号
        lineNumbers: true,

        // markdown-it-anchor 的选项
        anchor: { permalink: false },

        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },

        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            // md.use(require('markdown-it-xxx'))
        }
    },

}