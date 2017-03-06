/**
 * Created by jinbin on 2017/2/23.
 */

/**
 * 模型属性
 * @param attribute object
 * @constructor
 */
function ModelAttribute(attribute)
{

    this.intrinsic = (attribute != null ) ? attribute.intrinsic : [];
    this.extended = (attribute != null ) ? attribute.extended : [];
    this.userFunc = (attribute != null ) ? attribute.userFunc : [];
};




/**
 * 设置属性
 */
ModelAttribute.prototype.setValue = function(type, value)
{
    this[type] = value;
    // if(type == 'intrinsic' )
    //     this.intrinsic = value;
    // if(type == 'extended')
    //     this.extended = value;
    // if(type == 'uFunc')
    //     this.userFunc = value;
};

/**
 * 将属性内容解析成字符串
 */
ModelAttribute.prototype.toAttributeString = function()
{
    var arr = [];
    arr['intrinsic'] = JSON.stringify(this.intrinsic);
    arr['extended'] = JSON.stringify(this.extended);
    arr['userFunc'] = JSON.stringify(this.userFunc);
    return arr;
};