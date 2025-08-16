import { useEffect, useState } from 'react';

export const useSessionStorage = <T>(key: string, defaultValue: T) => {
  const [State, setState] = useState<T>(defaultValue);

  useEffect(() => {
    const getValueFromSessionStorage = () => {
      try {
        const currentValue = window.sessionStorage.getItem(key);
        return currentValue ? (JSON.parse(currentValue) as T) : defaultValue;
      } catch (error) {
        console.log(error);
        return defaultValue;
      }
    };

    setState(() => getValueFromSessionStorage());

    return () => {
      try {
        window.sessionStorage.setItem(key, JSON.stringify(State));
      } catch (error) {
        console.log(error);
      }
    };
  }, [key, defaultValue, State]);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(State));
    } catch (error) {
      console.log(error);
    }
  }, [State, key]);

  return [State, setState] as const;
};
