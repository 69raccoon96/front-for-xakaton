import { Paths } from '../../defaults';

export interface IBreadcrumbItem {
  title: string;
  url: Paths | string;
}

export interface IBreadcrumbProps {
  sequence: IBreadcrumbItem[];
}
