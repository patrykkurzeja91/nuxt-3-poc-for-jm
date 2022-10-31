export interface Ticket {
  id: string
  name: string
  company: string
  email: string
  phone: string
}
export interface Category {
  id: string
  name: string
  subcategory: 'award' | 'best' | 'award of the year' | 'top'
}
