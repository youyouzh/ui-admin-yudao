import { MockMethod } from 'vite-plugin-mock'

export default [
  // 获取验证码接口
  {
    url: '/admin-api/system/dict-data/list-all-simple',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            dictType: 'bpm_model_category',
            value: '1',
            label: '默认',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_model_category',
            value: '2',
            label: 'OA',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_model_form_type',
            value: '10',
            label: '流程表单',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'bpm_model_form_type',
            value: '20',
            label: '业务表单',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'bpm_oa_leave_type',
            value: '1',
            label: '病假',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_oa_leave_type',
            value: '2',
            label: '事假',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_oa_leave_type',
            value: '3',
            label: '婚假',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_result',
            value: '1',
            label: '处理中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_result',
            value: '2',
            label: '通过',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_result',
            value: '3',
            label: '不通过',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_result',
            value: '4',
            label: '已取消',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_status',
            value: '1',
            label: '进行中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_status',
            value: '2',
            label: '已完成',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_rule_type',
            value: '10',
            label: '角色',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_rule_type',
            value: '20',
            label: '部门的成员',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_rule_type',
            value: '21',
            label: '部门的负责人',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_rule_type',
            value: '22',
            label: '岗位',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_rule_type',
            value: '30',
            label: '用户',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_rule_type',
            value: '40',
            label: '用户组',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_rule_type',
            value: '50',
            label: '自定义脚本',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_script',
            value: '10',
            label: '流程发起人',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_script',
            value: '20',
            label: '流程发起人的一级领导',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_assign_script',
            value: '21',
            label: '流程发起人的二级领导',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'common_status',
            value: '0',
            label: '开启',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'common_status',
            value: '1',
            label: '关闭',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'infra_api_error_log_process_status',
            value: '0',
            label: '未处理',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_api_error_log_process_status',
            value: '1',
            label: '已处理',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'infra_api_error_log_process_status',
            value: '2',
            label: '已忽略',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_boolean_string',
            value: 'true',
            label: '是',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_boolean_string',
            value: 'false',
            label: '否',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_scene',
            value: '1',
            label: '管理后台',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_scene',
            value: '2',
            label: '用户 APP',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_template_type',
            value: '1',
            label: '单表（增删改查）',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_template_type',
            value: '2',
            label: '树表（增删改查）',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_config_type',
            value: '1',
            label: '系统内置',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_config_type',
            value: '2',
            label: '自定义',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '1',
            label: '数据库',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '10',
            label: '本地磁盘',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '11',
            label: 'FTP 服务器',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '12',
            label: 'SFTP 服务器',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '20',
            label: 'S3 对象存储',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_job_log_status',
            value: '0',
            label: '运行中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_job_log_status',
            value: '1',
            label: '成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'infra_job_log_status',
            value: '2',
            label: '失败',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'infra_job_status',
            value: '0',
            label: '初始化中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_job_status',
            value: '1',
            label: '正常',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'infra_job_status',
            value: '2',
            label: '暂停',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_redis_timeout_type',
            value: '1',
            label: '永不超时',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_redis_timeout_type',
            value: '2',
            label: '动态超时',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'infra_redis_timeout_type',
            value: '3',
            label: '固定超时',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'mp_auto_reply_request_match',
            value: '1',
            label: '完全匹配',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'mp_auto_reply_request_match',
            value: '2',
            label: '半匹配',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'text',
            label: '文本',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'image',
            label: '图片',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'voice',
            label: '语音',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'video',
            label: '视频',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'shortvideo',
            label: '小视频',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'news',
            label: '图文',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'music',
            label: '音乐',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'location',
            label: '地理位置',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'link',
            label: '链接',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'event',
            label: '事件',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_alipay_mode',
            value: '1',
            label: '公钥模式',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_alipay_mode',
            value: '2',
            label: '证书模式',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_alipay_server_type',
            value: 'https://openapi.alipay.com/gateway.do',
            label: '线上',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_alipay_server_type',
            value: 'https://openapi.alipaydev.com/gateway.do',
            label: '沙箱',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_alipay_sign_type',
            value: 'RSA2',
            label: 'RSA2',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code_type',
            value: 'mock',
            label: '模拟支付',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code_type',
            value: 'wx_pub',
            label: '微信 JSAPI 支付',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code_type',
            value: 'wx_lite',
            label: '微信小程序支付',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code_type',
            value: 'wx_app',
            label: '微信 App 支付',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code_type',
            value: 'alipay_pc',
            label: '支付宝 PC 网站支付',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code_type',
            value: 'alipay_wap',
            label: '支付宝 Wap 网站支付',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code_type',
            value: 'alipay_app',
            label: '支付宝App 支付',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code_type',
            value: 'alipay_qr',
            label: '支付宝扫码支付',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code_type',
            value: 'alipay_bar',
            label: '支付宝条码支付',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_wechat_version',
            value: 'v2',
            label: 'v2',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_wechat_version',
            value: 'v3',
            label: 'v3',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_order_notify_status',
            value: '10',
            label: '通知成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_order_notify_status',
            value: '20',
            label: '通知失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'pay_order_notify_status',
            value: '0',
            label: '未通知',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'pay_order_refund_status',
            value: '0',
            label: '未退款',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_order_refund_status',
            value: '10',
            label: '部分退款',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_order_refund_status',
            value: '20',
            label: '全部退款',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'pay_order_status',
            value: '10',
            label: '支付成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_order_status',
            value: '20',
            label: '支付关闭',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'pay_order_status',
            value: '0',
            label: '未支付',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_order_status',
            value: '0',
            label: '退款订单生成',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_order_status',
            value: '1',
            label: '退款成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_order_status',
            value: '2',
            label: '退款失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_order_status',
            value: '99',
            label: '退款关闭',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_order_type',
            value: '0',
            label: '未退款',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_order_type',
            value: '10',
            label: '部分退款',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_order_type',
            value: '20',
            label: '全部退款',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'product_spu_status',
            value: '0',
            label: '仓库中',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'product_spu_status',
            value: '-1',
            label: '回收站',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'product_spu_status',
            value: '1',
            label: '销售中',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_activity_status',
            value: '10',
            label: '未开始',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_activity_status',
            value: '20',
            label: '进行中',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_activity_status',
            value: '30',
            label: '已结束',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'promotion_activity_status',
            value: '40',
            label: '已关闭',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'promotion_condition_type',
            value: '10',
            label: '满 N 元',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_condition_type',
            value: '20',
            label: '满 N 件',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_status',
            value: '1',
            label: '已领取',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_status',
            value: '2',
            label: '已使用',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_status',
            value: '3',
            label: '已过期',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_take_type',
            value: '1',
            label: '直接领取',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_take_type',
            value: '2',
            label: '指定发放',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_template_validity_type',
            value: '1',
            label: '固定日期',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_template_validity_type',
            value: '2',
            label: '领取之后',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'promotion_discount_type',
            value: '1',
            label: '满减',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_discount_type',
            value: '2',
            label: '折扣',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_product_scope',
            value: '1',
            label: '全部商品参与',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'promotion_product_scope',
            value: '2',
            label: '指定商品参与',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '1',
            label: '全部数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '2',
            label: '指定部门数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '3',
            label: '本部门数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '4',
            label: '本部门及以下数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '5',
            label: '仅本人数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_error_code_type',
            value: '1',
            label: '自动生成',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'system_error_code_type',
            value: '2',
            label: '手动编辑',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '0',
            label: '成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '10',
            label: '账号或密码不正确',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '20',
            label: '用户被禁用',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '30',
            label: '验证码不存在',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '31',
            label: '验证码不正确',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '100',
            label: '未知异常',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '100',
            label: '账号登录',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '101',
            label: '社交登录',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '103',
            label: '短信登录',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '200',
            label: '主动登出',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '202',
            label: '强制登出',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_mail_send_status',
            value: '0',
            label: '初始化',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_mail_send_status',
            value: '10',
            label: '发送成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_mail_send_status',
            value: '20',
            label: '发送失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_mail_send_status',
            value: '30',
            label: '不发送',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_menu_type',
            value: '1',
            label: '目录',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_menu_type',
            value: '2',
            label: '菜单',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_menu_type',
            value: '3',
            label: '按钮',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_notice_type',
            value: '1',
            label: '通知',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_notice_type',
            value: '2',
            label: '公告',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_notify_template_type',
            value: '1',
            label: '通知公告',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_notify_template_type',
            value: '2',
            label: '系统消息',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'password',
            label: 'password',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'authorization_code',
            label: 'authorization_code',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'implicit',
            label: 'implicit',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'client_credentials',
            label: 'client_credentials',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'refresh_token',
            label: 'refresh_token',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_operate_type',
            value: '0',
            label: '其它',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_operate_type',
            value: '1',
            label: '查询',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_operate_type',
            value: '2',
            label: '新增',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_operate_type',
            value: '3',
            label: '修改',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'system_operate_type',
            value: '4',
            label: '删除',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_operate_type',
            value: '5',
            label: '导出',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_operate_type',
            value: '6',
            label: '导入',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_role_type',
            value: '1',
            label: '内置',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_role_type',
            value: '2',
            label: '自定义',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_sms_channel_code',
            value: 'DEBUG_DING_TALK',
            label: '调试(钉钉)',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_sms_channel_code',
            value: 'ALIYUN',
            label: '阿里云',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_sms_receive_status',
            value: '0',
            label: '等待结果',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_sms_receive_status',
            value: '10',
            label: '接收成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_sms_receive_status',
            value: '20',
            label: '接收失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_sms_send_status',
            value: '0',
            label: '初始化',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_sms_send_status',
            value: '10',
            label: '发送成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_sms_send_status',
            value: '20',
            label: '发送失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_sms_send_status',
            value: '30',
            label: '不发送',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_sms_template_type',
            value: '3',
            label: '营销',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_sms_template_type',
            value: '1',
            label: '验证码',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'system_sms_template_type',
            value: '2',
            label: '通知',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_user_sex',
            value: '1',
            label: '男',
            colorType: 'default',
            cssClass: 'A'
          },
          {
            dictType: 'system_user_sex',
            value: '2',
            label: '女',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'terminal',
            value: '10',
            label: '微信小程序',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'terminal',
            value: '11',
            label: '微信公众号',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'terminal',
            value: '20',
            label: 'H5 网页',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'terminal',
            value: '31',
            label: '苹果 App',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'terminal',
            value: '32',
            label: '安卓 App',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '10',
            label: '申请售后',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '20',
            label: '商品待退货',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '30',
            label: '商家待收货',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '40',
            label: '等待退款',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '50',
            label: '退款成功',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '61',
            label: '买家取消',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '62',
            label: '商家拒绝',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '63',
            label: '商家拒收货',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_type',
            value: '10',
            label: '售中退款',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_type',
            value: '20',
            label: '售后退款',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_way',
            value: '10',
            label: '仅退款',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_way',
            value: '20',
            label: '退货退款',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'trade_order_item_after_sale_status',
            value: '0',
            label: '未售后',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'trade_order_item_after_sale_status',
            value: '1',
            label: '售后中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_order_item_after_sale_status',
            value: '2',
            label: '已退款',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '0',
            label: '待支付',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '10',
            label: '待发货',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '20',
            label: '已发货',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '30',
            label: '已完成',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '40',
            label: '已取消',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'trade_order_type',
            value: '0',
            label: '普通订单',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_order_type',
            value: '1',
            label: '秒杀订单',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_order_type',
            value: '2',
            label: '拼团订单',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_order_type',
            value: '3',
            label: '砍价订单',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'user_type',
            value: '1',
            label: '会员',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'user_type',
            value: '2',
            label: '管理员',
            colorType: 'success',
            cssClass: ''
          }
        ],
        msg: ''
      }
    }
  }
] as MockMethod[]
