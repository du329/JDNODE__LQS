# 数据模型设计

列举各个数据模型的示例，写明属性

## 用户

```
{
    _id: 'xxx',
    username: '18350319132', // 用户名（唯一）
    password: '123'
}
```

## 地址

```
{
    _id: 'xxx',
    username: '18350319132', // 和用户产生关联
    city: '宁德',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: 'zhangsan', // 收货人
    phone: '13706963842', // 收货人电话号码
}
```

## 商店

```
{
    _id: 'xxx',
    name: '沃尔沃',
    imgUrl: 'xxx.png',
    sales: 10000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: '宣传语'
}
```

## 商品

```
{
    _id: 'xxx', //商品id
    shopId: 'xxx' // 对应商店的 _id
    name: '土豆',
    imgUrl: 'xxx.png',
    sales: 10,
    price: 33.6,
    oldPrice: 40.6,
    tabs:['all','seckill'] //左侧 tab 类型
}
```

## 订单

```
{
    _id: 'xxx', // 订单id
    username: 'lqs',
    shopId: '',
    shopName: '',
    isCanceled: false,
    address: {
	'地址信息'
    },
    products:[{ products:{},number},{},{}]
}
```
