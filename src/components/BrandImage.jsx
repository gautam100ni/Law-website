import { useState } from "react";

export default function BrandImage({
  src,
  alt,
  className,
  fallbackClassName
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    if (fallbackClassName) {
      return <div className={fallbackClassName} aria-hidden="true" />;
    }
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}