import { type RadioGroupOption, type RadioGroupProps } from '../radio/common'
import { type PopoutInputProps } from '../popout-input/common'
import { defaultConfig } from '../config'

export type RadioInputOption = RadioGroupOption

export interface RadioInputProps
  extends RadioGroupProps,
    Omit<PopoutInputProps, 'modelValue'> {
  visible?: boolean
  title?: string
}

export const radioInputPropsDefaults = {
  ...defaultConfig.radioInput,
  options: () => [],
}

export interface RadioInputEmits {
  (e: 'update:visible', visible: boolean): void
  (e: 'update:model-value', value: any): void
}
