import { type StyleValue } from 'vue'
import { defaultConfig } from '../config'

export type IconType = 'circle' | 'record'

export interface RadioProps {
  rootStyle?: StyleValue
  rootClass?: string
  value?: any
  label?: string
  disabled?: boolean
  readonly?: boolean
  size?: string
  type?: IconType
  checkedColor?: string
}

export interface RadioSlots {
  default?(props: Record<string, never>): any
  icon?(props: { checked: boolean }): any
}

export interface RadioEmits {
  (e: 'click', event: any): void
}

export interface RadioGroupProps {
  rootStyle?: StyleValue
  rootClass?: string
  modelValue?: any
  disabled?: boolean
  readonly?: boolean
  size?: string
  type?: IconType
  checkedColor?: string
  direction?: 'horizontal' | 'vertical'
  validateEvent?: boolean
}

export const radioGroupPropsDefaults = defaultConfig.radioGroup

export interface RadioGroupSlots {
  default?(props: Record<string, never>): any
  custom?(props: { toggle: (value: any) => void; value: any }): any
}

export interface RadioGroupEmits {
  (e: 'click', event: any): void
  (e: 'update:model-value', value: any): void
}

export interface RadioContext {
  disabled: RadioProps['disabled']
  readonly: RadioProps['readonly']
  size: RadioProps['size']
  type: RadioProps['type']
  checkedColor: RadioProps['checkedColor']
  value: any
  toggle: (value: any) => void
}

export const radioContextSymbol = Symbol('radio-context')

export const mapTypeIcon = {
  record: ['circle', 'record-circle'],
  circle: ['circle', 'check-circle-fill'],
}
