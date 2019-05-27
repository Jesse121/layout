import { getTemplate, getSlotContent, getStringTypeAttr ,getArrayTypeAttr} from '@/components/template'

var handle = function(_attr, _slots) {
    //定义默认属性
    let attributes = {
          bgs:{
            type:'Array',
            value:[]
          },
          style:{
            type:'style',
            value:'{backgroundImage:item.bgi}'
          },
          class:{
            type:'class',
            value:'page-bg'
          },
        },
        slots = {}

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //根据组件不同需要做的不同操作


    //获取插槽模板内容
    var subContent = getSlotContent(slots) || '&nbsp;'

    //设置当前组件的slot
    if (attributes.slot && attributes.slot !== 'default') {
        attributes.slot = {
            type: 'text',
            value: attributes.slot
        }
    } else {
        attributes.slot = {
            type: 'text',
            value: ''
        }
    }

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let arrayAttr = JSON.stringify(getArrayTypeAttr(attributes))

    let template = `<div class="page">
                      <div class="page-bgs">
                          <div v-for='(item, i) in ${arrayAttr}' ${stringAttr}></div>
                      </div>
                      <div class="page-content">
                          ${subContent}
                      </div>
                  </div>`

    template = template.replace(/text=".*?"/g, '')//模板字符串中删除text属性


    return { template, attributes, slots }
}
export default handle
