interface MemoryStore {
    [key: string]: {
      code: string;
      timestamp: number;
    };
  }
  
  const memoryStore: MemoryStore = {};
  
  export const saveCode = (id: string, code: string): void => {
    memoryStore[id] = { code, timestamp: Date.now() };
  };
  
  export const getCode = (id: string): string | null => {

    if(id === 'test') return '<html><body>TEST CODE</body></html>';

    return memoryStore[id] && (Date.now() - memoryStore[id].timestamp < 6 * 60 * 60 * 1000)
      ? memoryStore[id].code
      : null;
  };
  
  export const generateUniqueId = (): string => {
    return Math.random().toString(36).substring(2, 8);
  };