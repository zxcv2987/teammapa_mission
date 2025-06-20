export interface Menu {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  totalSales: number;
  isNew: boolean;
  category: Category;
}

export interface MenuResponse {
  data: Menu[];
  nextCursor: number | undefined;
}
