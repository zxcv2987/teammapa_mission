import {describe, it, expect} from 'vitest';
import MenuItem from './MenuItem';
import {render, screen} from '@testing-library/react';
import {generateMockMenuList} from '@/constants/mocks/mockMenu';

describe('MenuItem', () => {
  const mockMenu = generateMockMenuList()[0];
  it('메뉴 아이템이 잘 렌더링 되는가', () => {
    render(<MenuItem menu={mockMenu} />);
    expect(screen.getByRole('button')).toBeDefined();
  });
});
