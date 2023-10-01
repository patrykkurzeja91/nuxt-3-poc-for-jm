import type { IEvent } from '@/types'

export const useEvent = () =>
  useState<IEvent>('event', () => (({}) as IEvent) || null)

export const useTextSlugify = () => {
  const slugify = (positionName: string) =>
    positionName && positionName.replace(/\s+/g, '-').toLowerCase()

  return { slugify }
}
