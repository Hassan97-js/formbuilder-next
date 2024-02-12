import { useEffect, useState } from "react";

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return false;
  }

  return hasMounted;
}
