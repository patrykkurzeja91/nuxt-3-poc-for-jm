import type { IEvent } from '@/types'

export const useEvent = () =>
  useState<IEvent>('event', () => (({} as IEvent) || null))
