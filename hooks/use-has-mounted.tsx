import { useEffect, useState } from "react";

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return false;
  }

  return hasMounted;
}

export default useHasMounted;
