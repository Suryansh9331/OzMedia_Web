import React from "react";

const BlogSection = ({blogPosts}) => {

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#fd4360] font-bold text-xl mb-4">Blog</h2>
          <h3 className="text-white font-bold text-5xl">What's the Latest?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#bdbaba23] border border-[#bdbabac6] relative rounded overflow-hidden"
            >
              <div className="h-[300px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-4">
                  {post.title}
                </h3>
                <p className="text-[#e3e3e3] text-sm mb-4">
                  {post.date} - {post.comments}
                </p>
                <p className="text-white mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fd4360] font-bold text-lg flex items-center"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="ml-2 w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
