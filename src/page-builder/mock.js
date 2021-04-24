import { Input, Divider, Image } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import Container from './Material/Container'
import Grid from './Material/Grid'
import Tcol from './Material/Tcol'
import Text from './Material/Text'
import Button from './Material/Button'
import Form from './Material/Form';
import FormInput from './Material/FormItem/FormInput'



// 每个组件都只有name，attr；有嵌套的就有children
export const mockData = [
  {
    id: uuidv4(),
    name: 'Input',
    description: '用于输入内容',
    attr: {
      size: 'large',
      value: '外部input1'
    },
    editor: [
      {
        attrName: 'size',
        label: '型号',
        type: 'String',
      },
      {
        attrName: 'value',
        label: '默认值',
        type: 'String',
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Container',
    description: '容器，用于包含内容',
    attr: {
      style: {
        boxSizing: 'border-box',
        background: 'rgb(240, 242, 245)',
        border: '1px dotted gray',
        minHeight: '300px',
        padding: '10px',
        margin: '10px 0px',
        boxShadow: '0 2px 10px rgb(0 0 0 / 8%)'
      },
    },
    editor: [
      {
        attrName: 'style',
        childAttr: [
          {
            attrName: 'background',
            label: '背景颜色',
            type: 'String',
          },
          {
            attrName: 'border',
            label: '边框',
            type: 'String',
          },
          {
            attrName: 'minHeight',
            label: '最小高度',
            type: 'String',
          },
          {
            attrName: 'padding',
            label: '内边距',
            type: 'String',
          },
          {
            attrName: 'margin',
            label: '外边距',
            type: 'String',
          },
          {
            attrName: 'boxShadow',
            label: '阴影',
            type: 'String',
          },
        ],
        type: 'Style',
      },
    ],
    children: [],
  },
  {
    id: uuidv4(),
    name: 'Grid',
    description: '左右Grid',
    attr: {
      style: {
        boxSizing: 'border-box',
        background: 'rgb(240, 242, 245)',
        border: '0px',
        padding: '10px',
        margin: '10px 0',
        minHeight: '300px',
        position: 'relative',
        display: 'flex',
        boxShadow: '0 2px 10px rgb(0 0 0 / 8%)'
      },
    },
    editor: [
      {
        attrName: 'style',
        childAttr: [
          {
            attrName: 'background',
            label: '背景颜色',
            type: 'String',
          },
          {
            attrName: 'border',
            label: '边框',
            type: 'String',
          },
          {
            attrName: 'minHeight',
            label: '最小高度',
            type: 'String',
          },
          {
            attrName: 'padding',
            label: '内边距',
            type: 'String',
          },
          {
            attrName: 'margin',
            label: '外边距',
            type: 'String',
          },
          {
            attrName: 'boxShadow',
            label: '阴影',
            type: 'String',
          },
        ],
        type: 'Style',
      },
    ],
    children: [
      {
        id: uuidv4(),
        name: 'Tcol',
        description: '容器，用于包含内容',
        attr: {
          style: {
            boxSizing: 'border-box',
            background: 'rgb(245, 245, 245)',
            border: '1px dotted gray',
            width: '100%',
            minHeight: '300px',
            margin: '0',
            padding: '5px',
            position: 'relative',
            boxShadow: '0 2px 10px rgb(0 0 0 / 8%)'
          },
        },
        children: [],
        editor: [
          {
            attrName: 'style',
            childAttr: [
              {
                attrName: 'background',
                label: '背景颜色',
                type: 'String',
              },
              {
                attrName: 'border',
                label: '边框',
                type: 'String',
              },
              {
                attrName: 'width',
                label: '宽度',
                type: 'String',
              },
              {
                attrName: 'margin',
                label: '外边距',
                type: 'String',
              },
              {
                attrName: 'padding',
                label: '内边距',
                type: 'String',
              },
              {
                attrName: 'minHeight',
                label: '最小高度',
                type: 'String',
              },
              {
                attrName: 'boxShadow',
                label: '阴影',
                type: 'String',
              },
            ],
            type: 'Style',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Tcol',
        description: '容器，用于包含内容',
        attr: {
          style: {
            boxSizing: 'border-box',
            background: 'rgb(245, 245, 245)',
            border: '1px dotted gray',
            width: '100%',
            margin: '0',
            padding: '5px',
            minHeight: '300px',
            position: 'relative',
            boxShadow: '0 2px 10px rgb(0 0 0 / 8%)'
          },
        },
        editor: [
          {
            attrName: 'style',
            childAttr: [
              {
                attrName: 'background',
                label: '背景颜色',
                type: 'String',
              },
              {
                attrName: 'border',
                label: '边框',
                type: 'String',
              },
              {
                attrName: 'width',
                label: '宽度',
                type: 'String',
              },
              {
                attrName: 'margin',
                label: '外边距',
                type: 'String',
              },
              {
                attrName: 'padding',
                label: '内边距',
                type: 'String',
              },
              {
                attrName: 'minHeight',
                label: '最小高度',
                type: 'String',
              },
              {
                attrName: 'boxShadow',
                label: '阴影',
                type: 'String',
              },
            ],
            type: 'Style',
          },
        ],
        children: [],
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Tcol',
    description: '容器，用于包含内容',
    attr: {
      style: {
        boxSizing: 'border-box',
        background: 'rgb(245, 245, 245)',
        border: '1px dotted gray',
        width: '100%',
        margin: '0',
        padding: '5px',
        minHeight: '300px',
        position: 'relative',
        boxShadow: '0 2px 10px rgb(0 0 0 / 8%)'
      },
    },
    children: [],
    editor: [
      {
        attrName: 'style',
        childAttr: [
          {
            attrName: 'background',
            label: '背景颜色',
            type: 'String',
          },
          {
            attrName: 'border',
            label: '边框',
            type: 'String',
          },
          {
            attrName: 'width',
            label: '宽度',
            type: 'String',
          },
          {
            attrName: 'margin',
            label: '外边距',
            type: 'String',
          },
          {
            attrName: 'padding',
            label: '内边距',
            type: 'String',
          },
          {
            attrName: 'minHeight',
            label: '最小高度',
            type: 'String',
          },
          {
            attrName: 'boxShadow',
            label: '阴影',
            type: 'String',
          },
        ],
        type: 'Style',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Text',
    description: '文字',
    attr: {
      style: {
        background: 'inherit',
        fontSize: '16px',
        color: 'black',
      },
      value: '默认文字'
    },
    editor: [
      {
        attrName: 'value',
        label: '文字内容',
        type: 'String',
      },
      {
        attrName: 'style',
        type: 'Style',
        childAttr: [
          {
            attrName: 'background',
            label: '背景颜色',
            type: 'String',
          },
          {
            attrName: 'fontSize',
            label: '字体大小',
            type: 'String',
          },
          {
            attrName: 'color',
            label: '字体颜色',
            type: 'String',
          },
        ]
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Divider',
    description: '分隔线',
    attr: {
      type: 'horizontal',
    },
    editor: [
      {
        attrName: 'type',
        label: '分隔线方向',
        type: 'String',
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Button',
    description: '按钮',
    attr: {
      value: '默认按钮',
      type: 'primary',
    },
    editor: [
      {
        attrName: 'value',
        label: '默认按钮',
        type: 'String',
      },
      {
        attrName: 'type',
        label: '按钮类型',
        type: 'String',
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Image',
    description: '图片',
    attr: {
      width: '200px',
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    editor: [
      {
        attrName: 'src',
        label: '图片路径',
        type: 'String',
      },
      {
        attrName: 'width',
        label: '图片大小',
        type: 'String',
      },
    ]
  },
  {
    id: uuidv4(),
    name: 'Form',
    description: '表单容器',
    attr: {
      targetApi: '',
      name: 'basic',
    },
    editor: [
      {
        attrName: 'name',
        label: '表单名称',
        type: 'String',
      },
      {
        attrName: 'targetApi',
        label: '提交表单地址',
        type: 'String',
      },
    ],
    children: [],
  },
  {
    id: uuidv4(),
    name: 'FormInput',
    description: '表单项-输入框',
    attr: {
      label: '表单项',
      name: 'name',
      rules: [{ required: true, message: '请输入' }]
    },
    editor: [
      {
        attrName: 'label',
        label: '名称',
        type: 'String',
      },
      {
        attrName: 'name',
        label: '表单项标识',
        type: 'String',
      },
      {
        attrName: 'rules',
        label: '校验规则',
        type: 'String',
      }
    ]
  },
]

export const materialMap = {
  'Input': Input,
  'Container': Container,
  'Grid': Grid,
  'Tcol': Tcol,
  'Text': Text,
  'Divider': Divider,
  'Button': Button,
  'Image': Image,
  'Form': Form,
  'FormInput': FormInput,
}