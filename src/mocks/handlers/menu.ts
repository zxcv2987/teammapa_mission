import {http, HttpResponse} from 'msw';
import {generateMockMenuList} from '@/constants/mocks/mockMenu';

export const mockMenuList = generateMockMenuList();

export function menuHandler() {
  return http.get('/api/menu', ({request}) => {
    const url = new URL(request.url);
    const pageParams = Number(url.searchParams.get('pageParams'));
    const categoryId = url.searchParams.get('categoryId');
    const menuId = Number(url.searchParams.get('menuId'));
    const nextParams = pageParams + 10;

    if (!pageParams && pageParams !== 0) {
      return HttpResponse.json({
        status: 400,
        message: 'pageParams is required',
      });
    }
    if (categoryId === 'best') {
      const bestMenus = mockMenuList.sort(
        (a, b) => b.totalSales - a.totalSales,
      );
      return HttpResponse.json({
        data: bestMenus.slice(pageParams, nextParams),
        nextCursor: undefined,
      });
    }
    if (categoryId === 'new') {
      const newMenus = mockMenuList.filter(menu => menu.isNew);
      return HttpResponse.json({
        data: newMenus.slice(pageParams, nextParams),
        nextCursor: undefined,
      });
    }
    //카테고리별 메뉴 조회(무한 스크롤)
    if (Number(categoryId)) {
      const filteredMenus = mockMenuList.filter(
        menu => menu.category.id === Number(categoryId),
      );
      const nextCursor =
        nextParams < filteredMenus.length ? nextParams : undefined;

      return HttpResponse.json({
        data: filteredMenus.slice(pageParams, nextParams),
        nextCursor,
      });
    }

    //단일 메뉴 조회
    if (menuId) {
      return HttpResponse.json(mockMenuList.find(menu => menu.id === menuId));
    }

    //전체 메뉴 조회(무한 스크롤)
    const nextCursor =
      nextParams < mockMenuList.length ? nextParams : undefined;

    return HttpResponse.json({
      data: mockMenuList.slice(pageParams, pageParams + 10),
      nextCursor,
    });
  });
}

export function menuByCategoryHandler() {
  return http.get('/api/menu/:categoryId', ({params}) => {
    const {categoryId} = params;

    if (!categoryId) {
      return new HttpResponse('categoryId is required', {status: 400});
    }
    const allMenus = generateMockMenuList();

    const filteredMenus = allMenus.filter(
      menu => menu.category.id === Number(categoryId),
    );

    return HttpResponse.json(filteredMenus);
  });
}

export function bestMenuHnadler() {
  const bestMenus = mockMenuList.sort((a, b) => b.totalSales - a.totalSales);

  return http.get('/api/best', () => {
    return HttpResponse.json(bestMenus.slice(0, 4));
  });
}

export function newMenuHandler() {
  return http.get('/api/new', () => {
    return HttpResponse.json(mockMenuList.filter(menu => menu.isNew));
  });
}
