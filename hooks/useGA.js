import ga from 'utils/ga';
import { useEffect } from 'react';

export default function useGA() {
  useEffect(() => {
    ga();
  }, []);
}
