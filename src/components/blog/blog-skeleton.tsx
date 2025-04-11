export default function BlogSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            {/* Image skeleton */}
            <div className="bg-foreground/10 h-48 rounded-lg mb-4"></div>
            
            {/* Title skeleton */}
            <div className="h-6 bg-foreground/10 rounded w-3/4 mb-2"></div>
            
            {/* Time skeleton */}
            <div className="h-4 bg-foreground/10 rounded w-24 mb-3"></div>
            
            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-foreground/10 rounded w-full"></div>
              <div className="h-4 bg-foreground/10 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}