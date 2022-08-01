// user
export interface UserItem {
  id: number
  name: string
  username: string
  email: string
  address: AddressItem
  phone: string
  website: string
  company: CompanyItem
}

export interface AddressItem {
  street: string
  city: string
  zipcode: string
  geo: GeoItem
}

export interface GeoItem {
  lat: string
  lng: string
}

export interface CompanyItem {
  name: string
  catchPhrase: string
  bs: string
}

// todo list

export interface TodoItem {
  userId: number
  id: number
  title: string
  completed: boolean
}

// post element

export interface PostItem {
  userId: number
  id: number
  title: string
  body: string
}

// album element

export interface AlbumItem {
  userId: number
  id: number
  title: string
}
