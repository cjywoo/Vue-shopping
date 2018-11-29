import axios from 'axios'

// 所有接口的api封装
export default class Api {
    /**
     * 首页(Home)所有接口
     * recommend            首页的默认数据
     * search               搜索 参数： value：搜索关键词
     * keeplogin            保持登录
     */
    static recommend() {
        return axios.get('/api/recommend')
    }

    static search(value) {
        return axios.post('/api/search', {
            value
        })
    }

    static keeplogin() {
        return axios.post('/api/keeplogin')
    }
    // ===============================================================================================================
    /**
     * 分类页面(Category)所有接口
     * category 分类查询  参数id：默认分类的id
     */
    static category(id) {
        return axios.get(`/api/classification?mallSubId=${id}`)
    }

    // ===============================================================================================================
    /**
     * 购物车(ShoppingCart)所有接口
     * getCard      查询获取购物车数据
     * editCart     购物车加减商品      参数 ： 数量  商品id 价格
     * deleteShop   购物车商品删除      参数 id：需要删除的商品id
     */
    static getCard() {
        return axios.post(`/api/getCard`)
    }

    static editCart(count, id, mallPrice) {
        return axios.post('/api/editCart', {
            count,
            id,
            mallPrice
        })
    }

    static deleteShop(id) {
        return axios.post('/api/deleteShop', id)
    }

    // ===============================================================================================================

    /**
     * 购物车支付页面(ShoppingPayMent)所有接口
     * placeOrder 提交订单 参数：address:收货地址,tel:电话，orderId：所有商品的id，totalPrice：总价格,idDirect:用来判断是购物车结算还是直接购买,count:商品数量
     */
    static placeOrder({ ...args }) {
        return axios.post('/api/order', args)
    }

    // ===============================================================================================================
    /**
     * 商品详情页面(Details)所有接口
     * goodOne          请求单个商品详情,        参数： id:商品的id
     * collection       收藏单个商品            参数：  goods:商品的详情信息
     * cancelCollection 取消收藏单个商品        参数：  id:商品的id
     * isCollection     查询商品是否已收藏      参数：  id:商品的id
     * addShop          加入购物车             参数：  id:商品的id
     */
    static goodOne(id) {
        return axios.get(`/api/goods/one?id=${id}`)
    }

    static collection(goods) {
        return axios.post('/api/collection', goods)
    }

    static cancelCollection(id) {
        return axios.post('/api/cancelCollection', { id })
    }

    static isCollection(id) {
        return axios.post(`/api/isCollection`, { id })
    }

    static addShop(id) {
        return axios.post(`/api/addShop`, { id })
    }
    // ===============================================================================================================

    /**
     * 会员中心(My)所有接口
     * loginOut 退出登录
     * user     获取用户信息
     * saveUser 修改保存用户信息
     * getOrderNum 查询用户订单数量
     */
    static loginOut() {
        return axios.post(`/api/loginOut`)
    }

    static user() {
        return axios.post(`/api/queryUser`)
    }

    static saveUser({ ...args }) {
        return axios.post(`/api/saveUser`, args)
    }

    static getOrderNum() {
        return axios.get(`/api/myOrder/orderNum`)
    }
    // ===============================================================================================================
    /**
     * 用户相关(user文件夹下)所有接口
     * getAddress           查询用户收货地址 
     * getDefaultAddress    查询默认收货地址
     * setDefaultAddress    设置默认收货地址    参数：id：地址id
     * postAddress          增加收货地址        参数：name:用户名,tel:电话，address:详情地址，isDefault：是否默认
            *                                province：省，city：市，county：区，addressDetail：详情地址，
            *                                areaCode：地区代码，id：修改地址时候要传id
     * deleteAddress        删除地址            参数： id：地址id
     * getCollection        查询我的收藏
     * register             注册
     * login                登录
     * getMyOrder           订单查询
     */
    static getAddress() {
        return axios.get(`/api/getAddress`)
    }

    static getDefaultAddress() {
        return axios.get(`/api/getDefaultAddress`)
    }

    static setDefaultAddress(id) {
        return axios.post(`/api/setDefaultAddress`, { id })
    }

    static postAddress({ ...args }) {
        return axios.post(`/api/address`, args)
    }

    static deleteAddress(id) {
        return axios.post('/api/deleteAddress', {
            id
        })
    }

    static getCollection() {
        return axios.get(`/api/collection/list`)
    }

    static register(nickname, password) {
        return axios.post('/api/register', {
            nickname,
            password
        })
    }

    static login(nickname, password) {
        return axios.post('/api/login', {
            nickname,
            password
        })
    }

    static getMyOrder() {
        return axios.get(`/api/myOrder`)
    }
}