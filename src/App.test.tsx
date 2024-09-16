import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import { ApiProvider, useApi } from './Services/apiHotels'; // Ganti dengan path file Anda
import { axiosInstance } from './Services/api';

// Mock axiosInstance
jest.mock('./Services/api', () => ({
  axiosInstance: {
    get: jest.fn(),
  },
}));

// Mock data sesuai dengan interface baru
const mockHotels = [
  {
    id: 1,
    name: 'Hotel A',
    location: {
      city: 'City A',
      district: 'District A',
      country: 'Country A',
    },
    description: 'A beautiful hotel in City A',
    rating: 4.5,
    images: ['image1.jpg', 'image2.jpg'],
    price: 100,
    currency: 'USD',
    amenities: ['WiFi', 'Pool', 'Gym'],
  },
  {
    id: 2,
    name: 'Hotel B',
    location: {
      city: 'City B',
      district: 'District B',
      country: 'Country B',
    },
    description: 'A cozy hotel in City B',
    rating: 4.0,
    images: ['image3.jpg', 'image4.jpg'],
    price: 80,
    currency: 'USD',
    amenities: ['WiFi', 'Breakfast'],
  },
];

const mockExploreHotels = [
  {
    id: 1,
    name: 'Explore Hotel A',
    properties: 'Luxury, Beachfront',
    images: 'explore1.jpg',
  },
  {
    id: 2,
    name: 'Explore Hotel B',
    properties: 'Budget, City Center',
    images: 'explore2.jpg',
  },
];

// Mock component to use context
const MockComponent = () => {
  const { hotels, exploreHotels, loading } = useApi();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hotels:</h1>
      {hotels.map(hotel => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>
          <p>{hotel.location.city}, {hotel.location.country}</p>
          <p>Rating: {hotel.rating}</p>
          <p>Price: {hotel.price} {hotel.currency}</p>
        </div>
      ))}
      <h1>Explore Hotels:</h1>
      {exploreHotels.map(hotel => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>{hotel.properties}</p>
          <img src={hotel.images} alt={hotel.name} />
        </div>
      ))}
    </div>
  );
};

describe('ApiProvider', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch hotels and exploreHotels data and update the context successfully', async () => {
    // Mock the API responses
    (axiosInstance.get as jest.Mock).mockImplementation((url: string) => {
      if (url === '/hotels') {
        return Promise.resolve({ data: mockHotels });
      } else if (url === '/exploreHotels') {
        return Promise.resolve({ data: mockExploreHotels });
      }
    });

    // Render the component inside the provider
    render(
      <ApiProvider>
        <MockComponent />
      </ApiProvider>
    );

    // Assert loading state is shown
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Wait for the API calls to finish
    await waitFor(() => {
      expect(axiosInstance.get).toHaveBeenCalledTimes(2);
    });

    // Assert that the hotels data is displayed after loading
    const hotelsSection = screen.getByRole('heading', { name: /Hotels:/i }).parentElement!;
expect(within(hotelsSection).getByText(/Hotel A/i)).toBeInTheDocument();
expect(within(hotelsSection).getByText(/A beautiful hotel in City A/i)).toBeInTheDocument();



    // Assert that the exploreHotels data is displayed after loading
    const exploreHotelsSection = screen.getByText(/Explore Hotels:/i).parentElement!;
    expect(within(exploreHotelsSection).getByText(/Explore Hotel A/i)).toBeInTheDocument();
    
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
