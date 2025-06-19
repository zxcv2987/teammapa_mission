export interface Menu {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  totalSales: number;
  category: Category;
}

export interface MenuResponse {
  data: Menu[];
  pageParams: number;
}
