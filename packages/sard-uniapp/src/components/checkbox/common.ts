import { type StyleValue } from 'vue'
import { defaultConfig } from '../config'

export type IconType = 'square' | 'circle'

export interface CheckboxProps {
  rootStyle?: StyleValue
  rootClass?: string
  checked?: boolean
  value?: any
  label?: string
  disabled?: boolean
  readonly?: boolean
  size?: string
  type?: IconType
  checkedColor?: string
  validateEvent?: boolean
}

export const checkboxPropsDefaults = defaultConfig.checkbox

export interface CheckboxSlots {
  default?(props: Record<string, never>): any
  icon?(props: { checked: boolean }): any
}

export interface CheckboxEmits {
  (e: 'click', event: any): void
  (e: 'update:checked', checked: boolean): void
}

export interface CheckboxGroupProps {
  rootStyle?: StyleValue
  rootClass?: string
  modelValue?: any[]
  disabled?: boolean
  readonly?: boolean
  size?: string
  type?: IconType
  checkedColor?: string
  direction?: 'horizontal' | 'vertical'
  validateEvent?: boolean
}

export const checkboxGroupPropsDefaults = defaultConfig.checkboxGroup

export interface CheckboxGroupSlots {
  default?(props: Record<string, never>): any
  custom?(props: { toggle: (value: any) => void; value: any[] }): any
}

export interface CheckboxGroupEmits {
  (e: 'click', event: any): void
  (e: 'update:model-value', value: any[]): void
}

export interface CheckboxContext {
  disabled: CheckboxGroupProps['disabled']
  readonly: CheckboxGroupProps['readonly']
  size: CheckboxGroupProps['size']
  type: CheckboxGroupProps['type']
  checkedColor: CheckboxGroupProps['checkedColor']
  value: any[]
  toggle: (value: any) => void
}

export const checkboxContextSymbol = Symbol('checkbox-context')

export const mapTypeIcon = {
  square: ['square', 'check-square-fill'],
  circle: ['circle', 'check-circle-fill'],
}
