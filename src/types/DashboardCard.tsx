export interface DashboardCard {
  title: string;
  value?: string;
  description: string;
  footer?: string[];
  link?: string[];
  width: string;
  project?: boolean;
  blank?: boolean;
  filter: string;
  modal?: string;
};
