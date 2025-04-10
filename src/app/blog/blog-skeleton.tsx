export default function BlogSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-foreground/10 h-64 rounded-lg mb-4"></div>
            <div className="h-6 bg-foreground/10 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-foreground/10 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
} 