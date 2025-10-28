import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../lib/api/apiclient";
import API_ENDPOINTS from "../lib/api/apiendpoints";
import {IEvent} from '../interfaces/Event';

interface UseEventSearchProps {
  initialPage?: number;
  initialLimit?: number;
  initialLocation?: string;
}

interface SearchState {
  date: Date;
  page: number;
  limit: number;
  search: string;
  location: string;
  isFocused: boolean;
  searchQuery: string;
}


//there is so much parameter
interface UseEventSearchReturn extends SearchState {
  // Setters
  setPage: (page: number) => void;
  setLocation: (location: string) => void;
  setIsFocused: (focused: boolean) => void;
  setSearchQuery: (query: string) => void;

  // Data
  events: IEvent[] | undefined;
  searchResults: IEvent[] | undefined;
  isLoading: boolean;
  isSearchLoading: boolean;

  // Handlers
  handleInputFocusChange: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleFocusChange: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleLocationSelect: (selectedLocation: string) => void;
  handleEventSelect: (eventId: string) => void;
}



export const useEventSearch = ({
  initialPage = 1,
  initialLimit = 5,
  initialLocation = "",
}: UseEventSearchProps = {}): UseEventSearchReturn => {
  // Combine related state into a single object
  const [searchState, setSearchState] = useState<SearchState>({
    date: new Date(),
    page: initialPage,
    limit: initialLimit,
    search: "",
    location: initialLocation,
    isFocused: false,
    searchQuery: "",
  });

  // Destructure state for convenience
  const { date, page, limit, search, location, isFocused, searchQuery } =
    searchState;

  // State updater functions
  const updateSearchState = (updates: Partial<SearchState>) => {
    setSearchState((prev) => ({ ...prev, ...updates }));
  };

  const setPage = useCallback((newPage: number) => {
    updateSearchState({ page: newPage });
  }, []);

  const setLocation = useCallback((newLocation: string) => {
    updateSearchState({ location: newLocation });
  }, []);

  const setIsFocused = useCallback((focused: boolean) => {
    updateSearchState({ isFocused: focused });
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    updateSearchState({ searchQuery: query });
  }, []);

  // Main events query
  const { data: events, isLoading } = useQuery({
    queryKey: ["event", page, date, search, location, limit],
    queryFn: () => fetcher({ page,  search, location, limit }),
  });

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      updateSearchState({
        date: new Date(),
        search: searchQuery,
        page: 1,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Get search results for the dropdown
  const { data: searchResults, isLoading: isSearchLoading } = useQuery({
    queryKey: ["event-search", searchQuery],
    queryFn: () =>
      fetcher({
        page: 1,
        search: searchQuery,
        location: "",
        limit: 3,
      }),
    enabled: searchQuery.length > 0 && isFocused,
  });

  const handleInputFocusChange = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setIsFocused(true);
    },
    [setIsFocused]
  );

  const handleFocusChange = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      setIsFocused(!isFocused);
    },
    [setIsFocused, isFocused]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setIsFocused(false);
      }
    },
    [setIsFocused]
  );

  const handleLocationSelect = useCallback((selectedLocation: string) => {
    updateSearchState({
      location: selectedLocation,
      page: 1,
    });
  }, []);

  const handleEventSelect = useCallback(
    (eventId: string) => {
      setIsFocused(false);
      console.log(eventId);
    },
    [setIsFocused]
  );

  return {
    // State
    date,
    page,
    limit,
    search,
    location,
    isFocused,
    searchQuery,

    // Setters
    setPage,
    setLocation,
    setIsFocused,
    setSearchQuery,

    // Data
    events: events && [...events],
    searchResults,
    isLoading,
    isSearchLoading,

    // Handlers
    handleInputFocusChange,
    handleFocusChange,
    handleKeyPress,
    handleLocationSelect,
    handleEventSelect,
  };
};

export const fetcher = async ({
  page,
  search,
  location,
  limit,
}: {
  page: number;
  search: string;
  location: string;
  limit: number;
}): Promise<IEvent[]> => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    // date: date.toISOString(),

    ...(search && { search }),
    ...(location && { location }),
  });

  const response = await apiRequest<{ body: IEvent[] }>({
    url: `${API_ENDPOINTS.events.getAll}?${queryParams.toString()}`,
  });

  return response.body;
};
