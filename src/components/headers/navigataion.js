const navigtlist = [
    {
        father: '首页',
        icon: 'ios-home',
        url: '/',
    },
    {
        father: '技术内容',
        icon: 'ios-book',
        url: '/technology',
        son: [
            {name: 'Web前端', url: '/technology/web'},
            {name: 'node', url: '/technology/node'},
            {name: 'mysql', url: '/technology/mysql'},
        ]
    },
    {
        father: '个人笔记',
        icon: 'ios-book',
        url: '/note'
    },
    {
        father: '项目内容',
        icon: 'ios-book',
        url: '/program',
    },
    {
        father: '关于',
        icon: 'ios-cloud',
        url: '/about',
        son: [
            {name: '关于', url: '/about'},
            {name: '空', url: ''},
        ],
    },
    {
        father: '其他内容',
        icon: 'ios-book',
        url: 'others'
    }
]

export default navigtlist
