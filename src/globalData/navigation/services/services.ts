// Services
import type { NavGrouping } from '../../../app/types/viewmodels'

export const LeasingService: NavGrouping = {
  title: 'Leasing',
  relLink: '/services/leasing',
}

export const SalesService: NavGrouping = {
  title: 'Sales',
  relLink: '/services/sales',
}

export const AcquisitionService: NavGrouping = {
  title: 'Acquisition',
  relLink: '/services/acquisition',
}

export const ConsultingService: NavGrouping = {
  title: 'Consulting',
  relLink: '/services/consulting',
}

export const ServiceLinks: NavGrouping = {
  title: 'Services',
  relLink: '/services',
  subNavigation: [LeasingService, SalesService, AcquisitionService, ConsultingService],
}
