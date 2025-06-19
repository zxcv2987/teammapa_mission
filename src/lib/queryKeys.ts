/**
 * TanStack Query의 쿼리 키를 중앙에서 관리하기 위한 팩토리 객체입니다.
 *
 * @example
 * // 메뉴 목록 가져오기
 * useQuery({ queryKey: queryKeys.menus.list('some-category-id'), ... })
 *
 * @example
 * // 메뉴 상세 정보 가져오기
 * useQuery({ queryKey: queryKeys.menus.detail(123), ... })
 *
 * @example
 * // 메뉴와 관련된 모든 쿼리 무효화
 * queryClient.invalidateQueries({ queryKey: queryKeys.menus.all() })
 */
export const queryKeys = {
  // 전체를 포괄하는 최상위 키
  all: ['all'] as const,

  /**
   * 메뉴 관련 쿼리 키
   */
  menus: {
    // 'menus'와 관련된 모든 쿼리를 위한 부모 키
    all: () => [...queryKeys.all, 'menus'] as const,
    // 메뉴 목록 (필터링 포함)을 위한 키
    lists: () => [...queryKeys.menus.all(), 'list'] as const,
    list: (categoryId: string = 'all') =>
      [...queryKeys.menus.lists(), {categoryId}] as const,
    // 메뉴 상세 정보를 위한 키
    details: () => [...queryKeys.menus.all(), 'detail'] as const,
    detail: (menuId: number | string) =>
      [...queryKeys.menus.details(), menuId] as const,

    best: () => [...queryKeys.menus.all(), 'best'] as const,
  },

  /**
   * 주문 관련 쿼리 키
   */
  orders: {
    all: () => [...queryKeys.all, 'orders'] as const,
    // 여기에 필요한 주문 관련 키들을 추가할 수 있습니다.
    // 예: lists, list(filter), details, detail(id) 등
  },

  /**
   * 카테고리 관련 쿼리 키
   */
  categories: {
    all: () => [...queryKeys.all, 'categories'] as const,
    lists: () => [...queryKeys.categories.all(), 'list'] as const,
    list: () => [...queryKeys.categories.lists()] as const,
  },
};
