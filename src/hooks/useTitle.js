import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Computer Zone`;
  }, [title]);
};

export default useTitle;
