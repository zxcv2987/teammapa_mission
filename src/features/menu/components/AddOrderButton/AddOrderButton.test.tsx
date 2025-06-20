import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, beforeEach, vi} from 'vitest';
import AddOrderButton from './AddOrderButton';
import {OrderState, useOrderStore} from '@/features/order/store/orderStore';
import {mockMenu} from '@/constants/mocks/test/menu';

// Zustand 스토어 Mocking
vi.mock('@/features/order/store/orderStore', () => ({
  useOrderStore: vi.fn(),
}));

describe('AddOrderButton 컴포넌트', () => {
  let mockAddItem: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockAddItem = vi.fn();
    // useOrderStore가 selector를 인자로 받아 처리하도록 mockImplementation으로 수정
    vi.mocked(useOrderStore).mockImplementation(
      (selector: (state: OrderState) => unknown) => {
        const state = {
          addItem: mockAddItem,
          items: [],
          totalPrice: 0,
          removeItem: vi.fn(),
          updateQuantity: vi.fn(),
          clearOrder: vi.fn(),
          getItemCount: vi.fn(),
          getTotalPrice: vi.fn(),
        };
        return selector(state);
      },
    );
  });

  it('children으로 전달된 내용을 올바르게 렌더링해야 합니다.', () => {
    render(<AddOrderButton menu={mockMenu}>주문 추가</AddOrderButton>);
    expect(screen.getByRole('button', {name: '주문 추가'})).toBeDefined();
  });

  it('버튼 클릭 시 addMenu와 onClick 핸들러를 호출해야 합니다.', () => {
    const mockOnClick = vi.fn();
    render(
      <AddOrderButton menu={mockMenu} onClick={mockOnClick}>
        주문 추가
      </AddOrderButton>,
    );

    const button = screen.getByRole('button', {name: '주문 추가'});
    fireEvent.click(button);

    expect(mockAddItem).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalledWith(mockMenu);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('disabled prop이 true일 때 버튼이 비활성화되어야 합니다.', () => {
    render(
      <AddOrderButton menu={mockMenu} disabled>
        주문 추가
      </AddOrderButton>,
    );

    const button = screen.getByRole('button', {name: '주문 추가'});
    expect(button).toHaveProperty('disabled', true);
  });

  it('비활성화된 버튼은 클릭해도 핸들러가 호출되지 않아야 합니다.', () => {
    const mockOnClick = vi.fn();
    render(
      <AddOrderButton menu={mockMenu} onClick={mockOnClick} disabled>
        주문 추가
      </AddOrderButton>,
    );

    const button = screen.getByRole('button', {name: '주문 추가'});
    fireEvent.click(button);

    expect(mockAddItem).not.toHaveBeenCalled();
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
