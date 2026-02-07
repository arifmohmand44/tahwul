export interface Metric {
  id: number
  number: number
  label: string
  icon: string
}

export interface Section {
  id: string
  title: string
  content: string
}

export interface Tab {
  id: string
  label: string
}

export interface NavigationItem {
  id: number
  name: string
  href: string
  icon: string
}

export interface Leader {
  id: number
  name: string
  role: string
  image: string
}

export interface PerspectiveData {
  page: {
    breadcrumb: string
    title: string
    subtitle: string
    progress: number
  }
  metrics: Metric[]
  sections: Section[]
  tabs: Tab[]
  navigation: NavigationItem[]
  leaders: Leader[]
}
