<?php

return [
    'usertable' => '用户表',
    'user_id' => '用户id',
    'username' => '用户名',
    'nickname' => '昵称',
    'password' => '密码',
    'avatar_id' => '头像id',
    'albumstable' => '相册表',
    'disk' => '硬盘',
    'filepath' => '文件路径',
    'configurestable' =>  '配置表',
    'value' => '配置值',
    'key' => '配置名',
    'note' => '备注',
    'rooms' => '接待上限',
    'is_welcome' => '1启用欢迎语0否',
    'welcome' => '欢迎语',
    'chat_setting' => '聊天设置表',
    'name' => '名字',
    'tel' => '座机',
    'phone' => '手机',
    'email' => '邮箱',
    'QQ' => 'qq',
    'wechat' => '微信',

    // 会话表
    'conversations' => [
        'table_name' => '会话表',
        'tag_id' => '标签id',
        'client_conversation_id' => '用户会话id, 用于客服会话区多个会话，标识前后排序',
        'rate' => '1差评 2中评 3好评',
        'evaluation' => '评价内容'
    ],

    //标签表
    'tags' => '标签表',
    'tags_fields' => [
        'name' => '标签名',
        'type' => 'conversation 会话用, client 顾客用',
        'color' => '颜色',
         'pid' => '上级id',
        'path' => '关系链'
    ],

    // 顾客
    'clients' => [
        'table_name' => '顾客表',
        'referrer' => '来源 explicit直接来源 thirdParty第三方 baidu百度 360 sogo搜狗 sm神马 biyin必应 google谷歌 bcp',
        'os' => '系统',
        'brower' => '浏览器 Opera Safari Firefox Chrome Other',
        'name' => '顾客姓名',
        'age' => '年龄',
        'sex' => '姓别 0女 1男 2未知',
        'tel' => '电话',
        'wechat' => '微信',
        'weibo' => '微博',
        'address' => '地址',
        'email' => '邮箱',
        'contact' => '联系人',
        'note' => '备注',
        'fingerprint' => '指纹',
    ],

    // 会话标签表
    'conversation_tags' => [
        'table_name' => '会话标签表',
        'conversation_id' => '会话id',
        'tag_id' => '标签id',
    ]



];
