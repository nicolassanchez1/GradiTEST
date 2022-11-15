export * from './Button'

export interface IButtonProps {
  text: string
  black?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick: (e: any) => void
}
