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
  description: string
}

export interface IEvent {
  id: string;
  name: string;
  street: string;
  city: string;
  postcode: string;
  additional_info: string;
  event_date: string;
  nominee_sales_from: string;
  nominee_sales_to: string;
  ticket_sales_from: string;
  ticket_sales_to: string;
  evaluation_form: string;
  evaluation_to: string;
  updated_at: string;
}
