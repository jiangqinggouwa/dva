const menuData = [
    // {
    //     "key": "dashboard",
    //     "title": "首页",
    //     "path": "/",
    //     "childre": []
    // },
    {
        "key": "dataBase",
        "title": "数据库",
        "path": "",
        "children": [
            {
                "key": "field",
                "title": "数据表",
                "path": "/"
            },
            {
                "key": "view",
                "title": "数据库视图",
                "path": "/view"
            },
            {
                "key": "procedure",
                "title": "存储过程",
                "path": "/procedure"
            },
            {
                "key": "trigger",
                "title": "触发器",
                "path": "/trigger"
            },
        ]
    },
    {
        "key": "entityClass",
        "title": "实体类",
        "path": ""
    },
    {
        "key": "mappingClass",
        "title": "映射类",
        "path": ""
    },
    {
        "key": "serviceClass",
        "title": "服务类",
        "path": ""
    },
    {
        "key": "console",
        "title": "控制器",
        "path": ""
    },
    {
        "key": "others",
        "title": "其他",
        "path": "",
        "children": [
            {
                "key": "setRole",
                "title": "设定角色",
                "path": "/setRole"
            },
            {
                "key": "setRoot",
                "title": "设置权限",
                "path": "/setRoot"
            },
            {
                "key": "setTooken",
                "title": "设定token",
                "path": "/setTooken"
            },
            {
                "key": "map",
                "title": "默认映射函数",
                "path": "/map"
            },
        ]
    },
];

export default menuData
