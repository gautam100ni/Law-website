import { useEffect } from "react";

export default function SeoHead({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Akhawat Law Firm`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}