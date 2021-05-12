import WrappedInput from './WrappedInput'
import WrappedStyleEditor from './WrappedStyleEditor'
import WrappedEnumEditor from './WrappedEnumEditor'
import WrappedRelateEditor from './WrappedRelateEditor'
import WrappedMutiEditor from './WrappedMutiEditor'
import WrappedBoolEditor from './WrappedBoolEditor'

export const EDITOR_MAP = {
  'String': WrappedInput,
  'Style': WrappedStyleEditor,
  'Enum': WrappedEnumEditor,
  'Relate': WrappedRelateEditor,
  'Muti': WrappedMutiEditor,
  'Bool': WrappedBoolEditor,
}
