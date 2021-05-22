import { NotFoundException } from '@nestjs/common';
import { OrderRepository } from '../repositories/order';
import { UserRepository } from '../repositories/user';
import { OrderService } from './order';

describe('Admin/Order', () => {
  let userRepository: UserRepository;
  let orderRepository: OrderRepository;
  let service: OrderService;

  beforeEach(async () => {
    userRepository = new UserRepository();
    orderRepository = new OrderRepository();
    service = new OrderService(userRepository, orderRepository);
  });

  test('should throw NotFoundException when try to save the order and user was not found', async () => {
    jest.spyOn(userRepository, 'findById').mockResolvedValueOnce(null);

    try {
      await service.save({
        description: 'valid_description',
        quantity: 15,
        name: 'valid_name',
        userId: 0
      });
      fail();
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
    }
  });
});
