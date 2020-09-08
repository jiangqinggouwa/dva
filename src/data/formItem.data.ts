export const fieldData = [
    {
        "label": "表名",
        "name": "name",
        "rules": [{ required: true, message: '请输入!' }],
        "inputType": "string"
    },
    {
        "label": "中文名",
        "name": "real_name",
        "rules": [{ required: true, message: '请输入!' }],
        "inputType": "string"
    },
    {
        "label": "是否主键",
        "name": "is_pk",
        "rules": [{ required: true }],
        "inputType": "select"
    },
    {
        "label": "是否基于时间",
        "name": "is_timestamp",
        "rules": [{ required: false }],
        "inputType": "select"
    },
    {
        "label": "是否逻辑删除",
        "name": "is_logically_delete",
        "rules": [{ required: false }],
        "inputType": "select"
    },
    {
        "label": "注释",
        "name": "comments",
        "rules": [{ required: false, message: 'Please input your username!' }],
        "inputType": "string"
    },
];
export const fieldItemData = [
    {
        "label": "字段名",
        "name": "name",
        "rules": [{ required: true, message: '请输入!' }],
        "inputType": "string"
    },
    {
        "label": "中文名",
        "name": "real_name",
        "rules": [{ required: true, message: '请输入!' }],
        "inputType": "string"
    },
    {
        "label": "类型",
        "name": "type",
        "rules": [{ required: true }],
        "inputType": "select"
    },
    {
        "label": "是否主键",
        "name": "is_pk",
        "rules": [{ required: true }],
        "inputType": "select"
    },
    {
        "label": "是否为空",
        "name": "is_null",
        "rules": [{ required: false }],
        "inputType": "select"
    },
    {
        "label": "是否外键",
        "name": "is_fk",
        "rules": [{ required: false }],
        "inputType": "select"
    },
    {
        "label": "默认值",
        "name": "string",
        "rules": [{ required: true, message: '请输入!' }],
        "inputType": "string"
    },
    {
        "label": "是否枚举",
        "name": "is_enum",
        "rules": [{ required: false }],
        "inputType": "select"
    },
    {
        "label": "排序条件",
        "name": "can_order",
        "rules": [{ required: true, message: '请输入!' }],
        "inputType": "string"
    },
    {
        "label": "can_where",
        "name": "where条件",
        "rules": [{ required: true, message: '请输入!' }],
        "inputType": "string"
    },
    {
        "label": "别名",
        "name": "where_name",
        "rules": [{ required: true, message: '请输入!' }],
        "inputType": "string"
    },
    {
        "label": "字符集",
        "name": "string",
        "rules": [{ required: true, message: '请输入!' }],
        "inputType": "string"
    },
    {
        "label": "注释",
        "name": "comments",
        "rules": [{ required: false, message: 'Please input your username!' }],
        "inputType": "string"
    },
];


