const Joi = require('joi')
module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi .validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: '请提交一个有效的邮箱地址'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `您所填写的密码无效：
                        <br>
                            1.只允许输入大小写字母
                        <br>
                            2.请至少输入8-32个字母
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: `无效登录信息`
                    })
            }
        }else {
            next()
        }
    }
}