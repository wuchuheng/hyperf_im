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
    ],

    // 常见问题
   'setting_connect_chatlink_fqa'  => [
       'table_name' => '常见问题表',
       'window_id' => '聊天窗口id',
       'title' => '标题',
       'content' => '内容',
       'order_no' => '排序编号',
       'driver_type' => '设备类型:phone手机 pc电脑'
   ],
    'setting_connect_chatlink_sites'  => [
        'table_name' => '聊天接入站点表',
        'title' => '接入的站点名',
        'pc_windows_id' => 'pc窗口id',
        'phone_windows_id' => 'phone窗口id'
    ],
    'setting_connect_chatlink_sites_carousel' => [
        'table_name' => '聊天链接跑马灯表',
        'album_id' => '相册表id',
        'site_id' => '聊天接入站点表id',
        'order_no' => '排序'
    ],
    'setting_connect_chatlink_sites_config' => [
        'table_name' => '聊天接入站配置表',
        'site_id' => '站点id',
        'driver_type' => '设备类， pc 或 phone',
        'size' => '窗口大小: fullScreen全屏customer自定义standard标准mini迷你',
        'theme' => '主题颜色',
        'background_color' => '背景色',
        'background_album_id' => '背景图id',
        'client_text_color' => '访客文字颜色',
        'is_access' => '是否启快捷入口',
        'is_carousel' => '是否启用走马灯',
        'is_fqa' => '是否启用常见问题',
        'rightbar_content' => '右侧信息栏',
        'rightbar_background_color' => '右侧信息栏目颜色',
        'avatar_location' => '头像位置: leftTop左上角 rightBar右侧栏大头像',
        'is_background_img' => '是否启用背景图片'
    ],
    'database.setting_connect_chatlink_sites_access.' => [
        'site_id' => '聊天链接站id',
        'table_name' => '聊天链接快捷接入表',
        'name' => '入口名称',
        'album_id' => '相册表id',
        'url' => '跳转链接',
        'order_no' => '排序'
    ]
];
