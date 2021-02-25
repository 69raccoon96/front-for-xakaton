import { Paths } from '../../defaults';

export interface IBreadcrumbItem {
  title: string;
  url: Paths;
}

export interface IBreadcrumbProps {
  sequence: IBreadcrumbItem[];
}
