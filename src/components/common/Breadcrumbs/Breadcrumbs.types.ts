export type Breadcrumb = {
  title: string;
  link: string;
};

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  redirect: boolean;
}
