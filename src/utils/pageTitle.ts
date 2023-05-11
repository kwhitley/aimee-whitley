import { DEV } from '~/constants'

export const pageTitle = (...args) => [`Aimee Whitley${ DEV ? ' (dev)' : '' }`, ...args].join(' : ')
