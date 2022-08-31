# API (接口) 设计

## 注册

### url

`/api/user/register`

### method

`post`

### request body

```
{
    username: 'lqs'
    password: 'abc'
}
```

### response body

```
{ 
    errno:0,
    message:'errno !== 0 的错误信息!'
}
```

## 登录

### url

`/api/user/login`

### method

`post`

### request body

```
{
    username: 'lqs'
    password: 'abc'
}
```

### response body

```
{ 
    errno:0,
    message:'errno !== 0 的错误信息!'
} 

```

## 获取用户信息

### url

`/api/user/info`

### method

`get`

### request body

`无`

### response body

```
{ 
    errno:0,
    data:{
	username: 'xxx',
    },
    message:'errno !== 0 的错误信息!'
}
```

## 创建收货地址

### url

`/api/user/address`

### method

`post`

### request body

```
{
    username: 'lqs'
    city: '宁德',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: 12345678911,
}
```

### response body

```
{ 
    errno:0,
    data: {
	_id: '收货地址的id'
        city: '宁德',
    	department: 'xx小区',
    	houseNumber: '门牌号',
    	department: '张三',
    	phone: 12345678911,
	createAt:Date,
	updateAt:Date
    },
    message:'errno !== 0 的错误信息!'
}
```

## 获取收货地址列表

### url

`/api/user/address`

### method

`get`

### request body

`无`

### response body

```
c{ 
    errno:0,
    data: [{
	username: 'lqs'
	_id: '收货地址的id'
        city: '宁德',
    	department: 'xx小区',
    	houseNumber: '门牌号',
    	name: '张三',
    	phone: 12345678911,
	createAt:Date,
	updateAt:Date
    },{},{}],
    message:'errno !== 0 的错误信息!'
}
```

## 获取单个收货地址

### url

`/api/user/address/:id (:id 是一个动态参数，服务端可获取具体的值)`

### method

`get`

### request body

`无`

### response body

```
{ 
    errno:0,
    data:{
	_id: '收货地址的id'
        username: 'lqs'
        city: '宁德',
    	department: 'xx小区',
    	houseNumber: '门牌号',
    	name: '张三',
    	phone: 12345678911,
	createAt:Date,
	updateAt:Date
    },
    message:'errno !== 0 的错误信息!'
}
```

## 更新收货地址

### url

`/api/user/address/:id`

### method

`patch`

### request body

```
{
    city: '宁德',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: 12345678911,
}
```

### response body

```
{ 
    errno:0,
    message:'errno !== 0 的错误信息!'
}
```

## 附近（热门）店铺

### url

`/api/shop/hot-list`

### method

`get`

### request body

`无`

### response body

```
{ 
    errno:0,
    data:[{
	_id: '店铺id',
	name: '沃尔玛',
    	imgUrl: '商店的图片 url',
	sales: 10000, //月售
	expressLimit: 0, //起送价格
	expressPrice: 5, //快递价格
	slogan: 'VIP 遵循满 89 元 减 4 元运费卷'
	},{},{}
    ]
    message:'errno !== 0 的错误信息!'
}
```

## 商店详情

### url

`/api/shop/:id`

### method

`get`

### request body

`无`

### response body

```
{ 
    errno:0,
    data:{
	_id: '店铺id',
	name: '沃尔玛',
    	imgUrl: '商店的图片 url',
	sales: 10000, //月售
	expressLimit: 0, //起送价格
	expressPrice: 5, //快递价格
	slogan: 'VIP 遵循满 89 元 减 4 元运费卷'
    },
    message:'errno !== 0 的错误信息!'
}
```

## 查询（某个）商店的商品列表

### url

`/api/shop:id/products`

### method

`get`

### query

`tab=全部商品`

`/api/shop:id/products?tab=全部商品`

### request body

`无`

### response body

```
{ 
    errno:0,
    data:[{
	_id: '商品id',
	name: '番茄250g/份',
	imgUrl: 'xxx.png',
	sales: 10,
	price: 33.6,
	oldPrice: 40.6
    },{}}]
    message:'errno !== 0 的错误信息!'
}
```

## 创建订单

### url

`/api/order`

### method

`post`

### request body

```
{
    addressId: '收货地址的id',
    shopId: '商店的id',
    shopName: '沃尔玛',
    isCanceled: false, // 订单是否被取消
    products: [
	{
	    id: '商品 id',
 	    num: 3 // 购买数量
	},{
	    id: '商品 id',
 	    num: 3 // 购买数量
	}
    ]
}
```

### response body

```
{ 
    errno:0,
    data:{
	_id: '订单id'
    },
    message:'errno !== 0 的错误信息!'
}
```

## 模板

### url

`/api/user/login`

### method

`post`

### request body

```
{
    username: 'lqs'
    password: 'abc'
}
```

### response body

```
{ 
    errno:0,
    message:'errno !== 0 的错误信息!'
}
```
