'use client';
export default function NoQuestions() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {/* Image Section - You will replace this with your own image */}
      <div className="mb-8">
        <img src="/images/llustration.png" alt="No Questions" className="w-48 h-auto" />
      </div>

      {/* Heading */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        There's no question to show
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 max-w-md mb-6">
        Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion.
        Your query could be the next big thing others learn from. Get involved! 💡
      </p>

      {/* Button */}
      <button className="bg-[#E2985E] hover:opacity-90 shadow-lg text-white font-medium py-2 px-6 rounded-lg transition">
        Ask a Question
      </button>
    </div>
  );
}
