import axios from 'axios';

describe('User API Tests', () => {
  const BASE_URL = 'http://localhost:3000/api';

  // Pastikan server jalan sebelum test
  beforeAll(() => {
    jest.setTimeout(30000);
  });

  it('should fetch all users with status 200', async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  it('should return valid user structure', async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    const user = response.data[0];

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
  });
});